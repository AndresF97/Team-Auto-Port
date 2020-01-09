const inquirer = require("inquirer");
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
    ])

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
    ])

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
    ])

}

console.log("Please Build your team!")
promptManager().then(function({choice}){
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
})