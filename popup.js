// VARIABLES

var redirect_page = 'http://site.pt/pages/bloqueado-a-menores';

function getItem(k) {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    return undefined;
  }
}

function setItem(k, v) {
  try {
    return localStorage.setItem(k, v);
  } catch (e) {
    return undefined;
  }
}

function popUp(){

	if (navigator.userAgent.match(/bot|googlebot|crawler|spider|robot|crawling/i)) {
		return true;
	    } else {
	    	    setTimeout(
	    	        function() {
	    	            Custombox.open({
	    	                target: '#age-notice',
	    	                effect: 'blur',
	    	                overlayOpacity: 0.7,
	    	                escKey: false,
	    	                overlayClose: false,
	    	            })
	    	        },
	    	        500
	    	    )

	    	    $('.adulto').on('click', function() { 
	    			setItem('adult', 'true')
	    	    	Custombox.close('#age-notice')
	    			} );

	    	    $('.menor-de-idade').on('click', function() {
	    			setItem('adult', 'false')
	    			redirect();
	    	    } );
	    }
}

function redirect(){
	window.location.replace(redirect_page);
}

$(document).ready(function() {
 
	if (window.location.href != redirect_page){
		if (getItem('adult') == 'false' ) {
			popUp();
		}else if (getItem('adult') == null ){
			popUp();
		}else if (getItem('adult') == 'true'){

		}else{
			popUp();
		}

	}


});
