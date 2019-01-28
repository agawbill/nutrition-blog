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
          <p style="display:inline; color: white!important;"><a style='color: white!important;' href='/contact.html'><span id="contactUs"></span></a></p>
          <select id="languageSelect" style="color:white; margin-left:5px; background-color:rgb(73,86,120); border:none; width:50px; height:100%;">
          <option id="ru">RU</option> <option id="az">AZ</option> <option id="eng">ENG</option>
          </select>
      </div>
  </div>

 <a href='../index.html'> <img style="margin-top:10px; width: 40vh;" class="mx-auto d-block" src="https://s3.amazonaws.com/andop.org/logo.jpg"> </a>
        <br>

    <div id="navContainer" style='width:100%;' class="container-fluid">


    </div>
       <div class='container-fluid'>
  `;

  var languageSelect2 = document.getElementById("languageSelect");

  if (contentLanguage !== undefined) {
    if (contentLanguage == "RU") {
      languageSelect2.selectedIndex = 0;
    } else if (contentLanguage == "ENG") {
      languageSelect2.selectedIndex = 2;
    } else if (contentLanguage == "AZ") {
      languageSelect2.selectedIndex = 1;
    }
  }
});
