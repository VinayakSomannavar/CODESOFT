// Represents a user's bank account
public class BankAccount {
    private String accountHolder;  // account holder name
    private double balance;        // account balance

    // Constructor
    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
            System.out.println("❌ Initial balance cannot be negative. Set to 0.");
        }
    }

    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("✅ Deposited: ₹" + amount);
        } else {
            System.out.println("❌ Deposit amount must be greater than 0.");
        }
    }

    // Withdraw money
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("❌ Withdrawal amount must be greater than 0.");
        } else if (amount > balance) {
            System.out.println("❌ Insufficient balance.");
        } else {
            balance -= amount;
            System.out.println("✅ Withdrawn: ₹" + amount);
        }
    }

    // Get balance
    public double getBalance() {
        return balance;
    }

    // Get account holder
    public String getAccountHolder() {
        return accountHolder;
    }
}
