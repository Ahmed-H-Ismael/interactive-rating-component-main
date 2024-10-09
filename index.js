const btn = document.querySelector(".Submit");
const front = document.querySelector(".front-rate");
const back = document.querySelector(".back-rate");
const rateNumber = document.querySelectorAll(".rate-number span")
const myRate = document.querySelector(".selected span")
rateNumber.forEach(function(rate){
rate.addEventListener("click",function(){
    remove()
    this.classList.add("active");
})
})
btn.addEventListener("click",function(){
    front.classList.add("active");
    myRate.innerHTML=``
    searchClass()
})
const remove = function(){
    rateNumber.forEach(function(rate){
        rate.classList.remove("active")
    })
}
const searchClass =  function(){
        rateNumber.forEach(function(rate){
            if(rate.classList.contains("active")){
                myRate.innerHTML = rate.innerHTML
            }
        })
    }

