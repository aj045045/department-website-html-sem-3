// Header

let appHeader = `
<nav class="navbar navbar-expand-sm navbar-dark  " id="back-color">
<div class="container flex-start"><br>

            <a class="navbar-brand" href="home.html"> <img src="image/logos/logo1.webp" alt="Avatar Logo" style="width:90px;" class="round"> </a>
            <button class="navbar-toggler d-lg-none" type="button" style="color: aliceblue;" data-bs-toggle="collapse"   data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
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

                <div class="top-header hidden-xs" >
                <div class="container">
                    
                            
                            <ul class="top-social" >
                            <li>
                            </div>
                            <form action="/action_page.php"  >
                            <input type="text" id="username" name="username" >
                            <input type="submit" value="Search">
                            </form>
                                <a rel="noreferrer" href="https://www.facebook.com/M-Sc-Artificial-Intelligence-Machine-Learning-at-Rollwala-GU-654124395030598/" target="_blank"><img src="image/logos/flogo.png" style="height:30px;width:30px;padding:5px; background:cadetblue;border-radius:50%"></a>
                                <a rel="noreferrer" href="https://www.instagram.com/gujarat_university/" target="_blank" ><img src="image/logos/insta.png" style="border-radius:50%; padding:3px;width:30px; background:cadetblue; "></a>
                                <a rel="noreferrer" href="https://www.google.com/maps/place/Department+of+Computer+Science,+Maharshi+Pingal+-+School+of+Advanced+Computing+and+Information+Technology/@23.0362486,72.545091,19.77z/data=!4m5!3m4!1s0x395e859c09adf79f:0xe1d87bc33ed48fe7!8m2!3d23.0360673!4d72.5452956" target="_blank" ><img src="image/logos/imap.webp" style="height:33px;width:30px;padding:5px; background:cadetblue;border-radius:50%"></a>
                                <a class="nav-link text-light" href="signin.html" target="_blank"><b>SIGN IN</b></a><br>    
                                
                                </li>
                                </ul>
                                </div>
                                </nav>

`;
document.getElementById("header").innerHTML = appHeader;

//  Footer

let appFooter = ` 
<div class="footer footer-expand-sm p-top-5 flex-end">
<h4 class="h4"><span class="badge bg-primary">CONTACT US</span></h4>
    <hr style="height:3px; color:white;">
<table >
    <tr>
        <td><img src="image/logos/imap.webp" height="20px">|</td>
    <td> Gujarat University, near Ambedkar Gate, University Area, Ahmedabad, Gujarat 380009</td>
    </tr>
    <tr>
        <td>📞|</td>
        <td style="text-align:left"> 09727797105</td>
    </tr>
    <tr>
        <td>📧| </td>
        <td style="text-align:left" > admissions.dcs@gmail.com</td>
    </tr>
</table>
<br><br>
<!--<h4 class="h4"><span class="badge pt-2 bg-primary">CONNECT WITH US</span></h4>
<hr style="height:3px; color:white;">

 Add font awesome icons 
<a href="https://www.facebook.com/M-Sc-Artificial-Intelligence-Machine-Learning-at-Rollwala-GU-654124395030598/" class="fa fa-facebook"></a>
<a href="https://instagram.com/msc_computerscience_gu?igshid=YmMyMTA2M2Y=" class="fa fa-instagram"></a>
<a href="https://www.google.com/maps/place/Department+of+Computer+Science,+Maharshi+Pingal+-+School+of+Advanced+Computing+and+Information+Technology/@23.0362486,72.545091,19.77z/data=!4m5!3m4!1s0x395e859c09adf79f:0xe1d87bc33ed48fe7!8m2!3d23.0360673!4d72.5452956" ><img src="image/logos/imap.webp" style="height:33px;width:30px;padding:5px; background:cadetblue;border-radius:50%"></a>
-->
</div>
`;
document.getElementById("footer").innerHTML = appFooter;

//Over View
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("buttonreadmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// PIE CHART  (> home)
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["Computer Science", "MCA", "PGDCSA", "M.Sc AI & ML", "M.Sc AI & ML & Defence", "Integrated M.Sc(computer science)"],
    datasets: [{
      data: [40, 49, 44, 24, 15, 15],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#fa8072"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#f6a298"]
    }]
  },
  options: {
    responsive: true
  }
});
