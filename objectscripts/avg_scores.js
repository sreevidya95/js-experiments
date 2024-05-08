let myScores=[92,98,84,76,89,99,100];
let yourScores=[82,98,94,88,92,100,100];
console.log(getAverage(myScores));
console.log(getAverage(yourScores));
function getAverage(scores){
    let total=0;
 for(let i=0;i<scores.length;i++){
      total+=scores[i];
 }
 return (total/scores.length).toFixed(2);
}