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
    ]).then(function({name,id,email,office}){
        const manager = new Manager(name,id,email,office)


    })

};
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
    while(choice!=="I dont want to add anymore team members"){
    if(choice === "Engineer"){
        console.log(("-").repeat(50))
        return promptEngineer().then(function({choice}){
            if(choice === "Engineer"){
                console.log(("-").repeat(50))
                return promptEngineer()
            }if(choice === "Intern"){
                console.log(("-").repeat(50))
                return promptIntern()
            }
        })
    }
    if(choice =="Intern"){
        console.log(("-").repeat(50))
        return promptIntern().then(function({choice}){
            if(choice === "Engineer"){
                console.log(("-").repeat(50))
                return promptEngineer()
            }if(choice === "Intern"){
                console.log(("-").repeat(50))
                return promptIntern()
            }
        })

    }
    }
})