DROP DATABASE IF EXISTS talent_db;
CREATE DATABASE talent_db;
USE talent_db;

CREATE TABLE `talent` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`artist_name` VARCHAR( 150 ) NOT NULL,
	`specialty` VARCHAR( 150 ) NOT NULL,
	`bio` VARCHAR( 750 ) NOT NULL,
	`email` VARCHAR( 150 ) NOT NULL,
	`city` VARCHAR( 250 ) NOT NULL,
	`state` VARCHAR( 250 ) NOT NULL,
	`website` VARCHAR( 225 ) NOT NULL,
	`instagram` VARCHAR( 500 ),
	`facebook` VARCHAR( 500 ),
	`youtube` VARCHAR( 500 ),
	`specialty` VARCHAR( 150 ) NOT NULL,
    `travel` BOOLEAN NOT NULL,
	PRIMARY KEY ( `id` )
);

INSERT INTO talent (artist_name, specialty, bio, email, city, state, website, instagram, facebook, youtube, specality, travel)
VALUES ("DJ S", "BIO", "live@test.com", "SLC, UT", "djs.com", "instagram, facebook, youtube", "DJ", TRUE);

SELECT * FROM talent;