document.addEventListener("DOMContentLoaded",()=> {

	//1. récupérer la réponse
	var rep = document.getElementById("rep");
	var valider = document.getElementById("valider");

	//2. action
	var even = function(){

				console.log(rep.value);
				if(rep.value == "un jeu de carte"){
					alert("Bravo vous avez trouvé ! Vous pouvez maintenant retournez sur vos pas et descendre en face à l'entrée des vaches.")
				}else{
					alert("Dommage ce n'est pas la bonne réponse. Essaie encore !(pensez bien à marquer la réponse en minuscule) ");
				}

					
			}
			
			
		
	

	//3. Appeler la fonction
	
	valider.addEventListener("click", even);
	
});
