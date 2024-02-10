var feedbackScore = 0;
let allbtn =document.querySelectorAll(".rating-card_ratings button");
let submitBtn = document.querySelector(".rating-card_btn");
let frontPart = document.querySelector(".rating-card_front");
let backPart = document.querySelector(".rating-card_back");

allbtn.forEach((btn)=>{
    btn.addEventListener("click",function(){
        feedbackScore=this.innerText;
        allbtn.forEach((button)=>{
            button.classList.remove("active");
        });
        this.classList.add("active");
    });
});

submitBtn.addEventListener("click",function(){
    frontPart.style.display="none";
    backPart.querySelector(".rating-card_result--value").innerText=feedbackScore;
    backPart.style.display="flex";
});