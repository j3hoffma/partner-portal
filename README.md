# Partner Portal — Multi-Partner View

AI-native partner portal prototype with real Snowflake data for 10 channel partners.

## View It

Open `index.html` in any browser. No server needed — all data is embedded.

**GitHub Pages:** [https://j3hoffma.github.io/partner-portal-multi/](https://j3hoffma.github.io/partner-portal-multi/)

## Partners Included

| Partner | Merchants | GPV |
|---------|-----------|-----|
| Bankcard POS | 5,191 | $215M |
| Computer Applied Products | 49 | $6.0M |
| Delaware Business Systems | 10 | $3.2M |
| Local POS System | 141 | $2.9M |
| Total Commerce Solutions | 52 | $2.4M |
| Cash Register Products | 7 | $1.7M |
| POS Innovation Inc | 39 | $1.6M |
| POS Specialists | 4 | $1.4M |
| Acadian POS | 8 | $1.2M |
| Retail Systems Inc | 38 | $1.1M |

## Features

- **Partner Selector** — dropdown in sidebar to switch between partners
- **Dashboard** — KPI cards, top merchants, AI recommendations
- **Merchants** — full searchable table with AI insights
- **Compensation** — payout history + growth trajectory
- **Pipeline** — referral funnel with pending/deactivated counts
- **AI Assistant** — contextual chat with partner-specific responses
- **Resources** — product cards, playbooks, training

## Data Source

All data pulled from Snowflake on 2026-03-09:
- `APP_PARTNERSHIPS.APP_PARTNERSHIPS.PARTNER_REFERRAL_DAILY_REVENUE_SUMMARY`
- `APP_PARTNERSHIPS.APP_PARTNERSHIPS.PARTNER_PAYOUT_PRM_REPORTING`
- `APP_PARTNERSHIPS.APP_PARTNERSHIPS.REFERRAL_UNITS_ALL`
- `APP_PARTNERSHIPS.APP_PARTNERSHIPS.DIM_PARTNER`

## Related

- [Single-partner prototype](https://github.com/j3hoffma/partner-portal) — Local POS System only
- Next.js app at `/Users/jhoffman/partner-portal-app/` — full app with live Snowflake queries
