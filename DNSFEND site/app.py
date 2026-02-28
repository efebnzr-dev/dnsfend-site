from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Ana sayfa
@app.route('/')
def index():
    return render_template('index.html')


# Hakkında sayfası
@app.route('/about')
def about():
    return render_template('about.html')

# Features sayfası
@app.route('/features')
def features():
    return render_template('features.html')


# PDF pages index
@app.route('/pdfs')
def pdfs_index():
    return render_template('pdfs/index.html')


# Serve individual PDF page templates generated from PDFs
@app.route('/pdfs/<pdf_name>/page_<int:page_num>')
def pdf_page(pdf_name, page_num):
    template_path = f'pdfs/{pdf_name}/page_{page_num}.html'
    return render_template(template_path)

# İletişim formu (API)
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    # Burada email gönderme veya veritabanı kaydı işlemi yapılabilir
    return jsonify({
        'status': 'success',
        'message': f'Merhaba {data.get("name")}, mesajınız alındı!'
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
