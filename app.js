

var repertoire=[];

$("#enregistrer").click(function(){
	var selecteurJquery = "#nom";
	var tNom = $(selecteurJquery).val();
	var tPrenom = $("#prénom").val();
	var tAge = $("#age").val();

	var personne={"nom":tNom,"prénom":tPrenom,"age":tAge};
	repertoire.push(personne);
	console.log(repertoire);
});







