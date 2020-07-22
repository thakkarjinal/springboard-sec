from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "WHATASECRET!!"
app.debug = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

RESPONSES = []

@app.route('/')
def homepage():
    title = survey.title
    instruction = survey.instructions
    return render_template("homepage.html", title=title, instruction=instruction)

@app.route('/question/<int:id>')
def questions(id):
    """
    If user tries to access url randomly, they will be redirected
    to the next unanswered question.
    If all the questions are answered it takes to the 0th question.
    """
    if id >= len(survey.questions) or len(RESPONSES) != id:
        if len(RESPONSES) < len(survey.questions):
            flash("You can't enter random question id in the URL!") 
            return redirect('/question/{}'.format(len(RESPONSES)))
    question = survey.questions[id].question
    choices = survey.questions[id].choices
    return render_template("question.html", question=question, choices=choices)

@app.route('/answer', methods=["POST"])
def answer():
    """
    Saving the answer and redirecting to the next appropriate question. Once all the questions are
    answered the responses are reset to be empty.    
    """
    global RESPONSES
    RESPONSES.append(request.form['choice'])
    next_question_id = len(RESPONSES)
    total_questions = len(survey.questions)
    if len(RESPONSES) < total_questions:
        return redirect('/question/{}'.format(next_question_id))
    else:
        responses = RESPONSES
        RESPONSES = []
        return render_template('thank_you.html', responses=responses, questions=survey.questions)
        