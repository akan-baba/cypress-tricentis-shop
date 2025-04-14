
# 🧪 Cypress Tests – Tricentis Demo Web Shop

This project contains an end-to-end test automation suite for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/), implemented using **Cypress**, following the **Page Object Model (POM)** and using fixture-driven test data.

The framework is modular, scalable, and integrated with **Allure Reporting** for clean, interactive test dashboards.

---

## 🚀 Features Tested

### 🔐 Registration & Login
- Valid and invalid user registrations
- Login with valid/invalid/blank credentials
- Password reset flow for multiple users (data-driven)
- Logout and session validation

### 🛒 Shopping Cart & Checkout
- Add/remove products from the cart
- Checkout with guest and registered accounts
- Quantity updates and total price validation
- Apply valid/invalid discount codes

### 🔍 Search & Filters
- Keyword search and sorting
- Filter by category or price
- Product detail validation

### 📦 Orders
- Submit orders and verify confirmation
- View past orders and reorder
- Attempt checkout with empty cart

---

## 🧩 Tech Stack

- **Cypress**
- **JavaScript (ES6)**
- **Allure Reports** (`@shelex/cypress-allure-plugin`)
- **Modular Page Object Model**
- **JSON Fixtures for test data**

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── 1-UserMgt/                # User tests (register, login)
│   ├── 2-ShoppingCart/          # Jewelry, Apparel, Computers, Laptops
│   ├── 3-Misc/                  # Reusables (e.g. password reset)
├── fixtures/                    # Test data
├── support/
│   ├── helpers/                 # Common reusable logic
│   └── pageObjects/             # Page object classes
```

---

## 🧪 Run Tests

### Install dependencies
```bash
npm install
```

### Run Cypress tests (headless)
```bash
npm run cypress:run
```

### Open Cypress interactive runner
```bash
npm run cypress:open
```

---

## 📊 Allure Reporting

### Generate and open report
```bash
npm run allure:generate
npm run allure:open
```

> Make sure Allure CLI is installed:
```bash
npm install -g allure-commandline --save-dev
```

---

## 👨‍💻 Author

**Your Name**  
QA Test Analyst | Automation Engineer  
🔗 [LinkedIn](www.linkedin.com/in/akan-antia) • [GitHub](https://github.com/akan-baba/cypress-tricentis-shop.git)

---

## 📌 Notes

- Password reset tests are data-driven using `userChangePwd.json`
- All tests are re-runnable and use consistent state
- Easily extendable to include accessibility, API, and performance testing
