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

  if (contentLanguage === "RU") {
    $("#footerPartial").append(rusNode);
  } else if (contentLanguage === "ENG") {
    $("#footerPartial").append(engNode);
  } else if (contentLanguage === "AZ") {
    $("#footerPartial").append(azNode);
  }
};

document.addEventListener("change", () => {
  if (event.target.value === "RU") {
    $("#footerPartial").empty();
    addFooter(contentLanguage);
  } else if (event.target.value === "ENG") {
    $("#footerPartial").empty();
    addFooter(contentLanguage);
  } else if (event.target.value === "AZ") {
    $("#footerPartial").empty();
    addFooter(contentLanguage);
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
