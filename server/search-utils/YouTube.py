import requests
from bs4 import BeautifulSoup

class YouTube:

    def __init__(self, query):
        self.query = query
        self.base = "https://www.youtube.com/results?search_query="

    def search(self):
        try:
            response = requests.get(self.base + self.query.replace(" ", "+"))
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                videos = soup.find_all("ytd-video-renderer")
                print(videos)
        except:
            print("error")


yt = YouTube(query="death grips hacker")
yt.search()

