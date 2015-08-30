import json

def convert_to_json():
    f = open("musicasComVideo.csv","r")
    
    lines = f.readlines()
    years_songs = {}
    for line in lines:
        split_line = line.split(";")
        year = split_line[0].strip()
        song = split_line[1].strip()
        artist = split_line[2].strip()
        video_id = split_line[3].strip()
        if (year not in years_songs.keys()):
            years_songs[year] = []
        track = {}
        track['artist'] = artist
        track['song'] = song
        track['video_id'] = video_id
        years_songs[year].append(track)
    output_json = open("ano_musicas.json", "w")
    output_json.write(json.dumps(years_songs, ensure_ascii=False))
    
convert_to_json()