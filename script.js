// Počkám, až se kompletně načte DOM struktura stránky
document.addEventListener('DOMContentLoaded', () => {
    
    // Výběr elementů pro přepínání vzhledu (Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Pokud už uživatel v minulosti režim vybral, nastavím ho
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = '☀️'; // Změna ikony na slunce
        }
    }

    // Funkce, která se spustí po kliknutí na tlačítko režimu
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            // Přepnutí do světlého režimu
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            // Přepnutí do tmavého režimu
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });

    // Malý JavaScriptový bonus: Aktivní zvýraznění položek v menu podle toho, kde se na stránce nacházíme
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Detekce sekce na obrazovce s drobným offsetem
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.style.color = 'var(--accent-color)';
            } else {
                link.style.color = '';
            }
        });
    });
});