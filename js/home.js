document.addEventListener("DOMContentLoaded", () => {
    /* ===== FUNCTIONS ===== */

    // function that will toggle the popup on and off
    const togglePopup = () => {
        const modal = document.getElementById("modal-bg");
        const classes = modal.classList;
        if (classes.contains("modal-hide")) {
            classes.remove("modal-hide");
            classes.add("modal-shown");
        } else {
            classes.remove("modal-shown");
            classes.add("modal-hide");
        }
    };

    /* ===== EVENT LISTENERS ===== */

    // add event listener for venmo button
    const venmoBtn = document.getElementById("venmo");
    venmoBtn.addEventListener("click", () => {
        alert("Venmo account: @anthony-montemuro");
    });

    // add event listener for bitcoin button
    const bitcoinBtn = document.getElementById("bitcoin");
    bitcoinBtn.addEventListener("click", () => {
        alert("Bitcoin wallet: 1P4KZX5BNqHwhzJuaTxrDQ6G9UQ4QVoDmZ");
    });

    // add event listener for email button
    const emailBtn = document.getElementById("email");
    emailBtn.addEventListener("click", togglePopup);

    // add event listener for close btn
    const closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", togglePopup);
});