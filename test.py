import pygame 
#import pygame module


# Import pygame.locals for easier access to key coordinates
from pygame.locals import(
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN, 
    QUIT,
)

pygame.init() 
#initializing

#define constants for size of screen
SCREEN_WIDTH=1000
SCREEN_HEIGHT=600

screen=pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
#size of screen setup #double brackets why???


running = True 
#variabel to keep the lopp running

#main loop
while running: 

    for event in pygame.event.get(): #looks at every event going on in the game

        if event.type == KEYDOWN:  #is a key pressed?

            if event.Key == K_ESCAPE: #is it the escape key?
                running=False  #stop

        #quit is the window close button
        elif event.type == QUIT: 
            running=False
        break

#fill the screen with some color
screen.fill((255, 255, 255))

#drawing on the screen
surf=pygame.Surface((50,50))  #creating a rectangular surface and passing a tuple with its length and widht

surf.fill((0,0,0)) #giving the surf a color
rect=surf.get_rect()

# Put the center of surf at the center of the display
surf_center = (
    (SCREEN_WIDTH-surf.get_width())/2,
    (SCREEN_HEIGHT-surf.get_height())/2
)

screen.blit(surf, surf_center)
pygame.display.flip()
            
