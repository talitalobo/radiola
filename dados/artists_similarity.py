import urllib2 
import json

f = open("artistas.csv","r")
lines = f.readlines()

for line in lines:
    #print(line)
    url = "http://developer.echonest.com/api/v4/artist/similar?api_key=NNDIE5MEWU4J2ZPJQ&name=\"" + line.strip() + "\""
    response = urllib2.urlopen(url).read()
    artists = json.loads(response)['response']['artists']
    print()
    
    for artist in artists:
        print(artist['name'])
    break