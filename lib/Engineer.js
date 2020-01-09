const Employee = require("./Employee")
class Engineer{
    constructor(name,id,email,GitHubUser){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = GitHubUser;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;

