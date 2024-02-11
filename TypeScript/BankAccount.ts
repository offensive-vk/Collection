/**

You are tasked with implementing a simple banking system. Create a TypeScript class BankAccount with the following features:

1. The class should have properties for accountNumber (string), accountHolder (string), and balance (number).

2. Implement a constructor that initializes the accountNumber and accountHolder. The balance should be initialized to 0.

3. Include methods deposit and withdraw to modify the balance.

4. Implement a method getBalance that returns the current balance.

Write a TypeScript program that creates an instance of BankAccount, performs some transactions, and prints the final balance.
 */

class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;

    constructor(accountNumber: string, accountHolder: string) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

// Example usage:
const myAccount = new BankAccount("4847619775", "John Wick");
myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.deposit(200);

const finalBalance = myAccount.getBalance();
console.log(`Account Holder: ${myAccount.getBalance()}`);
console.log(`Final Balance: ${finalBalance}`);