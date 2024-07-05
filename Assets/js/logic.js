const toggleButton = document.getElementById ('toggle');

const applyMode = (mode) => {
    document.body.className = mode;
    localStorage.setItem('mode', mode);
};

const toggleMode = () => {
    const currentMode = localStorage.getItem('mode') || 'light';    
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applyMode(newMode);
};

toggleButton.addEventListener('click', toggleMode);

document.addEventListener('DOMContentLoaded', () => {
    const mode = localStorage.getItem('mode') || 'light';
    applyMode(savedMode);
});