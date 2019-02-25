var headerPartial = document.getElementById("headerPartial");

document.addEventListener("DOMContentLoaded", () => {
  headerPartial.innerHTML = `
  <div id="header_menu_blue">
      <div class="float-right right-margin">
          <a href='https://twitter.com/ANDOP12'> <img width="22px" src="https://s3.amazonaws.com/andop.org/icons/tviter.png"> </a>
          <a href='https://www.facebook.com/andib.aze/'> <img width="22px" src="https://s3.amazonaws.com/andop.org/icons/facebook.png"> </a>
          <a href='https://www.youtube.com/channel/UC40q4m7-uv9pxDbP4qMpDsg?view_as=subscriber'> <img width="22px" src="https://s3.amazonaws.com/andop.org/icons/youyube.png"> </a>
          <a href='https://www.linkedin.com/company/andop/'> <img width="22px" src="https://s3.amazonaws.com/andop.org/icons/linki.png"> </a>
          <a href='https://www.instagram.com/sstm_baku/'> <img width="22px" src="https://s3.amazonaws.com/andop.org/icons/infta.png"> </a>
          <p style="display:inline; color: white!important;"><a style='color: white!important;' href='/contact.html'><span id="contactUs"></span></a></p>
          <select id="languageSelect" style="color:white; margin-left:10px; background-color:rgb(73,86,120); border:none; width:50px; height:100%;">
          <option id="ru">RU</option> <option id="az">AZ</option> <option id="eng">ENG</option>
          </select>
      </div>
  </div>

 <a href='../index.html'> <img style="margin-top:10px; width: 40vh;" class="mx-auto d-block" src="https://s3.amazonaws.com/andop.org/logo.jpg"> </a>
        <br>

    <div id="navContainer" style='width:100%;' class="container-fluid">


    </div>
      
  `;

  var languageSelect2 = document.getElementById("languageSelect");

  if (contentLanguage !== undefined) {
    if (contentLanguage == "RU") {
      languageSelect2.selectedIndex = 0;
      $('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+RU.jpg");
    } else if (contentLanguage == "ENG") {
      languageSelect2.selectedIndex = 2;
      				$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+EN.jpg");
    } else if (contentLanguage == "AZ") {
      languageSelect2.selectedIndex = 1;
				$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+AZ.jpg");

    }
  }
});
