class Account {
    constructor(balance) {
      this.balance = balance;
    }
  
    getBalanceInfo() {
      console.log(`Balance: ${this.balance}`);
    }
  }
  
  class BankAccount extends Account {
    constructor(balance) {
      super(balance); 
    }
  
    cashOut(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("You don't have enough balance");
      }
    }
  
    cashIn(amount) {
      this.balance += amount; 
    }
  }
  
  const account = new BankAccount(100);
  account.cashIn(50); 
  account.cashOut(200); 
  account.getBalanceInfo(); 
  