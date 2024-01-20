// Set navbar HTML
document.getElementsByTagName("header")[0].innerHTML = `
    <div id="nav-wrapper">
        <div id="navbar" class="nav"></div>
        <div id="navbar-mobile" class="nav"></div>
        <div class="navbar-mobile-menu"></div>
    </div>
`;

document.getElementById("navbar").innerHTML = `
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/achievements">Gaming Achievements</a></li>
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
`;

document.querySelector(".navbar-mobile-menu").innerHTML = `
    <div id="menu-exit-wrapper">
        <button type="button" id="menu-exit" class="close-btn">×</button>
    </div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/achievements">Gaming Achievements</a></li>
    </ul>
`;

// FUNCTIONS

// function that toggles the navbar mobile menu on and off
const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".navbar-mobile-menu");
    const body = document.body;

    if (mobileMenu.classList.contains("show-menu")) {
        mobileMenu.classList.remove("show-menu");
        body.style.overflow = "visible";
    } else {
        mobileMenu.classList.add("show-menu");
        body.style.overflow = "hidden";
    }
};

// EVENT LISTENERS
document.getElementById("hamburger").addEventListener("click", toggleMobileMenu);
document.getElementById("menu-exit").addEventListener("click", toggleMobileMenu);