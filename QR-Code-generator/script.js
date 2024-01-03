const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generationBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

let preValue;
generationBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generationBtn.innerText = "Generation QR Code.....";
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$(qrvalue)';
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generationBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});