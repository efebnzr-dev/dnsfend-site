// İletişim formunu gönder
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const responseDiv = document.getElementById('response');
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                });
                
                const data = await response.json();
                
                responseDiv.textContent = data.message;
                responseDiv.classList.remove('error');
                responseDiv.classList.add('success');
                
                // Formu temizle
                contactForm.reset();
                
                // 3 saniye sonra mesajı gizle
                setTimeout(function() {
                    responseDiv.classList.remove('success');
                }, 3000);
                
            } catch (error) {
                responseDiv.textContent = 'Hata oluştu. Lütfen tekrar deneyin.';
                responseDiv.classList.remove('success');
                responseDiv.classList.add('error');
            }
        });
    }
});
    
// Animated number counter for statistics
function formatNumberShort(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(2).replace(/\.00$/, '') + 'T';
    if (num >= 1e9)  return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
    if (num >= 1e6)  return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
    if (num >= 1e3)  return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K';
    return num.toString();
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        let start = 0;
        let duration = 2000;
        let step = Math.max(1, Math.floor(target / (duration / 16)));
        let prefix = '';
        let suffix = '';
        if (stat.textContent.includes('$')) prefix = '$ ';
        if (stat.textContent.includes('%')) suffix = ' %';
        function update() {
            start += step;
            if (start >= target) {
                stat.textContent = prefix + formatNumberShort(target) + suffix;
            } else {
                stat.textContent = prefix + formatNumberShort(start) + suffix;
                requestAnimationFrame(update);
            }
        }
        update();
    });
}
document.addEventListener('DOMContentLoaded', animateStats);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
