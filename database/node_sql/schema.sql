
create table user(
    id varchar (70)primary key,
    u_name varchar(70) not null,
    pass varchar (70)unique,
    email varchar(70) unique not null
);