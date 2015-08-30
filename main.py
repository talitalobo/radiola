import datetime
import random
import json
import os.path
from flask import Flask, render_template, Response, send_from_directory
app = Flask(__name__)
app.config['DEBUG'] = True

YEAR_LOWER_LIMIT = 1958
YEAR_UPPER_LIMIT = datetime.date.today().year - 1
SAMPLE_BY_YEAR = 3

def root_dir():  # pragma: no cover
    return os.path.abspath(os.path.dirname(__file__))

def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(root_dir(), filename)
        return open(src).read()
    except IOError as exc:
        return str(exc)

music_data_src = os.path.join(root_dir(), "dados", "ano_musicas.json")
with open(music_data_src) as data_file:    
    music_data = json.load(data_file)

@app.route('/<path:path>')
def send_static_files(path):
    file_dir = os.path.join(root_dir(), "web")
    return send_from_directory(file_dir, path)

@app.route('/')
def index():
    content = get_file('web/index.html')
    return Response(content, mimetype="text/html")

@app.route('/get_playlist/<year>')
def get_playlist(year):
    adolescencia_ini = int(year)+13
    adolescencia_fim = int(year)+20
    result = []
    for i in range(adolescencia_ini, adolescencia_fim+1):
        if (i < YEAR_LOWER_LIMIT or i > YEAR_UPPER_LIMIT):
            continue
        sample_musics = random.sample(music_data[str(i)], SAMPLE_BY_YEAR)
        result_sample = []
        for sample_music in sample_musics:
            sample_music['year'] = i
            result_sample.append(sample_music)
        result.extend(result_sample)
    return json.dumps(result)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404
