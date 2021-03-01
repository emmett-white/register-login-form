loadingScreen = (form) => {
    document.getElementById('loading-text').style.display = 'flex';
    document.getElementById('loading-text').innerHTML = '';

    switch (form) {
        case 'register': {
            new TypeIt('#loading-text', {
                strings: 'Loading register form, please wait...',
                speed: 80,
                waitUntilVisible: true
            }).go();

            document.getElementById('register').style.display = 'none';
            setTimeout(() => {
                document.getElementById('loading-text').style.display = 'none';
                changeForm('register');
            }, 7000);

            break;
        }

        case 'login': {
            new TypeIt('#loading-text', {
                strings: 'Loading login form, please wait...',
                speed: 80,
                waitUntilVisible: true
            }).go();

            document.getElementById('login').style.display = 'none';
            setTimeout(() => {
                document.getElementById('loading-text').style.display = 'none';
                changeForm('login');
            }, 7000);

            break;
        }
    }
}

changeForm = (form) => {
    switch (form) {
        case 'login': {
            document.getElementById('register').style.display = 'none';
            document.getElementById('login').style.display = 'block';
       
            break;
        }

        case 'register': {
            document.getElementById('login').style.display = 'none';
            document.getElementById('register').style.display = 'block';
       
            break;
        }
    }
}

loadingScreen('register');