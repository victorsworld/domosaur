//WARM UP CHALLENGES
let change1 = document.querySelector(".mess-with-me-more")
change1.style.fontSize = "40px";  

let change2 = document.querySelector(".mess-with-me")
change2.style.backgroundColor = "green";

let change3 = document.querySelector("#hide-me")
change3.style.display = "none"

let change4 =document.querySelector("#triceratops")
change4.style.width = "324px";

//EVENT LISTENER PORTION
let change5 = document.querySelector(".mess-with-me")
change5.addEventListener('click', function(){
    change5.style.color = 'orange'
})

let change6 = document.querySelector("#triceratops")
change6.addEventListener('click', function(){
    change6.style.border = '20px solid red'
})

let change7 = document.querySelector("#feathers")
change7.addEventListener('click', function(){
    change7.style.opacity = '50%'
})

let change8 = document.querySelector("#toggle")
change8.addEventListener('click', function(){
    if(row.style.backgroundColor === ''|| row.style.backgroundColor === 'white'){
        row.style.backgroundColor = 'lightblue'
    } else if(row.style.backgroundColor === 'lightblue'){
        row.style.backgroundColor = 'white' 
    } 
})


let change9 = document.querySelector("#biggify")
change9.addEventListener('mouseenter', function(){
    change9.style.width = '400px'
})
change9.addEventListener('mouseout', function(){
    change9.style.width = '162px'
})


