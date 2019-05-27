const teamDivEng = document.getElementById('teamDivEng');
const teamDivRus = document.getElementById('teamDivRus');
const teamDivAz  = document.getElementById('teamDivAz');
const srcs = ["https://s3.amazonaws.com/andop.org/andop_komanda/2.Emil.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/3.Elmira.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/4.Ilgara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/8.Lala.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/7.Esmer.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/5.Shumara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/6.Nigar.jpg"];
const names = ['DR. ЭМИЛЬ ХИДАЯТЛИ','DR. ЭЛЬМИРА МАХМУДОВА','DR. ИЛЬГАМА МАМЕДОВА','DR. ЛАЛА ГУСЕЙНОВА ','DR. ЭСМЕР КЕРИМЛИ','DR. ШУМАРА ГАРАДЖАЕВА','DR. НИГЯР АЛИЕВА']
const modals = ['modalA','modalB','modalC','modalD','modalE','modalF','modalG'];
const modalsRus = ['modala','modalb','modalc','modald','modale','modalf','modalg'];
const modalsAz = ['modalH','modalJ','modalK','modalL','modalM','modalN','modalV'];
const allPosts =[]; 
const allPostsAz =[];
const allPostsRus =[];
  
  

    
  </div>
</div>
  
  
    const card1 = (name,url,reg)=>{
		return `<div class="card" style="width: 26%">
				    <img src=`+ url +` class="card-img-top" alt="...">
				    <div class="card-body">
          			    <a href="/" class="card-link btn btn-sm btn-primary"> Подробнее </button>
                        <a href="/" class="card-link btn btn-sm btn-danger">`+reg+` </a>
			        </div>
			    </div>`
		}
		
	for(let i=0;i<7;i++){
// 		allPosts.push(card1(names[i],srcs[i],modals[i]))
	    teamDivEng.innerHTML+=card1(names[i],srcs[i],'Registration')

	}
	for(let i=0;i<7;i++){
	   // allPostsRus.push(card1(names[i],srcs[i],modals[i]))
	    teamDivRus.innerHTML+=card1(names[i],srcs[i],'Регистрация')
	}
	for(let i=0;i<7;i++){
	   // allPostsAz.push(card1(names[i],srcs[i],modals[i]))
	    teamDivAz.innerHTML+=card1(names[i],srcs[i],'Registrasia')
	}
			 // teamDivRus.innerHTML=allPostsRus	  
			 // teamDivEng.innerHTML=allPosts
			 // teamDivAz.innerHTML=allPostsAz
			  
			  
			  
			  
