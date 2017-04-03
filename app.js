$("#save").click(function() {

	
	var copains = ["Florian", "Dimitri", "Emilie", "Morel", "Grégory", "Raphael", "Elodie", "Franck", "Jordy", "Marco", "Océane", "Romain", "Mouad", "Maxime", "Julien"];
	var leCopain;

	for (var i = 0; i<= 14; i ++) {
		
		idCopainAleatoire = Math.floor(Math.random() * 4  );

		leCopain = copains.splice( idCopainAleatoire, 1);

		console.log( idCopainAleatoire + '/' + leCopain );


	};	




	$("tr").append("<tr><td>"++"</td></tr>");



});