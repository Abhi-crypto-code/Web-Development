USE college;
SELECT * FROM teacher
WHERE salary > 55000;
ALTER TABLE teacher 
CHANGE COLUMN salary ctc INT;
SELECT * FROM teacher;

SET SQL_SAFE_UPDATES = 0;
UPDATE teacher
SET ctc = ctc + ctc*0.25;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;