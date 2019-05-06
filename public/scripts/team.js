const teamDivEng = document.getElementById('teamDivEng')
		const srcs = ["https://s3.amazonaws.com/andop.org/andop_komanda/2.Emil.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/3.Elmira.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/4.Ilgara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/8.Lala.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/7.Esmer.jpg","https://s3.amazonaws.com/andop.org/andop_komanda/5.Shumara.jpg", "https://s3.amazonaws.com/andop.org/andop_komanda/6.Nigar.jpg"];
		const names = ['DR. ЭМИЛЬ ХИДАЯТЛИ','DR. ЭЛЬМИРА МАХМУДОВА','DR. ИЛЬГАМА МАМЕДОВА','DR. ЛАЛА ГУСЕЙНОВА ','DR. ЭСМЕР КЕРИМЛИ','DR. ШУМАРА ГАРАДЖАЕВА','DR. НИГЯР АЛИЕВА']
		const allPosts =[]; 
		const card1 = (name,url)=>{
			  return `<div class="card" style="width: 26%;">
				        <img src=`+ url +` class="card-img-top" alt="...">
				        <div class="card-body">
			          <h5 class="card-title">`+name+`</h5>
			          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			          <a href="#" class="btn btn-primary">Go somewhere</a>
			        </div>
			    </div>
			  `  
			}

			for(let i=0;i<7;i++){
			  allPosts.push(card1(names[i],srcs[i]))
			}
			  teamDivEng.innerHTML=allPosts
			  
		const teamDivRus = document.getElementById('teamDivRus')
 		const allPostsRus =[]; 
			for(let i=0;i<7;i++){
			  allPostsRus.push(card1(names[i],srcs[i]))
			}
			  teamDivRus.innerHTML=allPostsRus	  