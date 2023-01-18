// facade design pattern 

// we use this design pattern when we want to deal with complext class logic 


class ComplexTransaction {
    // sudo complext methods

    checkingPayment() {
        // complex logic
        return true;
    }

    calcPayment() {
        return true;
    }

    accountChecking() {
        return true;
    }

    activeProcess() {
        return true;
    }
}


// ask the client permission for approving the transaction
class CallClient {
    clientPermission() {
        return true;
    }
}


// simplifing the process wiht facade

class Card {
    constructor() {
        this.transfer = new ComplexTransaction();
        this.call = new CallClient();
    }

    addToCard() {
        if(this.transfer.activeProcess() === true && this.call.clientPermission() === true) {
            return `your request successfully done`
        }
    }
}


const card = new Card();

console.log(card.addToCard())