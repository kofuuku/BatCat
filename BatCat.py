import pygame
from sys import exit #importing a specific feature of python from its module:sys #exit closes any kindof code that si open entirely
from random import randint,choice #gives random integer between two boundaries    #choice allows us to picka  random item from a list
import math


#SPRITE CLASS     #cant screen.blit sprites so we use groups 
#PLAYER
class Cat (pygame.sprite.Sprite):      # now we define all the attributes of the cat/player in one section which is its sprite class
    def __init__(self):                 #then call the group and then draw later
        super().__init__() #initializing 
        catwalk_surf=pygame.image.load('save/cat.png').convert_alpha()
        catwalk_surf = pygame.transform.scale(catwalk_surf,(50,50))     
        catwalkk_surf = pygame.image.load('save/cat1.png').convert_alpha()
        catwalkk_surf = pygame.transform.scale(catwalkk_surf,(50,50))    #dont need self becasue its in the list and list has self 
        self.catwalk_list =  [catwalk_surf, catwalkk_surf]
        self.cat_index = 0 #variable used to choose between the two surfaces to walk
        catjump_surf =pygame.image.load('save/catjump1.png')
        self.catjump_surf = catjump_surf
        self.catjump_surf = pygame.transform.scale(self.catjump_surf,(50,50)) 

        
        self.image = self.catwalk_list[self.cat_index]
        self.rect = self.image.get_rect(midbottom = (80,350)) #getting the rectangle for the surface  #why si change in y coord not working?
        self.gravity = 0 #initially set

    def cat_input(self):
        keys = pygame.key.get_pressed() #gives all the keys being pressed
        if keys[pygame.K_SPACE] and self.rect.bottom >= 300:
            self.gravity = -40
        elif pygame.mouse.get_pressed()[0] and self.rect.bottom >=300:
            self.gravity = -40


    #v=u+at
    #s=ut+0.5*a*t^2
    #s'=u*(t+1)+0.5a+(t+1)^2
    #s'-s=u+0.5*a(2t+1)
    def  apply_gravity(self):
        self.gravity += 0.5  #adding nto subtracting because 0,0 is at top left so to fall we increase 
        self.rect.y += self.gravity/7 + 1.5     
        if self.rect.bottom >= 300:
            self.rect.bottom = 300

    def cat_animation(self):
        if self.rect.bottom <300:
            self.image = self.catjump_surf
        else:
            self.cat_index += 0.1
            if self.cat_index >= len(self.catwalk_list):
                self.cat_index = 0
            self.image = self.catwalk_list[int(self.cat_index)]
    
    def switch(self):
        dogwalk_surf=pygame.image.load('save/dogwalk.png').convert_alpha() 
        dogwalk_surf=pygame.transform.scale(dogwalk_surf,(60,50))
        dogwalkk_surf = pygame.image.load('save/dogwalkk.png').convert_alpha()
        dogwalkk_surf=pygame.transform.scale(dogwalkk_surf,(60,50))
        self.catwalk_list=[dogwalk_surf,dogwalkk_surf]
        dogjump_surf=pygame.image.load('save/dogjump.png')
        dogjump_surf=pygame.transform.scale(dogjump_surf,(60,50))
        self.catjump_surf = dogjump_surf
    
    def switch_back(self):  #why is dog above ground?? #why is it not switching instantly??
        catwalk_surf=pygame.image.load('save/cat.png').convert_alpha()
        catwalk_surf = pygame.transform.scale(catwalk_surf,(50,50))     
        catwalkk_surf = pygame.image.load('save/cat1.png').convert_alpha()
        catwalkk_surf = pygame.transform.scale(catwalkk_surf,(50,50))  
        self.catwalk_list= [catwalk_surf, catwalkk_surf]
        catjump_surf =pygame.image.load('save/catjump1.png')
        catjump_surf = pygame.transform.scale(catjump_surf,(50,50))
        self.catjump_surf = catjump_surf

    
    def update(self):
        self.cat_input()
        self.apply_gravity()
        self.cat_animation()
        

#OBSTACLES
class Obstacles(pygame.sprite.Sprite):
    def __init__(self,type):
        super().__init__()
        if type == "bat":
            bat1_surface = pygame.image.load('save/bat.png').convert_alpha()
            bat2_surface = pygame.image.load('save/bat1.png').convert_alpha()
            bat1_surface = pygame.transform.scale(bat1_surface,(30,30))
            bat2_surface = pygame.transform.scale(bat2_surface,(35,35))
            self.frames = [bat2_surface, bat1_surface]
            y_position = 170
        else:
            solar_surface =  pygame.image.load('save/solar2.png').convert_alpha()   #scaling the image to wtv size is needed #rotozoom, scale2x, various more ways to scale in documentation
            solar_surface =  pygame.transform.scale(solar_surface,(20,50))
            y_position = 313
            self.frames = [solar_surface,solar_surface]

        self.animation_index = 0
        self.image = self.frames[self.animation_index]
        self.rect = self.image.get_rect(midbottom = (randint(900,1100), y_position))
    
    def obstacle_animation(self):
        self.animation_index += 0.1
        if self.animation_index >= len(self.frames):
            self.animation_index = 0
        self.image = self.frames [int(self.animation_index)]  #int important 


    def destroy(self):  #to destroy any objects that move too far to the left else they will slow down the game
        if self.rect.x <= -100:
            self.kill()     #kill statement
    
    def update(self):
        self.obstacle_animation()
        #for movement 
        self.rect.x -= 3
        #fro destroying
        self.destroy()
   

#checking sprite collisions
def sprite_collisions():
    if pygame.sprite.spritecollide(cat.sprite,obstacle_group,False):  #just cat does not work as cat is the groupsingle and not the sprite   #boolean checks wether the sprite/group?? will be destroyed on collision
        obstacle_group.empty()
        return False
    else:
        return True




def display_score():
    current_time  = int(pygame.time.get_ticks()/1000) - start_time #gives time from when pygame starts in miliseconds  #concerting from miliseconds to seconds
    score_font =  pygame.font.Font('save/font.ttf',40)
    score_surface =  score_font.render(f'Time:{current_time}',True,(200,200,200)) #put the integer in an f string?!!?!??!?!?!?!?!?!?!?
    score_rect = score_surface.get_rect(center=(100,50))
    screen.blit(score_surface,score_rect)
    return current_time

def obstacle_movement(obstacle_list):
    if obstacle_list:  #to check if theres somethign in the list
        for obstacle_rect in obstacle_list:
            obstacle_rect.x -= 5

            if obstacle_rect.bottom == 313:      #so print solar panel when obstacle is at 313 (since its the only object at 313, use this for chicken later)
                screen.blit(solar_surface,obstacle_rect)
            else:
                screen.blit(bat_surface,obstacle_rect)      

            obstacle_list = [obstacle for obstacle in obstacle_list if obstacle.x > -100]   #updating the listso that it doesnt keep all the obstacles that pass by the screen or it would slow down the gane
        
        return obstacle_list #to make sure this works in the global scope
    else:
        return []    #to fix append error??


def collisions(player,obstacles):
    if obstacles:
        for obstacle_rect in obstacles:
            if player.colliderect(obstacle_rect): return False
    return True

    
def cat_animation():
    global cat_surf, cat_index #global used to access variables not defined inside the function

    if cat_rect.bottom < 300:   #in air ie jumping
        cat_surf =  catjump_surf
    else: 
        cat_index += 0.1 #kindof a timer?
        if cat_index>= len(catwalk_list):  #len gives length of the list
            cat_index = 0     
        cat_surf = catwalk_list[int(cat_index)] #int important



#setting up variables
pygame.init()

score=0
start_time=0

#creating a display surface
DFLT_IMG_SZ = (100, 100)
width=800
height=400
game_active=True
screen =pygame.display.set_mode((width,height))

#naming the display
pygame.display.set_caption('BatCat')

#setting up a clock for frame rate 
clock=pygame.time.Clock()

sky_index = 0


#making the group 
#to check for collisions, the cat and obstacles must be in different groyups 
cat = pygame.sprite.GroupSingle()
cat.add(Cat())  

#single group for player and group for obstacles
obstacle_group = pygame.sprite.Group()

#Background
sky_surface =  pygame.image.load('save/sky.png').convert() #converting to something pyagem si more comfortable with so program runs faster
sky_surface = pygame.transform.scale(sky_surface,(800,400))
sky2_surface =  pygame.image.load('save/sky2.png').convert() #converting to something pyagem si more comfortable with so program runs faster
sky3_surface =  pygame.image.load('save/sky3.png').convert() #converting to something pyagem si more comfortable with so program runs faster
sky2_surface = pygame.transform.scale(sky2_surface,(800,400))
sky3_surface = pygame.transform.scale(sky3_surface,(800,400))
sky4_surface =  pygame.image.load('save/sky4.png').convert() #converting to something pyagem si more comfortable with so program runs faster
sky4_surface = pygame.transform.scale(sky4_surface,(800,400))

sky_list = [sky_surface,sky2_surface,sky3_surface,sky4_surface]

ground_surface =  pygame.image.load('save/ground.png').convert()
ground_surface= pygame.transform.scale(ground_surface,(800,100))

test_font =  pygame.font.Font('save/font.ttf',40)# font type, font size
text_surface =  test_font.render('score',False,(200,200,200))  #text, anti aliasing(rounding up the text), color= RGB TUPLE 0-255
text_rect= text_surface.get_rect(center=(100,50))

#buildings?
build1_surf = pygame.image.load('save/building.png').convert_alpha()
build1_surf = pygame.transform.scale(build1_surf,(100,200))
build1_x_pos = 780
build1_rect = build1_surf.get_rect(topleft=(780,300))


#solar functions 
solar_surface =  pygame.image.load('save/solar2.png').convert_alpha()   #scaling the image to wtv size is needed #rotozoom, scale2x, various more ways to scale in documentation
solar_surface =  pygame.transform.scale(solar_surface,(30,75))
solar_rect=solar_surface.get_rect(midbottom=(randint(900,1100),313)) #not needed anymore   


#bat functions
bat1_surface = pygame.image.load('save/bat.png')
bat2_surface = pygame.image.load('save/bat1.png')
bat1_surface = pygame.transform.scale(bat1_surface,(65,65))
bat2_surface = pygame.transform.scale(bat2_surface,(75,75))
bat_fly = [bat2_surface, bat1_surface]
bat_index = 0
bat_surface =  bat_fly[bat_index]

obstacle_rect_list = []


#cat
catwalk_surf=pygame.image.load('save/cat.png').convert_alpha()
catwalk_surf = pygame.transform.scale(catwalk_surf,(100,100))
catwalkk_surf = pygame.image.load('save/cat1.png').convert_alpha()
catwalkk_surf = pygame.transform.scale(catwalkk_surf,(100,100))
catwalk_list =  [catwalk_surf, catwalkk_surf]
cat_index = 0 #variable used to choose between the two surfaces to walk
catjump_surf = pygame.image.load('save/catjump1.png')
catjump_surf = pygame.transform.scale(catjump_surf,(100,100))
cat_surf = catwalk_list[cat_index]
cat_rect=cat_surf.get_rect(midbottom=(80,328))   #method.getrect to get rectangle of the size of the surf  #you cant put a rectange over the scaled surface too, i just updated it by using the same variable name
cat_gravity=0  
cat_vely=0

#dog



#endscreen
catlaugh_surf=pygame.image.load('save/end.png')
catlaugh_surf =  pygame.transform.scale(catlaugh_surf,(300,200))
catlaugh_rect=catlaugh_surf.get_rect(center=(400,200))

lost_surf=test_font.render('YOU LOST XD',False,(250,250,250))
lost_rect=lost_surf.get_rect(center=(400,50))
message_surf=test_font.render("press space to restart",False,(250,250,250))
message_rect=message_surf.get_rect(center=(400,350))

#adding a timer for the obstacles
obstacles_event = pygame.USEREVENT+1 #plus one because some events are already reserved by pygame so to avoid confilict 
pygame.time.set_timer(obstacles_event,1500) #event to trigger, periodicity


#timer for obstacles 
bat_timer = pygame.USEREVENT + 2
pygame.time.set_timer(bat_timer,500)

#timer for background animation
bg_timer = pygame.USEREVENT + 3
pygame.time.set_timer(bg_timer,500)


#to keep screen running
while True:
    #event loop constantly checks for player input and updates display according to the event
    for event in pygame.event.get():  #(gets us the event and loops through them)
        if event.type == pygame.QUIT:
            pygame.quit() #polar opposite of pygame.init
            exit() #to close the while loop after quitting the display

        if game_active:
            #to check for motion of the mouse and toget its position
            if event.type == pygame.MOUSEBUTTONDOWN:    #buttondown. buttonup to check if pressed, motion to get position and see if its moving(returns event.pos)
                if cat_rect.collidepoint(event.pos):
                      cat_gravity=-20
                      

            #jumping in event loop (check if any button is pressed, then work with a specific key)
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE and cat_rect.bottom>=328:  #so that it only jumps when it is on the ground
                    cat_gravity=-20
                
                elif event.key == pygame.K_1:
                    cat.sprite.switch()
                elif event.key == pygame.K_2:
                    cat.sprite.switch_back()

                

        else:
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                game_active = True
                #solar_rect.x=800
                build1_rect.x=800 
                start_time=int(pygame.time.get_ticks()/1000)   #int to avoid floating point numbers

        if game_active: #checking all the timers only if the game is active 
            if event.type == obstacles_event: #making your own event
                obstacle_group.add(Obstacles(choice(['bat','solar'])))
                #if randint (0,2):   #randomly gives either 0 or 1 therefore it randomly triggers as true or false  
                 #   obstacle_rect_list.append(solar_surface.get_rect(midbottom=(randint(900,1100),313)))  #cant put solar_rect here or only one solar panel appears
                #else :
                 #   obstacle_rect_list.append(bat_surface.get_rect(midbottom=(randint(900,1100),210)))
            if event.type == bat_timer:
                if bat_index == 0:
                    bat_index = 1
                else:
                    bat_index = 0
                bat_surface = bat_fly[bat_index]   

            if event.type == bg_timer:
                sky_index+=1
                sky_index%=4


    if game_active:
        #attaching surface to display surface(block image transfer)
        screen.blit(sky_list[sky_index],(0,0)) 
        screen.blit(ground_surface,(0,300))
        
        score = display_score()

        #firts building functions
        #build1_rect.x -=4
        #if build1_rect.x <= -100:
        #    build1_rect.x = 800
        #screen.blit(build1_surf,build1_rect)

        #drawing
        cat.draw(screen)    #specify surface you need to draw on
        cat.update()

        obstacle_group.draw(screen)
        obstacle_group.update()

        #collisions
        game_active = sprite_collisions()
        
    else:
        screen.fill((0,0,0))
        screen.blit(catlaugh_surf,catlaugh_rect)
        screen.blit(lost_surf,lost_rect)
        screen.blit(message_surf,message_rect)
        obstacle_rect_list.clear()  #so that the game does not crash right after one collision and end screen'
        cat_rect.midbottom = (80,328)  #so that it doesnt start from the top if it dies from collision midair
        player_gravity = 0 #so that we start at the bottom and dont fall further

        #to display current score
        score_surf=test_font.render(f'Score:{score}',False,(250,250,250))
        score_rect=score_surf.get_rect(center=(100,200))
        screen.blit(score_surf,score_rect)

    pygame.display.update() #(updates the display surface we made earlier)
    clock.tick(120)          #sets maximum frame rate #miniumum frame rate for higher end games
    



    #jumping by key.get_pressed
    #keys=pygame.key.get_pressed() #returns 0/1 for each key
    #if keys[pygame.key.K_SPACE]:
    #   print('jump')

    #to check for collisions(rect1.colliderect(rect2)), statement returns 1(true) and 0 #print
    #if cat_rect.colliderect(solar_rect):
       # print('collision')
        #make a statement to terminate on first collision 

    #check fro collisions of rect and point rect1.collidepoint((x,y))
    #check for collisision with mouse position or mouse being clicked

    #mouse_pos = pygame.mouse.get_pos() #variuable stores position of on each frame
    #if cat_rect.collidepoint(mouse_pos):
       #print(pygame.mouse.get_pressed())

    #solar panel functions
        #solar_rect.x -= 4                     
        #if solar_rect.x <= -100:
        #   solar_rect.x = 800
        #screen.blit(solar_surface,solar_rect)

    #cat functions
        #print(cat_rect.left) 
        #cat_gravity += 1 #before we draw the cat why?
        #cat_rect.y += cat_gravity   
        #if cat_rect.bottom>= 328:
        #    cat_rect.bottom=328
        #    cat_animation()
        #screen.blit(cat_surf,cat_rect)
    
    #obstacle movement functions  #must be in game_active obv
        #obstacle_rect_list = obstacle_movement(obstacle_rect_list) #continuosly updates the list

    #if solar_rect.colliderect(cat_rect):
            #game_active=False
        #game_active = collisions(cat_rect, obstacle_rect_list) #returns false if there is a collision so we move on to the else statement right after
                                                                #returns true if there is no collision and goes back to the game active at the top (132?)


   #drawing using rectangles (can draw other shapes too)
        #giving a backgroudn to our score
        #pygame.draw.rect(screen,'#b10000', text_rect) #specify(surface to draw on, color(hexadecimal string), which rectangle(can ccreate this on the spot),border(but this will give only border and not rectangle), border radius for rounder border)
        #pygame.draw.rect(screen,'#b10000', text_rect,6) #giving the border seperately so it is filled #vorder radius not working?
        #screen.blit(text_surface,text_rect)





