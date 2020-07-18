from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint
from story import Story

app = Flask(__name__)
app.config['SECRET_KEY'] = "WHATASECRET!!"
KEYS = ["place", "noun", "verb", "adjective", "plural_noun"]
app.debug = True

debug = DebugToolbarExtension(app)

@app.route('/')
def homepage():
    return render_template("form.html", keys=KEYS)

@app.route('/story', methods=["POST"])
def story():
    story = Story(
    KEYS,
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
    )
    answers = {}
    for key in KEYS:
        answers[key] = request.form[key]
    story = story.generate(answers)
    return render_template("story.html", story=story)