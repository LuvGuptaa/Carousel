const bg = document.querySelector(".container");

const screenHeight = 1080;
const screenWidth = 1920;

const hexHeight = 110; //Change to 140 for row-style hexagons
const hexWidth = 140;

const marginTop = 10;
const marginLeft = 20;
const hexColor = '#F3A712';
const changeHex = 100;
const rowGap = 2;
const showSpeed = 6;  //Lower == more speed
const hideSpeed = 1;   //Higher == more speed

const rows = Math.floor(screenHeight/hexHeight) + 1;
const columns = Math.floor(screenWidth/hexWidth) + 1;

//Wait 9s before changing the slide


createHex()
stayLit();

function createHex(){
    for (let r = 0; r < rows + 1; r++) {
        for (let c = 0; c < columns + 1; c++) {
            const hexagon = document.createElement('div');
            hexagon.className = 'hex';
            hexagon.id = r.toString() + "-" + c.toString();
            hexagon.style.top = (r * hexHeight) - marginTop + 'px';
            hexagon.style.left = (c * hexWidth) - marginLeft + 'px';
            hexagon.style.height = hexHeight + 'px';
            hexagon.style.width = hexWidth + 'px';
            hexagon.style.opacity = 0;
            addHex(hexagon);
            // fillHex(hexagon);
            bg.appendChild(hexagon, hexHeight, hexWidth);
            
            if (r % 2 == 0) {
                hexagon.style.left = (c * hexWidth) - marginLeft - 70 + 'px';
                // hexagon.style.top = (r * hexHeight) - 30 + 'px';
            }
        }
    }
}

function fillHex(hex) {
    const hexSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const hexPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const hexDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const hexLG = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    const hexStop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');

        hexSvg.setAttribute('fill', '#F3A712');
        hexSvg.setAttribute('viewBox', '0 0 92 92');
        hexSvg.setAttribute('width', '92');
        hexSvg.setAttribute('height', '92');

        hexSvg.setAttribute('stroke', hexColor); 

        hexPath.setAttribute('d', 'M0 19.1019L45.1087 0L91.4398 19.1019V72.9193L45.1087 91.4398L0 72.9193V19.1019Z');
        hexPath.setAttribute('fill','fill="url(#paint0_linear_1691_5891)');
        
        hexLG.setAttribute('id','paint0_linear_1691_5891');
        hexLG.setAttribute('x1','45.7199');
        hexLG.setAttribute('y1','4.24542');
        hexLG.setAttribute('x2','45.7199');
        hexLG.setAttribute('y2','91.4398');
        hexLG.setAttribute('gradientUnits','userSpaceOnUse');

        hexStop.setAttribute('stop-color','#F3A712');
        hexStop.setAttribute('offset','0.9999');
        hexStop.setAttribute('stop-opacity', '0.536458');

        hexDefs.appendChild(hexLG);
        hexDefs.appendChild(hexStop);

        hexSvg.appendChild(hexDefs);
        hexSvg.appendChild(hexPath);
        return hex.appendChild(hexSvg);
}

function addHex(hex, hexHeight, hexWidth) {
    const hexSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const hexPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        hexSvg.setAttribute('fill', 'black');
        // hexSvg.setAttribute('viewBox', '0 0 ' + hexWidth + ' ' + hexHeight);
        // hexSvg.setAttribute('width', hexWidth);
        // hexSvg.setAttribute('height', hexHeight);

        hexSvg.setAttribute('stroke', hexColor); 

        // hexSvg.classList.add('hex');

        hexPath.setAttribute('d', 'M1.49733 110.64V30.2381L69.0719 1.62278L138.503 30.2484V110.63L69.0717 138.384L1.49733 110.64Z');
        hexPath.setAttribute('stroke-linecap', 'round');
        hexPath.setAttribute('stroke-linejoin', 'round');
        hexPath.setAttribute('stroke-width', '2.99465');

        hexSvg.appendChild(hexPath);
        return hex.appendChild(hexSvg);
}

function numberVisible() {
    var isVisible = 0;
    for (let r = 0; r < rows + 1; r++) {
        for (let c = 0; c < columns + 1; c++) {
            var hex = document.getElementById(r + "-" + c);
            if (hex.style.opacity == '1') {
                isVisible++;
            }
        }
    }
    return isVisible;
}

let haveIt = [];

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}

function hideLit(){
    document.getElementById('4-5').style.opacity = 0;
    document.getElementById('5-5').style.opacity = 0;
    document.getElementById('5-4').style.opacity = 0;
    document.getElementById('1-2').style.opacity = 0;
    document.getElementById('1-4').style.opacity = 0;
    document.getElementById('1-6').style.opacity = 0;
    document.getElementById('1-8').style.opacity = 0;
    document.getElementById('1-10').style.opacity = 0;
    document.getElementById('3-5').style.opacity = 0;
    document.getElementById('4-8').style.opacity = 0;
    document.getElementById('4-11').style.opacity = 0;
    document.getElementById('5-8').style.opacity = 0;
    document.getElementById('5-10').style.opacity = 0;
    document.getElementById('6-4').style.opacity = 0;
    document.getElementById('6-8').style.opacity = 0;
    document.getElementById('7-6').style.opacity = 0;


    setTimeout(() => {
        document.getElementById('4-6').style.opacity = 0;
        document.getElementById('4-4').style.opacity = 0;
        document.getElementById('1-3').style.opacity = 0;
        document.getElementById('1-5').style.opacity = 0;
        document.getElementById('1-7').style.opacity = 0;
        document.getElementById('1-9').style.opacity = 0;
        document.getElementById('4-9').style.opacity = 0;
        document.getElementById('5-9').style.opacity = 0;
        document.getElementById('6-11').style.opacity = 0;
        document.getElementById('6-6').style.opacity = 0;

    }, 500);

    setTimeout(() => {
        document.getElementById('3-4').style.opacity = 0;
        document.getElementById('4-10').style.opacity = 0;
        document.getElementById('5-7').style.opacity = 0;
        document.getElementById('5-11').style.opacity = 0;
        document.getElementById('6-10').style.opacity = 0;
        document.getElementById('6-5').style.opacity = 0;

    }, 800);

    setTimeout(() => {
        document.getElementById('6-9').style.opacity = 0;
        document.getElementById('6-7').style.opacity = 0;
        document.getElementById('7-4').style.opacity = 0;
    }, 1000);
}

function stayLit() {
    document.getElementById('0-0').style.opacity = 1;
    document.getElementById('0-1').style.opacity = 1;
    document.getElementById('1-0').style.opacity = 1;

    document.getElementById('0-13').style.opacity = 1;
    document.getElementById('1-13').style.opacity = 1;

    document.getElementById('6-0').style.opacity = 1;
    document.getElementById('7-0').style.opacity = 1;
    document.getElementById('8-0').style.opacity = 1;
    document.getElementById('8-1').style.opacity = 1;
    document.getElementById('9-0').style.opacity = 1;
    document.getElementById('9-1').style.opacity = 1;
    document.getElementById('9-2').style.opacity = 1;
    document.getElementById('9-3').style.opacity = 1;
    document.getElementById('9-4').style.opacity = 1;

    document.getElementById('6-14').style.opacity = 1;
    document.getElementById('7-13').style.opacity = 1;
    document.getElementById('8-13').style.opacity = 1;
    document.getElementById('8-14').style.opacity = 1;
    document.getElementById('9-9').style.opacity = 1;
    document.getElementById('9-10').style.opacity = 1;
    document.getElementById('9-11').style.opacity = 1;
    document.getElementById('9-12').style.opacity = 1;
    document.getElementById('9-13').style.opacity = 1;
}

function lightUp(){
    for (let k = 0; k < rows * columns * 5 ; k++) {
        setTimeout(() => {
            var r = Math.floor(Math.random() * rows);
            var c = Math.floor(Math.random() * columns);
            var selectedHex = document.getElementById(r + "-" + c);
            selectedHex.style.opacity = 1;
        }, k * showSpeed);
    }
        
    var timeValue = setTimeout(() => {
        for (let k = 0; k < rows * columns * 6; k++) {
            setTimeout(() => {
                var r = Math.floor(Math.random() * rows);
                var c = Math.floor(Math.random() * columns);
                var selectedHex = document.getElementById(r + "-" + c);
                selectedHex.style.opacity = 0;
                stayLit();
                hideLit();
            }, (k * showSpeed) / hideSpeed );
        }
    }, 4000);
    
    // 
        
        console.log(rows*columns);

        // while (numberVisible() != (rows * columns)) {
        //     setTimeout(() => {
        //         var r = Math.floor(Math.random() * rows);
        //         var c = Math.floor(Math.random() * columns);
        //         var selectedHex = document.getElementById(r + "-" + c);
        //         selectedHex.style.opacity = 1;
        //     }, 200);
        // }


        // for (let u = rows ; u > rows - 2; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  1000);
        //     }
        // }
        // for (let u = rows - 2; u > rows - 5; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  2000);
        //     }
        // }
        // for (let u = rows - 5; u > rows - 8; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  3000);
        //     }
        // }
        // for (let u = rows - 8; u > rows - 11; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  4000);
        //     }
        // }
        // for (let u = rows - 9; u > rows - 10; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  5000);
        //     }
        // }
        // for (let u = rows - 12; u > rows - 15; u--) {
        //     for (let v = 0; v < columns + 1; v++) {
        //         setTimeout(() => {
        //             var hex = document.getElementById(u + "-" + v);
        //             hex.style.opacity = 1;
        //         },  6000);
        //     }
        // }


    
}




const dept = document.querySelector(".dept");
const deptName = document.querySelector(".dept h1");
const photo = document.querySelector(".photo");
const imageContainer = document.querySelector(".image");
const image = document.querySelector(".image img");
const nameCostaa = document.querySelector(".name h2");
const nameContainer = document.querySelector(".name")
let currentData = 0; 

data = [
    {
        "name": "Adarsh Bharadwaj",
        "dept": "Department of Visual Media",
        "photo": "Assets/adarsh.png"
    },
    {
        "name": "Mayan Agrawal",
        "dept": "Department of Registration and Correspondence",
        "photo": "Assets/mayan.png"
    },
    {
        "name": "Lalit Adithya",
        "dept": "Department of Reception and Accomodation",
        "photo": "Assets/lalit.png"
    },
    {
        "name": "Sahil Shah",
        "dept": "Department of Sponsorship and Marketing",
        "photo": "Assets/sahil.png"
    },
    {
        "name": "Poorvansh Kavta",
        "dept": "Department of Publicity and Patnerships",
        "photo": "Assets/poorvansh.png"
    },
    {
        "name": "Nishit Gupta",
        "dept": "Department of Events, Projects and Logistics",
        "photo": "Assets/nishit.png"
    },
    {
        "name": "Ishpreet Singh Sodhi",
        "dept": "Guest Lectures and Paper Presentation",
        "photo": "Assets/ishpreet.png"
    },
    {
        "name": "Ashirwad Karande",
        "dept": "President, Students' Union",
        "photo": "Assets/ashirwad.png"
    },
    {
        "name": "Naman Jalan",
        "dept": "General Secretary, Students' Union",
        "photo": "Assets/naman.png"
    },
]

window.addEventListener('keydown', e => {
    keyPressed = parseInt(e.key);
    if (keyPressed >= 1 && keyPressed <=9   ) {
        currentData = keyPressed - 1;
        console.log(currentData);
        lightUp();
        setTimeout(() => {
            changeData();
        }, 2000);
        // setTimeout(() => {
        //     stayLit();
        // }, 2500);
    }
})
 function changeData() {
//     imageContainer.style.transform = "translateY(0px) translateX(0px)";
//     setTimeout(() => {
//         photo.style.transform = "translateY(1000px)";
//     }, 200);
//     setTimeout(() => {
//         nameContainer.style.transform = "translateY(1000px)";
//         dept.style.transform = "translateY(-200px)";
//     }, 400);
//     setTimeout(() => {
//         updateValue();
//     }, 800);
//     setTimeout(() => {
//         photo.style.transform = "translateY(0px)";
//     }, 1000);
//     setTimeout(() => {
//         nameContainer.style.transform = "translateY(0px)";
//         dept.style.transform = "translate(0px)";
//     }, 1200);
//     setTimeout(() => {
//         imageContainer.style.transform = "translateY(-20px) translateX(20px)";
//     }, 1700);
//     setTimeout(() => {
//         imageContainer.style.transform = "translateY(0px) translateX(0px)";
//     }, 1400);

        setTimeout(() => {
            photo.style.opacity = 0;
            nameContainer.style.opacity = 0;
            dept.style.opacity = 0;
        }, 400);
        setTimeout(() => {
            updateValue();
        }, 1000);
        setTimeout(() => {
            photo.style.opacity = 1;
            nameContainer.style.opacity = 1;
            dept.style.opacity = 1;
        }, 1200);
 }
 function updateValue() {
    let d = data[currentData];
    nameCostaa.innerHTML = d.name;
    deptName.innerHTML = d.dept;
    image.src = d.photo;
 }
