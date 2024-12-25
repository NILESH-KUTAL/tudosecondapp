import { useState } from "react";

const Student=()=>{
   
    const [formData,setformData] = useState({
        name:'',
        address:'',
        contact:'',
        aNumber:''
    })

    const [addStudent,setaddStudent] = useState([])

    const handleForm=(event)=>{
        setformData({...formData , [event.target.name] : event.target.value})

    }

    const addForm=()=>{
        
        if(formData.name && formData.address && formData.contact && formData.aNumber)
        {
            setaddStudent([...addStudent,formData])

            setformData({
                name:'',
                address:'',
                contact:'',
                aNumber:''
            })
        }

        else
        {
            alert ('All Filled Required')
        }

    }

    

    return(
        <div>
            <h2>Admission Form</h2>

            <div className="w-50 bg-danger mx-auto p-3 rounded-3">
                <div className=" mb-3">
                <input type="text" name="name" placeholder="Studet Name" className="form-control" value={formData.name} onChange={handleForm}></input>
                </div>
                <div className=" mb-3">
                <input type="text" name="address" className="form-control" placeholder="Studet Address" value={formData.address} onChange={handleForm}></input>
                </div>
                <div className=" mb-3">
                <input type="text" name="contact" className="form-control" placeholder="Studet Contact" value={formData.contact} onChange={handleForm}></input>
                </div>
                <div className=" mb-3">
                <input type="text" name="aNumber" className="form-control" placeholder="Addhar Number" value={formData.aNumber} onChange={handleForm}></input>
                </div>
                <div>
                    <button className="btn btn-success w-50 p-2" onClick={addForm}>Add Student</button>
                </div>
            </div>

            <table className="table table-dark mt-3 p-3">
                <thead>
                    <tr>
                        <th>Stu Id</th>
                        <th>Stu Name</th>
                        <th>Stu Address</th>
                        <th>Stu Contact</th>
                        <th>Stu Addhar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addStudent.map((stu,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.address}</td>
                                    <td>{stu.contact}</td>
                                    <td>{stu.aNumber}</td>
                                    <td>
                                        <button>Delete </button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Student;