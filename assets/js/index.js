  let purple = "#490051";
  let cyan = "#1DD5C7";
  let pink = "#f95f85";
  let magenta = "#fa257d";
  let orange = "#FF9A3C";


  /*  Styling body  */

  let bodyCss = `
  font-family: sans-serif;
  text-align: center;
  transition: all 0.5s;
  background-repeat: no-repeat;
  background-image: linear-gradient(0deg, ${cyan}, ${purple});
  height: 100vh;
  overflow-x: hidden;
  }
    `

  document.body.style.cssText = bodyCss;

  /*  Creating new elements and styling them  */

  let h1 = document.createElement('h1');
  h1.innerHTML = "What drink would you like?";
  document.body.append(h1);
  h1.style.fontFamily = "'VT323', monospace";
  h1.style.fontWeight = "normal";
  h1.style.color = cyan;
  h1.style.lineHeight = "1.3";
  h1.style.marginTop = "0px";
  h1.style.fontSize = "70px";
  h1.style.animation = "0.7s h1Appear";



  let h2 = document.createElement('h2');
  h2.innerHTML = "select your temperature";
  document.body.append(h2);
  h2.style.fontFamily = "'Geo', sans-serif";
  h2.style.letterSpacing = "0.1em";
  h2.style.color = cyan;
  h2.style.fontWeight = "normal";
  h2.style.lineHeight = "2";
  h2.style.fontSize = "30px";
  h2.style.animation = "0.7s h2Appear"



  let arrowCyan = "assets/img/arrow-cyan.svg";
  let arrowCyanPurple = "assets/img/arrow-cyan-purple.svg";
  let arrowPurple = "assets/img/arrow-purple.svg";
  let arrowCss = `
  width: 30px;
  height: 30px;
  position: fixed;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  opacity: 0;
  z-index: -9999;
  `;


  let arrow1 = document.createElement('img');
  arrow1.src = arrowCyan;
  document.body.append(arrow1);
  arrow1.style.cssText = arrowCss;
  arrow1.style.top = "45%";
  arrow1.style.animation = "1.3s arrowMove";

  let arrow2 = document.createElement('img');
  arrow2.src = arrowCyan;
  document.body.append(arrow2);
  arrow2.style.cssText = arrowCss;
  arrow2.style.top = "50%";
  arrow2.style.animation = "1.4s arrowMove";


  let arrow3 = document.createElement('img');
  arrow3.src = arrowCyanPurple;
  document.body.append(arrow3);
  arrow3.style.cssText = arrowCss;
  arrow3.style.top = "55%";
  arrow3.style.animation = "1.5s arrowMove";


  let arrow4 = document.createElement('img');
  arrow4.src = arrowPurple;
  document.body.append(arrow4);
  arrow4.style.cssText = arrowCss;
  arrow4.style.top = "60%";
  arrow4.style.animation = "1.6s arrowMove";


  let arrow5 = document.createElement('img');
  arrow5.src = arrowPurple;
  document.body.append(arrow5);
  arrow5.style.cssText = arrowCss;
  arrow5.style.top = "65%";
  arrow5.style.animation = "1.7s arrowMove";






  let image = document.createElement('img');
  image.style.height = "150px";
  image.style.marginTop = "20px";
  image.style.position = "absolute";
  image.style.top = "30%";
  image.style.left = "50%";
  image.style.transform = "translateX(-50%)";
  image.style.animation = "2s imageAppear";
  let slush = "assets/img/slush.webp";
  image.src = slush;


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
  h3.style.marginTop = "25px";
  h3.style.position = "absolute";
  h3.style.top = "60%";
  h3.style.left = "50%";
  h3.style.fontSize = "30px";
  h3.style.transform = "translateX(-50%)";
  h3.style.animation = "2.5s h3Appear";





  let counter = document.createElement('div');
  document.body.append(counter);
  counter.style.animation = "1s counterAppear";


  let fastMinus = document.createElement('button');
  fastMinus.className = "direction fast-minus";
  fastMinus.innerHTML = "-10";

  let minus = document.createElement('button');
  minus.className = "direction minus";
  minus.innerHTML = "-1";

  let number = document.createElement('span');
  number.className = "number";
  number.innerHTML = "0";
  number.style.fontSize = "50px";
  number.style.marginLeft = "40px";
  number.style.color = purple;
  number.style.fontFamily = "'Geo', sans-serif";



  let plus = document.createElement('button');
  plus.className = "direction plus";
  plus.innerHTML = "+1";

  let fastPlus = document.createElement('button');
  fastPlus.className = "direction fast-plus";
  fastPlus.innerHTML = "+10";


  counter.append(fastMinus);
  counter.append(minus);
  counter.append(number);
  number.insertAdjacentHTML("afterend", "<span class='grade'>°</span>");
  counter.append(plus);
  counter.append(fastPlus);


  let grade = document.querySelector('.grade');
  grade.style.marginRight = " 33px";
  grade.style.color = purple;
  grade.style.fontFamily = "'Geo', sans-serif";
  grade.style.fontSize = "50px";


  let direction = document.querySelectorAll('.direction');

  for(let a=0; a<direction.length; a++) {
    direction[a].style.cssText = `
    background-color: ${purple};
    color: ${cyan};
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 40px;
    font-family: 'Geo', sans-serif;
    transform: skewX(-20deg);
    cursor: pointer;
    transition: all 0.3s;
    `;

  }



  counter.style.position = "fixed";
  counter.style.bottom = "7%";
  counter.style.left = "0";
  counter.style.right = "0";



  /*  Creating functions to make the buttons work and the images change  */



        function fastMinusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num - 10;
          conditions();

        }

        function minusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num - 1;
          conditions();

        }

        function plusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num + 1;
          conditions();

        }


        function fastPlusFunction() {
          const num = parseInt(number.innerHTML);
          number.innerHTML = num + 10;
          conditions();

        }


        function conditions() {
          if(number.innerHTML <= -32) {
            let freeze = "assets/img/freeze.webp";
            image.src = freeze;
            h3.innerHTML = "Random fact! A kpop band named Stray kids has a song. It's called FREEZE. <br> Just saying.";
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


            // a part of the conditions() function that changes the background gradient colors depending on the temperature


          if(number.innerHTML >= 20) {
            document.body.style.backgroundImage = `linear-gradient(0deg, ${orange}, ${purple})`;
            h1.style.color = orange;
            h2.style.color = orange;
          }

          if(number.innerHTML <= 19) {
            document.body.style.backgroundImage = `linear-gradient(0deg, ${cyan}, ${purple})`;
            h1.style.color = cyan;
            h2.style.color = cyan;
          }

          if(number.innerHTML >= 20) {
            for(let a=0; a<direction.length; a++) {
              direction[a].style.color = orange;
            }
          }

          if(number.innerHTML <= 19) {
            for(let a=0; a<direction.length; a++) {
              direction[a].style.color = cyan;
            }
          }


        }


           // making it possible to change the counter values by pressing Left, Right, Down and Up keyboard keys

        function keysPressed() {
          if(event.key == "ArrowLeft") {
            minusFunction();
          }

          if(event.key == "ArrowRight") {
            plusFunction();
          }

          if(event.key == "ArrowDown") {
            fastMinusFunction();
          }

          if(event.key == "ArrowUp") {
            fastPlusFunction();
          }
        }





        fastMinus.addEventListener('click', fastMinusFunction);
        minus.addEventListener('click', minusFunction);
        plus.addEventListener('click', plusFunction);
        fastPlus.addEventListener('click', fastPlusFunction);

        window.addEventListener('keydown', keysPressed);



    //  Responsive: I tried, but failed



    /*      window.addEventListener('resize', responsiveFunction);


          function responsiveFunction() {
            let responsiveWidth = document.documentElement.clientWidth;

            if(responsiveWidth >= 801) {
              h1.style.marginTop = "0px";
              h1.style.fontSize = "70px";
              h1.style.animation = "1s h1Appear";
              h2.style.fontSize = "30px";
              h2.style.animation = "1.3s h2Appear"
              h3.style.fontSize = "30px";
              number.style.fontSize = "50px";
              number.style.marginLeft = "40px";
              grade.style.marginRight = " 33px";

              for(let a=0; a<direction.length; a++) {
                direction[a].style.paddingTop = "10px";
                direction[a].style.paddingBottom = "10px";
                direction[a].style.paddingLeft = "20px";
                direction[a].style.paddingRight = "20px";
                direction[a].style.marginTop = "10px";
                direction[a].style.marginBottom = "10px";
                direction[a].style.marginLeft = "10px";
                direction[a].style.marginRight = "10px";
                direction[a].style.fontSize = "40px";
              }
            }


            if(responsiveWidth <= 800 && responsiveWidth >=431) {
                h1.style.fontSize = "40px";
                h1.style.marginTop = "30px";
                h1.style.animation = "1s h1TabletAppear";
                h2.style.fontSize = "20px";
                h2.style.animation = "1.3s h2TabletAppear";
                h3.style.fontSize = "20px";



                for(let a=0; a<direction.length; a++) {
                  direction[a].style.paddingTop = "5px";
                  direction[a].style.paddingBottom = "5px";
                  direction[a].style.paddingLeft = "10px";
                  direction[a].style.paddingRight = "10px";
                  direction[a].style.marginTop = "5px";
                  direction[a].style.marginBottom = "5px";
                  direction[a].style.marginLeft = "5px";
                  direction[a].style.marginRight = "5px";
                  direction[a].style.fontSize = "30px";
                }

                number.style.marginLeft = "20px";
                number.style.fontSize = "40px";
                grade.style.marginRight = " 13px";
                grade.style.fontSize = "40px";
            }

            if(responsiveWidth <= 430) {
              h1.style.fontSize = "9vw";
              h1.style.animation = "1s h1MobileAppear";
              h2.style.fontSize = "7vw";
              h2.style.animation = "1.3s h2MobileAppear";
              h3.style.fontSize = "7vw";


              for(let a=0; a<direction.length; a++) {
                direction[a].style.paddingTop = "5px";
                direction[a].style.paddingBottom = "5px";
                direction[a].style.paddingLeft = "10px";
                direction[a].style.paddingRight = "10px";
                direction[a].style.marginTop = "5px";
                direction[a].style.marginBottom = "7px";
                direction[a].style.marginLeft = "1px";
                direction[a].style.marginRight = "1px";
                direction[a].style.fontSize = "6vw";
              }

              number.style.marginLeft = "9px";
              number.style.fontSize = "9vw";
              grade.style.marginRight = " 6px";
              grade.style.fontSize = "9vw";
            }
          }

*/
