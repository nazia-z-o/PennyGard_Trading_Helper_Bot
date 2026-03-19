# 🧠 Development Process (AI-Assisted)

## Overview

This project was developed using an iterative, AI-assisted workflow. The goal was to combine structured engineering with AI-generated scaffolding while maintaining control over architecture and correctness.

---

## Step 1: Problem Understanding & Planning

**Prompt to AI:**

* "Break down a trading bot system with pluggable strategies and portfolio management."

**Outcome:**

* Identified key modules:

  * Data ingestion
  * Strategy engine
  * Portfolio management
  * UI dashboard

**Decision:**

* Use **.NET Core for backend** and **React + TypeScript for frontend**.

---

## Step 2: Backend Architecture

**Prompt:**

* "Design a .NET trading bot with strategy pattern and portfolio tracking."

**AI Output:**

* Suggested interfaces:

  * `IStrategy`
  * `IPriceProvider`
  * `IPortfolioService`

**Adjustments:**

* Converted services to Singleton where appropriate
* Ensured clean separation between strategy logic and execution

---

## Step 3: Strategy Implementation

**Prompt:**

* "Implement SMA crossover and momentum strategy in C#."

**AI Output:**

* Initial logic for both strategies

**Corrections:**

* Fixed signal timing issues
* Adjusted threshold logic
* Ensured strategies are configurable

---

## Step 4: Portfolio & Risk Management

**Prompt:**

* "Create portfolio tracking with P&L and risk controls."

**AI Output:**

* Portfolio class with trade execution

**Improvements:**

* Added:

  * Max position sizing
  * Stop-loss checks
  * Trade logging

---

## Step 5: Frontend Development

**Prompt:**

* "Create React dashboard for trading bot."

**AI Output:**

* Component structure

**Enhancements:**

* Built reusable components:

  * Charts (Chart.js)
  * Portfolio summary
  * Trades table

---

## Step 6: Integration (.NET + React)

**Challenges:**

* CORS issues
* Static file serving
* Vite build integration

**AI Assistance:**

* Configured:

  * CORS policy
  * Static file serving (`wwwroot`)
  * React build pipeline

**Fixes Applied:**

* Corrected asset paths
* Fixed image import issues
* Added fallback routing

---

## Step 7: Debugging & Iteration

Key issues encountered:

* React assets not loading
* Incorrect JSX syntax (`src="{logo}"`)
* Windows copy command errors

**Resolutions:**

* Used proper JSX binding (`src={logo}`)
* Switched to PowerShell `Copy-Item`
* Moved assets to correct locations

---

## Step 8: Finalization

* Verified:

  * Full-stack app runs locally
  * Charts and portfolio update correctly
  * Trades execute and log properly

---

## Time Breakdown (Approximate)

| Task                 | Time |
| -------------------- | ---- |
| Planning & design    | 15%  |
| Backend development  | 30%  |
| Frontend development | 25%  |
| Integration          | 20%  |
| Debugging & polish   | 10%  |

---

## Key Engineering Decisions

* Used **strategy pattern** for extensibility
* Kept frontend and backend loosely coupled
* Prioritized working software over over-engineering
* Used simulated data to avoid API limitations

---

## Reflection on AI Usage

* AI significantly accelerated scaffolding and boilerplate code
* Iteration was required to correct logic and integration issues
* Final architecture and debugging decisions were human-driven

---

## Conclusion

The project demonstrates:

* Effective use of AI tools
* Strong system design skills
* Ability to debug and refine AI-generated code
* Delivery of a complete, working application

---
