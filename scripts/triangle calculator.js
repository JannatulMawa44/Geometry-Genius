// console.log('connected');


/**
 * objective: get base,height of a triangle.calculate the area by using the provided formula.and then display the area.
 * step-1 : get base value of the triangle
 * step-2 : add an id the base input field
 * step-3 : use getElementById to acess the input field
 * step-4 : get value from the input field(value is string now)
 * step-5 : convert the value to a number.use parseFloat
 * 
 * 
 */


// function calculatorTriangleArea(){
//    console.log('inside function')
// }

function calculatorTriangleArea(){
   //get triangle base value
   const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText =  triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
   console.log( triangleBaseText)
   //console.log(base)

   //get triangle height

   const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText =  triangleHeightInput.value;
    const Height = parseFloat(triangleHeightText)
   console.log( triangleHeightText);

    //calculate triangle area
    const area = 0.5 * base * Height;
    console.log('area of triangle is :',area)



    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
   }