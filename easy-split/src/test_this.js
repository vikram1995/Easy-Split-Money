let user ={
    firstName: "rahul",
    greet: function(){
        console.log(this.firstName)
    }
}

 greet= "vikram";
 firstName = "vicky"
function callMe(){
    //var greet= "vikram";
    console.log("hi", this.greet);
    
    
}

callMe();
user.greet();
var greetFunction = user.greet
greetFunction= greetFunction.bind(user)
greetFunction();