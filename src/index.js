import "./style/style.css";
import $ from "jquery";
import moment from "moment";
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './script/component/card-data.js';
import './script/view/main.js'


var sidenavs = document.querySelectorAll('.sidenav')
for (var i = 0; i < sidenavs.length; i++){
	M.Sidenav.init(sidenavs[i]);
}

var parallax = document.querySelectorAll('.parallax')
for (var i = 0; i < parallax.length; i++){
	M.Parallax.init(parallax[i]);
}

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>400){
			$('nav').removeClass('transparent');
			$('nav').addClass('red darken-4');
		}else{
			$('nav').removeClass('red darken-4');
			$('nav').addClass('transparent');
		}
	});
});