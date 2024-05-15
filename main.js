function combo() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// combo();

// Resume Download link 
const rBtn = document.querySelector("#dfile");
rBtn.addEventListener('click', function () {
  const pdfUrl = 'Assets/Sujitpatel_Resume.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = pdfUrl;
  linkPdf.download = "Sujitpatel_Resume.pdf";
  linkPdf.click();

});

const rImg = document.querySelector(".resumeImg");
rImg.addEventListener('click', function () {
  const pdfUrl = 'Assets/Sujitpatel_Resume.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = pdfUrl;
  linkPdf.download = "Sujitpatel_Resume.pdf";
  linkPdf.click();
});

function gotogithub() {
  document.getElementById("github").click();
}

function sidebarHandler() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hidemenu");
    const sidebar = document.querySelector(".aside");
    const closeBtn = document.querySelector(".close");
    const links = document.querySelectorAll(".aside nav .list ul li a");
    menuIcon.addEventListener("click", function () {
      console.log("Menu clicked");
      if (sidebar.style.left === "-100%" || sidebar.style.left === "") {
        sidebar.style.left = "0";
      } else {
        sidebar.style.left = "-100%";
      }
    });
    closeBtn.addEventListener("click", function () {
      console.log("Close clicked");
      sidebar.style.left = "-100%";
    });
    links.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Link clicked");
        sidebar.style.left = "-100%";
      });
    });
  });
}
sidebarHandler();


const video = document.getElementById('hoverVideo');
video.addEventListener('mouseover', function () {
  this.play();
});
video.addEventListener('mouseout', function () {
  this.pause();
});
