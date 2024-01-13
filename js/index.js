// Set navbar HTML
document.getElementById("navbar").innerHTML = `
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/achievements.html">Gaming Achievements</a></li>
        </ul>
    </nav>
`;

document.getElementById("navbar-mobile").innerHTML = `
    <nav>
        <svg id="hamburger" viewBox="0 0 100 80" width="40" height="40">
            <rect fill="#fff" width="100" height="20" rx="6"></rect>
            <rect fill="#fff" y="35" width="100" height="20" rx="6"></rect>
            <rect fill="#fff" y="70" width="100" height="20" rx="6"></rect>
        </svg>
    </nav>
    <div class="navbar-mobile-menu hide-menu">
        <div id="menu-exit-wrapper">
            <button type="button" id="menu-exit" class="close-btn">×</button>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/achievements.html">Gaming Achievements</a></li>
        </ul>
    </div>
`;

// FUNCTIONS

// function that toggles the navbar mobile menu on and off
const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".navbar-mobile-menu");
    if (mobileMenu.classList.contains("hide-menu")) {
        mobileMenu.classList.add("show-menu");
        mobileMenu.classList.remove("hide-menu");
        document.body.style.overflow = "hidden";
    } else {
        mobileMenu.classList.add("hide-menu");
        mobileMenu.classList.remove("show-menu");
        document.body.style.overflow = "scroll";
    }
};

// EVENT LISTENERS
document.getElementById("hamburger").addEventListener("click", toggleMobileMenu);
document.getElementById("menu-exit").addEventListener("click", toggleMobileMenu);