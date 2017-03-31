

var repertoire=[];
 

$("#enregistrer").click(function(){
	var selecteurJquery = "#nom";
	var tNom = $(selecteurJquery).val();
	var tPrenom = $("#prénom").val();
	var tAge = $("#age").val();
	

	var personne={"nom":tNom,"prénom":tPrenom,"age":tAge};
	repertoire.push(personne);
	console.log(repertoire);
	$(".table").append($("<tr><td>"+tNom +"</td><td>"+tPrenom +"</td><td>"+tAge +"</td><td>"+"<button class='deleteButton'>X</button>"+"</td></tr>"));
	$("#table").trigger('update');

	//$(".efface").click(function(){$(".table").remove(

	});

$("tbody").delegate(".deleteButton","click", function(){
	$(this).parent().parent().remove();
});

$("tbody").delegate("thead","click", function(){
});
//$("input").val(""); efface l'input de ces donnés
$("table").tablesorter(); 

//var nom= "juli"
//var fr= "salut"+nom+"ça va"








