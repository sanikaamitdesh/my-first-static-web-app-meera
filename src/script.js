document.getElementById("showMessageBtn").addEventListener("click", function () {
    const message = document.getElementById("message");
    message.textContent = "Hello, JavaScript World! 🎉";
    message.classList.remove("hidden");
});
