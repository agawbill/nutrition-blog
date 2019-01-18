var footerPartial = document.getElementById("footerPartial");

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
  }
});
