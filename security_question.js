var securityQuestions= [
    {question: "What was your first pet's name?", expectedAnswer: "Stef"}, 
    {question: "What is your mother's maiden name?", expectedAnswer: "Leigh"}, 
    {question: "In what city were you born?", expectedAnswer: "Portland"} 
]

for (i=0; i<3; i++) {
     var userAnswer = prompt(securityQuestions[i].question)
     if (userAnswer === securityQuestions[i].expectedAnswer) {
        console.log('Correct')
        } else {
            alert("Wrong!")
            break
        }
}   