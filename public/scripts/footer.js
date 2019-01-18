var footerPartial = document.getElementById("footerPartial");

document.addEventListener("click", () => {
  if (event.target.value === "RU") {
    footerPartial.innerHTML = `
  <div id="footer_menu_blue">
      WWW.ANDOP.ORG © 2019, Все права защищены
  </div>
  `;
  } else if (event.target.value === "ENG") {
    footerPartial.innerHTML = `
<div id="footer_menu_blue">
    WWW.ANDOP.ORG © 2019, All Rights Reserved
</div>
`;
  } else if (event.target.value === "AZ") {
    footerPartial.innerHTML = `
    <div id="footer_menu_blue">
    WWW.ANDOP.ORG © 2019, Bütün hüquqlar qorunur
    </div>
    `;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (contentLanguage === "RU") {
    footerPartial.innerHTML = `
  <div id="footer_menu_blue">
      WWW.ANDOP.ORG © 2019, Все права защищены
  </div>
  `;
  } else if (contentLanguage === "ENG") {
    footerPartial.innerHTML = `
<div id="footer_menu_blue">
    WWW.ANDOP.ORG © 2019, All Rights Reserved
</div>
`;
  } else if (contentLanguage === "AZ") {
    footerPartial.innerHTML = `
  <div id="footer_menu_blue">
  WWW.ANDOP.ORG © 2019, Bütün hüquqlar qorunur
  </div>
  `;
  }
});
