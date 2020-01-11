const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeToFileASync = util.promisify(fs.writeFile)
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const employees = []
let htmlBody=``;
let cardManager = ``;
let cardEngineer = ``;
let cardIntern =``;
let htmlfoot = ``;
const promptManager = async function(){
    return inquirer.prompt([
        {
            type:"input",
            message:"What's you Manager's name?",
            name:"name"
        },{
            type:"input",
            message:"What's your Manager's ID?",
            name:"id"
        },{
            type:"input",
            message:"What's your manager's email?",
            name:"email"
        },{
            type:"input",
            message:"What's you Manager's office number?",
            name:"office"
        },{
            type:"list",
            message:"Which type of memeber would you like to add?",
            choices:[ "Engineer","Intern","I dont want to add anymore team members"],
            name:"choice"
        }
    ]).then(async function({name,id,email,office,choice}){
        const manager = new Manager(name,id,email,office)
        cardManager =`
        <div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h1>${manager.name}</h1>
          <h2><i class="fas fa-glasses"></i> &nbsp;Manager</h2>
        </div>
        <div class="container bg-light">
              <ul class="list-group p-3">
                  <li class="list-group-item">ID :${manager.id}</li>
                  <li class="list-group-item">Email : <a href="https://mail.google.com/"class="card-link">${manager.email}</a> </li>
                  <li class="list-group-item">Office number: ${manager.office}</li>
              </ul>
              </div>
            </div>
              `
        employees.push(manager)
        console.log(("-").repeat())
            if(choice === "Engineer"){
                return promptEngineer()
            }
            if(choice ==="Intern"){
               return promptIntern()
            }
         })
        }

const promptEngineer = function(){
    return inquirer.prompt([
        {
            type:"input",
            message:"What's you Engineer's name?",
            name:"name"
        },{
            type:"input",
            message:"What's your Engineer's ID?",
            name:"id"
        },{
            type:"input",
            message:"What's your Engineer's email?",
            name:"email"
        },{
            type:"input",
            message:"What's you Engineer's github username?",
            name:"github"
        },{
            type:"list",
            message:"Which type of memeber would you like to add?",
            choices:["Engineer","Intern","I dont want to add anymore team members"],
            name:"choice"
        }
    ]).then( async function({name,id,email,github,choice}){
        const engineer = new Engineer(name,id,email,github)
        cardEngineer = `<div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h1>${engineer.name}</h1>
          <h2><i class="fas fa-laptop-code"></i> &nbsp;Engineer</h2>
        </div>
        <div class="container bg-light">
              <ul class="list-group p-3">
                  <li class="list-group-item">ID : ${engineer.id}</li>
                  <li class="list-group-item">Email : <a href="https://mail.google.com/"class="card-link">${engineer.email}</a> </li>
                  <li class="list-group-item">Github account: <a href="https://github.com/"class="card-link">${engineer.github}</a> </li>
              </ul>
              </div>
              </div>
              `

        employees.push(engineer)
        console.log(("-").repeat())
            if(choice === "Engineer"){
                return promptEngineer()
            }
            if(choice ==="Intern"){
               return promptIntern()
            }
         })
}
const promptIntern = function(){
    return inquirer.prompt([
        {
            type:"input",
            message:"What's you Intern's name?",
            name:"name"
        },{
            type:"input",
            message:"What's your Intern's ID?",
            name:"id"
        },{
            type:"input",
            message:"What's your Intern's email?",
            name:"email"
        },{
            type:"input",
            message:"What's you Intern's school?",
            name:"school"
        },{
            type:"list",
            message:"Which type of memeber would you like to add?",
            choices:["Engineer","Intern","I dont want to add anymore team members"],
            name:"choice"
        }
    ]).then(async function({name,id,email,github,choice}){
        const intern = new Intern(name,id,email,github)
        employees.push(intern)
        cardIntern  =`<div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h1>${intern.name}</h1>
          <h2><i class="fas fa-school"></i> &nbsp;Intern</h2>
        </div>
        <div class="container bg-light">
              <ul class="list-group p-3">
                  <li class="list-group-item">ID : ${intern.id}</li>
                  <li class="list-group-item">Email : <a href="https://mail.google.com/"class="card-link">${intern.email}</a> </li>
                  <li class="list-group-item">School: <a href="https://www.google.com/search?sxsrf=ACYBGNTZXX802ACAWNWCBEgK0prDTsDYqA%3A1578721229634&source=hp&ei=zV8ZXvenJM-4-gS0xLbABQ&q=${intern.school}s&oq=${intern.school}&gs_l=psy-ab.3..0i131j0l3j0i131j0j0i131j0j0i131j0.2096.3148..3471...2.0..0.80.383.5......0....1..gws-wiz.....10..35i362i39j35i39.6UWdr0Tunp4&ved=0ahUKEwi3wtvw6vrmAhVPnJ4KHTSiDVgQ4dUDCAg&uact=5"class="card-link">${intern.school}</a> </li>
              </ul> 
              </div>
              </div>
              `
        console.log(("-").repeat())
            if(choice === "Engineer"){
                return promptEngineer()
            }
            if(choice ==="Intern"){
               return promptIntern()
            }
         })

}
writeFile = (data) =>{
    writeToFileASync("./output/team.html",data)
}
console.log("Please Build your team!")
 promptManager().then(function(err){
     return generatehtml()
    
})


// var htmlfoot = ``
function generatehtml(){
    htmlBody = htmlBody + cardManager+cardEngineer+cardIntern;
    var htmlHead = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
                <title>Your A-Team!</title>
            </head>
            <body>
            <h1 class="text-center bg-secondary text-white font-weight-bolder p-4">The A-Team <i class="fas fa-users"></i></h1>
        <div class="container row p-5">`
            
        htmlfoot=`<script src="app.js"></script>
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                </body>
                </html>`
          htmlHead =  htmlHead + htmlBody+htmlfoot
    writeToFileASync("./output/index.html",htmlHead);

}