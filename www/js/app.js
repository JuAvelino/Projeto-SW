// função para mostrar person
$('.mostrarPerson').on('click', function() {
	var idPer = $('#selecao').val();

 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:" + data.height + "<br/>Ano Nasc.: " + data.birth_year + "<br/>Genero: " + data.gender + "<br/>";
}});
});



// função para mostrar planeta
$('.mostrarPlaneta').on('click', function() {
	var idPla = $('#selecaoPla').val();

 $.ajax({
type: 'GET',
url: ' http://swapi.co/api/planets/'+idPla+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPlanet");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Duracao do dia: " + data.rotation_period + "<br/>Duracao do ano: " + data.orbital_period + "<br/>diametro: " + data.diameter + "<br/>";
}});
});


// função para mostrar nave
$('.mostrarNave').on('click', function() {
	var idPer = $('#selecaoNav').val();

 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/'+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contNave");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Modelo:" + data.model + "<br/>Fabricante.: " + data.manufacturer + "<br/>Custo: " + data.cost_in_credits + "<br/>";
}});
});

