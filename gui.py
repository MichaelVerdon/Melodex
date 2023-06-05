import tkinter as tk
from tkinter import *

#class for making a window
class Window():
    def __init__(self):
        super().__init__()
        self.root = tk.Tk()
        self.root.geometry('1280x720')
        self.root.title("Melodex")
        self.mainframe = tk.Frame(self.root ,background='white')
        self.mainframe.pack(fill='both', expand= True)
        
        self.text = tk.Label(self.mainframe, text ='Melodex', background='white', font=("Roboto Mono", 24))
        self.text.grid(row=0, column=0)
        self.root.mainloop()
        return

class App(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        pass 

if __name__ == "__main__":
   Window()
