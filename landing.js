export function controlClickAndScrollForNav() {
  const navLinks = document.querySelectorAll(".nav-ul a");
  const scrollSection = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    scrollSection.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

export function detectedSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".sections-fade-in").forEach((el) => {
    observer.observe(el);
  });
}

export function messageAlert() {
  const notWorking = document.getElementById("notWorking");
  const notWorking2 = document.getElementById("notWorking2");
  const modalAlert = document.getElementById("modalAlert");
  const acceptButton = document.getElementById("acceptButton");

  notWorking.addEventListener("click", function (e) {
    e.preventDefault();
    modalAlert.classList.add("show");
    document.body.classList.add("noScroll");
  });

  notWorking2.addEventListener("click", function (e) {
    e.preventDefault();
    modalAlert.classList.add("show");
    document.body.classList.add("noScroll");
  });

  acceptButton.addEventListener("click", function (e) {
    modalAlert.classList.remove("show");
    document.body.classList.remove("noScroll");
  });
}
