# DATA SOURCES

## Partner Profile

- **Partner ID:** Unique identifier for each partner.
- **Partner Name:** Name of the partner.
- **Contact Info:** Email and phone contact information.

## Merchant Portfolio

```sql
SELECT 
  MerchantID,
  MerchantName,
  MerchantStatus,
  MERCHANT_ACTIVATION_DATE 
FROM 
  Merchants
WHERE 
  PartnerID = :PartnerID;
```

## Monthly Payout History

- **Payout ID:** Unique identifier for each payout.
- **Date:** Date of payout.
- **Amount:** Total amount paid to the partner.

## Referral Funnel Summary

- **Total Referrals:** Total number of referrals made by the partner.
- **Conversion Rate:** Ratio of converted referrals to total referrals.

## Referral Detail

- **Referral ID:** Unique identifier for each referral.
- **Referral Date:** Date the referral was made.
- **Status:** Current status of the referral.

## Aggregate Partner Summary

- **Total Earnings:** Total earnings for the partner over a specified period.
- **Referral Count:** Count of successful referrals.