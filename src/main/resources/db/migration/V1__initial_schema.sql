create table project (
    ID int not null AUTO_INCREMENT,
    NAME varchar(100) not null,
    ACTIVE boolean not null default true,
    PRIMARY KEY (ID),
    UNIQUE (NAME)
)
ENGINE = innodb
DEFAULT CHARSET = utf8;

INSERT INTO project (NAME,ACTIVE) VALUES ('Default',true);
