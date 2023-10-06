var alluser =[]
var users = localStorage.getItem('Users')
if(users != null){
alluser = JSON.parse(users)
}
function signup(){
    var name = document.getElementById('sname')
    var email = document.getElementById('semail')
    var password = document.getElementById('spass')
    var obj = {
        name : name.value,
        email : email.value,
        password :password.value
    }
    alluser.push(obj)
    localStorage.setItem('Users',JSON.stringify(alluser))
    location.href = './qalog.html'
    localStorage.clear

}
function login(){
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
   var userfilter = alluser.filter(function(data){
    return data.email === email && data.password === password
   })
    if(userfilter.length){
        location.href = './quizapp.html'
        }
    else{
        alert('Failed');
        location.href = './qappsig.html'
    }
}
