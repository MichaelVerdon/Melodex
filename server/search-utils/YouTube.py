import YTKey
from googleapiclient.discovery import build
import json

class YouTube:

    def __init__(self, query):
        self.query = query
        self.yt = build('youtube', 'v3', developerKey=YTKey.YTDevKey)

    def search(self):
        response = self.yt.search().list(  # Use self.yt instead of yt
            q=self.query,
            part='id,snippet',
            maxResults=10
        ).execute()

        # Initialise empty array for response
        results = []

        for search_result in response.get('items', []):
            # Retrieve info needed
            if search_result['id']['kind'] == 'youtube#video':
                title = search_result['snippet']['title']
                id = search_result['id']['videoId']
                publisher = search_result['snippet']['channelTitle']
                thumbnail = search_result['snippet']['thumbnails']['default']['url']
            
            # JSON Format for endpoints
            result = {
                "title":title,
                "link":f"https://www.youtube.com/watch?v={id}",
                "publisher":publisher,
                "thumbnail":thumbnail
            }
            results.append(result)
        print(json.dumps(results))
        return json.dumps(results)
        

        # Process the response as needed

yt = YouTube(query="death grips hacker")
yt.search()
