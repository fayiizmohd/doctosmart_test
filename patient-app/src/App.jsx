import { useEffect, useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/patients")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setPatients(data.result || data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      

      {patients.map((patient) => (
        <div key={patient.id}>
          <h1>{patient.patient_name}</h1>
          <p>DOB: {patient.date_of_birth}</p>
          <p>Reg Id: {patient.registration_id}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
