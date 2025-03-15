# SQL Commands

### This command is used to create a new database in MySQL.

```sql
CREATE DATABASE db_name;
```

- `db_name` should be replaced with the desired name of the database.
- The database name must be unique within the MySQL server.
- If the database already exists, an error will occur unless `IF NOT EXISTS` is used.

---

### The `CREATE DATABASE IF NOT EXISTS db_name;` command is used to create a new database only if it does not already exist in MySQL.

```sql
CREATE DATABASE IF NOT EXISTS db_name;
```

- `db_name` should be replaced with the desired name of the database.
- If the specified database already exists, MySQL will not create a duplicate and will not return an error.
- This is useful to prevent errors when running scripts multiple times.

---

### The `DROP DATABASE db_name;` command is used to delete an existing database from the MySQL server.

```sql
DROP DATABASE db_name;
```

- `db_name` should be replaced with the name of the database you want to delete.
- This action permanently removes the database along with all its tables and data.
- If the database does not exist, an error will occur unless `IF EXISTS` is used.

---

### The `DROP DATABASE IF EXISTS db_name;` command is used to delete a database only if it exists in MySQL.

```sql
DROP DATABASE IF EXISTS db_name;
```

- `db_name` should be replaced with the name of the database to be deleted.
- If the database exists, it will be permanently removed along with all its tables and data.
- If the database does not exist, MySQL will not return an error, preventing unnecessary failures in scripts.

---

### The USE `db_name;` command is used to select a specific database to work with in MySQL.

```sql
USE db_name;
```

- `db_nam`e should be replaced with the name of the database you want to use.
- Once executed, all subsequent queries will be run on the selected database until another database is chosen or the session ends.
- This command does not create a database; it only switches to an existing one.

---

### `The CREATE TABLE table_name (...);` command is used to create a new table inside a selected database in MySQL.

```sql
CREATE TABLE table_name (
  column_name1 datatype constraint,
  column_name2 datatype constraint,
  column_name3 datatype constraint
);
```

- `table_name` should be replaced with the desired name of the table.
- Each column is defined with a `column_name,` a `datatype` (such as `INT`, `VARCHAR`, `DATE`, etc.), and optional `constraints` (such as `PRIMARY KEY`, `NOT NULL`, `AUTO_INCREMENT`, etc.).
- A table must have at least one column.
- If a table with the same name already exists, MySQL will return an error unless `IF NOT EXISTS` is used.

---

### The `INSERT INTO table_name VALUES (...), (...);` command is used to insert multiple rows into a table in a single query.

```sql
INSERT INTO table_name
(colname1, colname2,...)
VALUES
(someValue, someValue, someValue),
(someValue, someValue, someValue);
```

- `table_name` should be replaced with the name of the table where data will be inserted.
- Each set of values inside parentheses represents a row.
- The number of values in each row must match the number of columns in the table.

---

### The `SELECT * FROM table_name;` command is used to retrieve all columns and rows from a table in MySQL.

```sql
SELECT * FROM table_name;
```

- `table_name` should be replaced with the name of the table from which data needs to be fetched.
- The `*` symbol selects all columns from the table.
- The result will include every row stored in the table.
- If the table is empty, the query will return an empty result set.

---

### The `SELECT col1, col2, ... FROM table_name;` command is used to retrieve specific columns from a table in MySQL.

```sql
SELECT col1, col2, ... FROM table_name;
```

- Instead of selecting all columns (`SELECT *`), this allows fetching only the required columns.
- The columns must be separated by commas.
- The result set includes only the specified columns and all rows from the table.

---

### The `SELECT DISTINCT col FROM table_name;` command is used to retrieve unique values from a specific column in MySQL.

```sql
SELECT DISTINCT col FROM table_name;
```

- It removes duplicate entries from the result set.
- Useful when you want to get a list of distinct values in a column.

---

### The `SHOW DATABASES;` command is used to list all databases available on the MySQL server.

```sql
SHOW DATABASES;
```

- It displays the names of all databases that the current user has access to.
- System databases like `mysql`, `information_schema`, and `performance_schema` may also be included in the result.
- This command helps verify whether a specific database exists before performing operations on it.

---

### The `SHOW TABLES;` command is used to list all tables in the currently selected database in MySQL.

```sql
SHOW TABLES;
```

- It displays the names of all tables within the active database.
- You must first select a database using the `USE db_name;` command before running `SHOW TABLES;`.
- If no database is selected, MySQL will return an error.

---

### The `UPDATE` command in MySQL is used to modify existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

- It updates one or more columns in one or multiple rows.
- The `WHERE` clause is important to specify which rows to update. Without `WHERE`, all rows in the table will be updated!

---

### The `DELETE` command in MySQL is used to remove records from a table.

```sql
DELETE FROM table_name
WHERE condition;
```

- The `WHERE` clause is important to specify which rows to delete.
- Without `WHERE`, all rows will be deleted, but the table structure remains intact.

---

### The `ALTER TABLE ... ADD COLUMN` command in MySQL is used to add a new column to an existing table.

```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype constraints;
```

- The new column will be added at the end of the table by default.
- You must specify the data type of the new column.
- You can also define constraints like `NOT NULL`, `DEFAULT`, or `UNIQUE`.

---

### The `ALTER TABLE ... DROP COLUMN` command in MySQL is used to remove a column from an existing table.

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

- Be careful! Dropping a column permanently deletes all its data.
- If the column has dependencies (like being part of a foreign key or index), you may need to drop those constraints first.

---

### The `ALTER TABLE ... RENAME TO` command in MySQL is used to rename an existing table to a new name.

```sql
ALTER TABLE old_table_name
RENAME TO new_table_name;
```

- This is useful when changing table names without losing any data.
- The structure and data remain unchanged after renaming.

---

### The `ALTER TABLE ... CHANGE COLUMN` command in MySQL is used to rename a column and/or modify its datatype and constraints in an existing table.

```sql
ALTER TABLE table_name
CHANGE COLUMN old_column_name new_column_name new_datatype constraints;
```

- Unlike `MODIFY COLUMN`, this command requires the old column name and the new column name.
- The new column definition must be fully specified, including datatype and constraints.

---

### The `ALTER TABLE ... MODIFY COLUMN` command in MySQL is used to change the datatype, constraints, or default value of an existing column without renaming it.

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name new_datatype constraints;
```

- Unlike `CHANGE COLUMN`, it does not require specifying the old column name.
- The column definition must be fully specified, including the datatype and constraints.

---

# MySQL Data Types

| Data Type         | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| TINYINT           | Stores very small integers (-128 to 127) or (0 to 255 for UNSIGNED).                                                                      |
| SMALLINT          | Stores small integers (-32,768 to 32,767) or (0 to 65,535 for UNSIGNED).                                                                  |
| MEDIUMINT         | Stores medium-sized integers (-8,388,608 to 8,388,607) or (0 to 16,777,215 for UNSIGNED).                                                 |
| INT (INTEGER)     | Stores standard integers (-2,147,483,648 to 2,147,483,647) or (0 to 4,294,967,295 for UNSIGNED).                                          |
| BIGINT            | Stores large integers (-9 quintillion to 9 quintillion) or (0 to 18 quintillion for UNSIGNED).                                            |
| DECIMAL (NUMERIC) | Stores fixed-point numbers with exact precision. Example: `DECIMAL(10,2)` stores numbers up to 10 digits with 2 decimal places.           |
| FLOAT             | Stores floating-point numbers with approximate precision (single precision).                                                              |
| DOUBLE (REAL)     | Stores floating-point numbers with higher precision (double precision).                                                                   |
| BIT               | Stores binary values (0 and 1).                                                                                                           |
| CHAR(n)           | Stores fixed-length strings (1 to 255 characters). Example: `CHAR(10)` always stores 10 characters.                                       |
| VARCHAR(n)        | Stores variable-length strings (1 to 65,535 characters). Example: `VARCHAR(50)` can store up to 50 characters but uses only needed space. |
| BLOB              | Stores binary large objects (images, files, etc.). Variants include `TINYBLOB`, `BLOB`, `MEDIUMBLOB`, and `LONGBLOB`.                     |
| DATE              | Stores only the date in `YYYY-MM-DD` format (from '1000-01-01' to '9999-12-31').                                                          |
| DATETIME          | Stores both date and time in `YYYY-MM-DD HH:MM:SS` format.                                                                                |
| TIMESTAMP         | Stores date and time, automatically updating to the current timestamp on insert or update.                                                |
| TIME              | Stores only time in `HH:MM:SS` format.                                                                                                    |
| YEAR              | Stores only the year in `YYYY` format (from 1901 to 2155).                                                                                |

---

# CONSTRAINTS in MySQL

---

## `NOT NULL` CONSTRAINT

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT
);
```

### The `NOT NULL` constraint in MySQL ensures that a column cannot have a `NULL` value.

- It is used to enforce that a field must always contain a value.
- If an `INSERT` or `UPDATE` statement tries to set a `NULL` value for a column with this constraint, MySQL will return an error.
- It is commonly used for important fields like `id`, `name`, or `email`, where missing values should not be allowed.

---

## `UNIQUE` CONSTRAINT

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(15) UNIQUE
);

```

### The `UNIQUE` constraint in MySQL ensures that all values in a column are distinct (no duplicate values allowed).

- It prevents duplicate entries in a specific column or a combination of columns.
- A table can have multiple `UNIQUE` columns.
- Unlike `PRIMARY` KEY, a column with `UNIQUE` can have `NULL` values (but only one `NULL` if the column is not `NOT NULL`).

---

## `DEFAULT` CONSTRAINT

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT DEFAULT 18
);
```

### The `DEFAULT` constraint in MySQL is used to set a default value for a column when no value is provided during an `INSERT` operation.

- If no value is specified for the column, MySQL automatically assigns the default value.
- It helps ensure that columns always have meaningful values even if they are not explicitly provided.
- The default value must be a constant (not a function, except for `CURRENT_TIMESTAMP` in date/time columns).

---

## `CHECK` CONSTRAINT

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT CHECK (age >= 18)
);
```

### The `CHECK` constraint in MySQL is used to enforce a condition on a column's values.

- It ensures that values inserted into a column meet a specific condition.
- If a value violates the condition, MySQL rejects the `INSERT` or `UPDATE` operation.

---

## `PRIMARY KEY` CONSTRAINT

### Single Column Primary Key:

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT
);
```

- The `id` column is the primary key, ensuring each student has a unique and non-null ID.

### Composite Primary Key:

```sql
CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id)
);
```

- The combination of `student_id` and `course_id` ensures that a student cannot enroll in the same course more than once.

### The `PRIMARY KEY` constraint in MySQL is used to uniquely identify each record in a table.

- A primary key column must contain unique values and cannot be NULL.
- Each table can have only one `PRIMARY KEY`, but it can be composed of multiple columns (composite key).
- The `PRIMARY KEY` is automatically indexed, improving search performance.

---

## `FOREIGN KEY` CONSTRAINT

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT,
  course_name VARCHAR(100),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

- The `student_id` in `enrollments` must match an existing `id` in the `students` table.

### The `FOREIGN KEY` constraint in MySQL is used to create a relationship between two tables by linking a column in one table to the `PRIMARY KEY` of another table.

- It ensures referential integrity, meaning values in the foreign key column must exist in the referenced table.
- If a referenced value is deleted or updated, MySQL can enforce rules like `CASCADE`, `SET NULL`, or `RESTRICT`.

---

# Clauses in MySQL

## `WHERE` Clause

```sql
SELECT column1, column2,... FROM table_name WHERE condition;
```

### The `WHERE` clause in MySQL is used to filter records based on a specified condition.

- It is used with `SELECT`, `UPDATE`, and `DELETE` statements.
- Only rows that satisfy the condition are affected or returned.

---

## `LIMIT` Clause

```sql
SELECT column1, column2,... FROM table_name LIMIT number_of_rows;
```

### The `LIMIT` clause in MySQL is used to restrict the number of rows returned by a `SELECT` query.

- It is useful for pagination and performance optimization when dealing with large datasets.
- The number specified after `LIMIT` determines how many rows will be retrieved.

---

## `ORDER BY` Clause

```sql
SELECT column1, column2,... FROM table_name ORDER BY column1 [ASC|DESC];
```

### The `ORDER BY` clause in MySQL is used to sort the result set based on one or more columns.

- By default, it sorts in ascending order (`ASC`).
- You can specify descending order (`DESC`) if needed.
- Multiple columns can be used for sorting.

---

## `GROUP BY` Clause

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

### The `GROUP BY` clause in MySQL is used to group rows that have the same values in a specified column and apply aggregate functions to each group.

- It is often used with aggregate functions (`COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`).
- It organizes data into groups based on one or more columns.

---

## `HAVING` Clause

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```

### The `HAVING` clause in MySQL is used to filter grouped records after applying the `GROUP BY` clause.

- It is similar to `WHERE`, but `WHERE` filters rows before grouping, whereas `HAVING` filters groups after aggregation.
- Used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.

---

# Aggregate Functions

## Aggregate functions in MySQL perform calculations on a set of values and return a single value. They are commonly used with the `GROUP BY` clause.

List of Aggregate Functions:

1. `COUNT()` – Returns the number of rows.
2. `SUM()` – Returns the total sum of a numeric column.
3. `AVG()` – Returns the average value of a numeric column.
4. `MIN()` – Returns the smallest value in a column.
5. `MAX()` – Returns the largest value in a column.

### Syntax:

```sql
SELECT COUNT(colname) FROM table_name;
```

```sql
SELECT SUM(colname) FROM table_name;
```

```sql
SELECT AVG(colname) FROM table_name;
```

```sql
SELECT MIN(colname) FROM table_name;
```

```sql
SELECT MAX(colname) FROM table_name;
```
