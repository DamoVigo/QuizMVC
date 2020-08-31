/** 
*module description
*@module MysClass
*
*/
class Model {
    constructor() {
        this.score = 0
        this.questionCounter = 1
        this.highscore = window.localStorage.getItem('hiscore')
        this.finalScore = document.getElementById("score")
        this.mostRecentHs = localStorage.getItem("mostRecentScore")
        this.highscores = JSON.parse(localStorage.getItem("highscores")) || []
        this.maxHS = 10;
        this.userName = document.getElementById("name")
    }
    
    bindInitStartControl(callback) {
        this.initStartControl = callback;
    }

    bindInitGame(callback){
      this.initGame = callback;
    }

   
    bindDisplayCountryInfo(callback){
      this.displayCountryInfo = callback;
    }

    bindFlagToName(callback){
      this.flagToName = callback
    }

    bindGetAnswers(callback){
      this.getAnswers = callback
    }
    bindNameToCapital(callback){
      this.nameToCapital = callback
    }

    bindCapitalToName(callback) {
      this.capitalToName = callback
    }

    bindNameToFlag(callback) {
      this.nameToFlag = callback
    }

    execFlagToName(){
      this.flagToName()
    }

    execInitstartControl() {
      this.initStartControl();
    }

    execInitGame() {
      this.initGame();
    }
  
    execDisplayCountryInfo() {
      this.displayCountryInfo();
    }

    execNameToCapital(callback) {
      this.nameToCapital()
    }

    execCapitalToName() {
      this.capitalToName()
    }

    execNameToFlag(callback) {
      this.nameToFlag()
    }

    execGetAnswers(){
      this.getAnswers()
    }
    
        // saveHightScore = () => {
        //   this.score = {
        //     score : this.mostRecentHs,
        //     name: this.userName.value 
        //   };
        //   this.highscores.push(this.score)
        //   this.highscores.sort((a,b)=> b.this.score - a.this.score)
        //   this.highscores.
        //   localStorage.setItem("highscores", JSON.stringify(this.highscores))
        //   window.location.assign("/")
        //   console.log(this.highscores)
          
        // }
         
      newQuestion() {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.initialize(data))
      .catch(error => console.log("Error:", error));
       

      }
      ////// TIRAGE QUESTION /////////

      initialize(data) {
        
        this.countries = data;
        let options = "";
        this.countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
        this.view.countriesList.innerHTML = options;
        this.view.countriesList.selectedIndex = Math.floor(Math.random() * this.view.countriesList.length);
        this.displayCountryInfo(this.view.countriesList[this.view.countriesList.selectedIndex].value, this.countries);
        
        
      }
      // REPONSE FLAG TO NAME//////

      generateAnswers(answer, allCountries) {

        let wrongCountries = allCountries.filter(country => country.alpha3Code !== answer.alpha3Code); 
        let countOfAnswers = 4;
        let positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
        this.answers = []; 

        for(let i=0; i< countOfAnswers; i++) {
          if (i === positionOfCorrectAnswer) {
          this.answers.push(answer.name);

        } else {
          let randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)]; 
          wrongCountries = wrongCountries.filter(country => country.alpha3Code !== randomAnswer.alpha3Code); 
          this.answers.push(randomAnswer.name);
          //this.answers.push( name: randomAnswer.name );
          // this.answers.push()

       } 

    }
    //// ENVOI VERS FLAG TO NAME ///////

    this.flagToName(this.answers)
    
  };
    ////// GENERE REPONSE POUR NAME TO CAPITAL /////////

      generateAnswers2(answer, allCountries) {

          let wrongCountries = allCountries.filter(country => country.alpha3Code !== answer.alpha3Code); 
          let countOfAnswers = 4;
          let positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
          this.answers = []; 

          for(let i=0; i< countOfAnswers; i++) {
             if (i === positionOfCorrectAnswer) {
                this.answers.push(answer.capital);

             } else {
               let randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)]; 
                wrongCountries = wrongCountries.filter(country => country.alpha3Code !== randomAnswer.alpha3Code);
      
       //this.answers.push(randomAnswer.capital);
                this.answers.push( randomAnswer.capital );
              } 
          }
         ////// ENVOI VERS NAME TO CAPITAL ///////// 

          this.nameToCapital(this.answers)
    
      };

////// GENERE REPONSE POUR CAPITAL TO NAME /////////

      generateAnswers3(answer, allCountries) {
               let p = answer.name

               let wrongCountries = allCountries.filter(country => country.alpha3Code !== answer.alpha3Code); 

               let countOfAnswers = 4;

               let positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
               this.answers = []; 

               for(let i=0; i< countOfAnswers; i++) {
                  if (i === positionOfCorrectAnswer) {
                     this.answers.push(p);

                  } else {
                    let randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)]; 
                     wrongCountries = wrongCountries.filter(country => country.alpha3Code.capital !== randomAnswer.capital);
                     console.log(wrongCountries)
                     this.answers.push(randomAnswer.name);
                  } 
               }
    
   
   ////// ENVOI VERS CAPITAL TO NAME /////////

                   this.capitalToName(this.answers)
    
      };




////// GENERE REPONSE POUR NAME TO FLAG/////////

          generateAnswers4(answer, allCountries) {
                  let p = answer
                  let wrongCountries = allCountries.filter(country => country.alpha3Code !== answer.alpha3Code); 
    
                  let countOfAnswers = 4;

                  let positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
                  this.answers = []; 

                  for(let i=0; i< countOfAnswers; i++) {
                     if (i === positionOfCorrectAnswer) {
                        this.answers.push(answer.flag);

                     } else {
                        let randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)]; 
                        wrongCountries = wrongCountries.filter(country => country.alpha3Code !== randomAnswer.alpha3Code); 
                        this.answers.push(randomAnswer.flag);
                     } 
                  }
                  ////// ENVOI VERS NAME TO FLAG/////////

                  this.nameToFlag(this.answers)
    
    
                };

          }