class BankAccount{
    #_balance = 0;
    constructor(owner){
        this.owner = owner;
    }

    deposit(amount){
       if (amount > 0){
         this.#_balance += amount;
         console.log(`Deposited ${amount}$ New balance: ${this.#_balance}$`);
       } else {
         console.error("Invalid amount");
       }
    }

    withdraw(amount){
        if (amount <= this.#_balance){
            this.#_balance -= amount;
            console.log(`Withdrew ${amount}$ Remaining balance: ${this.#_balance}$`);
        } else {
            console.log("Insufficient funds in your account.");
        }
    }

    get balance(){
        return this.#_balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, interestRate){
       super(owner);
       this.interestRate = interestRate
    }

    addInterestRate(){
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
        console.log(`Interest added (${this.interestRate * 100}%).`);
    }
}

const acc1 = new BankAccount("Ebram");
acc1.deposit(500);
acc1.withdraw(200);
console.log(`Balance: ${acc1.balance}$`);

console.log("------");

const acc2 = new SavingsAccount("Mina", 0.05);
acc2.deposit(1000);
acc2.addInterestRate(); 
console.log(`Balance: ${acc2.balance}$`);