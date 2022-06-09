



function gameSearch(e) {
    var gameSearch = document.querySelector("#game-search");
    var getApi = "https://rawg-video-games-database.p.rapidapi.com/games" + gameSearch.value + "&aqi=no";
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        document.querySelector("").textContent = data.
        document.querySelector("").textContent = data.
        document.querySelector("").textContent = data.current.condition.text
        var gameImg = 'http:' + data.current.condition.icon 
        document.querySelector("").src = gameImg;
        document.querySelector("").textContent = data.
    })



}; 



 



//RESTful APIs
//For a reminder on how to create a RESTful API with GET and POST routes for retrieving and adding new data, look at Module 11: Express.js, Lesson 1: Set Up Express.js Server and GET Routes and Lesson 2: Create Data Using POST Routes (along with the rest of Module 11).

//For implementation with a database, see Module 12: SQL, Lesson 2: Create Candidate Routes, Lesson 3: Join with Parties Table, and Lesson 4: Create Voter Table and Routes.

//For implementation with the Sequelize ORM, look at Module 13: Object Relational Mapping (ORM), Lesson 1: Set Up a User Model, Lesson 2: Create the Login Route, Lesson 3: Create a Post Model, and Lesson 4: Implement a Voting System.