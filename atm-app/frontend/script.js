let balance = 1000; // initial balance
let accountHolder = "Vinayak";

function updateBalance() {
  document.getElementById("balance").innerText = "💰 Balance: ₹" + balance;
}

// Deposit
function deposit() {
  let amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    showMessage("❌ Enter a valid deposit amount", "red");
  } else {
    balance += amount;
    updateBalance();
    showMessage("✅ Deposited ₹" + amount, "green");
  }
  clearInput();
}

// Withdraw
function withdraw() {
  let amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    showMessage("❌ Enter a valid withdrawal amount", "red");
  } else if (amount > balance) {
    showMessage("❌ Insufficient Balance", "red");
  } else {
    balance -= amount;
    updateBalance();
    showMessage("✅ Withdrawn ₹" + amount, "green");
  }
  clearInput();
}

// Check Balance
function checkBalance() {
  showMessage("💰 Current Balance: ₹" + balance, "blue");
}

// Exit
function exitATM() {
  showMessage("👋 Thank you for using ATM!", "purple");
}

// Helpers
function showMessage(msg, color) {
  let message = document.getElementById("message");
  message.innerText = msg;
  message.style.color = color;
}

function clearInput() {
  document.getElementById("amount").value = "";
}
