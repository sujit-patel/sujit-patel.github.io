const rImg = document.querySelector(".resumeImg");
rImg.addEventListener('click', function () {
  const pdfUrl = 'Assets/Sujitpatel_Resume.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = pdfUrl;
  linkPdf.download = "Sujitpatel_Resume.pdf";
  linkPdf.click();
});


var rBtn = document.querySelector(".resume");
rBtn.addEventListener('click', function (event) {
  event.preventDefault();

  var pdfUrl = 'Assets/Sujitpatel_Resume.pdf';

  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Sujitpatel_Resume.pdf';
  link.click();
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

// loader 
window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1000);
};


// Data Send On mail 
emailjs.init("xsOKdel-g7ZiRWFoR");

// Function to handle form submission
function sendEmail(event) {
  event.preventDefault(); 

  const form = event.target; 
  const formData = new FormData(form); 

  // Create data object with form values
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('Message')
  };

  // Send email using EmailJS
  emailjs.send("service_dwjgkn1", "template_k6nkzvm", data)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text); 
      alert('Email sent successfully!'); 
      form.reset(); 
    })
    .catch(error => {
      console.log('FAILED...', error); 
      alert('Failed to send email. Please try again later.'); 
    });
}
