const classes = ["insta-icon", "mail-icon"]
const instaEl = document.querySelector(".insta")
const instaIcon = document.querySelector(".insta-icon")
const mailEl = document.querySelector(".mail")
const mailIcon = document.querySelector(".mail-icon")

instaEl.addEventListener("mouseenter", function(){
    instaIcon.src="./scribbles/smiley.svg"
    
})
instaEl.addEventListener("mouseleave", function(){
    instaIcon.src="./scribbles/insta.svg"
})

mailEl.addEventListener("mouseenter", function(){
    mailIcon.src="./scribbles/smiley.svg"
    
})
mailEl.addEventListener("mouseleave", function(){
    mailIcon.src="./scribbles/mail.svg"
})


/*
classes.forEach(el => {
    document.querySelector("." + el).addEventListener("mouseover", ((el) => trigger(el)))
})

const trigger = el => {
    console.log(el)
}
*/