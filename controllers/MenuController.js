const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get today's date",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
   }

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Get today's date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
    }

    clear(){
      console.log("\x1Bc");
    }

    addContact(){
     console.log("addContact called");
     this.main();
   }

   getDate(){
     var today = new Date();
     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     var dateTime = date+' '+time;
     console.log(dateTime);
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }

   getContactCount(){
    return this.contacts.length;
  }
  }
