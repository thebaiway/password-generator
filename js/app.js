const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnOneEL = document.getElementById("btn-one")
let btnTwoEL = document.getElementById("btn-two")

function generatePw () {

    password = []
    passwordTwo = []


    for (let i=0; i < 15; i++) {
        let random = Math.floor(Math.random() * characters.length)
        let randomTwo = Math.floor(Math.random() * characters.length)
        password.push(characters[random])
        passwordTwo.push(characters[randomTwo])
    }

    btnOneEL.textContent = password.join('')
    btnTwoEL.textContent = passwordTwo.join('')
}
