Test Automation Portfolio
-------------------------

A web-based automation dashboard that triggers Selenium test suites via GitHub Actions and allows viewing generated test reports from a single interface.

Key Features
------------
Trigger automated Selenium tests from a simple dashboard
View execution reports through the browser
Select browser and test profile before running tests

Installation
------------

Clone the repository:
--------------------
git clone https://github.com/jenipherp/TestAutomationPortfolio.git
cd TestAutomationPortfolio

Install dependencies:
---------------------
npm install

Set your GitHub token (to allow workflow triggers):
export GITHUB_TOKEN=your_personal_access_token   # macOS/Linux
set GITHUB_TOKEN=your_personal_access_token      # Windows

Start the dashboard:
--------------------
npm start

The app will run on http://localhost:10000 by default.

Usage
-----
Open the dashboard: http://localhost:10000
Select browser and test profile, then click Run Tests
View test reports at: http://localhost:10000/reports
