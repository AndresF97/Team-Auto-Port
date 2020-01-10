const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const employees = []
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
        employees.push(manager)
        console.log(employees)
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
        employees.push(engineer)
        console.log(employees)
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
        console.log(employees)
        console.log(("-").repeat())
            if(choice === "Engineer"){
                return promptEngineer()
            }
            if(choice ==="Intern"){
               return promptIntern()
            }
         })

}
console.log("Please Build your team!")
promptManager()
