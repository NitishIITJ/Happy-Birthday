const surpriseBtn = document.getElementById("surprise-btn");
const birthdayGif = document.getElementById("birthday-gif");
const birthdayMusic = document.getElementById("birthday-music");

surpriseBtn.addEventListener("click", () => {
    birthdayGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJwaGd6ejRpaHN2MTBhdmNvdzRlNXF4NjZsbHowcWl1b3MycmwwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w7ZhReCeKB6pCyLbki/giphy.gif";
    birthdayGif.style.display = "block";
    birthdayMusic.play();

    surpriseBtn.textContent = "Enjoy the Celebration!";
    surpriseBtn.disabled = true;
    surpriseBtn.style.backgroundColor = "#ccc";
});
