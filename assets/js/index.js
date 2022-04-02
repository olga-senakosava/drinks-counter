  let purple = "#490051";
  let cyan = "#1DD5C7";
  let pink = "#f95f85";
  let magenta = "#fa257d";
  let orange = "#FF9A3C";

  let bodyCss = `
  font-family: sans-serif;
  text-align: center;
  transition: all 0.5s;
  background-repeat: no-repeat;
  background-image: linear-gradient(0deg, ${cyan}, ${purple});
  height: 100vh;
  }
    `

  document.body.style.cssText = bodyCss;


  let h1 = document.createElement('h1');
  h1.innerHTML = "What drink would you like?";
  document.body.append(h1);
  h1.style.marginTop = "0px";
  h1.style.fontFamily = "'VT323', monospace";
  h1.style.fontWeight = "normal";
  h1.style.color = cyan;
  h1.style.fontSize = "70px";
  h1.style.lineHeight = "1.3";
  h1.style.animation = "1s h1Appear";


  let h2 = document.createElement('h2');
  h2.innerHTML = "select your temperature";
  document.body.append(h2);
  h2.style.fontFamily = "'Geo', sans-serif";
  h2.style.fontSize = "30px";
  h2.style.letterSpacing = "0.1em";
  h2.style.color = cyan;
  h2.style.fontWeight = "normal";
  h2.style.lineHeight = "2";
  h2.style.animation = "1.3s h2Appear"





  let image = document.createElement('img');
  image.style.height = "150px";
  image.style.marginTop = "20px";
  image.style.animation = "2s imageAppear";
  let slush = "assets/img/slush.webp";
  image.src = slush;

  let imgAnimation = `
  height: 200px;
  animation: 2s imgAnimationOpen;
  animation: 2s imgAnimationClose;

  @keyframes animationOpen {
    from {
      z-index: -9999;
      height: 0px;
      opacity: 0;
    }

    to {
      z-index: 9999;
      height: 200px;
      opacity: 1;
    }
  }

  @keyframes animationClose {

    from {
      z-index: 9999;
      height: 200px;
      opacity: 1;
    }

    to {
      z-index: -9999;
      height: 0px;
      opacity: 0;
    }
  }`

  let imgAnimationClose = `

  `




  let imageContainer = document.createElement('div');
  document.body.append(imageContainer);
  imageContainer.append(image);


  let h3 = document.createElement('h3');
  h3.innerHTML = "Slush";
  h3.className = "image-title";
  document.body.append(h3);
  h3.style.fontFamily = "'Geo', sans-serif";
  h3.style.color = purple;
  h3.style.letterSpacing = "0.1em";
  h3.style.fontSize = "30px";
  h3.style.marginTop = "25px";
  h3.style.marginLeft = "30px";
  h3.style.marginRight = "30px";
  h3.style.animation = "2.5s h3Appear";




  let counter = document.createElement('div');
  document.body.append(counter);
  counter.style.animation = "1s counterAppear";


  let arrowFastMinus = document.createElement('button');
  arrowFastMinus.className = "arrow arrow-fast-minus";
  arrowFastMinus.innerHTML = "-10";

  let arrowMinus = document.createElement('button');
  arrowMinus.className = "arrow arrow-minus";
  arrowMinus.innerHTML = "-1";

  let number = document.createElement('span');
  number.className = "number";
  number.innerHTML = "0";


  let numberCssText = `
  color: ${purple};
  font-size: 50px;
  font-family: 'Geo', sans-serif;
  `;
  number.style.cssText = numberCssText;
  number.style.marginLeft = "40px";



  let arrowPlus = document.createElement('button');
  arrowPlus.className = "arrow arrow-plus";
  arrowPlus.innerHTML = "+1";

  let arrowFastPlus = document.createElement('button');
  arrowFastPlus.className = "arrow arrow-fast-plus";
  arrowFastPlus.innerHTML = "+10";


  counter.append(arrowFastMinus);
  counter.append(arrowMinus);
  counter.append(number);
  number.insertAdjacentHTML("afterend", "<span class='grade'>°</span>");
  counter.append(arrowPlus);
  counter.append(arrowFastPlus);


  let grade = document.querySelector('.grade');
  grade.style.cssText = numberCssText;
  grade.style.marginRight = " 33px";

  let arrow = document.querySelectorAll('.arrow');
  for(let a=0; a<arrow.length; a++) {
    arrow[a].style.cssText = `
    background-color: ${purple};
    color: ${cyan};
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 40px;
    font-family: 'Geo', sans-serif;
    transform: skewX(-20deg);
    transition: all 0.3s;
    `;

    if(number.innerHTML >= 20) {
      arrow[a].style.color = orange;
    }

    if(number.innerHTML <= 19) {
      arrow[a].style.color = cyan;
    }
  }


  counter.style.position = "fixed";
  counter.style.bottom = "10px";
  counter.style.left = "0";
  counter.style.right = "0";



        function arrowFastMinusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num - 10;
          conditions();

        }

        function arrowMinusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num - 1;
          conditions();

        }

        function arrowPlusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num + 1;
          conditions();

        }


        function arrowFastPlusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num + 10;
          conditions();

        }


        function conditions() {
          if(number.innerHTML <= -32) {
            let freeze = "assets/img/freeze.webp";
            image.src = freeze;
            h3.innerHTML = "Random fact! A kpop band named Stray kids has a song. It's called FREEZE. Just saying.";
          }

          if(number.innerHTML >= -31 && number.innerHTML <= -24) {
            let ice = "assets/img/ice.webp";
            image.src = ice;
            h3.innerHTML = "Some people like a glass of ice too";
          }

          if(number.innerHTML >= -25 && number.innerHTML < -5) {
            let iceCream = "assets/img/ice-cream.webp";
            image.src = iceCream;
            h3.innerHTML = "Ice-cream, maybe?";
          }

          if(number.innerHTML >= -5 && number.innerHTML <= 0) {
            image.src = slush;
            image.title = "Watermelon juice photo created by mrsiraphol - www.freepik.com";
            h3.innerHTML = "Slush";
          }

          if(number.innerHTML >= 1 && number.innerHTML <= 4) {
            let milk = "assets/img/milk.webp";
            image.src = milk;
            h3.innerHTML = "Fresh milk";
          }

          if(number.innerHTML >= 5 && number.innerHTML <= 9) {
            let beer = "assets/img/beer.webp";
            image.src = beer;
            h3.innerHTML = "Beer";
          }

          if(number.innerHTML >= 10 && number.innerHTML <= 14) {
            let whiteWine = "assets/img/white-wine.webp";
            image.src = whiteWine;
            h3.innerHTML = "White wine";
          }

          if(number.innerHTML >= 15 && number.innerHTML <= 19) {
            let redWine = "assets/img/red-wine.webp";
            image.src = redWine;
            h3.innerHTML = "Red wine";
          }

          if(number.innerHTML >= 20 && number.innerHTML <= 29) {
            let water = "assets/img/water.webp";
            image.src = water;
            h3.innerHTML = "Water";
          }

          if(number.innerHTML >= 30 && number.innerHTML <= 37) {
            let bubbleTea = "assets/img/bubble-tea.webp";
            image.src = bubbleTea;
            h3.innerHTML = "Bubble tea";
          }

          if(number.innerHTML >= 38 && number.innerHTML <= 49) {
            let sake = "assets/img/sake.webp";
            image.src = sake;
            h3.innerHTML = "Sake";
          }

          if(number.innerHTML >= 50 && number.innerHTML <= 59) {
            let mulledWine = "assets/img/mulled-wine.webp";
            image.src = mulledWine;
            h3.innerHTML = "Mulled wine";
          }

          if(number.innerHTML >= 60 && number.innerHTML <= 65) {
            let irishCoffee = "assets/img/irish-coffee.webp";
            image.src = irishCoffee;
            h3.innerHTML = "Irish coffee";
          }

          if(number.innerHTML >= 66 && number.innerHTML <= 71) {
            let hotChocolate = "assets/img/hot-chocolate.webp";
            image.src = hotChocolate;
            h3.innerHTML = "Hot chocolate";
          }


          if(number.innerHTML >= 72 && number.innerHTML <= 81) {
            let greenTea = "assets/img/green-tea.webp";
            image.src = greenTea;
            h3.innerHTML = "Green tea";
          }


          if(number.innerHTML >= 82 && number.innerHTML <= 87) {
            let blackTea = "assets/img/black-tea.webp";
            image.src = blackTea;
            h3.innerHTML = "Black tea";
          }


          if(number.innerHTML >= 88 && number.innerHTML <= 95) {
            let coffee = "assets/img/coffee.webp";
            image.src = coffee;
            h3.innerHTML = "Coffee";
          }


          if(number.innerHTML >= 96) {
            let alcool = "assets/img/alcool.webp";
            image.src = alcool;
            h3.innerHTML = "Choose your fighter";
          }

          if(number.innerHTML >= 20) {
            document.body.style.backgroundImage = `linear-gradient(0deg, ${orange}, ${purple})`;
          }

          if(number.innerHTML <= 19) {
            document.body.style.backgroundImage = `linear-gradient(0deg, ${cyan}, ${purple})`;
          }


        }


        function keysPressed() {
          if(event.key == "ArrowLeft") {
            arrowMinusFunction();
          }

          if(event.key == "ArrowRight") {
            arrowPlusFunction();
          }

          if(event.key == "ArrowDown") {
            arrowFastMinusFunction();
          }

          if(event.key == "ArrowUp") {
            arrowFastPlusFunction();
          }
        }



        arrowFastMinus.addEventListener('click', arrowFastMinusFunction);
        arrowMinus.addEventListener('click', arrowMinusFunction);
        arrowPlus.addEventListener('click', arrowPlusFunction);
        arrowFastPlus.addEventListener('click', arrowFastPlusFunction);

        window.addEventListener('keydown', keysPressed);
