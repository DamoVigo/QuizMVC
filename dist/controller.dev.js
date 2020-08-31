"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller =
/*#__PURE__*/
function () {
  function Controller(view, model) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.model = model;
    this.view = view;
    this.score = this.model.score;
    this.model.bindInitStartControl(this.initStartControl);
    this.model.bindInitGame(this.initGame);
    this.model.bindDisplayCountryInfo(this.displayCountryInfo);
    this.model.bindFlagToName(this.flagToName);
    this.model.bindNameToCapital(this.nameToCapital);
    this.model.bindCapitalToName(this.capitalToName);
    this.model.bindNameToFlag(this.nameToFlag);
    this.model.bindGetAnswers(this.getAnswers);
    this.highscore = localStorage.getItem("highscore") !== undefined ? localStorage.getItem("highscore") : 0;
    this.newHighscore = false;

    window.onload = function () {
      _this.model.execInitstartControl();
    };
  } //////// LANCE LE JEUX /////////


  _createClass(Controller, [{
    key: "initGame",
    value: function initGame() {
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
      this.view = new View(window.localStorage.getItem("hiscore"));

      if (this.questionCounter === 20) {
        this.view.clearView(this.view.rootGame);
        this.view.showView(this.view.root);
        this.view.initStart();
        app.model.execInitstartControl();
      } else {
        app.model.newQuestion();
      }
    } ////// LANCE LA PAGE ACCEUIL /////////

  }, {
    key: "initStartControl",
    value: function initStartControl() {
      this.view = new View();
      this.questionCounter = 1;
      this.score = 0;
      this.view.initStart();
      var userName = document.getElementById("name");
      this.view.startButton.addEventListener("click", function () {
        // app.model.saveHightScore()
        if (userName.value === "") {
          alert("Saisissez votre nom svp !");
          return false;
        } else {
          //app.model.saveHightScore()
          this.view = new View();
          this.view.clearView(this.view.root); //  this.view.showView(this.view.questionRestante)

          this.view.showView(this.view.rootGame);
          app.model.execInitGame();
        }
      });
    } ////// RECOIT LA RPEONSE TIREE AU SORT ET DETERMINE LE TYPE DE QUESTION PUIS ENVOI POUR UNE GENERATION DE REPONSE CORRESPONDANTE/////////

  }, {
    key: "displayCountryInfo",
    value: function displayCountryInfo(countryByAlpha3Code, allData) {
      this.countryData = this.countries.find(function (country) {
        return country.alpha3Code === countryByAlpha3Code;
      });
      var a;
      this.tirageQuestion = ['flagToName', 'nameToCapital', 'capitalToName', 'nameToFlag'];
      a = Math.floor(Math.random() * this.tirageQuestion.length + 1);

      switch (a) {
        case 1:
          this.view.flagToNameView(this.countryData);
          this.generateAnswers(this.countryData, allData);
          break;

        case 2:
          this.view.nameToCapitalView(this.countryData);
          this.generateAnswers2(this.countryData, allData);
          break;

        case 3:
          this.view.capitalToNameView(this.countryData);
          this.generateAnswers3(this.countryData, allData);
          break;

        case 4:
          this.view.nameToFlagView(this.countryData);
          this.generateAnswers4(this.countryData, allData);
          break;

        default:
      }
    } ////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

  }, {
    key: "flagToName",
    value: function flagToName(choix) {
      var _this2 = this;

      var k = this.countryData.name;
      var h = choix.indexOf(k);
      this.dispatch = [];
      choix.forEach(function (element) {
        _this2.dispatch.push(element);

        _this2.view.boutonReponse1.innerHTML = _this2.dispatch[0];
        _this2.view.boutonReponse2.innerHTML = _this2.dispatch[1];
        _this2.view.boutonReponse3.innerHTML = _this2.dispatch[2];
        _this2.view.boutonReponse4.innerHTML = _this2.dispatch[3];
        _this2.view.boutonReponse1.value = _this2.dispatch[0];
        _this2.view.boutonReponse2.value = _this2.dispatch[1];
        _this2.view.boutonReponse3.value = _this2.dispatch[2];
        _this2.view.boutonReponse4.value = _this2.dispatch[3]; //console.log([this.dispatch])
      }); ////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {
        app.model.newQuestion();
      } else {
        this.getAnswers(this.dispatch);
      }
    } ////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

  }, {
    key: "nameToCapital",
    value: function nameToCapital(choix) {
      var _this3 = this;

      var k = this.countryData.capital;
      var h = choix.indexOf(k);
      this.dispatch = [];
      choix.forEach(function (element) {
        _this3.dispatch.push(element);

        _this3.view.boutonReponse1.innerHTML = _this3.dispatch[0];
        _this3.view.boutonReponse2.innerHTML = _this3.dispatch[1];
        _this3.view.boutonReponse3.innerHTML = _this3.dispatch[2];
        _this3.view.boutonReponse4.innerHTML = _this3.dispatch[3];
        _this3.view.boutonReponse1.value = _this3.dispatch[0];
        _this3.view.boutonReponse2.value = _this3.dispatch[1];
        _this3.view.boutonReponse3.value = _this3.dispatch[2];
        _this3.view.boutonReponse4.value = _this3.dispatch[3];
      }); ////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {
        app.model.newQuestion();
      } else {
        this.getAnswers(this.dispatch);
      }
    } ////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

  }, {
    key: "capitalToName",
    value: function capitalToName(choix) {
      var _this4 = this;

      var k = this.countryData.name;
      var h = choix.indexOf(k);
      this.dispatch = [];
      choix.forEach(function (element) {
        _this4.dispatch.push(element);

        _this4.view.boutonReponse1.innerHTML = _this4.dispatch[0];
        _this4.view.boutonReponse2.innerHTML = _this4.dispatch[1];
        _this4.view.boutonReponse3.innerHTML = _this4.dispatch[2];
        _this4.view.boutonReponse4.innerHTML = _this4.dispatch[3];
        _this4.view.boutonReponse1.value = _this4.dispatch[0];
        _this4.view.boutonReponse2.value = _this4.dispatch[1];
        _this4.view.boutonReponse3.value = _this4.dispatch[2];
        _this4.view.boutonReponse4.value = _this4.dispatch[3];
      }); ////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {
        app.model.newQuestion();
      } else {
        this.getAnswers(this.dispatch);
      }
    } ////// DISPATCH DES REPONSES DANS LES BOUTONS / IMAGES DRAPEAU /////////

  }, {
    key: "nameToFlag",
    value: function nameToFlag(choix) {
      var _this5 = this;

      var k = this.countryData.flag;
      var h = choix.indexOf(k);
      this.dispatch = [];
      choix.forEach(function (element) {
        _this5.dispatch.push(element);

        _this5.view.boutonReponse1.innerHTML = "Choix 1";
        _this5.view.boutonReponse2.innerHTML = "Choix 2";
        _this5.view.boutonReponse3.innerHTML = "Choix 3";
        _this5.view.boutonReponse4.innerHTML = "Choix 4";
        _this5.view.boutonReponse1.value = _this5.dispatch[0];
        _this5.view.boutonReponse2.value = _this5.dispatch[1];
        _this5.view.boutonReponse3.value = _this5.dispatch[2];
        _this5.view.boutonReponse4.value = _this5.dispatch[3];
        console.log(_this5.dispatch);
        _this5.view.img1.src = _this5.dispatch[0];
        _this5.view.img2.src = _this5.dispatch[1];
        _this5.view.img3.src = _this5.dispatch[2];
        _this5.view.img4.src = _this5.dispatch[3];
      }); ////// CHECK SI LA BONNE REPONSE EST BIEN DANS LES 4 CHOIX SINON CA RELANCE LE TIRAGE SANS INFLUER SUR LE COMPTAGE OU LE SCORE /// LE PROBLEME EST INDETERMINE /////////

      if (h < 0) {
        app.model.newQuestion();
      } else {
        this.getAnswers(this.dispatch);
      }
    } ////// DETERMINE LA REPONSE CHOISIE AJOUTE LE SCORE MET A JOUR LE NOMBRE DE QUESTIONS ENVOI VERS INIT POUR DETERMINER LA SUITE EN FONCTION DU DECOMPTE DES QUESTION / 20 /////////

  }, {
    key: "getAnswers",
    value: function getAnswers() {
      var two = "/ 20";
      this.view.scoreRoot.innerHTML = "<h2> Votre score est de : <h2>" + app.model.score + two;
      this.view.questionRestante.innerHTML = "<h2> Vous en etes a la question <h2>" + app.model.questionCounter + two;
      var a = document.getElementById("bouton1").value;
      var b = document.getElementById("bouton2").value;
      var c = document.getElementById("bouton3").value;
      var d = document.getElementById("bouton4").value;
      var e = this.countryData.name;
      var f = this.countryData.capital;
      var g = this.countryData.flag;
      this.view.boutonReponse1.addEventListener("click", function () {
        if ((a === e || a === f || a === g) && app.model.questionCounter != 20) {
          app.model.score += 1;
          app.model.questionCounter += 1;
          app.model.initGame();
        } else {
          app.model.questionCounter += 1;
          app.model.initGame();
        }
      });
      this.view.boutonReponse2.addEventListener("click", function () {
        if ((b === e || b === f || b === g) && app.model.questionCounter != 20) {
          app.model.score += 1;
          app.model.questionCounter += 1;
          app.model.initGame();
        } else {
          app.model.questionCounter += 1;
          app.model.initGame();
        }
      });
      this.view.boutonReponse3.addEventListener("click", function () {
        if ((c === e || c === f || c === g) && app.model.questionCounter != 20) {
          app.model.score += 1;
          app.model.questionCounter += 1;
          app.model.initGame();
        } else {
          app.model.questionCounter += 1;
          app.model.initGame();
        }
      });
      this.view.boutonReponse4.addEventListener("click", function () {
        if ((d === e || d === f || d === g) && app.model.questionCounter != 20) {
          app.model.score += 1;
          app.model.questionCounter += 1;
          app.model.initGame();
        } else {
          app.model.questionCounter += 1;
          app.model.initGame();
        }
      });
    }
  }]);

  return Controller;
}();

if (!window.localStorage.getItem("hiscore")) window.localStorage.setItem("hiscore", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
var app = new Controller(new View(window.localStorage.getItem("hiscore")), new Model());