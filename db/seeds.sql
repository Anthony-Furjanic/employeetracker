USE emp_db;
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("FINANCE");
INSERT INTO department (name) VALUES ("SALES");

INSERT INTO role (title,salary,department_id) VALUES ("sales rep",70000.00,2);
INSERT INTO role (title,salary,department_id) VALUES ("Accountant",80000.00,1);
INSERT INTO role (title,salary,department_id) VALUES ("help desk",50000.00,1);


UPDATE employee SET manager_id=NULL WHERE first_name="Adam" 
UPDATE role SET department_id=2 WHERE title="Accountant" 



INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("John","Smith",1,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Jane","Smith",2,2);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Adam","Smith",4,null);
