window.onload = function () {

    document.getElementById("startBtn").addEventListener("click", function () {
        // objId = document.getElementById("firstRainbow");
        var rainbow = new Rainbow(["red, green", "green", "black", "yellow"]);
        rainbow.startOn("firstRainbow", 2000);

    });


}



function Rainbow(input) {

    let colors = new Array();
    if (input == 0) {
        alert("colors needed !!");
    }
    else {
        for (let i = 0; i < input.length; i++) {
            colors.push(input[i]);

        }
        console.log(colors);
    }
    var colorCount = 0;


    Rainbow.prototype.startOn = function (objId, intervel) {

        setInterval(function (objId) {
            let el = document.getElementById(objId);
           
            el.style.backgroundColor = colors[colorCount];
            // el.style.background = colors[colorCount];
            colorCount = (colorCount + 1) % colors.length;
            console.log(objId, colors);
            colorCount++;
        }, intervel);
        console.log(objId, intervel, colors);
    }

}













// colorCount = 0;
// let firstDiv = document.getElementById("firstRainbow");
// let secondDiv = document.getElementById("secondRainbow");

// let rainbowOne = new Array("red","green", "black", "yellow");
// let rainbowTwo = new Array("orange","brown", "purple", "grey");

// function createRainbowOne(){
//     let x = document.querySelector(".firstR");
//     x.style.background = rainbowOne[colorCount];
//     colorCount = (colorCount+1) % rainbowOne.length;
//     // x[1].style.background = rainbowTwo[colorCount];
//     // colorCount = (colorCount+1) % rainbowTwo.length; 

// }


// function createRainbowTwo(){
//     let x = document.querySelector(".secondR");
//     x.style.background = rainbowOne[colorCount];
//     colorCount = (colorCount+1) % rainbowOne.length;
//     // x[1].style.background = rainbowTwo[colorCount];
//     // colorCount = (colorCount+1) % rainbowTwo.length; 

// }

// function startFirstRanbow()
// {
//     setInterval("createRainbowOne()",2000);
// }
// function startSecondRanbow()
// {
//     setInterval("createRainbowTwo()",2000);
// }