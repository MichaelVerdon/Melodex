import tkinter as tk
from tkinter import *

#class for making a window
class App():
    def __init__(self):
        super().__init__()
        self.title("Melodex")
        self.attributes= {
            "bg": 'white',
            "width":'1024',
            "height": '768'  
        }
        self.maxsize = (1024,768)
        self.minsize = (1024, 768)
        self.resizable(0,0)
        self.configure(self.attributes)

if __name__ == "__main__":
    App()
