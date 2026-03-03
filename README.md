# Square Partner Portal — Prototype

> **AI-native partner portal for third-party sales agents and resellers.**  
> Built with real data from Square's Snowflake data warehouse (Local POS System partner).

![Status](https://img.shields.io/badge/status-prototype-blue)
![Data](https://img.shields.io/badge/data-real%20Snowflake-green)
![Stack](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-orange)

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone <repo-url>
cd partner-portal

# Open in browser (no build step needed!)
open index.html

# Or serve locally for development
python3 -m http.server 8080
# Then visit http://localhost:8080
```

**That's it.** No dependencies, no build tools, no framework setup. Just open the HTML file.

---

## 📋 What's Inside

### 6 Core Sections

| Section | Description | Data Source |
|---------|-------------|------------|
| 🏠 **Dashboard** | AI daily briefing, KPI cards, top merchants, recommendations | Payout + Revenue tables |
| 🏪 **Merchants** | Searchable portfolio of 14 real merchants with GPV, categories, AI insights | `PARTNER_REFERRAL_DAILY_REVENUE_SUMMARY` + `DIM_MERCHANT` |
| 💰 **Compensation** | 9 months of real payout history, growth trajectory, AI projections | `PARTNER_PAYOUT_PRM_REPORTING` |
| 📊 **Pipeline** | Referral funnel: 319 total, 203 activated, 116 pending, 33 deactivated | `REFERRAL_UNITS_ALL` |
| 🤖 **AI Assistant** | Conversational chat with keyword-matched responses using real portfolio data | All tables |
| 📚 **Resources** | Product cards personalized to actual merchants, playbooks, training | Merchant data + product catalog |

### Real Data (Local POS System — US Channel Partner)

| Metric | Value |
|--------|-------|
| Total Merchants | 137 |
| YTD GPV | $2.66M |
| Total Referrals | 319 (203 activated, 116 pending) |
| Jan 2026 Payout | $7,078 |
| Growth | $11/mo → $7,078/mo in 8 months |
| Top Merchant | Wild Taco Denver — $425K GPV |
| Strongest Markets | CO, AZ, FL, WA |

---

## 🎨 Design System

- **Brand:** Square black (#000), warm grays (#F6F6F3, #E8E8E5)
- **Typography:** Inter font family
- **Components:** Cards with borders (not shadows), black CTAs, status badges
- **Layout:** Fixed sidebar + scrollable main content

---

## 🛠️ How to Make Changes

### File Structure
```
partner-portal/
├── index.html          # Complete app (HTML + CSS + JS in one file)
├── README.md           # This file
└── DATA_SOURCES.md     # Snowflake queries used to pull the data
```

### Editing Guide

The entire app is in `index.html`. Here's where to find each section:

| Section | What to Search For |
|---------|-------------------|
| **CSS Styles** | `<style>` tag at the top |
| **Sidebar** | `class="sidebar"` |
| **Dashboard** | `id="dashboard"` |
| **Merchants** | `id="merchants"` |
| **Compensation** | `id="compensation"` |
| **Pipeline** | `id="pipeline"` |
| **AI Assistant** | `id="assistant"` |
| **Resources** | `id="resources"` |
| **JavaScript** | `<script>` tag at the bottom |

### Common Changes

**Update a metric value:**
```html
<!-- Find the metric card and change the value -->
<div class="metric-card">
  <div class="label">Active Merchants</div>
  <div class="value">137</div>  <!-- ← Change this -->
  <div class="change">↑ 66 active in Jan</div>
</div>
```

**Add a new merchant row:**
```html
<tr>
  <td style="font-weight:600;">New Merchant Name</td>
  <td>Category</td>
  <td>City, ST</td>
  <td style="font-weight:600;">$XX,XXX</td>
  <td>XXX</td>
  <td><span class="status-active">Active</span></td>
  <td style="font-size:12px;color:#4A4A4A;">🤖 AI insight here</td>
</tr>
```

**Add a new AI chat response:**
```javascript
// In the aiResponses object at the bottom of the file:
aiResponses['newkeyword'] = "Your response text here.\\nUse \\\\n for line breaks.";
```

**Add a new nav section:**
1. Add a `.nav-item` in the sidebar
2. Add a `.section` div in the main area
3. The JavaScript handles the rest automatically

---

## 📊 Data Sources (Snowflake)

### Tables Used

| Table | Purpose |
|-------|---------|
| `APP_PARTNERSHIPS.APP_PARTNERSHIPS.DIM_PARTNER` | Partner profile, type, team, manager |
| `APP_PARTNERSHIPS.APP_PARTNERSHIPS.PARTNER_REFERRAL_DAILY_REVENUE_SUMMARY` | Merchant-level GPV, revenue, transactions by day |
| `APP_PARTNERSHIPS.APP_PARTNERSHIPS.PARTNER_PAYOUT_PRM_REPORTING` | Monthly payouts, merchant counts, referral counts |
| `APP_PARTNERSHIPS.APP_PARTNERSHIPS.REFERRAL_UNITS_ALL` | Referral funnel: creation, activation, deactivation |
| `APP_DAP.DAP.DIM_MERCHANT` | Business names, categories, cities, states |

### Partner Identifier
- **Partner Name:** Local POS System
- **Account ID:** `001Kb00001GRUDyIAP`
- **Type:** Channel Partner
- **Country:** US

---

## 🔮 Roadmap / Next Steps

### Phase 2 — Enhanced Prototype
- [ ] Add Chart.js graphs (GPV trends, payout bar charts)
- [ ] Clickable merchant rows with detail modals
- [ ] Floating AI chat widget on all pages
- [ ] Product adoption breakdown per merchant
- [ ] Revenue by category visualization

### Phase 3 — Live Data Integration
- [ ] Connect to Snowflake API for real-time data
- [ ] Authentication (SSO via Square)
- [ ] Multi-partner support (each partner sees their own data)
- [ ] Real AI assistant (LLM-powered, not keyword-matched)

### Phase 4 — Production
- [ ] React/Next.js rebuild
- [ ] Backend API layer
- [ ] Role-based access (IC vs. reseller manager)
- [ ] Mobile responsive design
- [ ] Notification system

---

## 👥 Team

Built by the Square Partnerships team using [Goose](https://github.com/block/goose) AI agent.

**Questions?** Reach out to the Partnerships data team.
