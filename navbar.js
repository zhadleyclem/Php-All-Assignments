window.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
});
