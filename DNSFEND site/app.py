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


# Products sayfası
@app.route('/products/')
def products():
    return render_template('products.html')


# Solutions sayfası
@app.route('/solutions/')
def solutions():
    return render_template('solutions.html')


# Threats sayfası
@app.route('/threats/')
def threats():
    return render_template('threats.html')


# Contact sayfası
@app.route('/contact/')
def contact():
    return render_template('contact.html')


# Pricing sayfası
@app.route('/pricing/')
def pricing():
    return render_template('pricing.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
