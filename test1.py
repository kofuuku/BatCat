import pygame
from pygame.locals import(
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
    QUIT
)

pygame.init()


SCREEN_WIDTH=1000
SCREEN_HEIGHT=100

screen=pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT)) #DOUBLE BRACKTES WHY??

# Define a Player object by extending pygame.sprite.Sprite #what???
#defining a sprite
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super(Player, self).__init__()
        self.surf= pygame.Surface((75,25))
        self.surf.fill((255,255,255))
        self.rect = self.surf.get_rect()
        



