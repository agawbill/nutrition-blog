$( document ).ready(function(){
			if	($('#languageSelect').val() == 'RU') {
				$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+RU.jpg");
			} else if ( $('#languageSelect').val() == 'AZ') {
				$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+AZ.jpg");
			} else {
				$('#big_banner').attr("src","https://s3-eu-west-1.amazonaws.com/andop.online/images/BANNER+ENG.jpg");
			}
		});