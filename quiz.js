var questions = [
    {
question : 'Question 01 : '+  '2 + 10 = ?',
option1 : '15' ,
option2 : '12 ',
option3 : '19 ',
correctoption : '12'
    },
    {
        question : 'Question 02 : '+'Which is the biggest city of Pakistan ?',
        option1 : 'Islamabad' ,
        option2 : 'Quetta' ,
        option3 : 'Karachi' ,
        correctoption : 'Karachi'
    },
    {
        question : 'سوال 03 : ' +'اسلام کے ارکان ہے؟',
        option1 : '5' ,
        option2 : '10' ,
        option3 : '4' ,
        correctoption : '5'
    },
    {  
        question : ' سوال 04 : ' +'نبی کا لغوی معنی ہے ؟' ,
        option1 : 'خبر دینے والا' ,
        option2 : 'رسول' ,
        option3 : 'غیب کی باتیں بتانے والا' ,
        correctoption : 'خبر دینے والا'
    },
    {
        question : 'Question 05 : '+ 'What does HTML stand for ?',
        option1 : 'Hyperlink text markup language ' ,
        option2 : 'Hypertool text markup language ' ,
        option3 : 'Hyper text markup language ' ,
        correctoption : 'Hyper text markup language '
    }
]

var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1') //label ko bolaya h
var opt2 = document.getElementById('opt2')  //label ko bolaya h
var opt3 = document.getElementById('opt3')  //label ko bolaya h
var index = 0 
var btn =document.getElementById('btn')
var score = 0
var min = 1
var sec = 59
var timers = document.getElementById('timer')
var interval = setInterval(function(){
timers.innerHTML = `${min} : ${sec}`
sec--
if(sec < 0){
    min--
    sec = 59
    if (min  <  0 ){
        min = 1
        sec = 59
        nextquestion()
    }
}
},200)


function nextquestion(){
    min = 1
    sec = 59

//ye isliye chala ya h take questions jese age ate jae btn disabled or option bh lage hoe na ae
var getoptions =document.getElementsByName('option')
for(var i = 0; i< getoptions.length; i++ ){
   if(getoptions[i].checked){
    var selectvalue = getoptions[i].value // html input value di ha wo nikali h
    var selectques = questions[index -1]['question'] // arr k andr se question  nikale h
    var selectans = questions[index -1][`option${selectvalue}`]  //arr k andr se selectAns jo user ne laga ya ho   nikale h
    var correctoption = questions[index -1]['correctoption']
    if(selectans == correctoption){
        score++
    }
}  
getoptions[i].checked = false
}
btn.disabled = true

//question khatam hojae to 
if(index > questions.length -1 ){
    alert('Your percentage'+ ((score/questions.length)*100).toFixed(25))
    location.href ='./per.html'
}
else{
    //ab javascript ke ques & options ko output bola raqhe h
    //arr[0].obj neche ye kam hwa h
    ques.innerText = questions[index].question
    opt1.innerText = questions[index].option1
    opt2.innerText = questions[index].option2
    opt3.innerText = questions[index].option3
      index++
}


}
nextquestion() //tke m
//btn clk krne k bad btn enable hojae ga

function clicked(){
btn.disabled = false
}

