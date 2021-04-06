const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//Scrol

//document.addEventListener("scroll", function() {
  //document.querySelector(".head").classList.add("headscroll")
  //document.querySelector(".logoimg").style.width = "4em";
//});

window.onscroll = function() {
  if (document.body.scrollTop > 150 || 
    document.documentElement.scrollTop > 150) {
      document.querySelector(".head").classList.add("headscroll");
      document.querySelector(".logoimg").style.width = "4em";
    }
    else{
      document.querySelector(".head").classList.remove("headscroll");
      document.querySelector(".logoimg").style.width = "6em";
    }
}

