//PACKAGE
const items = document.querySelectorAll("[data-target]"); //featured-popular-new-added
const contents = document.querySelectorAll("[content]"); //content of each item

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    const target = document.querySelector(item.dataset.target);

    contents.forEach((content) => {
      content.classList.remove("active");
    }); //remove from featured
    target.classList.add("active");
  });
});

//////////////////////////////////////////////////
const pop = document.querySelector("#pop");
function openPop() {
  pop.classList.add("pop-open");
  // document.body.style.opacity = "0.5";
  // document.getElementById("pop").style.opacity = "1";
}
function closePop() {
  pop.classList.remove("pop-open");
}

//PRICE
const dropDowns = document.querySelectorAll(".drop-down");
dropDowns.forEach((dropDown) => {
  const select = dropDown.querySelector(".select");
  const menu = dropDown.querySelector(".menu");
  const options = menu.querySelectorAll("li");
  const selected = dropDown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML;
      select.classList.remove("select-clicked");
      menu.classList.remove("menu-open");

      options.forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

/////////////////////////////////////////
//CONTROL-CATEGORY

document.addEventListener("DOMContentLoaded", function () {
  const sliderInner = document.querySelector(".slider-inner");
  const sliderInner2 = document.querySelector(".slider-inner2");
  const scrollSpeed = 10;
  let scrollPosition = 0;

  function scrollUp() {
    scrollPosition -= scrollSpeed;
    sliderInner.style.transform = `translateY(${scrollPosition}px)`;
    sliderInner2.style.transform = `translateY(${scrollPosition}px)`;

    if (scrollPosition <= -sliderInner.scrollHeight) {
      scrollPosition = 0;
      sliderInner.style.transition = "none";
      sliderInner.style.transform = `translateY(${scrollPosition}px)`;
      sliderInner2.style.transition = "none";
      sliderInner2.style.transform = `translateY(${scrollPosition}px)`;

      setTimeout(() => {
        sliderInner.style.transition = "";
        sliderInner2.style.transition = "";
      }, 0);
    }
  }

  setInterval(scrollUp, 50);
});

///////////////////////////////////////////////////////////////////////////////////////////////
//ANIMATION

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: false, // default
  live: false,
  scrollContainer: null, // default
});
wow.init();
