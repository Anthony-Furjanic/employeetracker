const cTable = require('console.table');
const inquirer= require("inquirer")
const mysql= require("mysql2")
const connection= mysql.createConnection({
    multipleStatements:true,
    host:"localhost",
    port:3306,
    user:"root",
    password:"rootroot",
    database:"emp_db"
})
connection.connect(function(error){
    if(error)throw error
    runApplication()
})

function runApplication(){
        inquirer.prompt({
            type: "list",
            name:"viewOrChangeRole",
            message:"what is your job title?",
            choices: ["view all departments","view all roles","view all employees","add a department","add a role","add an employee","update an employee role","exit"]
        }).then(function(input){
            switch(input.viewOrChangeRole)
            {
                case "view all departments": 
                viewAllDept()
                break

                case "view all roles":
                viewAllRoles() 
                break

                case "view all employees":
                viewAllEmploy()
                break
        
                
                case "add a department":
                addDept()
                break
        
                case "add a role":
                addRole()
                break
        
             
                case "add an employee":
                addEmploy()
                break
        
              
                case "update an employee role":
                updateEmpRole()
                break
            
                  
                case "exit":
                exit()
                break
            
    
            
            
            
                    default:
                        buildHTML()
            }






        })
    
    // run app close
    }


function viewAllDept(){

  const query="SELECT * FROM department " 
  connection.query(query,function(error,response){
    console.log(`departments:`)
    console.table(response)
    runApplication()
  })

}

function viewAllRoles(){
    const query="SELECT * FROM role"
    connection.query(query,function(error,response){
      console.log(`roles:`)
      console.table(response)
      runApplication()
    })
  
}
function viewAllEmploy(){
    const query="SELECT * FROM employee"
    connection.query(query,function(error,response){
      console.log(`employees:`)
      console.table(response)
      runApplication()
    })
  
}

function addDept(){
    inquirer.prompt({
        type: "input",
        name:"department",
        message: "What is the name of the deparment?"
    }).then(function(input){
        console.log(input) 
     const query=`INSERT INTO department (name) VALUES ("${input.department}");`
    connection.query(query,input.department,function(error,response){
            console.log(`you added ${input.department}`)
    })
})

}

function addRole(){
    connection.query("SELECT * FROM DEPARTMENT",function(error,response){
        if(error)throw (error)
   
    inquirer.prompt([{
        type: "input",
        name:"title",
        message: "What is the title of the role?"
    },
    {
        type: "input",
        name:"salary",
        message: "What is the salary of the role?"
    },
    {
        type: "list",
        name:"department_id",
        message: "What is the department of the role?",
        choices: function(){
            let seearray=[]
            response.forEach(response=>{
                seearray.push(response.name)
            })
            return seearray
        }
    }
    ]
    
    
    ).then(function(input){
        console.log(input) 
     const query=`INSERT INTO role (title,salary,department_id) VALUES ("${input.title}","${input.salary}","${input.department_id}");`
    connection.query(query,input.role,function(error,response){
            console.log(`you added ${input.title}`)
    })
})
})
}

function addEmploy(){
    connection.query("SELECT * FROM role",function(error,response){
        if(error)throw (error)
    inquirer.prompt([
    {
        type: "input",
        name:"firstname",
        message: "What is the first name of the employee?"
    },
    {
        type: "input",
        name:"lastname",
        message: "What is the last name of the employee?"
    },
    {
        type: "list",
        name:"roleid",
        message: "What is the role of the employee?",
        choices: ['a', 'b']
        /*
        function(){
            let rolearray=[]
            response.forEach(response=>{
                rolearray.push(response.name)
            })
            return rolearray
    }
    */
    }
    ])
    })
}