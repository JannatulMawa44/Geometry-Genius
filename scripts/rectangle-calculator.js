//console.log('rect connected');


function calculatorRectangleArea(){
   //get rectangle weidth value
   const rectangleWeidthInput = document.getElementById('rectangle-weidth');
    const  rectangleWeidthText =  rectangleWeidthInput.value;
    const weidth = parseFloat( rectangleWeidthText)
   console.log(  rectangleWeidthText)
   //console.log(base)

   //get rectangle length

   const rectangleLengthInput= document.getElementById('rectangle-length');
    const rectangleLengthText =  rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
   console.log( rectangleLengthText);

    //calculate rectanglee area
    const area = weidth * length;
    console.log('area of rectangle is :',area)



    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
   }