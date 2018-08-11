DROP DATABASE IF EXISTS talent_db;
CREATE DATABASE talent_db;
USE talent_db;

CREATE TABLE `talent` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 150 ) NOT NULL,
	`bio` VARCHAR( 500 ) NOT NULL,
	`email` VARCHAR( 150 ) NOT NULL,
	`location` VARCHAR( 300 ) NOT NULL,
	`website` VARCHAR( 225 ) NOT NULL,
	`social` VARCHAR( 500 ) NOT NULL,
	`specialty` VARCHAR( 150 ) NOT NULL,
    `travel` BOOLEAN NOT NULL,
	PRIMARY KEY ( `id` )
);

INSERT INTO talent (name, bio, email, location, website, social, specialty, travel)
VALUES ("DJ S", "BIO", "live@test.com", "SLC, UT", "djs.com", "instagram, facebook, youtube", "DJ", TRUE);

SELECT * FROM talent;