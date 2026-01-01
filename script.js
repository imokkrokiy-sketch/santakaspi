const sound = document.getElementById("successSound");
const app = document.getElementById("app");

let startY = 0;

app.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

app.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 80) {
    startLoading();
  }
});

function startLoading() {
  const step1 = document.getElementById("step1");
  const loader = document.getElementById("loader");
  const step2 = document.getElementById("step2");

  if (step1.classList.contains("hidden")) return;

  step1.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    step2.classList.remove("hidden");
    sound.play();
  }, 2200);
}
