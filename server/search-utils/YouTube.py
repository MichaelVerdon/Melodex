import sys
sys.path.append("../API-Keys")
import googleapiclient.discovery

class YouTube:

    def __init__(self, query):
        self.query = query
        self.yt = googleapiclient.discovery.build('youtube', 'v3', developerKey="AIzaSyDTrZ3ZJl-eitRmuPAhTlC_WehaFBM2BFM")

    def search(self):

        # Call the search.list method to retrieve videos
        search_response = yt.search().list(
            q=self.query,
            type='video',
            part='id,snippet',
            maxResults=2
        ).execute()

        # Parse the response and print video details
        for search_result in search_response.get('items', []):
            video_id = search_result['id']['videoId']
            video_title = search_result['snippet']['title']
            print(f'Video Title: {video_title}\nVideo ID: {video_id}\n')



yt = YouTube(query="death grips hacker")
yt.search()
