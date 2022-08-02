//let question = document.querySelector(".faq-title");
//let answer = document.querySelector(".faq-text");
//let button = document.querySelectorAll(".faq-btn");
//let downIcon = document.querySelector(".down-icon");
//let upIcon = document.querySelector(".up-icon");

/*function toggleQuestion() {
    if(answer.classList.contains("show-question")) {
        answer.classList.remove("show-question");
        upIcon.style.display = "none";
        downIcon.style.display = "block";
    }else {
        answer.classList.add("show-question");
        upIcon.style.display = "block";
        downIcon.style.display = "none";
    }
};*/

/*button.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        console.log(question)
    });
})*/

const questions = document.querySelectorAll(".article");
//console.log(questions)


questions.forEach(question => {
    //console.log(question);

    const btn = question.querySelector(".faq-btn");
    const downIcon = btn.firstElementChild;
    const answer = question.lastElementChild;
    const upIcon = btn.lastElementChild;
    const title = question.querySelector(".title");

    btn.addEventListener("click", function () {

        if(answer.classList.contains("show-question")) {
            answer.classList.remove("show-question");
            title.classList.remove("bold");
            upIcon.style.display = "none";
            downIcon.style.display = "block";
        }else {
            answer.classList.add("show-question");
            title.classList.add("bold")
            upIcon.style.display = "block";
            downIcon.style.display = "none";
        }

    });
});