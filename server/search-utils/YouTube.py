import YTKey
import googleapiclient.discovery

class YouTube:

    def __init__(self, query):
        self.query = query
        self.yt = googleapiclient.discovery.build('youtube', 'v3', developerKey=YTKey.YTDevKey)

    def search(self):

        response = yt.search().list(
            q=self.query,
            type="video",
            part='id,snippet',
            maxResults=10
        ).execute()



yt = YouTube(query="death grips hacker")
yt.search()
