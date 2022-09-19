const myButton = document.getElementById("playButton")

myButton.onclick = function Play(){
    let randomChoice = RandomChooser()
    let userChoice

    for(const button of document.getElementsByName("rps")){
        if(button.checked){
            userChoice = button.value
        }
    }

    document.getElementById("yourChoice").innerHTML = `You've chosen: ${userChoice}`
    document.getElementById("randChoice").innerHTML = `Random choice: ${randomChoice}`

    //Would've been easier and shorter with if else but wanted to learn switch case better and see if it's possible to create nested switch cases
    switch(userChoice){
        case "Rock":
            switch(randomChoice){
                case "Rock":
                    document.getElementById("result").innerHTML = "Draw"
                    break
                case "Paper":
                    document.getElementById("result").innerHTML = "Lost"
                    break
                case "Scissors":
                    document.getElementById("result").innerHTML = "Win"
                    break
            }
            break
        case "Paper":
            switch(randomChoice){
                case "Rock":
                    document.getElementById("result").innerHTML = "Win"
                    break
                case "Paper":
                    document.getElementById("result").innerHTML = "Draw"
                    break
                case "Scissors":
                    document.getElementById("result").innerHTML = "Lost"
                    break
            }
            break
        case "Scissors":
            switch(randomChoice){
                case "Rock":
                    document.getElementById("result").innerHTML = "Lost"
                    break
                case "Paper":
                    document.getElementById("result").innerHTML = "Win"
                    break
                case "Scissors":
                    document.getElementById("result").innerHTML = "Draw"
                    break
            }
            break
        default:
            document.getElementById("result").innerHTML = "Please make a choice"
            break
    }
}

function RandomChooser(){
    let choiceList = ["Rock", "Paper", "Scissors"]
    return choiceList[Math.floor(Math.random()*3)]
}