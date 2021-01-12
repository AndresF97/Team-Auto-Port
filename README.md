# Team Auto Portfolio
## Summary 
- This app allows you; to enter infromation about your newly higher team (email,phone number, github account and position). With that info it should return a html file with information of each employee. 
## Site Picture
![ Team Auto Port](./assets/img/JestApp.gif)


## Technologies Used
- HTML - used to create elements on the DOM.
- CSS - styles html elements on page.
- Bootstrap - Used to create cosmitics of the website and Media inquries.
- FontAwesome - used to add nice looking icons.
- Git - version control system to track changes to source code.
- GitHub - hosts repository.
- Inquirer - An npm extension to get information from user.
- Jest - Used to test javascript classes and method.
- NodeJS - Used for package managment and execute Javascript code in the CLI.
- ES6 - SUed to build prompts, functions and classes.  
## Code Snippet
```javascript
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
```
- This code get the infromaition from the user and makes a card according to the user's info it will keep on asking the user for there input until they want to quit.
## Auhtors
- [LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
- [GitHub](https://github.com/AndresF97)
- [Portfolio](https://andresf97.github.io/PortfolioUpdate/public/index.html)