create database burgers_db;
use burgers_db;

create table burgers(
    id int not null auto_increment,
    burger_name VARCHAR(255) not null,
    devoured boolean not null,

    Primary Key(id)


);