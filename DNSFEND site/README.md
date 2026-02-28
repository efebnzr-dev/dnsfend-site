# DNSFEND - DNS Threat Detection & Protection

A comprehensive web application built with Python Flask showcasing DNSFEND's advanced DNS security solutions.

## Project Structure

```
DNSFEND site/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/            # HTML templates
│   ├── base.html         # Base template
│   ├── index.html        # Home page
│   └── about.html        # About DNSFEND
└── static/               # Static files
    ├── css/
    │   └── style.css     # Styles
    └── js/
        └── script.js     # JavaScript
```

## Getting Started

### Requirements
- Python 3.7 or higher

### Installation & Running

1. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run Application:**
   ```bash
   python app.py
   ```

3. **Open in Browser:**
   ```
   http://localhost:5000
   ```

## Features

- Flask-based web application
- Responsive design (works on all devices)
- Modern CSS styling and animations
- JavaScript interactivity
- Contact form with email functionality
- Template inheritance
- REST API endpoints

## Pages

### Home Page (`/`)
Introduces DNSFEND with:
- Eye-catching hero section
- Why DNS Security Matters section
- 6 core features showcase
- About DNSFEND preview
- Contact form

### About Page (`/about`)
Comprehensive information including:
- What is DNSFEND?
- Why DNS Security is Critical
- DNS-Based Cyber Threats (6 types)
- How DNSFEND Works (3 steps)
- Key Features (6 features)
- Benefits (6 benefits)
- Contact information

## Key Features of DNSFEND

### Real-Time Threat Detection & Response
- Continuously monitors DNS requests
- Detects threats immediately
- Blocks malicious content instantly
- Prevents malware, breaches, and phishing

### Customizable Solutions
- Centrally managed security policies
- Easy configuration for user behavior
- Quick and simple installation
- Seamless integration with existing systems

### Safe Internet Experience
- Blocks malicious websites
- Secure access to necessary IT content
- Regulates internet usage
- Access only to safe, approved websites

### Centralized Management & Reporting
- Comprehensive traffic reports
- Detailed threat analysis
- Access log recording
- Single control panel management

### Compliance & Legal
- KVKK compliance (Turkish GDPR)
- All legal requirement adherence
- Log retention for audits
- Data protection standards

### Multi-Platform Support
- Cloud deployment
- On-premises deployment
- Flexible options
- Seamless integration

## Threat Types Blocked

- **DNS Tunneling Attacks** - Prevents data exfiltration through DNS
- **DNS Poisoning** - Stops redirects to fraudulent websites
- **Phishing Attacks** - Blocks deceptive websites
- **Botnet C&C** - Prevents command center communication
- **Malware Distribution** - Blocks malware-hosting servers
- **Ransomware** - Stops ransomware command communication

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request:**
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Hello Your Name, your message has been received!"
}
```

## Customization

### Modify Styles
Edit `static/css/style.css` to customize colors and design.

### Add New Pages
1. Create a new `.html` file in `templates/`
2. Add route in `app.py`:
   ```python
   @app.route('/new-page')
   def new_page():
       return render_template('new_page.html')
   ```

### Integrate Database
Use SQLAlchemy for database integration:
```bash
pip install flask-sqlalchemy
```

### Email Notifications
Implement email notifications for contact form:
```bash
pip install flask-mail
```

## Contact

For more information about DNSFEND:
- Website: [www.dnsfend.com](https://www.dnsfend.com)
- Email: info@dnsfend.com

## Notes

This is a professional website for DNSFEND DNS security solutions. Before deploying to production:
- Review security configurations
- Implement proper email handling
- Set up SSL/TLS certificates
- Configure proper database connections
- Implement rate limiting and CSRF protection

## License

MIT License - Feel free to use and modify for commercial and educational purposes.

---

**Built with:** Python Flask  
**Last Updated:** 2026  
**Version:** 1.0
