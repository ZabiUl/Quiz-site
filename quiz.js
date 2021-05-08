let answers = ["option2", "option1", "option2", "option2"];
let form = document.querySelector('.quiz-segment');
let scoreScreen = document.querySelector('body > div:nth-child(2)');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let scores = 0;
    let userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];
    userAnswers.forEach((answer, index) => {
        if(answers[index].includes(answer)){
            scores++;
        }
    });
    scores = (scores / userAnswers.length) * 100;
    document.querySelector('.scores').style.display = 'block';
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
let scoreLoading = 0;
let timer = setInterval(() => {
    document.querySelector('span').textContent = scoreLoading+'%';
    if(scoreLoading !== scores){
        scoreLoading++;
    }else{
        clearInterval(timer);
    }
},25);
    
});
