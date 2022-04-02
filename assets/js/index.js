  let purple = "#490051";
  let cyan = "#1DD5C7";
  let pink = "#f95f85";
  let magenta = "#fa257d";

  let bodyCss = `
  font-family: sans-serif;
  text-align: center;
  transition: all 0.5s;
  background-repeat: no-repeat;
  background-color: none;
  background-image: linear-gradient(0deg, ${magenta}, ${purple});
  height: 100vh;
  }
    `

  document.body.style.cssText = bodyCss;


  let h1 = document.createElement('h1');
  h1.innerHTML = "What drink would you like?";
  document.body.append(h1);
  h1.style.marginTop = "20px";
  h1.style.fontFamily = "'VT323', monospace";
  h1.style.fontWeight = "normal";
  h1.style.color = cyan;
  h1.style.fontSize = "55px";
  h1.style.lineHeight = "1.3";
  h1.style.animation = "2s h1Appear";


  let h2 = document.createElement('h2');
  h2.innerHTML = "PLEASE, SELECT YOUR TEMPERATURE";
  document.body.append(h2);
  h2.style.fontFamily = "'Quantico', sans-serif";
  h2.style.fontSize = "20px";
  h2.style.color = cyan;
  h2.style.fontWeight = "normal";
  h2.style.lineHeight = "2";





  let image = document.createElement('img');
  image.style.height = "200px";
  image.style.marginTop = "20px";
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
  h3.style.fontFamily = "'Quantico', sans-serif";
  h3.style.color = cyan;



  let counter = document.createElement('div');
  document.body.append(counter);


  let arrowFastMinus = document.createElement('button');
  arrowFastMinus.className = "arrow arrow-fast-minus";
  arrowFastMinus.innerHTML = "-10";

  let arrowMinus = document.createElement('button');
  arrowMinus.className = "arrow arrow-minus";
  arrowMinus.innerHTML = "-1";

  let number = document.createElement('span');
  number.className = "number";
  number.innerHTML = "0";


  let arrowPlus = document.createElement('button');
  arrowPlus.className = "arrow arrow-plus";
  arrowPlus.innerHTML = "+1";

  let arrowFastPlus = document.createElement('button');
  arrowFastPlus.className = "arrow arrow-fast-plus";
  arrowFastPlus.innerHTML = "+10";


    let numberCssText = `
    color: ${purple};
    font-size: 30px;
    `;

  counter.append(arrowFastMinus);
  counter.append(arrowMinus);
  counter.append(number);
  number.insertAdjacentHTML("afterend", "<span class='grade'>°</span>");
  counter.append(arrowPlus);
  counter.append(arrowFastPlus);


  number.style.cssText = numberCssText;

  let grade = document.querySelector('.grade');
  grade.style.cssText = numberCssText;

  let arrow = document.querySelectorAll('.arrow');
  for(let a=0; a<arrow.length; a++) {
    arrow[a].style.cssText = `
    background-color: ${purple};
    color: ${cyan};
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 30px;
    transform: skewX(-20deg);
    transition: all 0.3s;
    `;
  }


  let progress = document.createElement('progress');
  progress.className = "progress";
  progress.value = "30";
  progress.min = "0";
  progress.max = "170";
  counter.append(progress);
  progress.style.width = "90%";


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
            document.body.style.backgroundColor = "black";
            progress.value = "0";

          }

          if(number.innerHTML >= -31 && number.innerHTML <= -24) {
            let ice = "assets/img/ice.webp";
            image.src = ice;
            h3.innerHTML = "Or maybe you'll appreciate a delicious glass of pure ice?";
            document.body.style.backgroundColor = "white";
            progress.value = "10";

          }

          if(number.innerHTML >= -25 && number.innerHTML < -5) {
            let iceCream = "assets/img/ice-cream.webp";
            image.src = iceCream;
            h3.innerHTML = "I guess you want ice cream at this point?";
            document.body.style.backgroundColor = "gray";
            progress.value = "20";

          }

          if(number.innerHTML >= -5 && number.innerHTML <= 0) {
            image.src = slush;
            image.title = "Watermelon juice photo created by mrsiraphol - www.freepik.com";
            h3.innerHTML = "Slush";
            document.body.style.backgroundColor = "lightblue";
            progress.value = "30";
          }

          if(number.innerHTML >= 1 && number.innerHTML <= 4) {
            let milk = "assets/img/milk.webp";
            image.src = milk;
            h3.innerHTML = "Fresh milk";
            document.body.style.backgroundColor = "blue";
            progress.value = "40";
          }

          if(number.innerHTML >= 5 && number.innerHTML <= 9) {
            let beer = "assets/img/beer.webp";
            image.src = beer;
            h3.innerHTML = "Beer";
            document.body.style.backgroundColor = "maroon";
            progress.value = "50";

          }

          if(number.innerHTML >= 10 && number.innerHTML <= 14) {
            let whiteWine = "assets/img/white-wine.webp";
            image.src = whiteWine;
            h3.innerHTML = "White wine";
            document.body.style.backgroundColor = "lightyellow";
            document.body.style.color = "black";
            progress.value = "60";

          }

          if(number.innerHTML >= 15 && number.innerHTML <= 19) {
            let redWine = "assets/img/red-wine.webp";
            image.src = redWine;
            h3.innerHTML = "Red wine";
            document.body.style.backgroundColor = "darkred";
            progress.value = "70";

          }

          if(number.innerHTML >= 20 && number.innerHTML <= 29) {
            let water = "assets/img/water.webp";
            image.src = water;
            h3.innerHTML = "Water";
            progress.value = "80";
            document.body.style.backgroundColor = "cyan";
          }

          if(number.innerHTML >= 30 && number.innerHTML <= 37) {
            let bubbleTea = "assets/img/bubble-tea.webp";
            image.src = bubbleTea;
            h3.innerHTML = "Bubble tea";
            progress.value = "90";
            document.body.style.backgroundColor = "lightgreen";
          }

          if(number.innerHTML >= 38 && number.innerHTML <= 49) {
            let sake = "assets/img/sake.webp";
            image.src = sake;
            h3.innerHTML = "Sake";
            progress.value = "100";
            document.body.style.backgroundColor = "green";
          }

          if(number.innerHTML >= 50 && number.innerHTML <= 59) {
            let mulledWine = "assets/img/mulled-wine.webp";
            image.src = mulledWine;
            h3.innerHTML = "Mulled wine";
            progress.value = "110";
            document.body.style.backgroundColor = "blue";

          }

          if(number.innerHTML >= 60 && number.innerHTML <= 65) {
            let irishCoffee = "assets/img/irish-coffee.webp";
            image.src = irishCoffee;
            h3.innerHTML = "Irish coffee";
            progress.value = "120";
            document.body.style.backgroundColor = "lightpink";

          }

          if(number.innerHTML >= 66 && number.innerHTML <= 71) {
            let hotChocolate = "assets/img/hot-chocolate.webp";
            image.src = hotChocolate;
            h3.innerHTML = "Hot chocolate";
            progress.value = "130";
            document.body.style.backgroundColor = "red";

          }


          if(number.innerHTML >= 72 && number.innerHTML <= 81) {
            let greenTea = "assets/img/green-tea.webp";
            image.src = greenTea;
            h3.innerHTML = "Green tea";
            progress.value = "140";
            document.body.style.backgroundColor = "gray";

          }


          if(number.innerHTML >= 82 && number.innerHTML <= 87) {
            let blackTea = "assets/img/black-tea.webp";
            image.src = blackTea;
            h3.innerHTML = "Black tea";
            progress.value = "150";
            document.body.style.backgroundColor = "navy";

          }


          if(number.innerHTML >= 88 && number.innerHTML <= 95) {
            let coffee = "assets/img/coffee.webp";
            image.src = coffee;
            h3.innerHTML = "Coffee";
            progress.value = "160";
            document.body.style.backgroundColor = "white";

          }


          if(number.innerHTML >= 96) {
            let alcool = "assets/img/alcool.webp";
            image.src = alcool;
            h3.innerHTML = "Choose your fighter";
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            progress.value = "170";

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
