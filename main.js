
const audiR8 = {
    name: "Audi R8",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const NissanGTR = {
    name: "Nissan GTR",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const ChevyCorvette = {
    name: "Chevrolet Corvette",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const FordMustang = {
    name: "Ford Mustang",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const FerrariLaFerrari = {
    name: "Ferrari LaFerrari",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const LamboAventador = {
    name: "Lamborgini Aventador",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const McLarenP1 = {
    name: "McLaren P1",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const MercedesAMG = {
    name: "Mercedes AMG",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const PaganiHyura = {
    name: "Pagani Hyura",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}
 const Porsche911 = {
    name: "Porsche 911",
    img: "audir8.jpg",
    "power": 200,
    "torque": 200,
    "speed": 200,
    "acceleration": 2.2,
    " ground_clearance": 10,
    "fuel_economy": 0.1,
    "price": 2000000,
    "year": 2015
}

let cars = [audiR8, 
            NissanGTR, 
            ChevyCorvette, 
            FordMustang, 
            FerrariLaFerrari, 
            LamboAventador, 
            McLarenP1, 
            MercedesAMG,
            PaganiHyura, 
            Porsche911
    ];

let unOrderedList = document.getElementById("car-names");
let li = unOrderedList.getElementsByTagName('li');

for(let i = 0; i < cars.length; i++){
    let listelement = document.createElement('li');
    unOrderedList.appendChild(listelement)
    li[i].innerHTML = cars[i].name;
    li[i].classList.add("mycar")
  
} 

let carsButton = document.getElementById("cars");
let aboutButton = document.getElementById("about");
let contactButton = document.getElementById("contact");
let carsSlider = document.getElementById("cars-container").style;
let aboutSlider = document.getElementById("about-container").style;
let contactSlider = document.getElementById("contact-container").style;

carsButton.addEventListener("click", () => {
    if(carsSlider.transform == 'translateX(0px)'){
        carsSlider.transform = "translateX(600px)";
        aboutSlider.transform = "translateX(0px)";
        contactSlider.transform = "translateX(0px)";
    } else carsSlider.transform = "translateX(0px)" 
});
aboutButton.addEventListener("click", () => {
    if(aboutSlider.transform == 'translateX(0px)') {
        aboutSlider.transform = "translateX(600px)";
        carsSlider.transform = "translateX(0px)";
        contactSlider.transform = "translateX(0px)";
    } else aboutSlider.transform = "translateX(0px)" 
});
contactButton.addEventListener("click", () => {
    if(contactSlider.transform == 'translateX(0px)') {
        contactSlider.transform = "translateX(600px)";
        aboutSlider.transform = "translateX(0px)";
        carsSlider.transform = "translateX(0px)";
    } else contactSlider.transform = "translateX(0px)" 
});


