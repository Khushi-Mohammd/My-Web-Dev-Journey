# MongoDB Commands

## `show dbs` command

```mongodb
show dbs
```

The `show dbs` command lists all databases on the MongoDB server along with their sizes. Databases without data or collections may not appear. To access a specific database, use the `use <database_name>` command.

---

## `use database_name` command

```mongodb
use database_name
```

The `use database_name` command switches the current database to the specified one. If the database does not exist, MongoDB will create it when you insert data into it.

---

## `show collections` command

```mongodb
show collections
```

The `show collections` command displays a list of all collections in the currently selected database. It helps you view the available collections (similar to tables in relational databases) within the database.

---

## `db.collection_name.insertOne(<document>)` command

```mongodb
db.collection_name.insertOne(<document>)
```

The `db.collection_name.insertOne(<document>)` command inserts a single document into the specified collection. If the collection does not exist, MongoDB will create it automatically. It is typically used when you need to add one record to a collection.

---

## `db.collection_name.insertMany()` command

```mongodb
db.collection_name.insertMany(<array of documents>)
```

The `db.collection_name.insertMany()` command inserts multiple documents into the specified collection at once. It is useful when you need to add a batch of documents efficiently. If the collection doesn't exist, MongoDB will create it automatically.

---

## `db.collection_name.find()` command

```mongodb
db.collection_name.find()
```

The `db.collection_name.find()` command retrieves all documents from the specified collection. It is used to read and display data stored in the collection. By default, it returns all documents in a readable format.

---

## `db.collection_name.find({key: value})` command

```mongodb
db.collection_name.find({key: value})
```

The `db.collection_name.find({key: value})` command retrieves documents from the specified collection that match the given condition. It is used to filter and display documents based on specific field values.

### Difference between `db.collection_name.find({key: value})` and `db.collection_name.findOne({key: value})`

The main difference is that `db.collection_name.find({key: value})` returns a cursor object containing multiple matching documents, while `db.collection_name.findOne({key: value})` returns a single matching document directly.

---

## `db.collection_name.findOne({key: value})` command

```mongodb
db.collection_name.findOne({key: value})
```

The `db.collection_name.findOne({key: value})` command retrieves the first document that matches the specified condition from the collection. It is useful when you only need a single document that meets the criteria.

### Difference between `db.collection_name.find({key: value})` and `db.collection_name.findOne({key: value})`

The main difference is that `db.collection_name.find({key: value})` returns a cursor object containing multiple matching documents, while `db.collection_name.findOne({key: value})` returns a single matching document directly.

---

## `db.collection_name.find({key: {Query or Projection Operators: value}})` command

```mongodb
db.collection_name.find({key: {Query or Projection Operators: value}})
```

The `db.collection_name.find({key: {Query or Projection Operators: value}})` command is used to filter documents using query or projection operators. Query operators (e.g., `$gt`, `$lt`, `$eq`) help apply conditions for advanced filtering, while projection operators (e.g., `$exists`, `$type`) control which fields are returned in the result.

### Some important and useful MongoDB operators:

- `$eq` : Matches values equal to a specified value.
- `$ne` : Matches values not equal to a specified value.
- `$gt` : Matches values greater than a specified value.
- `$lt` : Matches values less than a specified value.
- `$gte` : Matches values greater than or equal to a specified value.
- `$lte` : Matches values less than or equal to a specified value.
- `$in` : Matches any of the values specified in an array.
- `$nin` : Matches none of the values specified in an array.
- `$and` : Combines multiple conditions using logical AND.
- `$or` : Combines multiple conditions using logical OR.
- `$not` : Inverts the effect of a query expression.
- `$exists` : Checks if a field exists or not.
- `$project` : Specifies the fields to include or exclude in the result.
- `$slice` : Limits the number of elements returned from an array field.
- `$elemMatch` : Projects the first matching array element based on the query.
- `$meta` : Returns metadata (like text search scores) with the documents.
- `$addFields` : Adds new fields to documents in the result.

---

## `db.collection_name.find({"parentKey.nestedKey": value})` command

```mongodb
db.collection_name.find({"parentKey.nestedKey": value})
```

The `db.collection_name.find({"parentKey.nestedKey": value})` command is used to query documents with nested fields using dot notation. It searches for documents where the specified nested key matches the given value. This is useful when dealing with embedded documents or hierarchical data.

---

## `db.collection_name.updateOne({filter}, {update}, ...)` command

```mongodb
db.collection_name.updateOne({filter}, {update}, ...)
```

The `db.collection_name.updateOne({filter}, {update}, ...)` command updates the first document that matches the specified filter in the collection. It is typically used to modify a single document based on certain conditions. If no document matches, no changes are made unless the `upsert` option is set to `true`.

---

## `db.collection_name.updateMany({filter}, {update}, ...)` command

```mongodb
db.collection_name.updateMany({filter}, {update}, ...)
```

The `db.collection_name.updateMany({filter}, {update}, ...)` command updates all documents that match the specified filter in the collection. It is useful when you need to apply the same update to multiple documents at once. If no documents match, no changes are made unless the `upsert` option is set to `true`.

---

## `db.collection_name.replaceOne({filter}, {replace_value})` command

```mongodb
db.collection_name.replaceOne({filter}, {replace_value})
```

The `db.collection_name.replaceOne({filter}, {replace_value})` command replaces the first document that matches the specified filter with a new document. Unlike `updateOne()`, it completely replaces the existing document with the provided one, removing any fields not included in the replacement document.

---

### MongoDB Update Stages

- `$addFields`:

  - Adds new fields or updates existing fields in documents.
  - Can add multiple fields at once.
  - Similar to `$set`, but often used in aggregation pipelines.

- `$set`:

  - Adds new fields or updates existing fields in documents.
  - Functions similarly to `$addFields`, but primarily used in update operations.

- `$project`:

  - Specifies which fields to include or exclude in the output documents.
  - Can also reshape documents by renaming or calculating fields.

- `$unset`:

  - Removes specified fields from documents.
  - Useful when you need to delete unwanted fields without modifying other data.

- `$replaceRoot`:

  - Replaces the entire document with a specified field's value.
  - Typically used when a field contains an embedded document that you want to promote to the top level.

- `$replaceWith`:

  - Similar to `$replaceRoot`, but offers more flexibility by allowing expressions to determine the replacement value.
  - It can replace a document with any computed result.

---

## `db.collection_name.deleteOne(<filter>, <options>)` command

```mongodb
db.collection_name.deleteOne(<filter>, <options>)
```

The `db.collection_name.deleteOne(<filter>, <options>)` command removes the first document that matches the specified filter. If multiple documents match, only the first one found will be deleted. The `options` parameter can include settings like `collation` for locale-based string comparisons. If no matching document is found, no deletion occurs.

---

## `db.collection_name.deleteMany(<filter>, <options>)` command

```mongodb
db.collection_name.deleteMany(<filter>, <options>)
```

The `db.collection_name.deleteMany(<filter>, <options>)` command deletes all documents that match the specified filter. If no documents match the filter, no deletion occurs. The `options` parameter can include additional settings like `collation` for locale-based string comparisons. This command is useful for bulk deletions.

---

## `db.collection_name.deleteMany({})` command

```mongodb
db.collection_name.deleteMany({})
```

The `db.collection_name.deleteMany({})` command deletes all documents from the specified collection because the empty `{}` filter matches every document. However, the collection itself remains intact. Use this command with caution, as it permanently removes all data from the collection.

---

## `db.dropDatabase()` command

```mongodb
db.dropDatabase()
```

The `db.dropDatabase()` command deletes the current database, removing all its collections and associated data permanently. It also removes the database from the list of available databases. This action cannot be undone, so use it with caution.

---
