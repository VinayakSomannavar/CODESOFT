import java.util.Scanner;

// Represents the ATM machine
public class ATM {
    private BankAccount account;   // linked bank account
    private Scanner scanner;       // for user input

    // Constructor
    public ATM(BankAccount account) {
        this.account = account;
        this.scanner = new Scanner(System.in);
    }

    // Show ATM menu
    public void showMenu() {
        int choice;

        System.out.println("👋 Welcome, " + account.getAccountHolder() + "!");

        do {
            System.out.println("\n===== ATM MENU =====");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            System.out.print("👉 Enter your choice: ");
            
            // Validate menu input
            while (!scanner.hasNextInt()) {
                System.out.println("❌ Invalid input! Please enter a number (1-4).");
                scanner.next(); 
            }
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("💰 Current Balance: ₹" + account.getBalance());
                    break;
                case 2:
                    System.out.print("Enter deposit amount: ");
                    double depositAmount = scanner.nextDouble();
                    account.deposit(depositAmount);
                    break;
                case 3:
                    System.out.print("Enter withdrawal amount: ");
                    double withdrawAmount = scanner.nextDouble();
                    account.withdraw(withdrawAmount);
                    break;
                case 4:
                    System.out.println("👋 Thank you for using the ATM!");
                    break;
                default:
                    System.out.println("❌ Invalid choice! Please select between 1-4.");
            }
        } while (choice != 4);
    }
}
