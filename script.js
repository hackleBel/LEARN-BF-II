document.querySelector(".discord").onclick = function () {
  window.open("https://discord.gg/W2JNJMah");
};
document.querySelector(".nexus").onclick = function () {
  window.open(
    "https://www.nexusmods.com/games/starwarsbattlefront22017/mods?timeRange=allTime"
  );
};

const nav = document.querySelector(".nav");
const navBTNS = document.querySelector(".nav-btns");
document.querySelector(".navigation").onclick = function () {
  if (window.getComputedStyle(navBTNS).display === "none") {
    navBTNS.style.display = "flex";
  } else {
    navBTNS.style.display = "none";
  }
};
