create database if not exists lucid;

use lucid;

create table if not exists users (
  id int auto_increment primary key,
  email varchar(255) not null,
  username varchar(255) not null,
  password varchar(255) not null,
  enabled boolean not null default 0,
  created_at datetime,
  updated_at datetime,
  constraint email_unique unique (email),
  constraint username_unique unique (username)
) engine=innodb;

create table if not exists confirmation_tokens (
  email varchar(255) primary key,
  token varchar(255),
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
) engine=innodb;
