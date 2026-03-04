// validate-data.js

// This script validates all hardcoded metrics against Snowflake query results.

function validateMetrics(hardCodedMetrics, snowflakeQueryResults) {
    const validationResults = {};

    for (const metric in hardCodedMetrics) {
        if (hardCodedMetrics.hasOwnProperty(metric)) {
            const hardCodedValue = hardCodedMetrics[metric];
            const queriedValue = snowflakeQueryResults[metric];

            if (queriedValue !== undefined) {
                validationResults[metric] = {
                    hardCodedValue: hardCodedValue,
                    queriedValue: queriedValue,
                    isValid: hardCodedValue === queriedValue
                };
            } else {
                validationResults[metric] = {
                    hardCodedValue: hardCodedValue,
                    error: 'No queried result found for this metric.'
                };
            }
        }
    }

    return validationResults;
}

// Example usage:
// const hardCodedMetrics = { metricA: 100, metricB: 200 };
// const snowflakeQueryResults = { metricA: 100, metricB: 250 };
// const results = validateMetrics(hardCodedMetrics, snowflakeQueryResults);
// console.log(results);