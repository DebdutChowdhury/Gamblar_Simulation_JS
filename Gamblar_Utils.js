let constant = require('./Gambler_Constants')

class Gamblar{
    constructor(){ }

    randomCheck(){
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkResult(){
        for (let day = 1; day <= constant.MONTHLY_DAYS; day++){
            let result = constant.STACK_AMOUNT;
            while (result > (constant.STACK_AMOUNT / 2) && result < (constant.STACK_AMOUNT + (constant.STACK_AMOUNT / 2))){
                if (this.randomCheck() == constant.BETTING_AMOUNT){
                    result = result + constant.BETTING_AMOUNT;
                }
                else{
                    result = result - constant.BETTING_AMOUNT;
                }
                
            }
            console.log(`Game Result of ${day} day is : ${result}`);
        }   
    }
}

module.exports = new Gamblar();