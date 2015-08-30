#!/usr/bin/env python
# -*- coding: utf-8 -*

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser


# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
DEVELOPER_KEY = "AIzaSyD21PK5rAQrFoNU_vVQAWkQoS4X8pRj9Es"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

def youtube_search(titulo):
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY)
    
  search_response = youtube.search().list(q=titulo, part="id", maxResults=1).execute()

  for search_result in search_response.get("items", []):
    id_search_result = search_result["id"]
    return id_search_result["videoId"].encode('utf-8') if "videoId" in id_search_result.keys() else ""
  return ""

f = open("musicas.csv","r")
lines = f.readlines()
output = open("musicasComVideo.csv", "a")

counter=0
for line in lines:
  counter=counter+1
  titulo = line.split(";")[1].strip()
  artista = line.split(";")[2].strip()
  idVideo = youtube_search(titulo + " - " + artista)
  result=titulo+";"+artista+";"+idVideo+"\n"
  print counter
  print result
  output.write(result)
  #time.sleep(0.5)
