# SQL Lesson Notes

## GROUP BY
GROUP BY is used to group rows that share the same value in a column so we can apply aggregate functions to each group.

Common use case:
Group by a category like hobby or food choice
Then calculate averages, counts, minimums, or maximums per group

Example:
SELECT pie_pizza_noodles, AVG(happiness) AS avg_happiness
FROM team_mate
GROUP BY pie_pizza_noodles;

This returns one row per food type instead of one row per person.

## WHERE vs HAVING
WHERE and HAVING both filter results but at different stages.

WHERE
Filters individual rows
Runs before GROUP BY
Cannot use aggregate functions

HAVING
Filters grouped results
Runs after GROUP BY
Can use aggregate functions

Example:
SELECT pie_pizza_noodles, AVG(happiness) AS avg_happiness
FROM team_mate
GROUP BY pie_pizza_noodles
HAVING avg_happiness > 6;

This filters groups, not individual rows.

## DISTINCT
DISTINCT removes duplicate values from the result set.

Example:
SELECT DISTINCT hobby
FROM team_mate;

Only unique hobbies are returned.

DISTINCT applies to the full row, not just one column by itself.

## ORDER BY
ORDER BY sorts the results.

Default sorting is ascending.

Example:
SELECT *
FROM team_mate
ORDER BY happiness DESC;

Sorting by multiple columns:
SELECT *
FROM team_mate
ORDER BY happiness DESC, date_started_coding ASC;

## LIMIT
LIMIT controls how many rows are returned.

Useful for previewing data or getting top results.

Example:
SELECT *
FROM team_mate
ORDER BY happiness DESC
LIMIT 3;

This returns only the first three rows after sorting.

## Aggregate Functions
Aggregate functions return a single value from multiple rows.

AVG
SELECT AVG(happiness) FROM team_mate;

MIN
SELECT MIN(happiness) FROM team_mate;

MAX
SELECT MAX(happiness) FROM team_mate;

COUNT
SELECT COUNT(*) FROM team_mate;

COUNT DISTINCT
SELECT COUNT(DISTINCT hobby) FROM team_mate;

## UPDATE
UPDATE modifies existing rows.

Always use WHERE unless you want to update every row.

Example:
UPDATE team_mate
SET hobby = 'Swimming'
WHERE id = 1;

## DELETE
DELETE permanently removes rows.

WHERE is critical to avoid deleting everything.

Example:
DELETE FROM team_mate
WHERE id = 3;

## SQL Execution Order
Understanding execution order helps explain query behavior.

Execution order:
FROM
WHERE
GROUP BY
HAVING
SELECT
ORDER BY
LIMIT

This explains why WHERE cannot use aggregate functions but HAVING can.

## SQL Command Types
DQL
SELECT

DDL
CREATE
DROP
ALTER

DML
INSERT
UPDATE
DELETE

DCL
GRANT
REVOKE

## Key Takeaway
This lesson covers working with a single table end to end:
Selecting data
Filtering rows
Grouping data
Using aggregate functions
Sorting results
Limiting output
Updating rows
Deleting rows

The next major topic after this is JOINs, which allow working with multiple tables.
