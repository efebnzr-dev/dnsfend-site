from flask_frozen import Freezer
from app import app

app.config['FREEZER_BASE_URL'] = 'https://efebnzr-dev.github.io/'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_DESTINATION_IGNORE'] = ['.git*']
app.config['FREEZER_DEFAULT_MIMETYPE'] = 'text/html'

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()