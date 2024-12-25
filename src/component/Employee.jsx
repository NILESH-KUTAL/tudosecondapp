import React, { useState } from 'react'


const Employees = () => {
    const [formData,setformData] = useState({
        name:'',
        email:'',
        contact:'',
        company:'',
        role:''
    })

    const [employee,setemployee] = useState([])

    const handleChange=(event)=>{
                 setformData ({...formData, [event.target.name] : event.target.value})
    }

    const addData=()=>{
        if(formData.name && formData.email && formData.contact && formData.company && formData.role)
        {
            setemployee([...employee, formData])
            setformData ({
                name:'',
                email:'',
                contact:'',
                company:'',
                role:''
        })
        }
        else
        {
            alert('Data Filled Required')
        }
    }
    
    
  return (
    <div>
        <h1>Employee Management App</h1>
        <div className='bg-warning w-50 mx-auto p-4 rounded-4'>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Full Name'
                name='name'
                className='form-control'
                value={formData.name}
                onChange={handleChange}
               
                />
            </div>
            <div className='mb-3'>
                <input type='email'
                placeholder='Enter Email'
                name='email'
                className='form-control'
                value={formData.email}
                onChange={handleChange}

               
                />
            </div>
            <div className='mb-3'>
                <input type='tel'
                placeholder='Enter Contact'
                name='contact'
                className='form-control'
                value={formData.contact}
                onChange={handleChange}

               
                />
            </div>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Company Name'
                name='company'
                className='form-control'
                value={formData.company}
                onChange={handleChange}

               
               
                />
            </div>
            <div className='mb-3'>              
                <select className='form-control' name='role' value={formData.role} onChange={handleChange}>
                    <option value=''>Select Role</option>
                    <option value='Backend Developer'>Backend Developer</option>
                    <option value='Frontend Developer'>Frontend Developer</option>
                    <option value='Full Stack Developer'>Full Stack Developer</option>
                    <option value='Devops'>Devops</option>
                </select>
            </div>
            <div>
                <button className='btn btn-success w-50' onClick={addData}>Add Data</button>
            </div>
        </div>
        <table className='table w-50 mx-auto table-dark text-light mt-3'>
            <thead>
                <tr>
                    <th>Emp_ID</th>
                    <th>Emp Name</th>
                    <th>Emp Email</th>
                    <th>Emp Contact</th>
                    <th>Company Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((emp,index)=>{
                        return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contact}</td>
                            <td>{emp.company}</td>
                            <td>{emp.role}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )}









export default Employees;



