
# Table User
create table User(
       -> Id int primary key auto_increment,
       -> Email varchar(255) not null unique,
       -> Name varchar(255) not null
       -> );


# Table Auth
create table Auth(
       -> Id int primary key auto_increment,
       -> UserId int not null unique,
       -> Password varchar(255) not null,
       -> foreign key (UserId) references User(Id)
       -> );

# Table Token
create table Token(
       -> Id int primary key auto_increment,
       -> Token varchar(255) not null unique,
       -> UserId int not null unique,
       -> foreign key (UserId) references User(Id)
       -> );

# Files Category
create table FilesCategory (
       -> Id int primary key auto_increment,
       -> Type varchar(255) not null unique
       -> );

# Files
create table Files (
       -> Id int primary key auto_increment,
       -> Data blob not null ,
       -> CategoryId int not null,
       -> UserId int not null,
       -> foreign key (UserId) references User(Id),
       -> foreign key (CategoryId) references FilesCategory(Id)
       -> );
