var key = false;
var carkey = false;
var papersofa = false;
var papertrunk = false;
var papermirror = false;
var paperunknown1 = false
var Knoife1 = false;
var safekey = false;    
var keyin = false;
var numbersin = false;
const optie1 = document.getElementById('optie1');
const optie2 = document.getElementById('optie2');
const optie3 = document.getElementById('optie3');
const optie5 = document.getElementById('optie5');
const optie6 = document.getElementById('optie6');
var header =  document.getElementById('header');
var image = document.getElementById('image');
var inventory = document.getElementById('inventory');
var doorkey1 = document.getElementById('doorkey1');
var carkeyimg = document.getElementById('carkeyimg');
var tire = document.getElementById('tire');
var knoife = document.getElementById('knoife')
var papersofaimg = document.getElementById('paper1');
var papertrunkimg = document.getElementById('paper2');
var papermirrorimg = document.getElementById('paper3');
var paperunknown = document.getElementById('paper4')

function start() {
    optie1.innerHTML = "";
    optie1.setAttribute("onClick", "()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "";
    optie2.setAttribute("onClick", "()");
    optie2.style.visibility = 'visible';
    optie3.innerHTML = "";
    optie3.setAttribute("onClick", "()");
    optie3.style.visibility = 'visible';
    optie4.innerHTML = "";
    optie4.setAttribute("onClick", "()");
    optie4.style.visibility = 'visible';
    optie5.innerHTML = "";
    optie5.setAttribute("onClick", "()");
    optie5.style.visibility = 'visible';
    optie6.innerHTML = "";
    optie6.setAttribute("onClick", "()");
    optie6.style.visibility = 'visible';
}

function frontdoor() {
    console.log('frontdoor');
    if (key === false) {
        alert('You need to find the key first');
    } 
    else {
        gang();

    }
}

(function() {
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

})();

function doormat() {
    console.log('FrontDoor');
    if (key === false) {
    window.alert('you found the key for the front door');
    key = true;
    doorkey1.style.visibility = 'visible';
}
    else {
        window.alert('there is nothing here');
    }
}
function diemailbox() {
    console.log('Game Over');
    gameover();
    alert('There was a booby trap in the mailbox you died');
}



function gang() {
    console.log('hallway');
    image.src = "img/gang.jpg";
    optie1.innerHTML = "To the Living room";
    optie1.setAttribute("onClick", "livingroom()");
    optie1.style.visibility = "visible";
    optie2.innerHTML = "Look in the closet";
    optie2.setAttribute("onClick", "closet()");
    optie2.style.visibility = "visible";
    optie3.innerHTML = "Go upstairs";
    optie3.setAttribute("onClick", "upstairs()");
    optie3.style.visibility = "visible";
    optie4.style.visibility = "visible";
    optie4.innerHTML = "to the garage";
    optie4.setAttribute("onClick", "garage()");
    optie5.style.visibility = "visible";
    optie5.innerHTML = "go back";
    optie6.style.visibility = "hidden";
}


function livingroom() {
    console.log('living room');
    image.src = "img/woonkamer.jpg";
    optie1.innerHTML = "look under the sofa";
    optie2.innerHTML = "look in the plant pot";
    optie3.innerHTML = "go to the kitchen";
    optie4.innerHTML = "go to the hallway";
    optie1.setAttribute("onClick", "sofa()");
    optie2.setAttribute("onClick", "plant()");
    optie3.setAttribute("onClick", "kitchen()");
    optie4.setAttribute("onClick", "gang()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'visible';
    optie4.style.visibility = 'visible';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}

function garage() {
    console.log('garage');
    image.src = "img/garage.jpg";
    optie1.innerHTML = "look in the car";
    optie1.setAttribute("onClick", "car()");
    optie2.innerHTML = "go to the hallway";
    optie2.setAttribute("onClick", "gang()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

}
function kitchen() {
    console.log('kitchen');
    image.src = "img/kitchen.jpg";
    optie1.innerHTML = "look in the fridge";
    optie1.setAttribute("onClick", "fridge()");
    optie2.innerHTML = "look in the oven";
    optie2.setAttribute("onClick", "oven()");
    optie3.innerHTML = "look in the cabinet";
    optie3.setAttribute("onClick", "cabinet()");
    optie4.innerHTML = "go to the livingroom";
    optie4.setAttribute("onClick", "livingroom()"); 
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'visible';
    optie4.style.visibility = 'visible';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function cabinet() {
    console.log('kitchen');
    image.src = "img/cabinet.jpg";
    optie1.innerHTML = "grab the Knoife";
    optie1.setAttribute("onClick", "Knoife()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "go back";
    optie2.setAttribute("onClick", "kitchen()");
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

}
function Knoife() {
    console.log('kitchen');
    alert('you got the Knoife');
    Knoife1 = true;
    knoife.style.visibility = 'visible';
}
function fridge() {
    console.log('kitchen');
    image.src = "img/fridge.jpg";
    optie1.innerHTML = "drink vodka";
    optie1.setAttribute("onClick", "vodka()");
    optie2.innerHTML = "close the fridge";
    optie2.setAttribute("onClick", "kitchen()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function vodka() {console.log('Game Over')
    console.log('kitchen');
    alert('there was rat poison in the vodka now u dead');
    gameover();

}
function oven() {
    console.log('kitchen');
    image.src = "img/furnace.jpg";
    optie1.innerHTML = "turn on the oven";
    optie1.setAttribute("onClick", "gas()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "close the oven";
    optie2.setAttribute("onClick", "kitchen()");
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

}
function gas() {
    console.log('Game Over');
    alert('the oven was filled with a highly explosive gass after you turn it on the house explodes');
    gameover();
}

function doorkeyone() {
    console.log('Front Door');
    window.alert('this is the key for the front door');
}
function carkey() {
    console.log('Hallway');
    window.alert('the pockets are empty');
}

function closet() {
    console.log('Hallway');
    image.src = "img/openkast.jpg";
    document.getElementById('optie1').style.visibility = "visible";
    optie1.innerHTML = "Look in the jacket";
    optie1.setAttribute("onClick", "jacket()");
    document.getElementById('optie2').style.visibility = "visible";
    optie2.innerHTML = "close the closet";
    optie2.setAttribute("onClick", "gang()");
    document.getElementById('optie3').style.visibility = "hidden";
    document.getElementById('optie4').style.visibility = "hidden";
    document.getElementById('optie5').style.visibility = "hidden";
    document.getElementById('optie6').style.visibility = "hidden";

}

function jacket() {
    console.log('Hallway');
    if (carkey === false) { alert('you found car keys');
    carkey = true;
    carkeyimg.style.visibility = 'visible';
}
    else{
        window.alert('there is nothing here');
        optie1.innerHTML = "close the closet";
        optie1.setAttribute("onClick", "gang()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    }
}

function sofa() {
    console.log('Living room');
    if (papersofa === false) {
    image.src = "img/ondersofa.jpg";
    optie1.innerHTML = "grab the piece of paper";
    optie2.innerHTML = "go back to the living room";
    optie1.setAttribute("onClick", "sofapaper()");
    optie2.setAttribute("onClick", "livingroom()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    
}
    else {
    image.src = "img/ondersofa.jpg";
    window.alert('there is nothing under the sofa');
    optie1.innerHTML = "Go Back";
    optie2.innerHTML = "go back to the living room";
    optie1.setAttribute("onClick", "livingroom()");
    optie2.setAttribute("onClick", "livingroom()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';      
    }
}
function sofapaper() {
    console.log('Linvin room');
        alert('you found a piece of paper');
        papersofa = true;
        papersofaimg.style.visibility = 'visible';
}

function plant() {
    console.log('Linving room');
    image.src = "img/plantpot.jpg";
    optie1.innerHTML = "keep looking";
    optie1.setAttribute("onClick", "spin()");
    optie2.innerHTML = "stop looking";
    optie2.setAttribute("onClick", "livingroom()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function spin() {
    console.log('Game Over');
    image.src = "img/go.jpg";
    alert ('after poking around in the dirt a spider falls out of the plant into your neck, after he bites you you die');
    gameover();
}
function car() {
    console.log('Garage');
    if (carkey === false) {
        alert('The car is locked find the car keys first');

    }
    else {
        image.src = "img/car.jpg";
        tire.style.visibility = 'hidden';
        optie1.innerHTML = "look in the dashboard";
        optie1.setAttribute("onClick", "dash()");
        optie2.innerHTML = "look in the trunk";
        optie2.setAttribute("onClick", "trunk()");
        optie3.innerHTML = "look in the frunk";
        optie3.setAttribute("onClick", "frunk()");
        optie4.innerHTML = "exit the car";
        optie4.setAttribute("onClick", "garage()");
        optie1.style.visibility = 'visible';
        optie2.style.visibility = 'visible';
        optie3.style.visibility = 'visible';
        optie4.style.visibility = 'visible';
        optie5.style.visibility = 'hidden';
        optie6.style.visibility = 'hidden';
  }
}
    function carkeyalert() {
        console.log('inventory');
        alert('this is a carkey');
    }

function dash() {
    console.log('car');
    image.src = "img/dash.jpg";
    optie1.innerHTML = "start the car";
    optie1.setAttribute("onClick", "carstart()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

}
function carstart() {
    console.log('car');
    alert('after starting the car it explodes');
    gameover();
}

function trunk() {
    console.log('car');
    image.src = "img/trunk.png";
    tire.style.visibility = 'visible';
    optie1.innerHTML = "look under the spare tire";
    optie1.setAttribute("onClick", "paper2()");
    optie2.innerHTML = "go back to car";
    optie2.setAttribute("onClick", "car()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function paper2 () {
    console.log('car');
    if (papertrunk === false) {
    alert('you found a piece of paper');
    papertrunk = true;
    papertrunkimg.style.visibility = 'visible';
}
    else
        alert('nothing here');
}
function frunk() {
    console.log('car');
    optie1.innerHTML = 'open the frunk';
    optie1.setAttribute("onClick", "diefrunk()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = 'go back';
    optie2.setAttribute("onClick", "car()");
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function diefrunk() {
    console.log('Car');
    image.src = "img/frunkdie.jpg";
    optie1.innerHTML = "Fight";
    optie1.setAttribute("onClick", "jelmerfight()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    setTimeout(function(){ alert    ('there was a wild jelmer sleeping in the frunk youn woke him up and now he is angry');
 }, 500);

}
function jelmerfight() {  
    console.log('Fight');
    if (Knoife === false) {
            image.src = "img/jelmerfight.jpg";
    optie1.innerHTML = "Die";
    optie1.setAttribute("onClick", "gameover()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    }
    else{

    console.log('if')
    image.src = "img/jelmerfight.jpg";
    optie1.innerHTML = "die";
    optie1.setAttribute("onClick", "gameover()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "fight him with your dagger";
    optie2.setAttribute("onClick", "killjelmer()");
    optie2.style.visibility = 'visible';
}
}
function killjelmer() {
    console.log('fight');
    safekey = true;
    alert('you killed him he dropped a key');
    keysafe.style.visibility = 'visible';
    car();

}

function dashboard() {
    console.log('Car');
    image.src = "img/dash.jpg";
    alert('there is nothing here');
    optie1.innerHTML = "go back";
    optie1.setAttribute("onClick", "car(");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "go back";
    optie2.setAttribute("onClick", "car()");
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function upstairs() {
    console.log('upstairs');
    image.src = "img/upstairs.jpg";
    optie1.innerHTML = "go to the bathroom";
    optie1.setAttribute("onClick", "bathroom()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "go to the bedroom";
    optie2.setAttribute("onClick", "bedroom()");
    optie2.style.visibility = 'visible';
    optie3.innerHTML = "go to the laundry room";
    optie3.setAttribute("onClick", "laundry()");
    optie3.style.visibility = 'visible';
    optie4.innerHTML = "go downstairs";
    optie4.setAttribute ("onClick", "gang()");
    optie4.style.visibility = 'visible';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function bathroom() {
    console.log('bathroom');
    image.src = "img/bathroom.jpg";
    optie1.innerHTML = "look in the bathtub";
    optie1.setAttribute("onClick", "bathtub()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "look at the the mirror";
    optie2.setAttribute("onClick", "mirror()");
    optie2.style.visibility = 'visible';
    optie3.innerHTML = "look under the towel";
    optie3.setAttribute("onClick", "towel()");
    optie3.style.visibility = 'visible';
    optie4.innerHTML = "exit the bathroom";
    optie4.setAttribute("onClick", "upstairs()");
    optie4.style.visibility = 'visible';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function towel() {
    console.log('bathroom');
    alert('there was a landmine under the towel');
    gameover();
}
function bathtub() {
    console.log('bathroom');
    alert('there is nothing in the bathtub');
}
function  mirror() {
    console.log('bathroom');
    if (papermirror === false) {
    optie1.onclick = function(){
        write();
    };
    image.src = "img/mirror1.jpg";
    optie1.innerHTML = "write down the numbers";
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "go back";
    optie2.setAttribute("onClick", "bathroom()");
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    
    }
    else {
    image.src = "img/mirror2.jpg";
    optie1.innerHTML = "go back";
    optie1.setAttribute("onClick", "bathroom()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    }
    
}
function write() {
    console.log('bathroom');
    image.src = "img/mirror2.jpg";
    alert('you wrote down the numbers');
    papermirror = true;
    papermirrorimg.style.visibility = 'visible';

}
function laundry() {
    console.log('bathroom');
    image.src = "img/washroom.jpg";
    optie1.innerHTML = "look in the washing machine";
    optie1.setAttribute("onClick", "wash()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "go back";
    optie2.setAttribute("onClick", "upstairs()");
    optie2.style.visibility = 'visible';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';

}
function wash() {
    console.log('washing room');
    optie1.innerHTML = "look in the pants";
    optie1.setAttribute("onClick", "pants()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "look in the sock";
    optie2.setAttribute("onClick", "sock()");
    optie2.style.visibility = 'visible';
    optie3.innerHTML = "look in the shirt";
    optie3.setAttribute("onClick", "shirt()");
    optie3.style.visibility = 'visible';
    optie4.innerHTML = "go back";
    optie4.setAttribute("onClick", "laundry()");
    optie4.style.visibility = 'visible';
}
function sock() {
    console.log('washing room')
    alert('there is nothing in the sock');
}
function shirt() {
    console.log('washing room')
    alert('there is nothing in the shirt');
}
function pants() {
    console.log('washing room');
    if (paperunknown1 === true) {
        alert('there is nothing in the pants');
    }
    else {
        alert('there was a piece of paper in one of the pockets');
        paperunknown1 = true;
        paperunknown.style.visibility = 'visible';
    }
}
function bedroom () {
    console.log('bedroom');
    image.src = "img/bedroom.jpg";
    optie1.innerHTML = "look at the safe";
    optie1.setAttribute("onClick", "safe()");
    optie1.style.visibility = 'visible';
    optie2.innerHTML = "look under the bed";
    optie2.setAttribute("onClick", "bed()");
    optie2.style.visibility = 'visible';
    optie3.innerHTML = "go back";
    optie3.setAttribute("onClick", "upstairs()");
    optie3.style.visibility = 'visible';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}   
function bed() {
    console.log('bedroom');
    alert('there is nothing under the bed');
    optie1.innerHTML = "go back";
    optie1.setAttribute("onClick", "bedroom()");
    optie1.style.visibility = 'visible';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
}
function safe() {
    console.log('bedroom');
    image.src = "img/safe.png";
    if (keyin === true) {
        optie1.style.visibility = 'hidden';
    } 
    else if (safekey === true){
    optie1.innerHTML = "put the key in the safe";
    optie1.setAttribute("onClick", "putkeyin()");
    optie1.style.visibility = 'visible';
    }
    else {
        optie1.style.visibility = 'hidden';
    }

    if (numbersin === true) {
    optie2.style.visibility = 'hidden';
    }
    else if (papersofa === true && papertrunk === true && papermirror === true && paperunknown1 === true){
    optie2.innerHTML = "put in the numbers";
    optie2.setAttribute("onClick", "putnumbersin()");
    optie2.style.visibility = 'visible';

    }
    else {
        optie2.style.visibility = 'hidden';
    }
    if (keyin === true && numbersin === true) {
        optie4.innerHTML = "open the safe";
        optie4.setAttribute("onClick", "opensafe()");
        optie4.style.visibility = 'visible';
    }
    else {
        optie4.style.visibility = 'hidden';
    }
}
function opensafe(){
    console.log('You Win');
    image.src = "img/opensafes.png";
}
function putkeyin(){
    console.log('bedroom');
    keyin = true;
    safekey = false;
    alert('you put in the key');
    safe();
}
function putnumbersin() {
    console.log('bedroom');
    numbersin = true;
    alert('you put in the correct numbers');
    papersofa = false;
    papertrunk = false;
    papermirror = false;
    paperunknown1 = false;
    safe()
}

function gameover() {
    console.log('Game Over');
    console.log('Game-Over Screen');
    image.src = "img/go.jpg"
    image.style.width = '1500px';
    optie1.style.visibility = 'hidden';
    optie2.style.visibility = 'hidden';
    optie3.style.visibility = 'hidden';
    optie4.style.visibility = 'hidden';
    optie5.style.visibility = 'hidden';
    optie6.style.visibility = 'hidden';
    inventory.style.visibility = 'hidden';
    doorkey1.style.visibility = 'hidden';
    carkeyimg.style.visibility = 'hidden';

}