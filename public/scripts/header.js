var headerPartial = document.getElementById("headerPartial");

document.addEventListener("DOMContentLoaded", () => {
  headerPartial.innerHTML = `
  <div id="header_menu_blue">
      <div class="float-right">
       <a href='https://twitter.com/ANDOP12'> <img width="22px" src="https://s3.amazonaws.com/andop.org/social/twiter.png"> </a>
          <a href='https://www.facebook.com/andib.aze/'> <img width="22px" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/facebook-512.png"> </a>
          <a href='https://www.youtube.com/channel/UC40q4m7-uv9pxDbP4qMpDsg?view_as=subscriber'> <img width="22px" src="https://s3.amazonaws.com/andop.org/social/youtube-logo.png"> </a>
          <a href='https://www.linkedin.com/company/andop/'> <img width="22px" src="https://s3.amazonaws.com/andop.org/social/ln-logo.png"> </a>
          <a href='https://www.instagram.com/sstm_baku/'> <img width="22px" src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png"> </a>
          <p style="display:inline; color: white!important;"><a style='color: white!important;' href='/contact.html'>КОНТАКТЫ</a></p>
          <select style="color:white; margin-left:5px; background-color:rgb(73,86,120); border:none; width:50px; height:100%;">
          <option>RU</option> <option>AZ</option> <option>ENG</option>
          </select>
      </div>
  </div>

 <a href='index.html'> <img style="margin-top:10px; width: 40vh;" class="mx-auto d-block" src="https://s3.amazonaws.com/andop.org/logo.jpg"> </a>
        <br>

    <div style='width:100%;' class="container-fluid">

        <nav style='font-size:16px;' class="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul style='font-size:19px;' class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="static_pages/about.html"> ANDOP <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="static_pages/team.html">Наша Команда</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="static_pages/projects.html">Наши Проекты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="static_pages/trainings.html">Наши Тренинги</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="static_pages/membership.html">Членство</a>
              </li>
            </ul>
          </div>
      </nav>
      <hr>
      <p>
    </div>
  `;
});
