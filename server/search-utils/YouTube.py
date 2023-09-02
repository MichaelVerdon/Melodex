import YTKey
from googleapiclient.discovery import build

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

        videos = []
        channels = []

        for search_result in response.get('items', []):
            if search_result['id']['kind'] == 'youtube#video':
                videos.append('%s (%s)' % (search_result['snippet']['title'],
                                            search_result['id']['videoId']))
            elif search_result['id']['kind'] == 'youtube#channel':
                channels.append('%s (%s)' % (search_result['snippet']['title'],
                                            search_result['id']['channelId']))
                
        print(videos, channels)

        # Process the response as needed

yt = YouTube(query="death grips hacker")
yt.search()
