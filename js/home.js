// init emailjs
const PUBLIC_KEY = "w-CJKosHSbU9E5vp5";
(function() {
    emailjs.init(PUBLIC_KEY);
})();

/* ===== FUNCTIONS ===== */

// function that resets the form
const resetForm = () => {
    document.getElementById("user_name").value = "";
    document.getElementById("user_subject").value = "";
    document.getElementById("user_email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("send-btn").disabled = false;
    document.getElementById("send-msg").innerText = "";
};

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
        resetForm();
    }
};

// function that will send email to my inbox when "send" button is clicked
const sendEmail = async e => {
    e.preventDefault();

    const sendBtn = document.getElementById("send-btn");
    const sendMsg = document.getElementById("send-msg");
    try {
        sendBtn.disabled = true;
        await emailjs.sendForm('service_zceanbe', 'template_qeyiw0y', e.target, PUBLIC_KEY);
        sendMsg.innerText = "Email sent! Thank you. 😀";
    } catch (error) {
        sendMsg.innerText = "Email failed to send. Please try again later.";
        sendBtn.disabled = false;
    };
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

// add event listener for form
const form = document.getElementById("form");
form.addEventListener("submit", sendEmail);