import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import Navbar from './components/Navbar';
function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState(
    [
      {
        name: "William Nguyen", 
        role: "CEO", 
        img: "https://media.licdn.com/dms/image/D4E35AQE65Z3De7tXaw/profile-framedphoto-shrink_200_200/0/1677099755237?e=1679382000&v=beta&t=fs2sVEAGGJmkALKbYNjIIItgzNi-HKfKxNAMF_V_QOs"
      },

      {
        name: "Ye Hun Joo", 
        role: "CFO", 
        img: "https://media.licdn.com/dms/image/C4E03AQGmsVJyj4gzEw/profile-displayphoto-shrink_200_200/0/1632950105523?e=1684368000&v=beta&t=OAaYgcR9aAFQw3J9mvcR7VauF1O6CpvKqSdDwvdf7Fc"
      },

      {
        name: "Adolfo Alvarado", 
        role: "COO", 
        img: "https://media.licdn.com/dms/image/D4E03AQExt4vfHPI15Q/profile-displayphoto-shrink_200_200/0/1667165886215?e=1684368000&v=beta&t=RD9UocIP7lcDJOMXu-rueGH3bzaH7C6V5hZ-yeaniDU"
      },

      {
        name: "Ben Seibert", 
        role: "SFO", 
        img: "https://media.licdn.com/dms/image/C4E03AQGObKsn5ehLEQ/profile-displayphoto-shrink_200_200/0/1660337399074?e=1684368000&v=beta&t=pd3WAVkJzYnddtkzQ_zo038xxSctL0-gxhsjzVffGCM"
      }
    ]
  );
  return (

    <div className="App ">
      <Navbar />
        <input type='text' onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }} />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
             <Employee 
              name = {employee.name} 
              role = {employee.role} 
              img = {employee.img}
              />
            );
          })}
        </div>
    </div>
  );
}

export default App;
