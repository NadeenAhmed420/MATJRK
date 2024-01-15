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

///////////////////////////////////////////////////////////////////////////////////////////////
//ANIMATION

const observerR = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show-R");
    }
  });
});
const hiddenElementR = document.querySelectorAll(".hidden-R");
hiddenElementR.forEach((el) => observerR.observe(el));

/////////////////////////////////////////////////////////////////////

const observerL = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show-L");
    }
  });
});
const hiddenElementL = document.querySelectorAll(".hidden-L");
hiddenElementL.forEach((el) => observerL.observe(el));

/////////////////////////////////////////////////////////////////////

const observerC = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show-C");
    }
  });
});
const hiddenElementC = document.querySelectorAll(".hidden-C");
hiddenElementC.forEach((el) => observerC.observe(el));

////////////////////////////////////////////////////

const observerOPA = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show-OPA");
    }
  });
});
const hiddenElementOPA = document.querySelectorAll(".hidden-OPA");
hiddenElementOPA.forEach((el) => observerOPA.observe(el));

////////////////////////////////////////////////

const observerRO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show-RO");
    }
  });
});
const hiddenElementRO = document.querySelectorAll(".hidden-RO");
hiddenElementRO.forEach((el) => observerRO.observe(el));
//////////////////////////////////////////////////////

/////////////////////////////////////////
//CONTROL-CATEGORY

document.addEventListener("DOMContentLoaded", function () {
  const sliderInner = document.querySelector(".slider-inner");
  const sliderInner2 = document.querySelector(".slider-inner2");
  const scrollSpeed = 10; // Adjust the scroll speed as needed
  let scrollPosition = 0;

  function scrollUp() {
    // Incrementally move the slider upwards
    scrollPosition -= scrollSpeed;
    sliderInner.style.transform = `translateY(${scrollPosition}px)`;
    sliderInner2.style.transform = `translateY(${scrollPosition}px)`;

    // Check if it has reached the end, then reset position
    if (scrollPosition <= -sliderInner.scrollHeight) {
      scrollPosition = 0;
      sliderInner.style.transition = "none"; // Disable transition during the reset
      sliderInner.style.transform = `translateY(${scrollPosition}px)`;
      sliderInner2.style.transition = "none"; // Disable transition during the reset
      sliderInner2.style.transform = `translateY(${scrollPosition}px)`;

      // Enable transition after the reset
      setTimeout(() => {
        sliderInner.style.transition = "";
        sliderInner2.style.transition = "";
      }, 0);
    }
  }

  // Set the interval for scrolling
  setInterval(scrollUp, 50); // Scroll every 50 milliseconds
});
