let constant = require('./Gambler_Constants')

class LuckyGame{
    constructor(){ }
    LuckyGame(){
        process.stdout.write("Luckiest Days : ")
        for(var count = 1 ; count < constant.luckiest_days.length ; count++){
            process.stdout.write(", "+constant.luckiest_days[count]);
        }
        process.stdout.write("\nUnluckiest Days : ")
        for(var count = 1 ; count < constant.unluckiest_days.length ; count++){
            process.stdout.write(", "+constant.unluckiest_days[count]);
        }
    }
}
module.exports = LuckyGame;