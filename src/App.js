import './App.css';
import React, {useState} from 'react'

function App() {

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const [leftBtn, setLeftBtn] = useState("---------------")
const [rightBtn, setRightBtn] = useState("---------------")

let password = []
let passwordTwo = []

for (let i=0; i < 15; i++) {
  let random = Math.floor(Math.random() * characters.length)
  let randomTwo = Math.floor(Math.random() * characters.length)
  password.push(characters[random])
  passwordTwo.push(characters[randomTwo])
}

function getPW() {
  setLeftBtn(prevLeftBtn => prevLeftBtn = password.join(''))
  setRightBtn(prevRightBtn => prevRightBtn = passwordTwo.join(''))
}


  return (
    <div className="App">
        <div id="main-div">
        <p id="white-font">Generate a</p>
        <p id="green-font">random password</p>
        <p id="grey-font">Never use an insecure password again.</p>
        <button id="green-btn" onClick = {getPW}>Generate passwords</button>
        <hr />
        <div id="button-div">
            <button id="btn-one">{leftBtn}</button>
            <button id="btn-two">{rightBtn}</button>
        </div>
    </div>
    </div>
  );
}

export default App;
