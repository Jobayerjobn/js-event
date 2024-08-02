

// function customer(customer){

//     console.log('receive order for customer 1');


//     setTimeout(() => {

//         console.log('cooking order for customer 1');

//     }, 3000);
//     console.log('Processing order for customer 1');

    
// };
// console.log('take order for customer 1');
// customer();

// console.log('completed order for customer 1');

// Callback practice

// const takeOrder = (customer, callBack) => {

//    console.log(`Take order for ${customer}`);
//    callBack(customer);


// }


// const processOrder = (customer, callBack) =>{

//     setTimeout(() => {

//         console.log(`cooking completed`);
//         console.log(`processing order for${customer}`);
//         callBack(customer);


//     }, 4000);
// };

// const completedOrder  = (customer) => {

//     console.log(`completed order for ${customer}`);

// };

// takeOrder('Customer1 ' , (customer) => {
//    processOrder(customer, (customer) => {
//     completedOrder(customer, (customer) => {

//     });
//    });
// });
// console.log('Hello for new customer');

//  create new promise;


//  promise chain;

// myName.then((name) => {

//     getAge(name).then((age) => {
//         console.log('My name is  ' + name + " my old is " + age + ' Years old');
//     })
// })


//  Practice await;


// We know There are five selectors in javascript;
// number 1: document.getElementById("idName");
// number 2: document.getElementsByClassName("hell");
// number 3 : document.getElementsByTagName("hello");
// number 4: document.querySelector('Hello');
// number 5: document.querySelectorAll("How");

// const selector = document.getElementById('Hello');
// console.log(selector);


// const selector1 = document.getElementsByClassName('name', 'hello');
// console.log(selector1);


// const selector2 = document.getElementsByTagName('h1', 'p');
// console.log(selector2);
// const hello = document.getElementById('Hello');
// // console.log(hello);

// // const helloStyles = {

// //  margin: '10px',
// //  fontSize: '19px',
// //  color: 'red',
// //  textAlign: 'center',

// // }

// // Object.assign(helloStyles);

// // const how = document.getElementById('Hello');

// // const howStyles = {
// //     color: 'red',
// //     textAlign: 'center',
// //     fontSize: '30px',
// //     backgroundColor: 'black',

// // };

// // Object.assign(how.style, howStyles);


// // const hello = document.getElementById('Hello');

// // const helloStyles = {
// //     color : 'res',
// //     backgroundColor: 'black',
// //     fontSize: 'verdana',
// //     resizeBy: 'none',

// // };
// // Object.assign(hello.style, helloStyles);

// // const how = document.getElementById('Hello');

// // const howStyles = {
// //     color: 'red',
// //     backgroundColor: 'black',
// //     fontSize: 'arial',

// // };

// // Object.assign(how.style,howStyles);

// // const why = document.getElementById('Hello');

// // const whyStyles = {

// //     color:  'red',
// //     backgroundColor:  'black',
// //     fontSize:  'blue',
// //     padding:  'none',
// // };

// // Object.assign(why.style, whyStyles);


// const h1 = document.getElementById('Hello');

// const h1Styles = {
//     color:  'red',
//     backgroundColor: 'blue',
//     fontSize: '20px',
//     padding: 'none',
//     margin: 'none',
//     bozSizing: 'borderBox',
// };

// Object.assign(h1.style, h1Styles);


let btn = document.getElementById('btn');
let para = document.getElementById('para');

const btnStyles = {

    fontSize: '20px',
    color: '#27ae60',
    cursor: 'pointer',



};

Object.assign(btn.style, btnStyles);

const paraStyles = {

    fontSize: '24px',
    color: '#27ae60',
  
   

};

Object.assign(para.style, btnStyles);


// let shown = false;  // global variable . this access all;


// btn.addEventListener('click', function(){

//     if(shown){

//         para.style.visibility = 'hidden';
//         shown =  false;
//         btn.innerHTML = 'Show'


//     }else{
//         para.style.visibility = 'visible';
//         shown = true;
//         btn.innerHTML = 'Hide';

//     }

// })

//  second way 

// btn.addEventListener('click', function(){
//    let isShown = false;

//    if(isShown) {
//     para.style.visibility = 'show';
//     isShown = false;
//     btn.innerHTML = "Show";
    
//    }else{

//     para.style.visibility = 'hidden';
//     isShown = true;
//     btn.innerHTML = 'Hide';

//    }


// })


btn.addEventListener('click', function() {

let show = false;

if(show) {
 para.style.visibility = 'hidden';
 show = false;
 btn.innerHTML = 'Show';

}else{

    para.style.visibility = 'visible';
    show = true;
    btn.innerHTML = 'Hide';
   
   
}

  


});
