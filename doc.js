//este codigo se ejecuta hasta que haya cargado toda la pagina
window.onload = function(){
	
	var btnCv=document.getElementById("reminder");
	btnCv.addEventListener("click",scrollAutomatico);

	
	var btnEdu= document.getElementById("edu_contenido");
	btnEdu.addEventListener("click",scrollAut2);

	var btnProyectos=document.getElementById("proyectos");
	btnProyectos.addEventListener("click",scrollAut3);

	function scrollAutomatico(seccion) {
		console.log(seccion);
		window.scrollTo(0,0);

	}
	function scrollAut2(seccion){
		window.scrollTo(0,1500);
	}
};