var footerPartial = document.getElementById("footerPartial");

document.addEventListener("DOMContentLoaded", () => {
  footerPartial.innerHTML = `
  <div style='width:90%; padding:5%;'>
    <div class='row'>
      <div class='col-md-3 footer_divider'>
        <div>
          <img width='40px' src='logoPNG.png' class='float-left'>
          <h4 class='float-left blueHeading'>ACADEMY OF <br> NUTRITION AND DIET  </h4>
        </div>
      </div>
      <div class='col-md-2 footer_divider'>
        <h4>МЕНЮ</h4> <br>
        <ul style='list-style-type: none; margin: 0; padding: 0;'>
          <li><a class="nav-link" href="/about.html">Об Академии <span class="sr-only">(current)</span></a></li>
          </li><a class="nav-link" href="/management.html">Наше Руководство</a> </li>
          </li><a class="nav-link" href="/projects.html">Наши Проекты</a> </li>
         </li> <a class="nav-link" href="/trainings.html">Наши Тренинги</a></li>
         </li> <a class="nav-link" href="/sports.html">Запись на Тренинги</a> </li>
        </ul>
      </div>
      <div class='col-md-3 footer_divider'>
        <h4>ОСТАВАЙСЯ НА СВЯЗИ</h4>
        <ul style='list-style-type: none; margin: 0; padding: 0;'>
          <li><a class="nav-link" href="/about.html">Facebook <span class="sr-only">(current)</span></a></li>
          </li><a class="nav-link" href="/management.html">Twitter</a> </li>
          </li><a class="nav-link" href="/projects.html">Instagram</a> </li>
         </li> <a class="nav-link" href="/trainings.html">Youtube</a></li>
        </ul>
       </div>
      <div class='col-md-3'>
        <h4>КОНТАКТЫ</h4>
         <pre>
         Адрес: Азербайджан,Баку,
         ул Самеда Вургуна, 43.
         World Business Center(20 этаж).
         Teлефон: (+99412) 5974810
         Whatsapp: (+99412) 6610933
         E-mail:  info@andib.az
         </pre>
      </div>
    </div>
  </div>
  `;
});
