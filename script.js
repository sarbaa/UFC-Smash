const fighters = [
{
name: "Conor McGregor",
img: "fighters/ConorMcGregor.jpg",
rating: 1600
},

{
name: "Khabib Nurmagomedov",
img: "fighters/Khabib.jpg",
rating: 1500
},

{
name: "John Jones",
img: "fighters/jones.jpg",
rating: 2000
},

{
name: "Daniel Cormier",
img: "fighters/cormier.jpg",
rating: 1800
},

{
name: "Georges St-Pierre",
img: "fighters/gsp.jpg",
rating: 1900
},

{
name: "Anderson Silva",
img: "fighters/silva.jpg",
rating: 1700    
},

{
name: "Israel Adesanya",
img: "fighters/adesanya.jpg",
rating: 1650    
},

{
name: "Stipe Miocic",
img: "fighters/miocic.jpg",
rating: 1550
},

{
name: "Alexander Volkanovski",
img: "fighters/volkanovski.jpg",
rating: 1580
},

{
name: "Charles Oliveira",
img: "fighters/oliveira.jpg",
rating: 1600
},

{
name: "Islam Makhachev",
img: "fighters/makhachev.jpg",
rating: 1600
},

{
name: "Alex Pereira",
img: "fighters/pereira.jpg",
rating: 2000
},

{
name: "Khamzat Chimaev",
img: "fighters/chimaev.jpg",
rating: 1600
},

{
name: "Nate Diaz",
img: "fighters/diaz.jpg",
rating: 1600
},

{
name: "Dustin Poirier",
img: "fighters/poirier.jpg",
rating: 1600
},

{
name: "Tony Ferguson",
img: "fighters/ferguson.jpg",
rating: 1600
}

];

const fighter1Img = document.getElementById("fighter1-img");
const fighter2Img = document.getElementById("fighter2-img");
const fighter1Name = document.getElementById("fighter1-name");
const fighter2Name = document.getElementById("fighter2-name");
const fighter1Rating = document.getElementById("fighter1-rating");
const fighter2Rating = document.getElementById("fighter2-rating");

function getRandomFighters() {
    const index1 = Math.floor(Math.random() * fighters.length);
    let index2;
    do {
        index2 = Math.floor(Math.random() * fighters.length);
    } while (index1 === index2);
    
    return [fighters[index1], fighters[index2]];
}

function displayFighters() {
    const [fighter1, fighter2] = getRandomFighters();
    
    fighter1Img.querySelector("img").src = fighter1.img;
    fighter1Name.textContent = fighter1.name;
    fighter1Rating.textContent = fighter1.rating;
    
    fighter2Img.querySelector("img").src = fighter2.img;
    fighter2Name.textContent = fighter2.name;
    fighter2Rating.textContent = fighter2.rating;
}

displayFighters();