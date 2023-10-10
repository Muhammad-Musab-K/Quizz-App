var questions = [
    {
        title: '1. What is HTML?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: '2. What is CSS?',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: '3. What is JS?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: '4. What is React?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]
let container = document.getElementById('container_two')
container.classList.remove('container')
let current_question = 0
let space = '</br>'
let container_result = document.querySelector('.container_result')
container_result.className = 'hide'
let marks = 0


function render() {
    let title = document.getElementById('title')
    title.innerHTML = questions[current_question].title

    let option_container = document.getElementById('option_container')
    option_container.innerHTML= ''
    let options = questions[current_question].options

    for (let i = 0; i < options.length; i++) {
       
        let input = document.createElement('input')
        input.value = options[i]
        input.type = 'radio'
        input.name = 'optionKeys'
        input.className = 'answer'
        input.id = options[i]

        option_container.append(input)
        option_container.append(options[i])
        input.insertAdjacentHTML("beforebegin", space)
    }
    
}
function start(e) {
console.log(e)
    let parent = e.target.parentElement
    parent.className = 'hide'
    container.classList.remove('hide')
    container.classList.add('container')
    render()
}

function next() {
    current_question++
    if (current_question < questions.length) {
        // let title = document.getElementById('title')
        // title.innerHTML = questions[current_question].title
        render()
        resultOfQuiz()
    }
    else {
        let over = document.getElementById("container_two")
        over.remove()
        container_result.className = 'container_result'

    }

}
// 
function resultOfQuiz() {
    let selectedOptions = document.querySelectorAll('.answer:checked');
    let selectedValues = [];
  
    selectedOptions.forEach((option) => {
      selectedValues.push(option.value);
    });
  
    console.log('Selected Answers:', selectedValues);
  
    // Check if the selected answers are correct and update marks
    for (let i = 0; i < selectedValues.length; i++) {
      if (selectedValues[i] === questions[current_question].correctAnswer) {
        marks++;
      }
    }
  
    console.log('Total Marks:', marks);
  }













