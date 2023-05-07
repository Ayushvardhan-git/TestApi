
async function myFunc(){
const a = await fetch("https://official-joke-api.appspot.com/random_joke");
const value = await a.json();
console.log(value);
let {type, setup, punchline, id} = value;
document.getElementById("joke_setup").innerHTML = setup;
document.getElementById("joke_punchline").innerHTML = punchline;
}
myFunc();