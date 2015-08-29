import os.path
from flask import Flask, render_template, Response, send_from_directory
app = Flask(__name__)
app.config['DEBUG'] = True

def root_dir():  # pragma: no cover
    return os.path.abspath(os.path.dirname(__file__))

def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(root_dir(), filename)
        return open(src).read()
    except IOError as exc:
        return str(exc)

@app.route('/<path:path>')
def send_static_files(path):
    file_dir = os.path.join(root_dir(), "web")
    return send_from_directory(file_dir, path)

@app.route('/')
def index():
    content = get_file('web/index.html')
    return Response(content, mimetype="text/html")


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404
