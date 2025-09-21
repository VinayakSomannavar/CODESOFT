// Entry point of the program
public class ATMInterface {
    public static void main(String[] args) {
        // Step 1: Create a BankAccount
        BankAccount account = new BankAccount("Vinayak", 1000.0);

        // Step 2: Create ATM and connect with account
        ATM atm = new ATM(account);

        // Step 3: Show ATM Menu
        atm.showMenu();
    }
}
