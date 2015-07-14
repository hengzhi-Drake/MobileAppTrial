/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services')

.service('dbIni', function(DB){

    this.insertAllUser = function(){
    DB.insertAll('users', [
    {
        "id": 0,
        "name": "Atkinson Jenkins"
    },
    {
        "id": 1,
        "name": "Kent Cook"
    },
    {
        "id": 2,
        "name": "Sandoval Kramer"
    },
    {
        "id": 3,
        "name": "Adrienne Rutledge"
    },
    {
        "id": 4,
        "name": "Ebony Bryant"
    },
    {
        "id": 5,
        "name": "Amalia Bernard"
    },
    {
        "id": 6,
        "name": "Faulkner Lang"
    },
    {
        "id": 7,
        "name": "Foley Pickett"
    },
    {
        "id": 8,
        "name": "Lenore Jarvis"
    },
    {
        "id": 9,
        "name": "Marisa Frazier"
    },
    {
        "id": 10,
        "name": "Kristine Johns"
    },
    {
        "id": 11,
        "name": "Burnett Stokes"
    },
    {
        "id": 12,
        "name": "Lucille Fowler"
    },
    {
        "id": 13,
        "name": "Pollard Clark"
    },
    {
        "id": 14,
        "name": "Vega Hendrix"
    },
    {
        "id": 15,
        "name": "Jones Ortega"
    },
    {
        "id": 16,
        "name": "Irwin Stone"
    },
    {
        "id": 17,
        "name": "Phyllis Rosario"
    },
    {
        "id": 18,
        "name": "Beverly Dalton"
    },
    {
        "id": 19,
        "name": "Cervantes Blair"
    },
    {
        "id": 20,
        "name": "Simmons Diaz"
    },
    {
        "id": 21,
        "name": "Toni Molina"
    },
    {
        "id": 22,
        "name": "Snow Walters"
    },
    {
        "id": 23,
        "name": "Vance Ratliff"
    },
    {
        "id": 24,
        "name": "Patrice Page"
    },
    {
        "id": 25,
        "name": "June Marks"
    },
    {
        "id": 26,
        "name": "Duran Kane"
    },
    {
        "id": 27,
        "name": "Ward Ford"
    },
    {
        "id": 28,
        "name": "Ramirez Beach"
    },
    {
        "id": 29,
        "name": "Willie Compton"
    },
    {
        "id": 30,
        "name": "Kinney Woodard"
    },
    {
        "id": 31,
        "name": "Helen Tyson"
    },
    {
        "id": 32,
        "name": "Rosie Gray"
    },
    {
        "id": 33,
        "name": "Florence Ball"
    },
    {
        "id": 34,
        "name": "Bray Whitney"
    },
    {
        "id": 35,
        "name": "Hale Jimenez"
    },
    {
        "id": 36,
        "name": "Haynes Quinn"
    },
    {
        "id": 37,
        "name": "Weiss Miles"
    },
    {
        "id": 38,
        "name": "Shelton Padilla"
    },
    {
        "id": 39,
        "name": "Juliette George"
    },
    {
        "id": 40,
        "name": "Hendricks Merritt"
    },
    {
        "id": 41,
        "name": "Hallie Clayton"
    },
    {
        "id": 42,
        "name": "Yvette Pate"
    },
    {
        "id": 43,
        "name": "Mckinney Valentine"
    },
    {
        "id": 44,
        "name": "Angeline Solomon"
    },
    {
        "id": 45,
        "name": "Kristie Harper"
    },
    {
        "id": 46,
        "name": "Carmella Hunt"
    },
    {
        "id": 47,
        "name": "Andrea Crosby"
    },
    {
        "id": 48,
        "name": "Adkins Prince"
    },
    {
        "id": 49,
        "name": "Ruiz Lane"
    },
    {
        "id": 50,
        "name": "Watson Salas"
    },
    {
        "id": 51,
        "name": "Janine Garrett"
    },
    {
        "id": 52,
        "name": "Skinner Cantu"
    },
    {
        "id": 53,
        "name": "Hopper Rodriquez"
    },
    {
        "id": 54,
        "name": "Gamble Obrien"
    },
    {
        "id": 55,
        "name": "Aurora Wise"
    },
    {
        "id": 56,
        "name": "Peters Baird"
    },
    {
        "id": 57,
        "name": "Gretchen Dawson"
    },
    {
        "id": 58,
        "name": "Katrina Holt"
    },
    {
        "id": 59,
        "name": "Smith Kim"
    },
    {
        "id": 60,
        "name": "Tate Adkins"
    },
    {
        "id": 61,
        "name": "Grimes Walls"
    },
    {
        "id": 62,
        "name": "Leon Terrell"
    },
    {
        "id": 63,
        "name": "Carmen Leon"
    },
    {
        "id": 64,
        "name": "Colette Hoover"
    },
    {
        "id": 65,
        "name": "Ina Levy"
    },
    {
        "id": 66,
        "name": "Grace Trujillo"
    },
    {
        "id": 67,
        "name": "Cochran Hale"
    },
    {
        "id": 68,
        "name": "Avery Hansen"
    },
    {
        "id": 69,
        "name": "Bush Ortiz"
    },
    {
        "id": 70,
        "name": "Jacobson Ellison"
    },
    {
        "id": 71,
        "name": "Mcfadden Short"
    },
    {
        "id": 72,
        "name": "Glenna Pratt"
    },
    {
        "id": 73,
        "name": "Lindsay Cross"
    },
    {
        "id": 74,
        "name": "Bryant Holcomb"
    },
    {
        "id": 75,
        "name": "Chambers Mclean"
    },
    {
        "id": 76,
        "name": "Opal Burke"
    },
    {
        "id": 77,
        "name": "Jordan Simmons"
    },
    {
        "id": 78,
        "name": "Janie Montgomery"
    },
    {
        "id": 79,
        "name": "Dolores Dickerson"
    },
    {
        "id": 80,
        "name": "Marsha Mason"
    },
    {
        "id": 81,
        "name": "Allison Flynn"
    },
    {
        "id": 82,
        "name": "Haley Campos"
    },
    {
        "id": 83,
        "name": "Hall Hess"
    },
    {
        "id": 84,
        "name": "Lela Cooley"
    },
    {
        "id": 85,
        "name": "Christine Joyner"
    },
    {
        "id": 86,
        "name": "Jenny Carpenter"
    },
    {
        "id": 87,
        "name": "Diana Lawson"
    },
    {
        "id": 88,
        "name": "Young Cherry"
    },
    {
        "id": 89,
        "name": "Duffy Bowers"
    },
    {
        "id": 90,
        "name": "Holder Boyer"
    },
    {
        "id": 91,
        "name": "Villarreal Carson"
    },
    {
        "id": 92,
        "name": "Woods Barker"
    },
    {
        "id": 93,
        "name": "Hodge Wyatt"
    },
    {
        "id": 94,
        "name": "Helga Dorsey"
    },
    {
        "id": 95,
        "name": "Verna Brock"
    }
]);

}; //end of insertAllUser


  });