document.addEventListener("DOMContentLoaded", () => {
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
});