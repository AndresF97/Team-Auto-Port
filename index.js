const inquirer = require("inquirer");

promptManager = function() { 
    return inquirer.prompt([
    {
        input:"input",
        message:"Whats your ID?",
        name:"ID",
    },{
        input:"input",
        message:"Whats your Email?",
        name:"email"
    },{
        input:"input",
        message:"Whats your office Number?",
        name:"officeNum"
    }

    ])
}
promptIntern = function() { 
    return inquirer.prompt([
    {
        input:"input",
        message:"Whats your ID?",
        name:"ID",
    },{
        input:"input",
        message:"Whats your Email?",
        name:"email"
    },{
        input:"input",
        message:"Whats the name of the school graduated from?",
        name:"officeNum"
    }

    ])
}


promptUser = function(){
        return inquirer.prompt([
        {
            type:"input",
            message:"Whats your name?",
            name:"name"
        },{
            type:"input",
            message:"Whats your position?",
            name:"position"
        },
        
    ])
}
promptUser().then(function({name,position}){
   if(position === "Manager" || position ==="manager"){
       return promptManager()
   }
   if(position === "Intern" || position ==="intern"){
    return promptIntern()
}

})