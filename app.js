const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const promptManager = function(){
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
            choices:["Engineer","Intern","I dont want to add anymore team members"],
            name:"choice"
        }
    ]).then(function({name,id,email,office,choice}){
        const manager = new Manager(name,id,email,office);
        fs.appendFile("index.html",`<div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h1>${manager.name}</h1>
          <h2><i class="fas fa-mug-hot"></i> &nbsp; Manager</h2>
        </div>
        <div class="container bg-light col">
              <ul class="list-group p-3">
                  <li class="list-group-item">ID : ${manager.id}</li>
                  <li class="list-group-item">Email : <a href="#"class="card-link">${manager.email}</a> </li>
                  <li class="list-group-item">Office number: ${manager.office}</li>
              </ul>
              </div>
        </div>`,function(err){
            if(err) throw err
        })
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
    ]).then(function({name,email,id,github}){
    const engineer = new Engineer(name,email,id,github)
    fs.appendFile("index.html",`<div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h1>${engineer.name}</h1>
          <h2><i class="fas fa-glasses"></i> &nbsp; Engineer</h2>
        </div>
        <div class="container bg-light col">
              <ul class="list-group p-3">
                  <li class="list-group-item">ID : ${engineer.id}</li>
                  <li class="list-group-item">Email : <a href="#"class="card-link">${engineer.github}</a> </li>
              </ul>
              </div>
        </div>`,function(err){
            if(err) throw err
        })

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
    ]).then(function({name,id,email,school}){
        const intern = new Intern(name,id,email,school)
    })

}

console.log("Please Build your team!")
promptManager().then(function({choice}){
    if(choice === "Engineer"){
        return promptEngineer()
    }
    if(choice =="Intern"){
       return promptIntern()
    }
})