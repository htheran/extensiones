
const extensiones = [

    {
      "id": 1,
      "area": "Parlantes",
      "ext": 3301
    },
    {
      "id": 2,
      "area": "Activos",
      "ext": 606
    },
    {
      "id": 3,
      "area": "Andres",
      "ext": 616
    },
    {
      "id": 4,
      "area": "Anibal",
      "ext": 215
    },
    {
      "id": 5,
      "area": "Beto",
      "ext": 164
    },
    {
      "id": 6,
      "area": "Carlos",
      "ext": 124
    },
    {
      "id": 7,
      "area": "Carolina",
      "ext": 102
    },
    {
        "id": 8,
        "area": "Cecilia",
        "ext": 199
      },
      {
        "id": 9,
        "area": "David",
        "ext": 103
      },
      {
        "id": 10,
        "area": "Debora",
        "ext": 505
      },
      {
        "id": 11,
        "area": "Dina",
        "ext": 300
      },
      {
        "id": 12,
        "area": "Elena",
        "ext": 610
      },
      {
        "id": 13,
        "area": "Herminia",
        "ext": 208
      },
      {
        "id": 14,
        "area": "Hernan",
        "ext": 122
      },
      {
        "id": 15,
        "area": "Ilena",
        "ext": 515
      },
      {
        "id": 16,
        "area": "Jennifer",
        "ext": 520
      },
      {
        "id": 17,
        "area": "Kiara",
        "ext": 678
      },
      {
        "id": 18,
        "area": "Luis",
        "ext": 514
      },
      {
        "id": 19,
        "area": "Luisa",
        "ext": 417
      },
      {
        "id": 20,
        "area": "Sistemas",
        "ext": 419
      }
     
    
]


        const buscar = document.querySelector('#buscar');
        const boton = document.querySelector('#boton');
        const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
	resultado.innerHTML = '';

	const texto = buscar.value.toLowerCase();

	for(let linea of extensiones){
		let area = linea.area.toLowerCase();
		if(area.indexOf(texto) !== -1 ){
			resultado.innerHTML +=  `			
      <tr>
				   <td>${linea.area}</td>
				   <td>${linea.ext}</td>				   
				</tr>		
			`

		} 
	}

	if(resultado.innerHTML === ''){
		resultado.innerHTML +=  `
			<li><h2>No encontrado...</h2></li>
			`
	}
}

 boton.addEventListener('click', filtrar)
 buscar.addEventListener('keyup',filtrar)
    
 //filtrar();
