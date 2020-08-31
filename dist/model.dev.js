"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
*module description
*@module MysClass
*
*/
var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    this.score = 0;
    this.questionCounter = 1;
    this.highscore = window.localStorage.getItem('hiscore');
    this.finalScore = document.getElementById("score");
    this.mostRecentHs = localStorage.getItem("mostRecentScore");
    this.highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    this.maxHS = 10;
    this.userName = document.getElementById("name");
  }

  _createClass(Model, [{
    key: "bindInitStartControl",
    value: function bindInitStartControl(callback) {
      this.initStartControl = callback;
    }
  }, {
    key: "bindInitGame",
    value: function bindInitGame(callback) {
      this.initGame = callback;
    }
  }, {
    key: "bindDisplayCountryInfo",
    value: function bindDisplayCountryInfo(callback) {
      this.displayCountryInfo = callback;
    }
  }, {
    key: "bindFlagToName",
    value: function bindFlagToName(callback) {
      this.flagToName = callback;
    }
  }, {
    key: "bindGetAnswers",
    value: function bindGetAnswers(callback) {
      this.getAnswers = callback;
    }
  }, {
    key: "bindNameToCapital",
    value: function bindNameToCapital(callback) {
      this.nameToCapital = callback;
    }
  }, {
    key: "bindCapitalToName",
    value: function bindCapitalToName(callback) {
      this.capitalToName = callback;
    }
  }, {
    key: "bindNameToFlag",
    value: function bindNameToFlag(callback) {
      this.nameToFlag = callback;
    }
  }, {
    key: "execFlagToName",
    value: function execFlagToName() {
      this.flagToName();
    }
  }, {
    key: "execInitstartControl",
    value: function execInitstartControl() {
      this.initStartControl();
    }
  }, {
    key: "execInitGame",
    value: function execInitGame() {
      this.initGame();
    }
  }, {
    key: "execDisplayCountryInfo",
    value: function execDisplayCountryInfo() {
      this.displayCountryInfo();
    }
  }, {
    key: "execNameToCapital",
    value: function execNameToCapital(callback) {
      this.nameToCapital();
    }
  }, {
    key: "execCapitalToName",
    value: function execCapitalToName() {
      this.capitalToName();
    }
  }, {
    key: "execNameToFlag",
    value: function execNameToFlag(callback) {
      this.nameToFlag();
    }
  }, {
    key: "execGetAnswers",
    value: function execGetAnswers() {
      this.getAnswers();
    } // saveHightScore = () => {
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

  }, {
    key: "newQuestion",
    value: function newQuestion() {
      var _this = this;

      fetch("https://restcountries.eu/rest/v2/all").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.initialize(data);
      })["catch"](function (error) {
        return console.log("Error:", error);
      });
    } ////// TIRAGE QUESTION /////////

  }, {
    key: "initialize",
    value: function initialize(data) {
      this.countries = data;
      var options = "";
      this.countries.forEach(function (country) {
        return options += "<option value=\"".concat(country.alpha3Code, "\">").concat(country.name, "</option>");
      });
      this.view.countriesList.innerHTML = options;
      this.view.countriesList.selectedIndex = Math.floor(Math.random() * this.view.countriesList.length);
      this.displayCountryInfo(this.view.countriesList[this.view.countriesList.selectedIndex].value, this.countries);
    } // REPONSE FLAG TO NAME//////

  }, {
    key: "generateAnswers",
    value: function generateAnswers(answer, allCountries) {
      var _this2 = this;

      var wrongCountries = allCountries.filter(function (country) {
        return country.alpha3Code !== answer.alpha3Code;
      });
      var countOfAnswers = 4;
      var positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
      this.answers = [];

      for (var i = 0; i < countOfAnswers; i++) {
        if (i === positionOfCorrectAnswer) {
          this.answers.push(answer.name);
        } else {
          (function () {
            var randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
            wrongCountries = wrongCountries.filter(function (country) {
              return country.alpha3Code !== randomAnswer.alpha3Code;
            });

            _this2.answers.push(randomAnswer.name); //this.answers.push( name: randomAnswer.name );
            // this.answers.push()

          })();
        }
      } //// ENVOI VERS FLAG TO NAME ///////


      this.flagToName(this.answers);
    }
  }, {
    key: "generateAnswers2",
    ////// GENERE REPONSE POUR NAME TO CAPITAL /////////
    value: function generateAnswers2(answer, allCountries) {
      var _this3 = this;

      var wrongCountries = allCountries.filter(function (country) {
        return country.alpha3Code !== answer.alpha3Code;
      });
      var countOfAnswers = 4;
      var positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
      this.answers = [];

      for (var i = 0; i < countOfAnswers; i++) {
        if (i === positionOfCorrectAnswer) {
          this.answers.push(answer.capital);
        } else {
          (function () {
            var randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
            wrongCountries = wrongCountries.filter(function (country) {
              return country.alpha3Code !== randomAnswer.alpha3Code;
            }); //this.answers.push(randomAnswer.capital);

            _this3.answers.push(randomAnswer.capital);
          })();
        }
      } ////// ENVOI VERS NAME TO CAPITAL ///////// 


      this.nameToCapital(this.answers);
    }
  }, {
    key: "generateAnswers3",
    ////// GENERE REPONSE POUR CAPITAL TO NAME /////////
    value: function generateAnswers3(answer, allCountries) {
      var _this4 = this;

      var p = answer.name;
      var wrongCountries = allCountries.filter(function (country) {
        return country.alpha3Code !== answer.alpha3Code;
      });
      var countOfAnswers = 4;
      var positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
      this.answers = [];

      for (var i = 0; i < countOfAnswers; i++) {
        if (i === positionOfCorrectAnswer) {
          this.answers.push(p);
        } else {
          (function () {
            var randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
            wrongCountries = wrongCountries.filter(function (country) {
              return country.alpha3Code.capital !== randomAnswer.capital;
            });
            console.log(wrongCountries);

            _this4.answers.push(randomAnswer.name);
          })();
        }
      } ////// ENVOI VERS CAPITAL TO NAME /////////


      this.capitalToName(this.answers);
    }
  }, {
    key: "generateAnswers4",
    ////// GENERE REPONSE POUR NAME TO FLAG/////////
    value: function generateAnswers4(answer, allCountries) {
      var _this5 = this;

      var p = answer;
      var wrongCountries = allCountries.filter(function (country) {
        return country.alpha3Code !== answer.alpha3Code;
      });
      var countOfAnswers = 4;
      var positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
      this.answers = [];

      for (var i = 0; i < countOfAnswers; i++) {
        if (i === positionOfCorrectAnswer) {
          this.answers.push(answer.flag);
        } else {
          (function () {
            var randomAnswer = wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
            wrongCountries = wrongCountries.filter(function (country) {
              return country.alpha3Code !== randomAnswer.alpha3Code;
            });

            _this5.answers.push(randomAnswer.flag);
          })();
        }
      } ////// ENVOI VERS NAME TO FLAG/////////


      this.nameToFlag(this.answers);
    }
  }]);

  return Model;
}();