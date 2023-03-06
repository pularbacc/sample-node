
-------------------------------------------------
### SYNTAX SQL 
--------------------------------------------------
_show-attribute-table_ ===> DESC
# DESC [name]
--------------------------------------------------
_create_ ==> CREATE
# CREATE DATABASE
# CREATE TABLE [name] (
    [name] [type]
)
--------------------------------------------------
_delete_ ==> DROP
# DROP DATABASE [name]
# DROP TABLE [name]

--------------------------------------------------
_edit_ ==> ALTER 
> add column
# ALTER TABLE [name] ADD [name] [type]

> delete column
# ALTER TABLE [name] DROP COLUMN [name]

> edit column type
# ALTER TABLE [name] MODIFY COLUMN [name] [type]

---------------------------------------------------
_constraints_
> NOT NULL
> UNIQUE
> PRIMARY KEY
> FOREIGN KEY
> CHECK
> DEFAULT
> CREATE INDEX

