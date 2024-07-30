document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    darkModeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeSwitch.checked);
    });
});