from selenium import webdriver
from selenium.webdriver.common.by import By
import requests

class YouTube:

    def __init__(self, query):
        self.query = query
        self.base = "https://www.youtube.com/results?search_query=" # standard search link
        self.filter ="&sp=EgIQAQ%253D%253D" # music filter

    def search(self):
        link = self.base + self.query.replace(" ", "+") + self.filter
        # Ensure it does not open browser when scraping
        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        driver = webdriver.Chrome(options=options)

        try:
            response = requests.get(link)

            if response.status_code == 200:
                driver.get(link)
                results = driver.find_elements(By.XPATH, '//*[@id="dismissible"]')

                
                for result in results:
                    title_element = result.find_element(By.XPATH, './/h3[@class="title-and-badge style-scope ytd-video-renderer"]')
                    title = title_element.text.strip()
                    print(title)

                driver.quit()
            else:
                print("Site cannot be reached")
        except Exception as e:
            print("Error:", str(e))

yt = YouTube(query="death grips hacker")
yt.search()
