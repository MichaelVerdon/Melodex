import requests
from io import BytesIO
from bs4 import BeautifulSoup as soup

class linkHandler:

    def __init__(self, link):
        self.link = link
    
    def verify(self):
        try:
            response = requests.head(self.link)
            return response.status_code == 200
        except requests.exceptions.RequestException:
            return False

    def getDetails(self):
        id = self.link.split("=")[1]
        img = f"https://img.youtube.com/vi/{id}/default.jpg"

        title = soup.find('meta', property='og:title')["contents"]
        author = soup.find('a', class_='yt-uix-sessionlink spf-link').text.strip()
        print(title, author)
        return BytesIO(requests.get(img).content), title, author

            


handle = linkHandler("https://www.youtube.com/watch?v=CHUxmVVH2AQ")
handle.getDetails()
