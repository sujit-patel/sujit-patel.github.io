const rImg = document.querySelector(".resumeImg");
rImg.addEventListener('click', function () {
  const pdfUrl = 'Assets/Sujitpatel_Resume.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = pdfUrl;
  linkPdf.download = "Sujitpatel_Resume.pdf";
  linkPdf.click();
});

var rBtn = document.querySelector("#resumeLink");
rBtn.addEventListener('click', function () {
  const fileUrl = 'Assets/Sujitpatel_Resume.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = fileUrl;
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


// const video = document.querySelectorAll('#hoverVideo');
// video.forEach((elem)=>{
//   elem.addEventListener('mouseover', function () {
//     this.play();
//   });
//   elem.addEventListener('mouseout', function () {
//     this.pause();
//   });
// });
  
// loader 
window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1000);
};


// Data Send On mail 
(function () {
  emailjs.init("xsOKdel-g7ZiRWFoR");
})();

function sendEmail(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('Message')
  };

  emailjs.send("service_dwjgkn1", "template_k6nkzvm", data)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      form.reset();
    }, function (error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });
}
