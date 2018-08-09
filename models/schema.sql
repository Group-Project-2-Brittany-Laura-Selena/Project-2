DROP DATABASE IF EXISTS talent_db;
CREATE DATABASE talent_db;
USE talent_db;

CREATE TABLE `talent` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255) NOT NULL,
	`email` VARCHAR( 255 ) NOT NULL,
	`location` VARCHAR( 255 ) NOT NULL,
	`website` VARCHAR( 255 ) NOT NULL,
	`social` VARCHAR( 255 ) NOT NULL,
    `travel` BOOLEAN NOT NULL,
	PRIMARY KEY ( `id` )
);

INSERT INTO talent (name, email, location, website, social, travel)
VALUES ("DJ S", "djs@test.com", "SLC, UT", "djs.com", "instagram, facebook, youtube", TRUE);

SELECT * FROM talent;