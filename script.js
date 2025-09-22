const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31"},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01"}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
//function Employee(firstName, lastName, email, birthdate, salary) {
    //this.firstName = firstName;
    //this.lastName = lastName;
    //this.email = email;
    //this.birthdate = birthdate;
    //this.salary = salary;
  //}

  //Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    //return new Employee(firstName, lastName, email, birthdate, salary);
  //};

  //Employee.prototype.editEmployee = function(updates) {
    //Object.assign(this, updates);
  //};

  // Usage example:
  //const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  //console.log(bill);

  //bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  //console.log(bill);

  class Employee {
    constructor(firstName, lastName, email, birthdate) { // MUST be "constructor"
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthdate = birthdate;
    }

    editEmployee(firstName, lastName, email, birthdate) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.birthdate = birthdate;
      }

    static addEmployee(firstName, lastName, email, birthdate) {
      return new Employee(firstName, lastName, email, birthdate);
    }

    getEmployees(){
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthdate: this.birthdate,
      };
    }
  }

  // Usage example
  //const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  //console.log(bill);

  //bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  //console.log(bill);

  const Katie = new Employee(
    "Katie",
    "Feng",
    "katiekf56@gmail.com",
    "2004-02-15",
  );

  console.log(Katie);
  console.log(Katie.firstName);
  console.log(Katie.lastName);
  console.log(Katie.email);
  console.log(Katie.birthdate);

  const newEmployees = [
    new Employee("Billy", "Joe", "joebill@gmail.com", "2003-09-10"),
    new Employee("Carrie", "Highland", "highlandcarrie99@gmail.com", "2019-08-06"),
    new Employee("Harold", "Green", "greenbean44@gmail.com", "1999-05-04")
   ];

 console.log(newEmployees[0]);
 console.log(newEmployees[0].firstName);
 console.log(newEmployees[0].lastName);
 console.log(newEmployees[0].email);
 console.log(newEmployees[0].birthdate);

 console.log(Katie.getEmployees());

const tableBody = document.querySelector("#employeeTable tbody");

tableBody.innerHTML = "";

const allEmployees = [Katie, ...newEmployees];

allEmployees.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.birthdate}</td>
    `;
    tableBody.appendChild(row);
});


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

//Try to output 3 instances of your class object into the table

//Callback
function verifyPayment(orderTotal, callback) {
  if (orderTotal < 5000) {
    callback (null, `Payment of $${orderTotal} approved.`);}
  else {
    callback (`Payment of $${orderTotal} requires manager approval.`, null);
  }
}
verifyPayment (3000,(error, success) => {
  if (error) {
    console.log(error);}
  else {
    console.log(success);
  }
});
verifyPayment(6000, (error, success) => {
  if (error) {
    console.log(error);}
  else{
    console.log(success);
  }
  });


//Promises
function verifyPayment(orderTotal) {
  console.log(`Verifying payment for $${orderTotal}...`);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Payment of $${orderTotal} verified successfully`);
      }, 2000);
  });
}

verifyPayment(100.00).then((confirmation) => {
  console.log('Payment confirmed:', confirmation);
});

//Async/Await
function verifyPayment(orderTotal) {
  console.log(`Checking payment for $${orderTotal}...`);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() > 0.5) {
              resolve(`Payment of $${orderTotal} approved`);
          } else {
              reject(`Payment of $${orderTotal} declined`);
          }
      }, 1000);
  });
}


async function processPayment(orderTotal) {
  try {
      const result = await verifyPayment(orderTotal);
      console.log('Valid', result);
  } catch (error) {
      console.log('Invalid', error);
  }
}


processPayment(100.00);
processPayment(50.00);
processPayment(200.00);