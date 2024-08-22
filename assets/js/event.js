const registerBtn = document.querySelector(".btn-register");
registerBtn.addEventListener("click", (e) => {
  window.location.href = "register.html";
});
const loginBtn = document.querySelector(".btn-login");
loginBtn.addEventListener("click", (e) => {
  window.location.href = "login.html";
});

document.querySelectorAll(".nav-link").forEach((link) => {

  let timeoutId;

  link.addEventListener("mouseenter", (e) => {
    e.preventDefault();


    link.classList.add("show");
    const menu = link.nextElementSibling;

    if (menu && menu.classList.contains("dropdown-menu")) {
      menu.classList.add("show");
    }


    clearTimeout(timeoutId);
  });

  link.addEventListener("mouseleave", (e) => {
    e.preventDefault();


    timeoutId = setTimeout(() => {
      link.classList.remove("show");
      const menu = link.nextElementSibling;

      if (menu && menu.classList.contains("dropdown-menu")) {
        menu.classList.remove("show");
      }
    }, 100);
  });


  const menu = link.nextElementSibling;

  if (menu && menu.classList.contains("dropdown-menu")) {
    menu.addEventListener("mouseenter", (e) => {
      clearTimeout(timeoutId);
    });

    menu.addEventListener("mouseleave", (e) => {

      timeoutId = setTimeout(() => {
        link.classList.remove("show");
        menu.classList.remove("show");
      }, 100);
    });
  }

});

document.querySelectorAll(".down-item").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = icon.parentElement.nextElementSibling;
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    }
  });
});

const closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener("click", () => {
  closeSidebar();
});

const openLeftSide = document.querySelector(".btn-left-side");
openLeftSide.addEventListener("click", () => {
  openSidebar();
});

document.querySelector(".overlay").addEventListener("click", () => {
  closeSidebar();
});

function closeSidebar() {
  document.querySelector(".sidebar").classList.add("displayNone");
  document.querySelector(".overlay").style.display = "none";
  document.body.classList.remove("sidebar-open");
}

function openSidebar() {
  document.querySelector(".sidebar").classList.remove("displayNone");
  document.querySelector(".overlay").style.display = "block";
  document.body.classList.add("sidebar-open");
}



//slide nav 1 sections specialities
$(document).ready(function () {
  $(".specialities-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true, // Enable navigation
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    navContainer: ".slide-nav-1", // Specify the container for the navigation buttons
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      },
      576: {
        items: 2, // 2 items on slightly larger screens
      },
      768: {
        items: 3, // 3 items on medium screens
      },
      992: {
        items: 4, // 4 items on tablets and smaller desktops
      },
      1200: {
        items: 6, // 6 items on large desktops
      },
    },
  });
});
//slide nav 2 sections  Best Doctor
$(document).ready(function () {
  $(".best-doctors-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    navContainer: ".slide-nav-2",
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      },
      576: {
        items: 2, // 2 items on slightly larger screens
      },
      768: {
        items: 3, // 3 items on medium screens
      },
      992: {
        items: 4, // 4 items on tablets and smaller desktops
      },
      1200: {
        items: 4, // 4 items on large desktops
      },
    },
  });
});


// owl carousel
$(document).ready(function () {
  $(".clients-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000, // Set a delay between transitions
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    slideTransition: "linear",
    responsive: {
      0: {
        items: 2, // Number of items on small screens
      },
      500: {
        items: 3, // Number of items on medium screens
      },
      600: {
        items: 4, // Number of items on large screens
      },
      800: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
});



