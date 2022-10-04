let btnDarkMode = document.getElementById('darkmode');
btnDarkMode.addEventListener('click', function(){
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
    }
    else {
        document.body.classList.add('dark');
    }

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'true');
    }
    else {
        localStorage.setItem('darkMode', 'false')
    }
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}