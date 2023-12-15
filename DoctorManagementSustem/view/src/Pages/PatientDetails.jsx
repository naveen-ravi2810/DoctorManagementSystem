import React from 'react'

export const PatientDetails = () => {
  return (
    <div>
        <div>
            <p className='text-center text-3xl text-green-600 pt-10'>Patients</p>
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
                    <tr><td>1</td><td>Xyz</td><td>Mary Smith</td><td>Fever</td></tr>
                    <tr><td>2</td><td>Pqr</td><td>Bob Johnson</td><td>Cough</td></tr>
                    <tr><td>3</td><td>Lmn</td><td>Alice Brown</td><td>Back Pain</td></tr>
                    <tr><td>4</td><td>Wxy</td><td>Sam Wilson</td><td>Fatigue</td></tr>
                    <tr><td>5</td><td>Mno</td><td>Eva Miller</td><td>Sore Throat</td></tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
