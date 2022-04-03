const keyboard=document.getElementById('keyboard');
const words=["drishyam", "bheeshmaparvam", "cbi5", "naradan",
 "chithram", "kireedam", "chenkol", "mayanadhi", "supersharanya",
  "janeman", "churuli", "spadikam", "aaramthampuran", "naran", "devasuram",
   "chathikkathachandhu", "pulivalkalyanam", "lucifer", "nayattu", "vettam",
    "meeshamadhavan", "classmates", "anandham", "anjampathira", "memories", "ezra",
     "keerthichakra", "pattalam"];
const guessed=[];
let rWord='';
let answer=null;
let mistakes=0;
const maxMistakes=6;
const win= new Audio(src='assets/sounds/win.mp3');
const loose= new Audio(src='assets/sounds/loose.wav');

function randomWord(){
   
     rWord=words[Math.floor(Math.random()* words.length)];
    console.log(rWord);
}
randomWord();
function generateKeyboard(){
    buttonsHTML='abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>
        `
        <button class="btn btn-primary btn-lg m-2" onclick="btnClicked('`+letter+`')" id="`+ letter+ `">
        `+letter+`
        </button>
        

        `).join('');
        keyboard.innerHTML=buttonsHTML;
}
generateKeyboard();

function checkWin(params) {
    const finals=answer.split(" ").join('');
    console.log(finals);
    if (finals ==rWord) {
        win.play();
        document.getElementById('msg').textContent="You Win!!";
        document.getElementById('popup').classList.add('fadeIn');
        document.getElementById('blur').classList.add('fadeOut');
        
        console.log('checkwin');
    }
}
function userInp() {
 answer=  rWord.split('').map(letter=>(guessed.indexOf(letter) >= 0 ? letter : '_')).join(' ');
 
 console.log(answer); 
 document.getElementById('user-inp').innerHTML=answer;
 
}
userInp();
function btnClicked(item){
    document.getElementById(item).setAttribute('disabled',true);
    if (rWord.indexOf(item)>=0) {
        guessed.push(item);
        console.log(item);
        
        userInp();
        console.log(answer + rWord);
        checkWin();
        
    }else{
        updateMistakes();
    }
   
}
function updateMistakes(){
    mistakes++;
    if (mistakes<=maxMistakes) {
        document.getElementById('pic').src=`assets/images/`+mistakes+`.jpg`; 
    }else{
        loose.play();
        document.getElementById('msg').textContent="You Loose.";
        document.getElementById('popup').classList.add('fadeIn');
        document.getElementById('blur').classList.add('fadeOut');
    }

    
}