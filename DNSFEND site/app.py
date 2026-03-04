from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


# Ana sayfa
@app.route('/')
def index():
    return render_template('index.html')


# Hakkında sayfası
@app.route('/about/')
def about():
    return render_template('about.html')

# Features sayfası
@app.route('/features/')
def features():
    return render_template('features.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
