const imagem0 = document.getElementById("imagem0");
const video0 = document.getElementById("video0");
const imagem1 = document.getElementById("imagem1");
const video1 = document.getElementById("video1");
const imagem2 = document.getElementById("imagem2");
const video2 = document.getElementById("video2");
const imagem3 = document.getElementById("imagem3");
const video3 = document.getElementById("video3");

imagem0.addEventListener("mouseover", () => {
    video0.style.display = "block";
    video0.play();
});

imagem0.addEventListener("mouseout", () => {
    video0.style.display = "none";
    video0.pause();
});
imagem1.addEventListener("mouseover", () => {
    video1.style.display = "block";
    video1.play();
});

imagem1.addEventListener("mouseout", () => {
    video1.style.display = "none";
    video1.pause();
});
imagem2.addEventListener("mouseover", () => {
    video2.style.display = "block";
    video2.play();
});

imagem2.addEventListener("mouseout", () => {
    video2.style.display = "none";
    video2.pause();
});
imagem3.addEventListener("mouseover", () => {
    video3.style.display = "block";
    video3.play();
});

imagem3.addEventListener("mouseout", () => {
    video3.style.display = "none";
    video3.pause();
});