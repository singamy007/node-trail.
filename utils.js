function generateRandomNumber(){
    return Math.floor(Math.random()*100)+1;
}
function cTF(celsius){
    return(celsius*9)/5+32;
}
module.exports = generateRandomNumber;
module.exports = cTF;