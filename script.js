// Generate Stars

function createStars() {
    const starsContainer = document.getElementById('stars')
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i=0; i<100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = '${Math.random() * windowWidth}px';
        star.style.top = '${Math.random() * windowHeight}px';
        starsContainer.appendChild(star);
    }
}

// Call the create star function when the page is load

window.addEventListener('load',createStars);
