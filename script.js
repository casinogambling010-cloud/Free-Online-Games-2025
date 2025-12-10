// Simple search filter (demo)
document.querySelector('#gameSearch').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(term) ? 'block' : 'none';
    });
});

// Add floating particles animation
for(let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = Math.random() * 20 + 10 + 's';
    p.style.opacity = Math.random();
    document.querySelector('.particles').appendChild(p);
}