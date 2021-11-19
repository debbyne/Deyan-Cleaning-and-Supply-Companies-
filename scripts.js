function validation(){
    var name = document.getElementById("name").value 
    var subject = document.getElementById("subject").value 
    var phone = document.getElementById("phone").value 
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    var error = document.getElementById("error");
    var text;
   
   if(name.length <6){
       text = "Please Enter Valid Name";
       error.innerText = text;
       return false;
   }
   
   if(subject.length  <=2){
       text = "Please Enter More Than 2 Characters";
       error.innerText = text;
       return false;
   }
   
   if(isNaN(phone || phone.length!= 10)){
       text = "Please Enter Valid Phone Number";
       error.innerText = text;
       return false;
   }
   
   if(email.indexOf("@") == -1 || email.length <7){
       text = "Please Enter Valid Email";
       error.innerText = text;
       return false;
   }
   if(message.length <=100){
       text = "Please Enter More than 100 Characters";
       error.innerText = text;
       return false;
   }
   
   
   
   alert("Form Submitted Successfully!")
   return true;
   }