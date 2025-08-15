// Function Constructor

function Person (name) {
    this.name = name;
    this.age = 23;
}
var object = new Person("Sudheer");
// console.log(object);

function Personnew () {};
Personnew.prototype.name = "Sudheer new";
var objectnew = new Personnew();
// console.log(objectnew.name);

// Object Assign

const orgObject = {company:"XYZ Corp"};
const carObject = {"name":"Toyota"};
const staff = Object.assign({},orgObject, carObject);
// console.log(staff);

// Singleton Pattern

var single = new (function (){
    this.name = "single";
})();

// console.log(single);

// Call

var employee = {"firstname":"John", "lastname":"Peter"};
function getName(fname, lname) {
    console.log(fname +"-"+this.firstname+"-"+this.lastname+"-"+lname);
}
// getName.call(employee, "hello", "world");

// Apply

var employee = {"firstname":"John", "lastname":"Peter"};
function getNameNew(fname, lname) {
    console.log(fname +"-"+this.firstname+"-"+this.lastname+"-"+lname);
}
// getNameNew.apply(employee, ["Hello", "world"]);

// Remove Line Breaks from string

function remove_linebreaks (message) {
    return message.replace(/[\r\n]+/gm, "");
}

// What happens if we add two arrays

//console.log(["a"]+["b"]); //ab
//console.log([]+[]); //""
//console.log(![]+[]);//false

// Prepend additive operator on falsy values

// console.log(+null); //0
// console.log(+undefined); //Nan
// console.log(+false); //0
// console.log(+NaN); //NaN
// console.log(+""); //0

// Remove falsy  value from array
// const myArray = [false, null, 1, 5, undefined];
// console.log(myArray.filter(x => x));
// console.log(myArray.filter(Boolean));

// Get unique values of an array
//  const arr = [1,1,2,3,4,5,4,7];
//  const arr1=[10,11,12,10];
// console.log([...new Set(arr)]);\

// Print Numbers sequentially

// function printNumber() {
//     let arr = [1,2,3,4,5,7,11,12,13,14,15,87,96];
//     let j = 0, k = 0;
//     var str="";
//     arr.forEach((o,i)=>{
//         if(arr[i+1] - arr[i] === 1) {
//             j++;
//             k++;
//             if(j===1) {
//                 str+=arr[i];
//             }
//             else {
//                 if(k===2) {
//                     str+="-";
//                 }
//                 else {
//                     k=0;
//                 }
//             }
//         }
//         else {
//             if(i === arr.length-1) {
//                 str+=arr[i];
//             }
//             else {
//                 str+=arr[i]+",";
//             }
//             j=0;
//         }
//     });
//     return str;
// }

// Convert array to object
// var fruits = ["Banana", "Apple", "Orange"];
// var fruitsObject = {...fruits};
// console.log(fruitsObject);

// Check if an argument is number

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// console.log(isNumber("a"));

// Check array or string exists

// console.log(["s","t"].indexOf("s") >= 0);

// Remove duplicates using filter 

var filterarr=["a","b","c","a","d"];
// console.log(filterarr.filter((n, i) => filterarr.indexOf(n) === i));
// console.log(filterarr.filter((n) => n !== "a"));

// Try & catch
// try {
//     var a = new XMLHttpRequest();
// }
// catch(e) {
//     console.log(e.message);
// }

//test123();
// function test123() {
//  console.log("test123");
// }

// var test123 = function () {
//     console.log("777");
// }
// const duplicates=() => {
//     let a=["a","b","c","a","d","b","a","d","e"];
//     a=a.sort();
//     let alen=a.length,counter=1, sub=0;
//     for (var i=0;i<alen;i++){
//       if(a[i]===a[i+1]){
//         counter++;
//       }
//       else {                
//         for (var j=0;j<counter;j++) {
//             if(j===0) {
//                 sub++;
//             }
//             console.log(a[i]+""+j+""+sub);
//         }
//         counter=1;
//       }
//     }
//   }
  //console.log(duplicates());

  // function arrayMin(arr) {
  //   var len = arr.length, min = Infinity;
  //   while (len--) {
  //     if (arr[len] < min) {
  //       min = arr[len];
  //     }
  //   }
  //   return min;
  // };

  // Custom recursive number sorting
   
// function bc(d){ //Closure
// 	var i=0,arr=[];	
// 	function cd(d,i){			
// 		while(i<d.length){
// 			arr.push(arrayMin(d));
//       var index = d.findIndex((e) => e === arrayMin(d));
//       d.splice(index,1);            
//       return cd(d,0);
// 		}		
// 	}	
// 	cd(d,i);	
// 	return arr;
// }
// console.log(bc([1,104,51,88,76]));

// var arr = [1,2,3,4,5];
// console.log(arr.reduce((a,b) => a + b));
// var keys = {
//   "firstname":"John",
//   "lastname":"Peter"
// }
// for (var [key, value] of Object.entries(keys)){
//   console.log(key+"-"+value);
// }

// Promise example
// var p = new Promise((resolve, reject) =>{
//   var f = new XMLHttpRequest();
//   f.open("GET","contactus.html")
//   f.onload=()=> {
//     if(f.status===200) {
//       resolve(f.response);
//     }
//     else {
//       reject("No");
//     }
//   }
//   f.send();
// });
// p.then(function(data) {
//   console.log(data);
// }, function(error) {
//   console.log(error);
// })

// function square(n) {

//   return n * n;
// }

// function memoizedSquare() {
//   let cache = {};
//   return function optimizedSquare(num) {
//     if (num in cache) {
//       console.log('Returning from cache');
//       return cache[num]
//     } else {
//       console.log('Computing square');
//       const result = square(num);
//       cache[num] = result;
//       return result;
//     }
//   }
// }

// const memoSquare = memoizedSquare();
//console.log(memoSquare(9999999999999999));
//console.log(memoSquare(9999999999999999));
// Recursive function
// function parent() {
//   var arr=[];
//   function recursive(n) {
//     if(n===0) {
//       console.log("Zero");
//       return;
//     }
//     recursive(n-1);
//     arr.push(n);
//     }
//     recursive(3);
//     // console.log(arr);
// }
// parent();
//Image preloader
// function imageLoad() {      
//   let img = new Image();
//   img.onload = () => {
//     document.querySelector(".loader").style.display="none";
//   }
//   img.onerror = () => {
//     this.loader=false;
//     this.error=true;
//   };
//   img.src = "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png";
//   document.querySelector(".image").setAttribute("src",img.src);
//   }
//   imageLoad();
// function sum() {
//     var a=[1,2,3,4,6];
//     var i = 0;
//     a.forEach((b) => {
//         //console.log(b);
//         i+=b;
//     })
//     return i;
// }
//console.log(sum());
// function timer(i){
//     setTimeout(function() {
//         i++;
//         var j=10-i;   
//         if(j===-1) {
//             window.location.href="https://www.w3schools.com";
//             return;
//         } 
//         document.getElementById("timer").innerHTML=j;
//         timer(i);
//     },1000)
// }
// timer(-1);
//RECURSION
function range(x,y) {
    var na=[];
    function rangefn(x,y) {
        if (x===y-1) {
            return na;
        }
        x=x+1;
        na.push(x);
        rangefn(x,y);
    }
    rangefn(x,y);
    if(na.length===(y-x-1)) {
        return na;
    }
}
//console.log(range(2,9));
var fetch1 = async (url,cb) => {
    var data = await fetch(url);    
    var json = await data.json();
    var str="";
    json.products.map((p) => {
        str+="<li>"+p.title+"</li>";
    })
    document.body.children[0].innerHTML=str;
}
//fetch1("https://dummyjson.com/products")

// Typewriter effect
// function timer(i){
//     var str="Hello";
//     setTimeout(function() {
//         i++;
//         var j=i; 
//         if(j===5) {
//             return;
//         } 
//         document.getElementById("timer").innerHTML+=str[j];
//         timer(i);
//     },100)
// }
// timer(-1);

var sanitizeHTML = function (str) {
    return str.replace(/[^\w. ]/gi, function (c) {
        console.log(c);
        console.log('&#' + c.charCodeAt(0) + ';');
        return '&#' + c.charCodeAt(0) + ';';
    });
};

// var app = document.querySelector('#timer');
// app.innerHTML = sanitizeHTML('<img src="x" onerror="alert(1)">');

// var obj=[{"x":1,"x1":2,"x3":3}];
// for (var x in obj) {
//     console.log(x);
//     for (var j in obj[x]) {
//         console.log(j);
//         console.log(obj[x][j]);
//     }
// }

// Move zeros to the last of the array
// var arr = [1,2,0,5,0,7,10];
// var narr=[],zarr=[];
// for (var i=0;i<arr.length;i++) {
//     if(arr[i]!==0) {
//         narr.push(arr[i]);
//     }
//     else {
//         zarr.push(arr[i]);
//     }
// }

//  Reverse the array

// var arr = [1,2,0,5,0,7,10];
// var narr=[];
// for (var i=arr.length-1;i>=0;i--) {
//     narr.push(arr[i]);
// }
// console.log(narr)
function maximum() {
    var arr = [1,2,0,-2,5,0,7,101,10], len=arr.length,max=-Infinity;
    while(len--) {
        if(arr[len]>max) {
            max=arr[len];
        }
    }
    return max;
}
function minimum() {
    var arr = [1,2,0,-2,5,0,7,10], len,min, result, narr=[],lens=arr.length;
    function arrange(arr) {
        min=Infinity;
        len=arr.length;
        if(narr.length===lens) {            
            return;
        }
        while(len--) {
            if(arr[len]<min) {
                min=arr[len];
            }
        }
        var index = arr.findIndex((a) => a===min);
        result={"min":min,"index":index};
        narr.push(arr.splice(result.index,1)[0]);
        if(narr.length>0) {
            return arrange(arr);
        }
    } l
    arrange(arr); 
    return narr;
}
//var filterarr=[1,2,0,-2,5,0,7,10];
//console.log([...new Set(filterarr)])

//Bubble sort Alphabets

let arr = ["z", "k", "a", "f", "i"];
function msort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
return arr;
}
//console.log(msort(arr));

function customSort() {
    let arr = ["z", "k", "a", "f", "i"];
    for (var i=0;i<arr.length;i++) {
        for (var j=i+1;j<arr.length;j++) {
            if(arr[i]>arr[j]) {
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}
// console.log(customSort());
function CountDupe(d) {
    d=d.sort();
    var counter=1,output=[];
    for (var i=0;i<d.length;i++) {
        if(d[i]===d[i+1]) {
            counter++;            
        }
        else {
            output.push({"Character":d[i],"Occurences":counter});
            counter=1;
        }
    }  
    return output;
}
//console.log(CountDupe(["a","b","a","d","a","b","z"]));
function isEvenOdd(n) {
    return n % 2 === 0 ? n+" is Even number":n+" is Odd number";
}
function b() {
    if(true) {
        var a=20;
        console.log(a);
    }
    var a=10;
    console.log(a);
} 
//Capitalize first letter
function capFirstletter(s) {
    //return s.charAt(0).toUpperCase()+s.substring(1);
    return s.replace(/^\w{1,1}|\s+\w{1,1}/g, function (a) {
        return a.toUpperCase();
    })
}
//Find Longest word
function longWord(s) {    
    var na=[];
    var len=s.split(" ");
    var max, result;
    function word(b) {
        for (var i=0;i<len.length;i++) {
            na.push(len[i].split("").length);  
            if(b) {                
                if(max===len[i].split("").length) {
                    result=len[i];
                    return;
                }
            }      
        }
        max=Math.max.apply("",na);
        return word(true)
    }
    word(false);
    return result;
}
function countVowels(s) {
    return s.match(/[A,E,I,O,U,a,e,i,o,u]/g).length;
}
function calcAge1() {
var dob=new Date("1978-02-12").getTime();
var curr=new Date().getTime();
var ageDate = new Date(curr-dob);
var age=Math.abs(ageDate.getUTCFullYear() - 1970);
}

function calcAge2(dateString) {
    var birthday = new Date(dateString);
    return Math.floor((new Date().getTime() - birthday) / (24 * 60 * 60 * 365.25 * 1000));
}

//Count letters in string
function countLetter(a) {
    var reg = new RegExp("("+a+")","gi");
    var str="w3resource.com";
    console.log(str.match(reg)===null?0:str.match(reg).length);
}
//countLetter("w");
// Shallow/Deep copy
var orig = {"age":10};
var shallow=orig;
//shallow.age=20;
//console.log(orig);
var deep = JSON.parse(JSON.stringify(orig));
deep.age=50;
//console.log(orig);
const recursion = (a) => {
    const na=[],c=a;
    const ch = (a) => {
        let b=a;
        if(b===0) {
            return na;
        }   
        na.push(c-(b-1));
        b=b-1;
        return ch(b);
    }
    return ch(a);
}
//console.log(recursion(5));

//String nested for loop
function nestedLoop(a) {
    let na=[];
    function iloop(a) {
        if(a.length===0) {
            return na;
        }
        let str = a.split("");
        let strLen=str.length;
        let ch="";
        for (var i=0;i<=strLen;i++) {
            if(typeof str[i]!=='undefined') {
                na.push(ch+=str[i]);                
            }
        }
        return iloop(a.substring(1));
    }
    return iloop(a);
}
//console.log(nestedLoop("abc"));
// Randomize to three digit numbers
function getRandomThreeDigitNumber() {
  return Math.floor(Math.random() * 900) + 100;
}

//Regular expression - find words with 3 letters
const ex1 = 'The quick brown fox jumped over the lazy dog';
//ex1.match(/^.{3,3}|(?:\s+)(.{3,3})(?:\s+)|.{3,3}$/g).toString().replace(/\s+/g,"");
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
//console.log(ex2.replace(/\d+/g,""));
const ex3 = 'The salad costs $9.99';
//console.log(ex3.match(/(\d+.\d+)/g));
const ex4 = 'Contact customer support on 0800 300 500';
//console.log(ex4.match(/\d+/g).toString().replace(/,/g," "));
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
//console.log(ex5.match(/([a-z]+@[a-z]+.*)/));
const ex6 = "John Smith";
//console.log(ex6.replace(/(.+)(\s+.+)/,"$2 $1"));

//Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
const myFunction1 = (a,n) => {
    return a[n-1];
}
//console.log(myFunction1([7,2,1,6,3], 5)) // expected: 7 
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
const myFunction2 = (a) => {
    return a.splice(0,3) && a;
}
//console.log(myFunction2([5,4,3,2,1,0])) // expected: 2,1,0
//A String string is given. Return the number of the word "Me" in this string. Count 'Me' only if none 'x' is anywhere in front of it.
const myFunction3 = (a) => {
    return a.match(/xMe/g)?"undefined":a.match(/Me/g).length;
}
//console.log(myFunction3("thisisxMe"));

// Get a random int between min and max (both included)
function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function fisherYatesShuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) { 
    
    // Generate random index 
    const j = Math.floor(Math.random() * (i + 1));
                  
    // Swap elements at indices i and j
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array;
}
//console.log(shuffleArray([1,2,3,4,5]));
//Coins manage
function coins(a,b){
    var na=[],j=0,x=0,tot=b;
            if(a.length===1) {
            return 0;
        } 
    function cinner(a,b){     
            if (j*a[x]===tot){
                x++;
                b=tot;                
                j=0;
            }
            if(j===0) {
                na.push("A");
            }
            if(x===a.length) {
                return;
            }  
        if (b-a[x]<0){
            // x++;
            // console.log(x);
            // na.push(j);
            // return cinner(a,b-a[x]);
            na.push("zero");
            return;
        }
        if (b-a[x]!==0){
            j++;
            na.push(j);
            return cinner(a,b-a[x]);
        }
        if (b-a[x]===0){
            j++;
            na.push(j);            
            var d = (b===tot)?b:b-a[x];
            return cinner(a,d);
        }
        return cinner(a,b);
    }
    cinner(a,b);
    //return na.indexOf("zero")>=0?0:Math.min.apply("",na);
    return na;
}
//console.log(coins([1,2,5],11));

function a (x,y) {
    var na=[],n=x.length,m=-1,tot=y,ta=[],isOne=false;
    var i=0,j=0;
    //var sum = na.reduce((a,b) => a+b);
    function b(x,y) {
        while(n--) {                        
            m++;
            c(x[m],y);
        }
    }
    function c(k,y) {               
        if(k===1) {  
            ta.push(tot);          
            return;                        
        }  
        if(y-k===0) {  
            i++;
            ta.push(i);           
            return;                        
        }          
        if(y-k!==0) { 
            i++;
            na.push(k);
            if(na.reduce((a,b)=>a+b)>tot) {
                j++;                                
                if(y-k<0) {                
                    ta.push(i);
                    i=0;                                      
                    return;
                }
                return c(k,y-k);
            }                                       
            return c(k,y-k);                        
        } 
        return c(k,y-k);
    }
    b(x,y);
    return Math.min.apply("",ta);
}
//console.log(a([1,2,5],11)); 
function gsort(a) {
    var b=a.split("").sort(),i=0,odd="",even="",
    k=b.toString().match(/[a-z]/g),
    c=b.toString().match(/[A-Z]/g);
    var d = b.toString().match(/[\d]/g);
    while(i<d.length) {
        if(parseInt(d[i])%2===1) {
           odd+=d[i];           
        }  
        else {
            even+=d[i];
        }      
        i++;
    }
    var result=k+c+odd+even;
    result=result.toString().replace(/,/g,"");
    return result;
}
//console.log(gsort("helloworLD12345"));
function a() {
    let s=0,arr=[1,2,3,4,5],numbers = [-1, 0, 1, 2, -1];
    function b(s) {
        // if(s===5) {
        //     return;
        // }
        for (let i=0;i<numbers.length;i++) {
            //console.log(numbers[i]+=0);
        }
        //return b(s+1);
    }
    b(s)
}
//Move zero's to end of the array
function moveZ(a) {
    var b=a.filter((a) => a!==0);
    var c=a.filter((a) => a===0);
    return b.concat(c);
}
//console.log(moveZ([1,2,3,0,15,6,3,0,99,0,76,23]));
//Sort alphabets and order the numbers
function sortAlpNum(an) {
var onlychar=an.match(/[a-z]+/g).sort();
var na=an.split(" ");
var fa=[];
var j=0;
function sorti(j) {
    if(j===na.length) {
        return;
    }
for (var i=0;i<na.length;i++) {
    var reg = new RegExp("("+onlychar[j]+")","gi");
    if(na[i].match(reg)!==null) {
     fa.push(na[i]);
     return sorti(j+1);
    }
}
}
sorti(j);
return fa.toString().replace(/[a-z]+/g,"");
}
//console.log(sortAlpNum("24z6 1x23 y369 89a 900b"));
var a=function(){var a=true;if(a){console.log("yes");}else{a;}};
a=a.toString().replace(/([a-z,(,),=,\s,.,",/]+[{,;])|}/g, function (b) {
    return "<pre>"+b+"</pre>";
});
//$("body").append(a);
var countnum = "abc123def456";
var sum=countnum.match(/\d+/g).join("").split("");
//console.log(sum.reduce((a,b)=>parseInt(a)+parseInt(b)));
function findMin(a) {
var len=a.length,inf=Infinity;
while(len--) { 
    if(a[len]<inf) {
        inf=a[len];
    }
}
return inf;
}
//console.log(findMin([1,-1,2,3,0]));
function matchendWord(a) {
    var i=-1,len=a.length,b=a,na=[];
    function matchin(i) {
        if(i===len-1) {
            return;
        }
        i++;
        for (var j=0;j<b.length;j++) {           
            if(a[i].match(/.{1}$/)[0]===b[j].match(/^.{1}/)[0]) {
                na.push(b[i],b[j]);               
            }
        }
        return matchin(i);
    }
    matchin(i);
    return na.toString();
}
//console.log(matchendWord(["apple","mango","osl","elephant"]))
// function triplet(a){
//   var i=0,j=-1,na=[],val = -1;
//   function trip(j){
//     j++;
//     if(j===a.length){
//       return;
//     }
//       //console.log(a.filter((b)=>b.index!==j));
//         //na.push([]);
// //   a.filter(function (b){
// //     if(b.index!==j){
// //       val++;
// //       var rem=val%3;
// //       na[j][rem]=b.val;
// //     }});    
//     //console.log(na);
//     // if(na[j].reduce((y,z) => y+z)===0) {
//     //     console.log(na[j]);
//     // }
//     return trip(j);
//   }
//   trip(j);
//   //console.log(na);
// }
// triplet([
//   {"val":-1,"index":0},
//   {"val":0,"index":1},
//   {"val":1,"index":2},
//   {"val":2,"index":3},
//   {"val":100,"index":4}
// ]);
function triplet(arr) {
    const res = [];
    const n = arr.length;

    // Generating all triplets
    for (let i = 0; i < n - 2; i++) {
       
        for (let j = i + 1; j < n - 1; j++) {
            
            for (let k = j + 1; k < n; k++) {
            
                // If the sum of triplet equals to zero
                // then add it's indexes to the result
                if (arr[i] + arr[j] + arr[k] === 0) {
                    res.push(arr[i],arr[j],arr[k]);
                }
            }
        }
    }
    return res;
}
//console.log(triplet([-1,0,1,2,-1,-4]));
function triplet1(a) {
    //a=a.sort();
    let na=[],counter=0,orig=a;
    function iloop(a) {
        let strLen=a.length;
        let ch="";
        for (var i=0;i<=strLen;i++) {    
            if(ch==orig[orig.length-1]) {
                na.push(ch+a[i]+a[i+1]);
                return;
            }            
            ch+=a[i];
            if(typeof a[i]!=='undefined') {
                if(i===2) {
                    na.push(ch);
                }                
            }
        }
        var b=a.splice(counter,1);
        a=a.concat(b);
        return iloop(a);
    }
    iloop(a);
    for (var k=0;k<na.length;k++) {
            var ne=na[k].match(/-?\d/g);
            if(ne.reduce((a,b) => parseInt(a)+parseInt(b))===0) {
                console.log(na[k]);
            }
    }
}
//console.log(triplet1([-1,0,1,2,-1,-4]))
var a=[1,2,3,4,5,1,1];
var b=[...new Set(a)];
function secondLargest(a) {
    var len=a.length,max=-Infinity,orig=a, check=false, na;
    function sec(a,len,max) {
        for (var i=0;i<len;i++) {
            if(a[i]>max) {
                max=a[i];
            }
        }
        if(!check) {
            a.splice(a.findIndex((b) => b===max),1);
            check=true;
            return sec(a,a.length,-Infinity);
        }
        else {
            na=max;
        }
    }
    sec(a,len,max);
    return na;
}
//console.log(secondLargest([1,2,108,97,0]));
function ntow(d) {
    var o=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],
	t=["","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],
	ty=["","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],
	dn=["","","Hundred","Thousand","","Lakh","","Crore","","Billion"], a="";	
if(d.length===4) {
    console.log(dn[d.length-1]);
}
if(d.length===5) {
    console.log(dn[d.length-2]);
}
if(d<=10){			
			a=o[d];					
		}
		if(d>10 && d<20){
			a=t[d-10];
		}
		if(d>=20){			
			a=ty[parseInt(d.toString().substring(0,1)-1)]+o[parseInt(d.toString().substring(1,2))];
		}
        return a;		
}
//console.log(ntow("87000"));
function numToWords(d){	
	if(typeof d!=='number'){
		return false;
	}	 
	var b=false,e,p=new RegExp("([0-9]{1,1})$",""),s='',pd,
	o=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],
	t=["","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],
	ty=["","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],//ty's
	dn=["","","Hundred","Thousand","","Lakh","","Crore","","Billion"];	
	var oneToHundred=function(d){
		var a="";
		if(d<=10){			
			a=o[d];					
		}
		if(d>10 && d<20){
			a=t[d-10];
		}
		if(d>=20){			
			a=ty[parseInt(d.toString().substring(0,1)-1)]+o[parseInt(d.toString().substring(1,2))];
		}				
		return a;
	};
	function toDigitLevel(d){
		var p=/\d{1}/g,i=0,s="",d=d.toString();	
		d.replace(p,function(a){		
			i++;
			if(i===1){
				s+=a;	
			}
			else {
				s+="0";				
			}			
		});
		if(d.length===i){
			return s;	
		}
	}		
	function _numToWords(d){		
		e=parseInt(d.toExponential().match(p).pop());
        //e=d.toString().length-1;								
		if(e<=1){	
			s+=oneToHundred(d);			
			return s.replace(/([A-Z]+)/g," $1").replace(/^\s{1}/,'');			
		}
		if(e===2){			
			s+=oneToHundred(parseInt(d.toString().substring(0,1)))+dn[e];			
		}
		if(e>=3){
			d=d.toString();
			pd=parseInt((d.length>3 && d.length%2===0)?d.substring(0,1):d.substring(0,2));			
			if(pd.toString().length===2){				
				s+=oneToHundred(pd)+dn[e-1];									
				b=true;
			}
			else {
				if(!b){
					s+=oneToHundred(pd)+dn[e];
				}
			}			
		}				
		return _numToWords(d-parseInt(toDigitLevel(d)));
	}
	return _numToWords(d);
}
//console.log(numToWords(1234));
function subArray(arr, x) {
    arr.sort((a,b)=> b-a);
    arr = arr.filter((a)=> a<x);
    let y = [];
    while(x > 0){
        y.push(arr.shift());
        x = x - y[y.length-1];
        if(arr.some((a)=> a == x)) {
            y.push(x);
            return y.length;
        }
    }
}
//console.log(subArray([2,2,2,2,1,0,4],9));
//console.log(subArray([2,2,2,2,1,0],9));
//[2,3,1,2,4,3],7
function congru(n,r) {
    var i=0,inf=Infinity;
    while(i<inf) {
        if(i%n[0]===r[0] && i%n[1]===r[1] && i%n[2]===r[2]) {
            return i;
        }       
    i++;
    }    
}
function sumnum(a,z) {
    var j=1,w=2;
    a.sort((a,b)=> b-a);
    a=a.filter((d)=>d<z);
    function _sumnum(a,z) {
            if(a[0]+a[1]===z) {
                j++;
                return;
            }
            else {
                var o=a[0]+a[1];
                if(o>z) {
                    if(a[0]+a[w]===z) {
                        j++;
                    }
                    else {
                        w++;
                        if(o-a[1]+a[w]===z) {
                            j++;
                        }       
                        else {
                            j=0;
                        }                
                    }
                    return;
                }
                var tot=a[0]+a[1];
                a[0]=tot;
                a.splice(1,1);
                j++;
            }
        return _sumnum(a,z);
    } 
    _sumnum(a,z);
    return j;  
}
//console.log(sumnum([2,2,2,2,1,0],9));
function IntlTimeZone() {
    let ary = Intl.supportedValuesOf('timeZone');
    let d=new Date;
    let ta=[];
    var p=document.createElement("p");
    var s=document.createElement("select");
    var o=document.createElement("option");
    s.appendChild(o);
    o.value = "select";
    o.textContent = "select";
    s.appendChild(o);    
    ary.forEach((zone) => {    
        var a=d.toLocaleString("en-US",{timeZone:zone});
        var t=document.createElement("option");
        s.appendChild(t);
        t.value = zone;
        t.textContent = zone;
    });
    document.body.appendChild(s);
    document.body.appendChild(p);
    p.id="time";
    var sel=document.querySelector("select");
    sel.addEventListener("change",(e)=> {
        let ti=new Date;
        let para=document.getElementById("time");
        let ls=ti.toLocaleString("en-US",{timeZone:e.currentTarget.value});
        para.innerHTML=ls;
    });
}
IntlTimeZone();