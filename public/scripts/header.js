var headerPartial = document.getElementById("headerPartial");

document.addEventListener("DOMContentLoaded", () => {
  headerPartial.innerHTML = `
  <div id="header_menu_blue">
      <div class="float-right"> <p style="display:inline; color: white!important;"><a style='color: white!important;' href='/contact.html'>КОНТАКТЫ</a></p>
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
                <a class="nav-link" href="/about.html">Об Академии <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/management.html">Наше Руководство</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects.html">Наши Проекты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/trainings.html">Наши Тренинги</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sports.html">Запись на Тренинги</a>
              </li>
            </ul>
          </div>
      </nav>
      <hr>
      <p>
    </div>
  `;
});
