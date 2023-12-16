import React from 'react'
import { useState } from 'react'

export const PatientDetails = () => {
    const [Patients, setPatients] = useState([
        {'id':1, "name":"Xyz", "Doc":"Mary Smith", "type":"Fever"},
        {'id':2, "name":"Pqr", "Doc":"Bob Johnson", "type":"Cough"},
        {'id':3, "name":"Lmn", "Doc":"Alice Brown", "type":"Back Pain"},
        {'id':4, "name":"Wxy", "Doc":"Sam Wilson", "type":"Fatigue"},
        {'id':5, "name":"Mno", "Doc":"Eva Miller", "type":"Sore Throat"},
    ])
    const [PatientUpdate, setPatientUpdate] = useState({
        id:"10",
        name:"",
        Doc:"",
        type:""
    })
    function updatePatientDetails(event){
        setPatientUpdate({
            ...PatientUpdate,
            [event.target.name] : event.target.value
        })
    }
    function addPatient(event){
        event.preventDefault()
        setPatients((prePatients) => [...prePatients, PatientUpdate])
        setPatientUpdate({
            id:[PatientUpdate.id]+1,
        name:"",
        Doc:"",
        type:""})
    }
  return (
    <div>
        <div>
            <p className='text-center text-3xl text-green-600 pt-10'>Patients</p>
        </div>
        <div className='flex justify-center py-10 '>
            <form action="" onSubmit={addPatient}>
                Patient Name <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.name} onChange={updatePatientDetails} name='name' type="text" required autoFocus/> <br /> <br />
                Doctor Name <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.Doc} onChange={updatePatientDetails} name='Doc' type="text" required/> <br /> <br />
                type <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.type} onChange={updatePatientDetails} name='type' type="text" required/> <br /> <br />
                <input className='border-2 p-2 rounded hover:cursor-pointer bg-green-500 hover:bg-green-900 hover:text-white' type="submit" value="Add patient" />
            </form>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                            <td>S.No</td>
                            <td>Patient Name</td>
                            <td>Doctor Name</td>
                            <td>Overview</td>
                    </tr>
                </thead>
                <tbody>
                    {Patients.map((patient, index)=>(
                        <tr key={index}><td>{patient.id}</td><td>{patient.name}</td><td>{patient.Doc}</td><td>{patient.type}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
