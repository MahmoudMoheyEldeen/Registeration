isRepeated=false;
isRegisterd=false;
var user = {
    username:'',
    email:'',
    password:''
  };
 let usersAssign = JSON.parse(localStorage.getItem('users')) || [];











////////////////////// Click on link
 var signUpStatus= document.querySelector('#noAccount')
 signUpStatus.addEventListener('click' , function(event){
    event.preventDefault();
     if(signUpStatus.innerText.toLowerCase() == `don't have account`)
     {
        ///// appear signup div
        
        document.querySelector('#actionButton').innerHTML=`<span class="button__text" >Sign Up Now</span> 
        <i class="button__icon fas fa-chevron-right"></i>`
        signupDiv = document.querySelector('.signup-div')
        signupDiv.style.display='block'
        logInDiv =  document.querySelector('.login-div')
        logInDiv.style.display='none'
        document.querySelector('#noAccount').innerHTML='I have Account , Sign In'
     }
     else{

        //// appear LogIn div
        document.querySelector('#actionButton').innerHTML=`<span class="button__text" >Log In Now</span> 
        <i class="button__icon fas fa-chevron-right"></i>`
        signupDiv = document.querySelector('.signup-div')
        signupDiv.style.display='none'
        logInDiv =  document.querySelector('.login-div')
        logInDiv.style.display='block'
        document.querySelector('#noAccount').innerHTML= `don't have account`
     }
 })


 ////////////////////// Click on Button
 
 actionButton= document.querySelector('#actionButton')
 actionButton.addEventListener('click' , function(event){
    event.preventDefault();
    if(actionButton.innerText.toLowerCase()=='log in now'){

       user.username = document.querySelector('#login-username').value
        user.password=document.querySelector('#login-password').value

        usersAssign = JSON.parse(localStorage.getItem('users')) || [];
        
        
        for( var i=0 ; i< usersAssign.length ; i++)
             {   
                if(usersAssign[i].username === user.username && usersAssign[i].password === user.password){
                    console.log('welcome');
                    window.location.assign("../home.html");
                    isRegisterd=true;
                    break;
                }
            }
            // else{
            //     Swal.fire("your password is incorrect or you're not signed up yet ");
            // }
            if(!isRegisterd){
                
                Swal.fire("your password is incorrect or you're not signed up yet ");
        }
     }
     else {

        user.username = document.querySelector('#signup-username').value
        user.email = document.querySelector('#signup-useremail').value
        user.password=document.querySelector('#signup-userpassword').value

        document.querySelector('#signup-username').value=''
         document.querySelector('#signup-useremail').value=''
        document.querySelector('#signup-userpassword').value=''

         usersAssign = JSON.parse(localStorage.getItem('users')) || [];

        if(usersAssign.length>0)
        {
            for( var i=0 ; i< usersAssign.length ; i++)
             {   
                if(usersAssign[i].email === user.email){
                    isRepeated=true;
                    Swal.fire("This email already signed up before ");
                    break;
                }
            }
            if(!isRepeated){
                
                    usersAssign.push(user)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You're signed up successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    localStorage.setItem('users',JSON.stringify(usersAssign))
            }

        }
        else{
                    usersAssign.push(user)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You're signed up successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    localStorage.setItem('users',JSON.stringify(usersAssign))
        }
        
        
     }
 })
