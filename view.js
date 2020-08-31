
/**
 * @class View : la vue!!!
 */
class View {
    constructor() {

        this.root = document.getElementById("root");
        this.rootGame = document.getElementById("root2")
        this.rootReponse = document.getElementById("root3")
        this.scoreRoot = document.getElementById("root4")
        this.questionRestante = document.getElementById("root5")
        this.startButton = document.createElement("button");
        this.name = document.createElement("input");
        this.boutonReponse2 = document.createElement('button')
        this.boutonReponse3 = document.createElement('button')
        this.boutonReponse4 = document.createElement('button')
        this.boutonReponse1 = document.createElement('button')
        this.boutonReponse1.id = "bouton1"
        this.boutonReponse4.id = "bouton4"
        this.boutonReponse2.id = "bouton2"
        this.boutonReponse3.id = "bouton3"
        this.reponseSelectionne1 = document.getElementById("bouton1")
        this.reponseSelectionne2 = document.getElementById("bouton2")
        this.reponseSelectionne3 = document.getElementById("bouton3")
        this.reponseSelectionne4 = document.getElementById("bouton4")
        this.userName = ""
        this.countriesList = document.getElementById("countries")
        
    }
////// INIT ECRAN ACCEUIL /////////

    initStart(){
      
        this.root.innerHTML = "<h1> Quiz Game !!<h1> ";
        this.root.innerHTML = "<h2> Entrez votre nom et cliquez sur start ( min 2 caracteres )"
        this.startButton.id = "startButton";
        this.startButton.style="width: 60px; height: 60px;"
        this.startButton.innerHTML = "Start"
        this.name.id = "name"  
        this.name.type = "text"
        this.name.name = "name"
        this.root.appendChild(this.startButton)
        this.root.appendChild(this.name)
        
    }
////// FONCTION DISPLAY NONE /////////

    clearView(a) {
      
      a.style.display = "none"
     
    }
////// FONCTION DISPLAY BLOCK  /////////

    showView(a) {
      a.style.display = "block"
    }

////// FLAG TO NAME VIEW /////////

/**
 * 
 * @param {*} tirage sdvsv 
 * @param {*} answers sfsf
 */
    flagToNameView(tirage, answers){
      this.view = new View
      this.rootGame.innerHTML = "<h1> Trouvez le pays de ce drapeaux : <h1> ";
      this.img = document.createElement("img")
      this.img.src = tirage.flag
      this.img.style="width: 600px; height: 300px;"
      this.rootGame.appendChild(this.img)
      document.createElement("img")

      this.rootGame.appendChild(this.boutonReponse1)
      this.boutonReponse1.type = "button"
      this.boutonReponse1.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse2)
      this.boutonReponse2.type = "button"
      this.boutonReponse2.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse3)
      this.boutonReponse3.type = "button"
      this.boutonReponse3.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse4)
      this.boutonReponse4.type = "button"
      this.boutonReponse4.style="width: 200px; height: 150px;"
      
    }

////// NAME TO CAPITAL VIEW  /////////

    nameToCapitalView(tirage){
      this.view = new View
      this.rootGame.innerHTML = "<h1> Trouvez la capitale de ce pays :  <h1> " + tirage.name;
      
      this.rootGame.appendChild(this.boutonReponse1)
      this.boutonReponse1.type = "button"
      this.boutonReponse1.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse2)
      this.boutonReponse2.type = "button"
      this.boutonReponse2.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse3)
      this.boutonReponse3.type = "button"
      this.boutonReponse3.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse4)
      this.boutonReponse4.type = "button"
      this.boutonReponse4.style="width: 200px; height: 150px;"

      
    }

////// CAPITAL TO NAME VIEW /////////

    capitalToNameView(tirage){
      console.log(tirage)
      this.view = new View
      this.rootGame.innerHTML = "<h1> Trouvez le pays ou ce situe cette capitale : <h1> " + tirage.capital;

      this.rootGame.appendChild(this.boutonReponse1)
      this.boutonReponse1.type = "button"
      this.boutonReponse1.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse2)
      this.boutonReponse2.type = "button"
      this.boutonReponse2.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse3)
      this.boutonReponse3.type = "button"
      this.boutonReponse3.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse4)
      this.boutonReponse4.type = "button"
      this.boutonReponse4.style="width: 200px; height: 150px;"
    }

   ////// NAME TO FLAGE VIEW /////////

    nameToFlagView(tirage){
    
      this.view = new View
      this.rootGame.innerHTML = "<h1> Trouvez le drapeau de ce pays : <h1> " + tirage.name;

      this.img1 = document.createElement('img')
      this.img1.style="width: 200px; height: 150px;"
      this.img1.id = "image1"

      this.rootGame.appendChild(this.img1)
      this.img2 = document.createElement('img')
      this.img2.style="width: 200px; height: 150px;"
      this.img2.id = "image2"

      this.rootGame.appendChild(this.img2)
      this.img3 = document.createElement('img')
      this.img3.id = "image1"
      this.img3.style="width: 200px; height: 150px;"
      this.rootGame.appendChild(this.img3)
      
      this.img4 = document.createElement('img')
      this.img4.id = "image2"
      this.img4.style="width: 200px; height: 150px;"
      this.rootGame.appendChild(this.img4)
      
      this.rootGame.appendChild(this.boutonReponse1)
      this.boutonReponse1.type = "button"
      this.boutonReponse1.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse2)
      this.boutonReponse2.type = "button"
      this.boutonReponse2.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse3)
      this.boutonReponse3.type = "button"
      this.boutonReponse3.style="width: 200px; height: 150px;"
      
      this.rootGame.appendChild(this.boutonReponse4)
      this.boutonReponse4.type = "button"
      this.boutonReponse4.style="width: 200px; height: 150px;"

      

    }
    

  }//FIN VIEW
  






















