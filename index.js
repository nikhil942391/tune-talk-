const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const searchBar = document.querySelector('.search-bar');
const searchSuggestions = document.querySelector('.search-suggestions');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

let isPlaying = false;

// Music Player Controls
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    console.log('Previous Song');
});

nextBtn.addEventListener('click', () => {
    console.log('Next Song');
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    if (!isNaN(duration)) {
        progressBar.value = (currentTime / duration) * 100;
        durationEl.textContent = formatTime(duration);
    }
    
    currentTimeEl.textContent = formatTime(currentTime);
});

progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    if (!isNaN(duration)) {
        audio.currentTime = (progressBar.value / 100) * duration;
    }
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Search Bar Functionality
searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    if (query) {
        searchSuggestions.classList.remove('hidden');
    } else {
        searchSuggestions.classList.add('hidden');
    }
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-400"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon text-white"></i>';
    }
});