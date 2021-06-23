const trabajos = ['easytravel', 'emenu', 'encuestas', 'portfolio'];

cargarTrabajos(trabajos);


async function cargarTrabajos (trabajos)
{
	let infoTrabajo = document.querySelector("#trabajos .informacion");
	let url = "";
	trabajos.forEach(t=>{
	  let url = "data/trabajos/".concat(t).concat("/datos.json")
	    fetch(url)
	    .then(response => response.json())
	    .then(data =>{
	    	//console.log(data);
	    	const aside = document.createElement('aside');
	    	aside.setAttribute('id', `modal${t}`);
	    	aside.setAttribute('class', `modal${t}`);
	    	const div = document.createElement('div');
	    	div.setAttribute('class', 'content-modal');
	    	const div2 = document.createElement('div');
	    	const a = document.createElement('a');
	    	//a.setAttribute('href', '#');
	    	a.setAttribute('class', 'close-modal');
	    	a.innerText = 'X';
	    	a.onclick = function(){
				a.parentElement.parentElement.parentElement.style.display="none"
			};
	    	const a2 = document.createElement('a');
	    	a2.setAttribute('href', '#');
	    	a2.setAttribute('class', 'btn-close-modal');
	    	const article = document.createElement('article');
	    	const imagen = document.createElement('img');
	    	imagen.setAttribute('width','50%');
	    	let ruta = 'img/'.concat(t).concat('.png')
	    	imagen.setAttribute('src', ruta);
	    	const institucion = document.createElement('p');
	    	institucion.innerText = `${data.institucion}`;
	    	const taller = document.createElement('p');
	    	taller.innerText = `${data.taller}`;
	    	const proyecto = document.createElement('p');
	    	proyecto.innerText = `${data.proyecto}`;
	    	const descripcion = document.createElement('p');
	    	descripcion.innerText = `${data.descripcion}`;
	    	const participantes = document.createElement('p');
	    	participantes.innerText = `Trabajé con: ${data.participantes}`;
	    	const tecnologias = document.createElement('p');
	    	tecnologias.innerText = `Tecnologias utilizadas: ${data.tecnologias}`;

	    	//se cargan dentro del articulo toda la info del trabajo
	    	article.appendChild(imagen);
	    	article.appendChild(institucion);
	    	article.appendChild(taller);
	    	article.appendChild(proyecto);
	    	article.appendChild(descripcion);
	    	article.appendChild(participantes);
	    	article.appendChild(tecnologias);

	    	//se carga en el div2 el boton de cerrar
	    	div2.appendChild(a);

	    	div.appendChild(div2);
	    	div.appendChild(article);

	    	aside.appendChild(div);
	    	aside.appendChild(a2);

	    	let iddivtrabajo = '#trabajo'.concat(t);
	    	const divtrabajo = document.querySelector(iddivtrabajo);
	    	divtrabajo.appendChild(aside);

	    	location.hash = '#inicio';
	    })
	})
}


document.addEventListener("DOMContentLoaded",function(){
	//vermas serían todos los botones que estan en la seccion trabajo
	let botonesVermas = document.querySelectorAll('#show-modal');
	for (let boton of botonesVermas) {
		boton.addEventListener('click', function(evt) {
			evt.target.nextElementSibling.style.display="inline-block";
		})
	}
});

const showmodal = document.querySelectorAll('#show-modal');

showmodal.forEach(function(btn){
	btn.onclick = function(){
		btn.nextElementSibling.style.display="block"
	};

});

/*const closemodal = document.querySelectorAll('.close-modal');
closemodal.forEach(function(btn){
	btn.onclick = function(){
		btn.parentElement.parentElement.parentElement.style.display="none"
	};
});*/
