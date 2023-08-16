let today=new Date()
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let day=today.getDay()

let day_today=document.querySelector(".day_today")
day_today.innerHTML=`Today is ${daylist[day]}`

let hours=today.getHours()
let prepand=(hours>=12)?"Pm":"AM";

let sec=today.getSeconds()
hours=(hours>=12)? hours -12:hours;
if(hours===0 && prepand==="Pm"){
    if(min===0 && sec===0){
        hours=12
        prepand="PM"
    }
}
if(hours===0 && prepand==="Am=M"){
    if(min===0 && sec===0){
        hours=12
        prepand="AM"
    }
}
let cudate=document.querySelector(".time")
setInterval(()=>{
    let secc=new Date().getSeconds()
    let min=today.getMinutes()
    cudate.innerHTML=`Current date and time is ${hours} ${prepand} :${min} :${secc}`
   
},1000)




//////////////--------------------****************************-----------------////////////////////////

/**
 * 2 Question 
 * 
 */


let btn=document.querySelector(".container button")
function printContant(){
    window.print()
}
btn.addEventListener("click",printContant)


//////////////--------------------****************************-----------------////////////////////////

/**
 * 3 Question 
 * 
 */


let datee=new Date()
let dat=datee.getDate()
let month=datee.getMonth()+1;
let yy=datee.getFullYear();
console.log(dat,month,yy)

if(dat<10){
    dat="0"+dat
}


if(month<10){
    month="0"+month
}

console.log(dat,month,yy)

let currentd=document.querySelector(".current--date")
currentd.innerHTML=`${month}-${dat}-${yy} , ${month}/${dat}/${yy} or ${dat}-${month}-${yy} , ${dat}/${month}/${yy}`;



//////////////--------------------****************************-----------------////////////////////////

/**
 * 4 Question 
 * 
 */

//////////////--------------------****************************-----------------////////////////////////
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
let aria=document.querySelector(".aria");
aria.innerHTML=" Ans= "+area;




function Animation_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


//////////////--------------------****************************-----------------////////////////////////

/**
 * 6 Question 
 * 
 */

//////////////--------------------****************************-----------------///////////////////////

let inp =document.querySelector(".inputt")

const printAnswer=function(leaoyar){
    let ansplace=document.querySelector(".ansplace")
  if(leaoyar % 4===0){
    ansplace.innerHTML=`yes it is a leap year`
  }else{
    ansplace.innerHTML=`NO it is not leap year`
  }
}

inp.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    printAnswer(inp.value)
  }
})

/**
 * 7 Question 
 * 
 */

//////////////--------------------****************************-----------------///////////////////////


for(let year=2014;year<=2050;year++){
    let newyear=new Date(year,0,1)
  
    if(newyear.getDay()===0){
         console.log("the sunday will be on this day"+year)
    }
}


/**
 * 8 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////

let rennum=Math.floor(Math.random()*10)+1
console.log(rennum)

let userask=prompt("tell you number");
userask=Number.parseInt(userask);

if(userask==rennum){
    alert("it is correct")
}else(
    alert("that is not correct")
)




*/

/**
 * 9 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/
 
let todayy=new Date()
let cridate=new Date(today.getFullYear(),11,25);
console.log(cridate)
if(todayy.getDate()>=25 && todayy.getMonth()==11){
    cridate.setFullYear((cridate.getFullYear())+1)
}
let msinday=60*60*1000*24;

console.log(Math.ceil((cridate.getTime()-todayy.getTime())/(msinday))+" is dau is left for crismix")



/**
 * 10 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


let input_1=document.getElementById("input-1");

let input_2=document.getElementById("input-2");
let anss=document.querySelector(".ans")

function multiply(){
 let ans= input_1.value * input_2.value
anss.innerHTML=`the result is  : ${ans}`
}

function devide(){
    let ans= input_1.value / input_2.value
    anss.innerHTML=`the result is  : ${ans}`
}


/**
 * 11 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function cel(calsuse){
   let cell=calsuse;
   let celtof=cell * 9/5 +32;
   let mess= `${cell}°C is  ${celtof}°F`;
   console.log(mess)
}
cel(45);
function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
} 
fToC(45)


/**
 * 12 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



let curuntwurl=document.URL;
console.log(curuntwurl)
let pin=document.querySelector(".loadingurl");
pin.innerHTML=curuntwurl

/**
 * 13 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


let username='abcd';
let nu=12;
this[username]=nu;
console.log(this[username])
//console.log(this.username)
console.log(window)
/**
 * 14 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

let filename="ravanfaile.php";
let fname=filename.split(".").pop()
console.log(fname)
let filenMAME="havabazi.js";
let fnamE=filenMAME.split(".").pop()
console.log(fnamE)




/**
 * 15 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function addin(x,y){
    if(x==y){
        return 3*(x+y);

    }else{
        return x+y
    }
}
console.log(addin(4,4))






/**
 * 16 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

function checknum(first,secend){
    if(first==50 || secend==50 || secend+first==50){
        return true;
    }else{
        return first+secend;

    }
}

console.log(checknum(10,10))


/**
 * 17 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function defrence(n){
    if(n <=19){
        return 19-n
    }else{
        return (n-19)*3
    }
}
console.log(defrence(5))





/**
 * 18 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function checkk(n){
    return (Math.abs((100-n)<=20)||Math.abs((400-n)<=20))
}
console.log(checkk(9))



/**
 * 19 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/



function checkNagitave(x,y){
 if((x>0 && y<0)||(x<0&&y> 0)){
    return true;
 }else{
    return false
 }
}

console.log(checkNagitave(2,2))
console.log(checkNagitave(-2,2))
console.log(checkNagitave(2,-2))
console.log(checkNagitave(-2,-2))



/**
 * 20 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function checks(x){
    if(x===null||x===undefined||x.substring(0,2)==="py"){
        return x
    }else{
        return "py"+x
    }
}

console.log(checks("pyotone"))


/**
 * 21 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function rev(x){
    let a= Array.from(x)
   let b= a.reverse()
   let c=b.join("")
   return c.toString()
}
console.log(rev("hello i ama aman"))
/**OR */
function st(xx){
    if(xx===null||xx===undefined||xx.length<=1){
        return xx
    }else{
        let carr= xx.substring(1,xx.length-1);
        let re=(xx.charAt(xx.length-1)+carr+xx.charAt(0))
        console.log(re)
    }
}
st("animal")





/**
 * 22 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function checknumber(xyz){
    if(xyz%3===0 || xyz%7===0){
        return true
    }else if(xyz%3 > 0 || zyz%7 > 0){
        return false;
    }
}

console.log(checknumber(11)+"  Q-NUMBER=22")









/**
 * 23 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function frount_back3(stp){
    if(stp.length>=3){
        let fakest=stp.substring(stp.length-3)
        let rtst=fakest +stp +fakest
        return rtst
    }else{
        return false
    }


}

console.log(frount_back3("aman")+ "    ---question number ::23")


let jjj="poornima";
console.log(jjj.length-3)






/**
 * 24 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

function javacheck(tttt){
 
    if(tttt.length <4){
    return false
    }else{
        let nret=tttt.substring(0,4)
        if(nret=="java"){
            return true
        }else{
            return false
        }
    }


}

/**
 * 25 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////



function myq(qq){
  if(qq.length<=3){
return false
  }else{
    let nsttt=qq.substring(qq.length-4,qq.length)
    let rstring=nsttt.substring(0,nsttt.length-2);
   let given1=qq.substring(0,2)
   let given2=qq.substring(4)
  let given3=qq.substring(qq.length-2)
   
console.log(given3)
    console.log(given1+rstring+given3)
  }
}
console.log(myq("helloworld"))

*/
/**
 * 26 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function checkraing(xxx,nnn){
    if( (xxx>=50  && xxx<=99) || (nnn>=50 && nnn<=99)){
        return true
    }else{
        return false
    }
}



console.log(checkraing(12,101))
console.log(checkraing(53,80))
console.log(checkraing(15,99))

console.log("___________+++++++++_____________________________________=============>>>>>")

/**
 * 27 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function check3range(x1,x2,x3){
    if((x1>=50 && x1<=99) || (x2>=50 && x2<=99)|| (x3>=50 && x3<=99)){
        return true
}else{
    return false
}
}

console.log(check3range(50, 90, 99))

console.log(check3range(5, 9, 199))

console.log(check3range(65, 89, 199))




/**
 * 28 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

function checkstring(xnxx){
    if(xnxx.length<=4){
        return false
    }
    else {
        let suuu=xnxx.substring(4,10)
     if(suuu==="script"){
        let  rrrr=xnxx.substring(0,4)
        return rrrr
     }
     else{
        return xnxx
     }
    }
}
 console.log(checkstring("amanscript"))




 
/**
 * 29 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function checklargest(t1,t2,t3){
let mexla=0;
if(t1>t2){
    mexla=t1
}else{
    mexla=t2
}
if(t3>mexla){
    mexla=t3
}
return mexla
}
console.log(checklargest(1,0,1))
console.log(checklargest(0,-10,-20))
console.log(checklargest(1000,510,440))





 
/**
 * 30 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////

 

function checkchatAt(lettter1,letter2){
    if(letter2.charAt(1))
}

*/


let bt="amann";
console.log(bt.charAt(1))



/**
 * 31 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function checkthegivenint(tt1,tt2,tt3){
    if(tt1>0 && tt2>0  && tt3>0){
        return (tt1%10==tt2%10 && tt2%10==tt3%10 && tt1%10==tt3%10)
    }else{
        return false
    }
}

console.log(checkthegivenint(100,200,300)+ "  is the ans of 31")


/**
 * 32 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

/// jase AManking hai ye aase hona cheya amankING

function chnagestr(givenstr){
    if (givenstr<=3){
        return givenstr.toUpperCase()
    }else{
        let staring3=givenstr.substring(0,3).toLowerCase();
        let slicet=givenstr.slice(3,givenstr.length-3);
        let backstr=givenstr.substring(givenstr.length-3,givenstr.length).toUpperCase()
        let fakeret= staring3+slicet+backstr
        return fakeret
    }
}
console.log(chnagestr("THIismefrom"))




/**
 * 33 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function student(marks,examatteend){
    if(examatteend=="no"){
        return console.log("no markes because not atttend the exam ")
    }else if (  (marks>80 && marks<100) &&      examatteend=="yes"){
             return console.log( marks + "markes ye hai A+  ")
    }else{
        return false
    }
}




/**
 * 34 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/




function addtointejer(xx1,xx2){
    let summ=xx1+xx2
    if(summ >50 && summ<80){
        return 65
    }else{
        return 80
    }
}


console.log(addtointejer(10,24))




/**
 * 35 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

const twoint=(firstperemeyer,secondparamiter)=>{
  
    if((firstperemeyer+secondparamiter==8) || (firstperemeyer ==8  || secondparamiter==8) || (firstperemeyer -secondparamiter==8) ){
        return true
    }else{
        return false
    }

};


console.log(twoint(8,3))






/**
 * 36 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/

function checkrange(firsttt,secondd){
    let fist1=Math.abs(firsttt-100)
    let se2=Math.abs(secondd-100);
    if(fist1>se2){
        return secondd
    }else{
        return firsttt
    }
}


console.log(checkrange(89,90));



/**
 * 37 Question 
 * 
 

//////////////--------------------****************************-----------------///////////////////////
*/


function samneornot(paraone,paratwo,parathree){
    if(paraone==paratwo && paratwo ==parathree){
        return 30
    }else if(paraone==paratwo || paratwo==parathree || parathree ==paraone){
        return 40
    }
    return 20
}


console.log(samneornot(8, 8, 8))
console.log(samneornot(8, 8,18))
console.log(samneornot(8, 7, 18))


/***
 * 38 question 
 * Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
        Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 
 */

function incresss(ty1,ty2,ty3){
    if(ty2>ty1 && ty3>ty2 ){
        return "strict mode";
    }else if(ty2<ty3){
        return "soft mode"
    }else{
        return undefined
    }
}


console.log(incresss(10,15,31))
console.log(incresss(24,22,31))
console.log(incresss(50,21,15))


/***
 * 39 question 

 */


function thesamelastnum(trr1,trr2,trr3){
    if(trr1%10==trr2%10 || trr1%10==trr3%10 || trr2%10==trr3%10){
        return true
    }else{
        return false
    }
}
console.log(thesamelastnum(13,30,62))
//thesamelastnum(12,32,62)



/**
 * 40 qq
 * Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15. 
 */

function check15(tyy1,tyy2){
    if((tyy1==15 ||tyy2==15)|| (tyy1+tyy2==15)|| (tyy1-tyy2==15 || tyy2-tyy2==15)){
        return true
    }else{
        return false
    }
}
console.log(check15(45,30))



/**
 * 41 qq
 *  Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 
 */

function multuplyornot(utu1,utu2){
    if((utu1%7===0 || utu1%11===0) || (utu2%11===0 || utu2%7===0) ){
        return true
    }else{
        return false
    }
}
console.log(multuplyornot(10,88))


/***
 * 42 q
 *  Write a JavaScript program to check whether a given number exists in the range 40..10000.  
        For example 40 presents in 40 and 4000
 */

function exiestornot(nut){
    if(nut>=40 && nut<=10000){

        return true
    }else{
        return false
    }
}

/**
 * 
 * Q-43;
 * Write a JavaScript program to reverse a given string
 */

function revst(yty){
   let rebb=yty.split("").reverse().join("")
   return rebb
}
console.log(revst('amanisking'));




/****
 * Q-44;
 */

function revstr(fakees){
    let reternn=fakees.split("").reverse().join("")
    return reternn 
}
console.log(revstr("poornimaplagalll"));





/****
 * Q-45;
 */

 
function capalat(leee){
    let rete=leee.split(" ");


    for(let q=0; q<rete.length ;q++){
  rete[q]=  rete[q][0].toUpperCase() + rete[q].substr(1);
    }
return rete.join(" ")
}
console.log(capalat("aman is tyhe best"));



/****
 * qWrite a JavaScript program to convert a given number into hours and minutes.
 */


function convvvv(tatdh){
    let hours= Math.floor(tatdh /60);
    let menut=tatdh%60;

    return hours +":"+ menut;
}

console.log(convvvv(71))


function alfaa(stht){
    return stht.split("").sort().join("")
}

console.log(alfaa("poornima"))


function checkvoll(tytu){
    return tytu.replace(/[^aeiou]/g,"").length
}

console.log(checkvoll("thisismeintheo"));



function checkequalplace(terte){
    let sinp=terte.replace(/[^p]/g, "");
    let sint=terte.replace(/[^t]/g, "");

    let lenp=sinp.length;
    let lent=sint.length;

    return lenp===lent;
}


console.log(checkequalplace("ptsptdtytys"));
console.log(checkequalplace("puhptupt"));


function returi(uyg,unooo){
    let devv=uyg/unooo;
    return   devv.toString().split("")}


console.log(returi(145,5))



function copuuu(givenx,timmm){
    let copppp=givenx.repeat(timmm)
    return copppp
}


console.log(copuuu(" poornima loves aman   ",10))


function thegivensrt(givethestr,tyty){

let lenthofstr=givethestr.length;
if(lenthofstr>3){

    let trtrt=givethestr.substring(lenthofstr-3,lenthofstr);
    return trtrt.repeat(tyty)
}else{
    return false
}
   // console.log(trtrt)
}


console.log(thegivensrt("thiu",2));


function havestri(lestringg){
    
    if(lestringg.length%2===0){
        let cuting=lestringg.length/2
        let retuu=lestringg.substr(0,cuting)
        return retuu
    }else{
     return false
    }
}


console.log(havestri("thisismeerer"));



function sliceone(therum){
    return therum.slice(1,therum.length-1)
}

console.log(sliceone("aamann"))


function concatetge(ojf,jfg){
    let tttt=ojf.substring(1);
    let yyyy=jfg.substring(1);
    return tttt.concat(yyyy)
}

console.log(concatetge("aman","poornima"));



function movetofirst(looo){
    return looo.substring(looo.length-3,looo.length)+looo.slice(0,looo.length-3)
}


console.log(movetofirst("python"));


function cutthethree(thethree){
    if(thethree.length%2!=0){
        let sendoo=(thethree.length +1)/2;
        let thecutteraria=thethree.slice(sendoo-2,sendoo+1);
        return thecutteraria;
     }else{
       return false
     }
}
console.log(cutthethree('themaninthuyteca'));



function checktheend(thechecklast){
    if(thechecklast.length>=6){
        let retst=thechecklast.substring(thechecklast.length-6,thechecklast.length);
        if(retst=="script"){
            return retst
        }else{
            return false
        }
    }else{
        return false
    }
}


console.log(checktheend("holalalatharscript"))



/***
 * 53
 */


function checkthreeplace(strtingg){
return (/a...b/).test(strtingg)|| (/b...a/).test(strtingg);

}


console.log(checkthreeplace("poornimaidb"));


function chehckvoval(srtrts){
    let xyx=srtrts.replace(/[^aeiou]/g,"").length;
    return xyx
}

console.log(chehckvoval("themeiseyhfihfgkohwtru"));


function checkthewordinthe(srtrtsr){
  return  srtrtsr.replace(/[^a]/g,"").length
}

console.log(checkthewordinthe("aman"));


/***
 *  Write a JavaScript program to concatenate two strings and return the result.
 *  If the length of the strings does not match,
 *  then remove the characters from the longer string.  
 */




function checkstringandreturn(furstsrt,secondstr){
    let firstsrt=furstsrt.length;
    let secodsrttt=secondstr.length;
    if(firstsrt ===secodsrttt){
        return furstsrt.concat(secondstr);
    }else if(firstsrt>secodsrttt){
        return  furstsrt.substring(0,secodsrttt).concat(secondstr)
    }else if(secodsrttt>firstsrt){
        return furstsrt.concat(secondstr.substring(0,firstsrt))
    }else{
        return false
    }
}0 

console.log(checkstringandreturn("amanistttttttttttttt","poonimalove"));;


function checkthescring(firtstt,secofff){
    let cfjhfu=Math.min(firtstt.length,secofff.length);

    return firtstt.substring(firtstt.length-cfjhfu) + secofff.substring(secofff.length-cfjhfu)
}


/***
 *  Write a JavaScript program 
 * to display the city name if the string begins with "Los" or "New" 
 * otherwise return blank. 
 */



function  checkthenamestart(stringggg){
 let checkvar= stringggg.substring(0,3)
    if(checkvar=="Los" ||  checkvar=="New"){
        return stringggg
    }else{
        return null
    }
}


console.log(checkthenamestart("Newangles"));;

/***
 * 
 * Write a JavaScript program to create a new string from a given string.
 *  This program removes the first and last characters of the
 *  string if the first or last character is 'P'. 
 * Return the original string if the condition is not satisfied.  
 */



function checkthe1nd2la(thestru){



if(thestru.charAt(0)=="P"&&thestru.charAt(thestru.length-1)=="P"){
    return thestru.substring(1,thestru.length-1)
}else{
    return thestru;
}
}


console.log(checkthe1nd2la("PlodfdfdfveP"));




/**
 * 
 * 68. Write a JavaScript program to create a new string using the
 *  first and last n characters from a given string.
 *  The string length must be larger than or equal to n.
 */


function thesliccetheword(thewordbypep,gicethen){
    let firstsli=thewordbypep.slice(0,gicethen);
    let secondsl=thewordbypep.slice(thewordbypep.length-gicethen)
return(firstsli+secondsl)
}
console.log(thesliccetheword("themanisyou",3))


/***
 * 69. Write a JavaScript program
 * to compute the sum of three elements 
 * of a given array of integers of length 3. 
 * 
 * 
 * time---1:15
 */


function completthesumof(arrb1){
    let fakestrs=0;
for(let io=0;io<arrb1.length;io++){
   fakestrs+= arrb1[io]
}
return fakestrs
 
}



 console.log(completthesumof([1,5,7,8,4,9,9]));

 //Complit time=1:33===
 //tame take =18min


 /***
  * 70. Write a JavaScript program to rotate
  *  the elements left in a given array of integers of length 3.  
  * 
  * time==1;41
  */

function thearrayyy(threelentharry){
    return [threelentharry[1],threelentharry[2],threelentharry[0]]
}


console.log(thearrayyy([2,4,7]))

//time==1:52 /// --->11 min taken


/***
 * 71. Write a JavaScript program to check whether
 *  1 appears in the first or last position of a given array of integers. 
 * The array length must be larger than or equal to 1.  
 * 1:53
 */

function checkthe1(thegibenarr){
    if(thegibenarr[0]==1 || thegibenarr[thegibenarr.length-1]==1){
        return true
    }else{
        return false
    }
}

console.log(checkthe1([1,54,7,31,41]));
 /// time=1.58 // time taken---> 5  min


 function thethegiven(checkthisss){

    return checkthisss[0]===checkthisss[2]

 }

 console.log(thethegiven([1,2,3]))


 //time-2.03 time taken==5 min