
const favouriteMovie = "avatar";
let guess = prompt("Enter name of movie");
while((guess!=favouriteMovie) && (guess!="quit")){
    guess = prompt("wrong guess. Guess Again");
}
if(guess==favouriteMovie){
    console.log("congratulations");
}
else{
    console.log("quit");
}