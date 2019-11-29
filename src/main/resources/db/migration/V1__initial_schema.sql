create table project (
    ID int not null AUTO_INCREMENT,
    NAME varchar(100) not null,
    ACTIVE boolean not null default true,
    PRIMARY KEY (ID),
    UNIQUE (NAME)
)
ENGINE = innodb
DEFAULT CHARSET = utf8;

create table activity (
    ID int not null AUTO_INCREMENT,
    PROJECT_ID int not null,
    DESCRIPTION varchar(255),
    DATEW varchar(10),
    START_TIME varchar(5),
    END_TIME varchar(5),
    TYPE varchar(20) not null default 'REGULAR',
    PRIMARY KEY (ID),
    CONSTRAINT FK_ACTIVITY_PROJECT FOREIGN KEY ( PROJECT_ID ) REFERENCES project ( ID )

)
ENGINE = innodb
DEFAULT CHARSET = utf8;