class Controller {
    constructor(view,model) {

      this.model = model
      this.view = view
      this.score = this.model.score
      this.model.bindInitStartControl(this.initStartControl)
      this.model.bindInitGame(this.initGame)
      this.model.bindDisplayCountryInfo(this.displayCountryInfo)
      this.model.bindFlagToName(this.flagToName)
      this.model.bindNameToCapital(this.nameToCapital)
      this.model.bindCapitalToName(this.capitalToName)
      this.model.bindNameToFlag(this.nameToFlag)
      this.model.bindGetAnswers(this.getAnswers)
      this.highscore = (localStorage.getItem("highscore") !== undefined)
      ? localStorage.getItem("highscore") : 0;
      this.newHighscore = false;
      window.onload = () => {
        this.model.execInitstartControl();
      }
    }
//////// LANCE LE JEUX /////////
    initGame () {

      // if (app.model.score > this.highscore) {
      //   localStorage.setItem("highscore", app.model.score);
      //   document.getElementById("root").innerHTML = localStorage.getItem("highscore");
      //   if(this.newHighscore === false) {
      //       this.newHighscore = true;
      //   }
    //  let a =app.model.highscore
    //   // }
    //   for (var i = 0; i <a.length; i++) {
    //     if (app.model.score > a[i]) {
    //       a.splice(i, 0, app.model.score);
    //       a.pop();
    //         window.localStorage.setItem("hiscore", this.model.highscore);
    //         break;
    //     }
    //   }

    //   for (var i = 0; i < a.length; i++) {
    //     if (this.score > a[i]) {
    //       a.splice(i, 0, this.score);
    //       a.pop();
    //         window.localStorage.setItem("hiscore", this.model.highscore);
    //         break;
    //     }
    // } 

    this.view = new View(window.localStorage.getItem("hiscore"))
  
    
      if ( this.questionCounter === 20){
        
        this.view.clearView(this.view.rootGame)
        this.view.showView(this.view.root)
        this.view.initStart()
        app.model.execInitstartControl()
        
      } else {
        
        app.model.newQuestion()
      }
      
      
    }
    ////// LANCE LA PAGE ACCEUIL /////////

    initStartControl() {
     
      this.view = new View
      this.questionCounter = 1
      this.score = 0
      this.view.initStart()
      let userName = document.getElementById("name")
      this.view.startButton.addEventListener("click", function() {
       // app.model.saveHightScore()
            if (userName.value === "" ) {
                    alert("Saisissez votre nom svp !")
                    return false
                } else {
                  //app.model.saveHightScore()
                 this.view = new View
                 
                 this.view.clearView(this.view.root)
                //  this.view.showView(this.view.questionRestante)
                 this.view.showView(this.view.rootGame)
                 app.model.execInitGame()
                
                }
                
       })}

////// RECOIT LA RPEONSE TIREE AU SORT ET DETERMINE LE TYPE DE QUESTION PUIS ENVOI POUR UNE GENERATION DE REPONSE CORRESPONDANTE/////////

    displayCountryInfo(countryByAlpha3Code, allData) {

       this.countryData = this.countries.find(country => country.alpha3Code === countryByAlpha3Code);
       let a 
       this.tirageQuestion = ['flagToName', 'nameToCapital', 'capitalToName', 'nameToFlag']
        a =  Math.floor(Math.random() * this.tirageQuestion.length + 1)
      
      switch (a) {
  
        case 1:

          this.view.flagToNameView(this.countryData)
          this.generateAnswers(this.countryData, allData)

          break;
        case 2:

          this.view.nameToCapitalView(this.countryData)
          this.generateAnswers2(this.countryData, allData)

        break;
        case 3:

          this.view.capitalToNameView(this.countryData)
          this.generateAnswers3(this.countryData, allData)

          break;
        case 4:

          this.view.nameToFlagView(this.countryData)
          this.generateAnswers4(this.countryData, allData)
  
          break;
         default:
        
      }
    }

////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

    flagToName(choix) {
      
      
      let k = this.countryData.name
      let h = choix.indexOf(k)
   
   this.dispatch = []
      choix.forEach(element => {
        
        this.dispatch.push(element)
        this.view.boutonReponse1.innerHTML = this.dispatch[0]
        this.view.boutonReponse2.innerHTML = this.dispatch[1]
        this.view.boutonReponse3.innerHTML = this.dispatch[2]
        this.view.boutonReponse4.innerHTML = this.dispatch[3]
        this.view.boutonReponse1.value = this.dispatch[0]
        this.view.boutonReponse2.value = this.dispatch[1]
        this.view.boutonReponse3.value = this.dispatch[2]
        this.view.boutonReponse4.value = this.dispatch[3]
        //console.log([this.dispatch])
      })

////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {

        app.model.newQuestion()

      } else {
    
      this.getAnswers(this.dispatch)

      }

    }

////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

    nameToCapital(choix){
     
      let k = this.countryData.capital
      let h = choix.indexOf(k)
       this.dispatch = []
      choix.forEach(element => {

        this.dispatch.push(element)
        this.view.boutonReponse1.innerHTML = this.dispatch[0]
        this.view.boutonReponse2.innerHTML = this.dispatch[1]
        this.view.boutonReponse3.innerHTML = this.dispatch[2]
        this.view.boutonReponse4.innerHTML = this.dispatch[3]
        this.view.boutonReponse1.value = this.dispatch[0]
        this.view.boutonReponse2.value = this.dispatch[1]
        this.view.boutonReponse3.value = this.dispatch[2]
        this.view.boutonReponse4.value = this.dispatch[3]
       
      })

////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {

        app.model.newQuestion()

      } else {
    
        this.getAnswers(this.dispatch)

      }
      
    }

////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

    capitalToName(choix) {
      let k = this.countryData.name
      let h = choix.indexOf(k)
      this.dispatch = []
      choix.forEach(element => {

        this.dispatch.push(element)
        this.view.boutonReponse1.innerHTML = this.dispatch[0]
        this.view.boutonReponse2.innerHTML = this.dispatch[1]
        this.view.boutonReponse3.innerHTML = this.dispatch[2]
        this.view.boutonReponse4.innerHTML = this.dispatch[3]
        this.view.boutonReponse1.value = this.dispatch[0]
        this.view.boutonReponse2.value = this.dispatch[1]
        this.view.boutonReponse3.value = this.dispatch[2]
        this.view.boutonReponse4.value = this.dispatch[3]
       
      })

////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {

        app.model.newQuestion()

      } else {
    
      this.getAnswers(this.dispatch)

      }
      
    }

    ////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

    nameToFlag(choix){
      let k = this.countryData.flag
      let h = choix.indexOf(k)
      this.dispatch = []
      choix.forEach(element => {

        this.dispatch.push(element)
        
        
        this.view.boutonReponse1.innerHTML = "Choix 1"
        this.view.boutonReponse2.innerHTML = "Choix 2"
        this.view.boutonReponse3.innerHTML = "Choix 3"
        this.view.boutonReponse4.innerHTML = "Choix 4"
        this.view.boutonReponse1.value = this.dispatch[0]
        this.view.boutonReponse2.value = this.dispatch[1]
        this.view.boutonReponse3.value = this.dispatch[2]
        this.view.boutonReponse4.value = this.dispatch[3]
        console.log(this.dispatch)

        this.view.img1.src = this.dispatch[0]
        this.view.img2.src = this.dispatch[1]
        this.view.img3.src = this.dispatch[2]
        this.view.img4.src = this.dispatch[3]
      })

////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

       if (h < 0) {

        app.model.newQuestion()

      } else {
    
      this.getAnswers(this.dispatch)

      }
        
    }
    

////// DETERMINE LA REPONSE CHOISIE AJOUTE LE SCORE MET A JOUR LE NOMBRE DE QUESTIONS ENVOI VERS INIT POUR DETERMINER LA SUITE EN FONCTION DU DECOMPTE DES QUESTION / 20 /////////
    getAnswers(){
  
     let two = "/ 20" 
     this.view.scoreRoot.innerHTML = "<h2> Votre score est de : <h2>" + app.model.score + two
     this.view.questionRestante.innerHTML = "<h2> Vous en etes a la question <h2>" + app.model.questionCounter + two
     let a = document.getElementById("bouton1").value
     let b = document.getElementById("bouton2").value
     let c = document.getElementById("bouton3").value
     let d = document.getElementById("bouton4").value
     let e = this.countryData.name
     let f = this.countryData.capital
     let g = this.countryData.flag


      this.view.boutonReponse1.addEventListener("click", function() {
        if ( (a === e || a === f || a === g)  && app.model.questionCounter != 20){
        app.model.score += 1
        app.model.questionCounter += 1
       
        app.model.initGame()
        
        } else {
          
          app.model.questionCounter += 1
          
          app.model.initGame()
        } 
        } )

      this.view.boutonReponse2.addEventListener("click", function() {
        if ( (b === e || b === f || b === g) && app.model.questionCounter != 20) {
          app.model.score += 1
          app.model.questionCounter += 1
          app.model.initGame()
          
          } else {
            app.model.questionCounter += 1
            
           
            
            app.model.initGame()
           
          }
      } )
      
      this.view.boutonReponse3.addEventListener("click", function() {
        if ( (c === e || c === f || c === g )&& app.model.questionCounter != 20) {
          app.model.score += 1
          app.model.questionCounter += 1
          app.model.initGame()
          
          } else {
            
            app.model.questionCounter += 1
            app.model.initGame()
       
          }
       })
   
      this.view.boutonReponse4.addEventListener("click", function() {
        if ( (d === e || d === f || d === g) && app.model.questionCounter != 20){
          app.model.score += 1
          app.model.questionCounter += 1
          app.model.initGame()
              } else {
                app.model.questionCounter += 1  
                
                app.model.initGame()
                }
      } )

      
      
    }

  }

if(!window.localStorage.getItem("hiscore"))window.localStorage.setItem("hiscore",[0,0,0,0,0,0,0,0,0,0]);


  let app = new Controller(new View(window.localStorage.getItem("hiscore")), new Model())