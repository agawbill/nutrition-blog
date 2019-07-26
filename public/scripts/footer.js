var footerPartial = document.getElementById("footerPartial");

const addFooter = contentLanguage => {
  const engNode = `<div id="footer_menu_blue">
      WWW.ANDOP.ORG © 2019, All Rights Reserved
  </div>`;

  const rusNode = `<div id="footer_menu_blue">
        WWW.ANDOP.ORG © 2019, Все права защищены
    </div>`;

  const azNode = `<div id="footer_menu_blue">
    WWW.ANDOP.ORG © 2019, Bütün hüquqlar qorunur
    </div>`;

  const menuEng = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul style='font-size:19px;' class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link " href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/team.html">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/projects.html">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/trainings.html">Trainings</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/membership.html">Membership</a>
                  </li>
                </ul>
              </div>
          </nav>
          <hr>
          <p>`;
  const menuAz = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul style='font-size:19px;' class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/team.html">Komandamiz</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/projects.html">Proyektlərimiz</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/trainings.html">Treninglər</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/membership.html">Üzvlük</a>
                  </li>
                </ul>
              </div>
          </nav>
          <hr>
          <p>`;
  const menuRus = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul style='font-size:19px;' class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link  " href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/team.html">Наша Команда</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/projects.html">Наши Проекты</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/trainings.html">Наши Тренинги</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  " href="/membership.html">Членство</a>
                  </li>
                </ul>
              </div>
          </nav>
          <hr>
          <p>`;
  if (contentLanguage === "RU") {
    $("#footerPartial").append(rusNode);
    $("#navContainer").append(menuRus);
  } else if (contentLanguage === "ENG") {
    $("#footerPartial").append(engNode);
    $("#navContainer").append(menuEng);
  } else if (contentLanguage === "AZ") {
    $("#footerPartial").append(azNode);
    $("#navContainer").append(menuAz);
  }
};

const addContact = contentLanguage => {
  const contactEng = `CONTACT US`;
  const contactAz = `Elaqə`;
  const contactRus = `КОНТАКТЫ`;
  if (contentLanguage === "RU") {
    $("#contactUs").append(contactRus);
  } else if (contentLanguage === "ENG") {
    $("#contactUs").append(contactEng);
  } else if (contentLanguage === "AZ") {
    $("#contactUs").append(contactAz.toUpperCase());
  }
};

document.addEventListener("change", event => {
  if (event.target.value === "RU") {
    	$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+RU.jpg");
    $("#footerPartial").empty();
    $("#navContainer").empty();
    $("#contactUs").empty();
    addFooter(contentLanguage);
    addContact(contentLanguage);
  } else if (event.target.value === "ENG") {
    	$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+EN.jpg");
    $("#footerPartial").empty();
    $("#navContainer").empty();
    $("#contactUs").empty();
    addFooter(contentLanguage);
    addContact(contentLanguage);
  } else if (event.target.value === "AZ") {
    	$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+AZ.jpg");
    $("#footerPartial").empty();
    $("#navContainer").empty();
    $("#contactUs").empty();
    addFooter(contentLanguage);
    addContact(contentLanguage);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuEng = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul style='font-size:19px;' class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link  " href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/team.html">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/projects.html">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/trainings.html">Trainings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/membership.html">Membership</a>
                </li>
              </ul>
              <ul style='font-size:19px;' class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href='https://www.facebook.com/andib.aze/'> <img style="width:15px;height:22px;margin-right:6px;"  src='https://s3.amazonaws.com/andop.org/icons/facebook.png'> </a>
                </li>
                <li class="nav-item active">
                    <a href='https://twitter.com/ANDOP12'> <img style="width:22px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/tviter.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.youtube.com/channel/UC40q4m7-uv9pxDbP4qMpDsg?view_as=subscriber'> <img style="width:28px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/youyube.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.linkedin.com/company/andop/'> <img style="width:22px;height:22px; margin-right:7px;"  src='https://s3.amazonaws.com/andop.org/icons/linki.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.instagram.com/sstm_baku/'> <img style="width:22px;height:22px; margin-right:6px;" src='https://s3.amazonaws.com/andop.org/icons/infta.png'> </a>
                </li>
              </ul>
            </div>
        </nav>
        <hr>
        <p>`;
  const menuAz = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul style='font-size:19px;' class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link  " href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/team.html">Komandamiz</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/projects.html">Proyektləri̇mi̇z</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/trainings.html">Treni̇nglər</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/membership.html">Üzvlük</a>
                </li>
              </ul>
                <ul style='font-size:19px;' class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href='https://www.facebook.com/andib.aze/'> <img style="width:15px;height:22px;margin-right:6px;"  src='https://s3.amazonaws.com/andop.org/icons/facebook.png'> </a>
                </li>
                <li class="nav-item active">
                    <a href='https://twitter.com/ANDOP12'> <img style="width:22px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/tviter.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.youtube.com/channel/UC40q4m7-uv9pxDbP4qMpDsg?view_as=subscriber'> <img style="width:28px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/youyube.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.linkedin.com/company/andop/'> <img style="width:22px;height:22px; margin-right:7px;"  src='https://s3.amazonaws.com/andop.org/icons/linki.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.instagram.com/sstm_baku/'> <img style="width:22px;height:22px; margin-right:6px;" src='https://s3.amazonaws.com/andop.org/icons/infta.png'> </a>
                </li>
              </ul>
            </div>
        </nav>
        <hr>
        <p>`;
  const menuRus = `<nav style='font-size:16px;' class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul style='font-size:19px;' class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link  " href="/about.html"> ANDOP <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/team.html">Наша Команда</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/projects.html">Наши Проекты</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/trainings.html">Наши Тренинги</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  " href="/membership.html">Членство</a>
                </li>
              </ul>
               <ul style='font-size:19px;' class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href='https://www.facebook.com/andib.aze/'> <img style="width:15px;height:22px;margin-right:6px;"  src='https://s3.amazonaws.com/andop.org/icons/facebook.png'> </a>
                </li>
                <li class="nav-item active">
                    <a href='https://twitter.com/ANDOP12'> <img style="width:22px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/tviter.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.youtube.com/channel/UC40q4m7-uv9pxDbP4qMpDsg?view_as=subscriber'> <img style="width:28px;height:22px; margin-right:6px;"   src='https://s3.amazonaws.com/andop.org/icons/youyube.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.linkedin.com/company/andop/'> <img style="width:22px;height:22px; margin-right:7px;"  src='https://s3.amazonaws.com/andop.org/icons/linki.png'> </a>
                </li>
                <li class="nav-item">
                  <a href='https://www.instagram.com/sstm_baku/'> <img style="width:22px;height:22px; margin-right:6px;" src='https://s3.amazonaws.com/andop.org/icons/infta.png'> </a>
                </li>
              </ul>
            </div>
        </nav>
        <hr>
        <p>`;

  if (contentLanguage === "RU") {
    footerPartial.innerHTML = `
    <div id="footer_menu_blue">
        WWW.ANDOP.ORG © 2019, Все права защищены
    </div>
    `;
    $("#navContainer").append(menuRus);
    $("#contactUs").append("КОНТАКТЫ");
  } else if (contentLanguage === "ENG") {
    footerPartial.innerHTML = `
    <div id="footer_menu_blue">
        WWW.ANDOP.ORG © 2019, All Rights Reserved
    </div>
    `;
    $("#navContainer").append(menuEng);
    $("#contactUs").append("CONTACT US");
  } else if (contentLanguage === "AZ") {
    footerPartial.innerHTML = `
    <div id="footer_menu_blue">
    WWW.ANDOP.ORG © 2019, Bütün hüquqlar qorunur
    </div>
    `;
    $("#navContainer").append(menuAz);
    $("#contactUs").append("Elaqə".toUpperCase());
  }
});
