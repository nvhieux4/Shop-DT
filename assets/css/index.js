

document.querySelector(".navbar__list-item:nth-child(3) ").onclick = function () {
    document.querySelector(".hidden-login").style.display = "none"
    document.querySelector(".hidden-auth-form").style.display = "block"
}

document.querySelector(".auth-form__sub-btn").onclick = function () {
    document.querySelector(".hidden-sub").style.display = "none"
    document.querySelector(".hidden-login").style.display = "block"
}

document.querySelector(".auth-form__longIn-btn").onclick = function () {
    document.querySelector(".hidden-sub").style.display = "block"
    document.querySelector(".hidden-auth-form").style.display = "block"
}

const exit =  document.querySelectorAll(".auth-form__btn-link")
   exit.forEach((item,index) => {
       item.onclick = () => {
           document.querySelector(".hidden-auth-form").style.display = "none"
           document.querySelector(".hidden-sub").style.display = "block"
       }
   })
   
document.querySelector(".navbar__list-item:nth-child(4) ").onclick = function () {
    document.querySelector(".hidden-auth-form").style.display = "block"
    document.querySelector(".hidden-login").style.display = "block"
    document.querySelector(".hidden-sub").style.display = "none"
}

let filters = document.querySelectorAll(".home-filter__btn")
    filters.forEach((filter,index)=>{
        filter.onclick = function () {
            document.querySelector(".home-filter__btn.home-filter__btn--primary").classList.remove("home-filter__btn--primary")
            this.classList.add("home-filter__btn--primary")
        }
    })

let categoryList = document.querySelectorAll(".category__item")
    categoryList.forEach((category,index) => {
        category.onclick = function() {
            document.querySelector(".category__item.category__item--active").classList.remove("category__item--active")
            this.classList.add("category__item--active")
        }
    })

/* chuyển động slider */

let slider = document.querySelectorAll(".slide__list-item")
let btn = document.querySelectorAll(".navigation__btn")
let currentSlider = 0
const prevBtn = document.querySelector(".control__after")
const nextBtn = document.querySelector(".control__next")
const numberOfSlider = slider.length

nextBtn.onclick= function(){
    currentSlider++
    if(currentSlider > (numberOfSlider-1) )
        currentSlider = 0
    document.querySelector(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
    document.querySelector(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[currentSlider].classList.add("slide_list--first")
    btn[currentSlider].classList.add("navigation__btn--active")
}

prevBtn.onclick= function(){
    currentSlider--
    if(currentSlider < 0 )
        currentSlider = numberOfSlider-1
    document.querySelector(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
    document.querySelector(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[currentSlider].classList.add("slide_list--first")
    btn[currentSlider].classList.add("navigation__btn--active")
}

var manualNav = function (manual) {
    document.querySelector(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[manual].classList.add("slide_list--first")
}

btn.forEach((control,index)=>{
    control.onclick= function(){
        document.querySelector(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
        this.classList.add("navigation__btn--active")
        manualNav(index)
    }
})

const repeat = function(){
    let activeSlider = document.getElementsByClassName("slide_list--first")
    let activeBtn = document.getElementsByClassName("navigation__btn--active")
    let i = 0;
    let playSlider

    let repeater = () => {
        playSlider = setTimeout(function(){
            document.querySelector(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
            document.querySelector(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
            slider[i].classList.add("slide_list--first")
            btn[i].classList.add("navigation__btn--active")
            i++
            if(slider.length==i)
                i=0
            if(i>=slider.length)
                return
            repeater()
        },3000)
    }
    repeater()
}
repeat()


var test = document.querySelector(".slide__list")
test.onmouseenter = function(){
    document.querySelector(".control__slide").style.opacity = "1"
}

test.onmouseleave =function(){
    document.querySelector(".control__slide").style.opacity = "0"
}





