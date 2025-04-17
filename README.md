
# Cypress Automation Suite – Tricentis Demo Shop

![Tests](https://img.shields.io/badge/Tests-60%2B-green)
![Framework](https://img.shields.io/badge/Tested%20with-Cypress-17202c?logo=cypress)
![Accessibility](https://img.shields.io/badge/axe--core-included-blue)
![License](https://img.shields.io/github/license/akan-baba/cypress-tricentis-shop)
![Visitors](https://komarev.com/ghpvc/?username=akan-baba&repo=cypress-tricentis-shop&color=brightgreen)

A scalable and modular Cypress test automation project for validating the functionality, accessibility, and form integrity of [Tricentis Demo Web Shop](https://demowebshop.tricentis.com).

## ✅ What This Project Covers

- 🔐 User registration & login flows
- 🛒 Shopping cart + checkout
- 🧭 Sitemap & category navigation
- ✉️ Contact form validation
- ♿ Accessibility testing using `axe-core`
- 🧱 Page Object Model (POM) structure
- 📦 Fixtures and custom commands
- 📊 Reporting with `Mochawesome`
- ⚙️ Azure DevOps pipeline support

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── 1-Registration/
│   ├── 2-ShoppingCart/
│   ├── 3-Computers/
│   ├── 4-Sitemap/
│   ├── 5-ContactForm/
│   └── 6-Accessibility/
├── support/
│   ├── commands.js
│   └── e2e.js
└── reports/
    └── mochawesome/
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/akan-baba/cypress-tricentis-shop.git
cd cypress-tricentis-shop
npm install
npm run test:report
```

📝 Open the test report:  
`cypress/reports/mochawesome/report.html`

---

## 🧪 Tools Used

- Cypress
- axe-core
- Mochawesome
- Faker.js
- Azure DevOps CI
- GitHub Actions-ready

---

## 📊 Sample Test Report (Preview)

> (Insert `report.html` screenshot or output sample here)

---

## 👨‍💻 Maintainer

**Akan Antia**  
_Manual and Automation Test Analyst_  
[LinkedIn](www.linkedin.com/in/akan-antia) • [GitHub](https://github.com/akan-baba)

---

## 📜 License

MIT License