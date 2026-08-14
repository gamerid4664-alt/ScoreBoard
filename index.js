let homeScore = 6
let guestScore = 3

let homeScore_Update = document.getElementById("homeScore")
let guestScore_Update = document.getElementById("guestScore")


let homeScore_incerOne = document.getElementById("homesc1")
let homeScore_incerTwo = document.getElementById("homesc2")
let homeScore_incerThree = document.getElementById("homesc3")

let new_game = document.getElementById("newGame")

let gameLead = document.getElementById("leader")

let timer = document.getElementById("time")





    homeScore_Update.textContent = homeScore
    console.log(homeScore)

    
    guestScore_Update.textContent = guestScore
    console.log(guestScore)




function homeScore_inc_one(){

    homeScore = homeScore + 1
    console.log(homeScore)
    homeScore_Update.textContent = homeScore

    leaderBoarde()
}

function homeScore_inc_two(){

    homeScore = homeScore + 2
    console.log(homeScore)
    homeScore_Update.textContent = homeScore

    leaderBoarde()
}
function homeScore_inc_three(){
    homeScore = homeScore + 3
    console.log(homeScore)
    homeScore_Update.textContent = homeScore

    leaderBoarde()
}

function guestScore_inc_one(){

    guestScore = guestScore + 1
    console.log(guestScore)
    guestScore_Update.textContent = guestScore

    leaderBoarde()
}

function guestScore_inc_two(){

    guestScore = guestScore + 2
    console.log(guestScore)
    guestScore_Update.textContent = guestScore

    leaderBoarde()
}

function guestScore_inc_three(){

    guestScore = guestScore + 3
    console.log(guestScore)
    guestScore_Update.textContent = guestScore

    leaderBoarde()
}


function newGame(){
    
    homeScore = 0
    guestScore = 0
    homeScore_Update.textContent = homeScore
    guestScore_Update.textContent = guestScore
    gameLead.textContent = ""

    time = 60

} 

function leaderBoarde(){
if(homeScore > guestScore) {
    console.log("Home is leading")
    gameLead.textContent = "Home is leading"
}
else if(guestScore > homeScore){
    console.log("Guest is leading")
    gameLead.textContent = "Guest is leading"
}
else{
    console.log("Matched is Tied")
    gameLead.textContent = "Match is Tied !"
}
}
window.leaderBoarde()

let time = 60 

function gametime(){

    let countdown = setInterval(function() {

        timer.textContent = time
        console.log(time)

        time --;

        if(time < 0){
            clearInterval(countdown)
        }
    }, 1000);
}

gametime()