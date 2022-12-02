// Header

let appHeader = `



    <nav class="navbar navbar-expand-sm navbar-dark  " id="back-color">
        <div class="container flex-start">
            <a class="navbar-brand" href="home.html">
                <img src="image/logos/logo1.webp" alt="Avatar Logo" style="width:65px;border-radius: 50%;"> 
            </a>

            <button class="navbar-toggler d-lg-none" type="button" style="color: aliceblue;" data-bs-toggle="collapse"data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <!--Add index.html-->
                    <li class="nav-item">
                        <a class="nav-link  text-light" href="home.html"><b>HOME</b></a>
                    </li>
                    <!--Add index.html-->
                    <li class="nav-item">
                        <a class="nav-link text-light" href="academics.html"><b>ACADEMICS</b></a>
                    </li>

                    <!--Add index.html-->
                    <li class="nav-item">
                        <a class="nav-link text-light" href="faculty.html"><b>FACULTY</b></a>
                    </li>

                    <!--Add index.html-->
                    <li class="nav-item">
                        <a class="nav-link text-light" href="event.html"><b>EVENTS</b></a>
                    </li>
                    <!--Add index.html-->
                    <li class="nav-item">
                        <a class="nav-link text-light" href="download.html"><b>DOWNLOAD</b></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-light" href="about.html"><b>ABOUT</b></a>
                    </li>
                </ul>

                <div class="top-header hidden-xs" style="padding:0px">
                  <a class="nav-link text-light" href="signup.html" target="_blank">
                  <b>SIGN UP</b></a>
                  <a class="nav-link text-light" href="signin.html" target="_self">
                  <b>SIGN IN</b></a>
                <hr >
                    <form action="/action_page.php" style="padding-top:0px">
                        <input type="text" id="username" name="username">
                        <input type="submit" value="Search">
                    </form>

                </div>
    </nav>
`;
document.getElementById("header").innerHTML = appHeader;

//  Footer

let appFooter = ` 

<div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-6 footer-links">
                    <h3>Quick Links</h3><hr>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 footer-link text-start">
                            <h4>Academics</h4>
                            <ul>
                                <li> <a href="phd.html"><h6>Ph.D</h6></a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="mca.html">MCA</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="pgdca.html">PGDCA</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="aiml.html">M.sc AI & ML</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="aimld.html">M.Sc AI & ML & D</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="msccs.html">5 Years Integrated M.Sc-CS</a></li>
                                <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">M.Sc AI & ML & D</a></li> -->
                            </ul>
                        </div>

                        <div class="col-lg-6 col-md-6 footer-links text-start">
                            <h4>Download</h4>
                            <ul>
                            <li><i class="bx bx-chevron-right"></i> <a
                            href="https://www1.gujaratuniversity.ac.in/custom/student/syllabus">Syllabus</a>
                            </li>
                            </ul>
                            <h4>Faculties</h4>
                            <ul>
                            <li><i class="bx bx-chevron-right"></i> <a
                                        href="faculty.html">Faculties</a>
                            </li>
                            </ul>
                        </div>

                    
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 footer-links">
                    <h3>CONTACT US</h3><hr>
                    <div class="tdrow">
                        <img src="image/logos/imap.webp" height="20px">|
                        Gujarat University, Near Ambedkar Gate, University Area, Ahmedabad, Gujarat 380009
                    </div>
                    <div class="tdrow">📞| 09727797105</div>
                    <div class="tdrow">📧| admissions.dcs@gmail.com</div>
                    <hr>
                    <div class="row">
                        <table>
                            <tr>
                                <td><a rel="noreferrer"
                                        href="https://www.facebook.com/M-Sc-Artificial-Intelligence-Machine-Learning-at-Rollwala-GU-654124395030598/"
                                        target="_blank"><img class="nav-img" src="image/logos/flogo.png"></a>
                                </td>
                                <td><a rel="noreferrer"
                                        href="https://www.instagram.com/msc_computerscience_gu/?next=%2F"
                                        target="_blank"><img class="nav-img" src="image/logos/insta.png"></a>
                                </td>
                                <td>
                                    <a rel="noreferrer"
                                        href="https://www.google.com/maps/place/Department+of+Computer+Science,+Maharshi+Pingal+-+School+of+Advanced+Computing+and+Information+Technology/@23.0362486,72.545091,19.77z/data=!4m5!3m4!1s0x395e859c09adf79f:0xe1d87bc33ed48fe7!8m2!3d23.0360673!4d72.5452956"
                                        target="_blank"><img class="nav-img" src="image/logos/imap.webp"></a>
                            </tr>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
`;
document.getElementById("footer").innerHTML = appFooter;



// PIE CHART  (> home)
var ctxD = document.getElementById("doughnutChart").getContext("2d");
var myLineChart = new Chart(ctxD, {
  type: "doughnut",
  data: {
    labels: [
      "Computer Science",
      "MCA",
      "PGDCSA",
      "M.Sc AI & ML",
      "M.Sc AI & ML & Defence",
      "Integrated M.Sc(computer science)",
    ],
    datasets: [
      {
        data: [40, 49, 44, 24, 15, 15],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#fa8072",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#f6a298",
        ],
      },
    ],
  },
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


//scroll up button

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
