from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hai():
    return "HAI!"

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    print(name)
    return render_template('hello.html', name=name)