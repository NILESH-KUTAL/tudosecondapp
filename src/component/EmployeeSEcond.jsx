import { useState } from "react";

const EmployeeSECond = ()=>{

    const [name,setname] = useState('')
    const [nameerror,setNameError] = useState('')


    const [contact,setcontact] = useState('')
    const [contacterror,setcontacterror] = useState('')


    const [city,setcity] = useState('')
    const [cityerror,setcityerror] = useState('')


    const [email,setemail] = useState('')
    const [emailerror,setemailerror] = useState('')


    const [company,setcompany] = useState('')
    const [companyerror,setcompanyerror] = useState('')


    const [role,setrole] = useState('')
    // const [roleerror,setroleerror] =useState('')


    const [todo,settodo] = useState([])

    const [editId,setEditId] = useState(null)
      
       const empName=(event)=>{
        const emp_name = event.target.value
        setname(emp_name)

        const name_pattern = /^[A-Za-z\s]+$/.test(emp_name)

        if(!name_pattern)
        {
            setNameError('Only Letter Uppercase & Lowecase And Always First letter Capital')

        }
        else
        {
            setNameError('Name Valid')
        }

       } 
       
       const empContact=(event)=>{
        const emp_contact = event.target.value
        setcontact(emp_contact)

        const contact_pattern = /^\d+$/.test(emp_contact) // /^\d+$/
        // const contact_length = emp_contact > 10 

        if(!contact_pattern)
        {
            setcontacterror('Only Number')
        }
        // else if(contact_length)
        // {
        //       setcontacterror('Minimum 10 Numbers')
        // }
        else
        {
            setcontacterror('Mobile Number Valid')
        }
        
       } 

       const empCity=(event)=>{
        const emp_city = event.target.value
        setcity(emp_city)

        const city_pattern = /^[A-Za-z\s]+$/.test(emp_city)

        if(!city_pattern)
        {
            setcityerror('Only Letters')
        }
        else
        {
            setcityerror('City Valid')
        }
        
       } 

       const empEmail=(event)=>{
        const emp_email = event.target.value
        setemail(emp_email)

       const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emp_email)

       if(!email_pattern)
       {
        setemailerror('Email Include Number And @ Char')
       }
       else
       {
        setemailerror('Email Valid')
       }
        
       } 

       const empCompany=(event)=>{
        const emp_company = event.target.value
        setcompany(emp_company)

        const company_pattern = /^[A-Za-z\d\s]+$/.test(emp_company)

        if(!company_pattern)
        {
            setcompanyerror('Letter & Digit')
        }
        else
        {
            setcompanyerror('Company Valid')
        }
        
       } 

       const empRole=(event)=>{
        const emp_role = event.target.value
        setrole(emp_role)

        
       } 
       

       const handlerData=()=>{
         
           if(
            // nameerror === 'Name Valid' &&     emailerror === 'Email Valid' && 
           nameerror === 'Name Valid' &&
            emailerror === 'Email Valid' &&
            contacterror === 'Mobile Number Valid' &&
            cityerror === 'City Valid' &&
            companyerror === 'Company Valid' &&
           
          
            
             name.trim() &&
             contact.trim() && 
             city.trim() && 
             email.trim() &&
              company.trim() && role.trim())
            
           {
               
            if(editId)
            {
                settodo((oldData)=>
                    oldData.map((item)=>{
                    return item.id === editId ? {...item ,name , contact , city , email , company , role } : item 
                })
            )
            setEditId(null)
            }
            else
            {
                settodo([...todo , {id : Date.now() , name , contact , city , email , company , role }])
                  
            }



                  setname('')
                  setcontact('')
                  setcity('')
                  setemail('')
                  setcompany('')
                  setrole('')

                  setNameError('')
                  setcontacterror('')
                  setcityerror('')
                  setemailerror('')
                  setcompanyerror('')
           }
           else
           {
            alert('All Filed Required & Check Your Data');
           }
       }
       const deleteStudent= (index)=>{
           
        const delete_stu = [...todo]
        delete_stu.splice(index,1)

        settodo(delete_stu)

        alert ('Data DEleted')
    }

    const editEmp =(item)=>{
        setname(item.name)
        setcontact(item.contact)
        setcity(item.city)
        setemail(item.email)
        setcompany(item.company)
        setrole(item.role)
        setEditId(item.id)
       
    }





   return(
    <div>

    <div className="w-50 mx-auto bg-warning m-5 p-3 rounded">
    <h2><b className="text-danger ta-center mx-auto p-3">Employee Imformation Form In React.Js</b></h2>

        <div>
        <input className="form-control mb-3" name="name" placeholder="Enter Your Name" value={name} onChange={empName} />
        <span style={{color : nameerror === 'Name Valid' ? 'white' : 'red' }} className="font-monospace">{nameerror}</span>
        </div>
        <div>
        <input className="form-control mb-3" name="contact" placeholder="Enter Your Contact" value={contact} onChange={empContact}/>
        <span style={{color : contacterror === 'Mobile Number Valid' ? 'white' : 'red' }}>{contacterror}</span>
        </div>
        <div>
        <input className="form-control mb-3" name="city" placeholder="Enter Your City" value={city} onChange={empCity}/>
        <span style={{color : cityerror === 'City Valid' ? 'white' : 'red' }}>{cityerror}</span>

        </div>
        <div>
        <input className="form-control mb-3" name="email" placeholder="Enter Your Email" value={email} onChange={empEmail}/>
        <span style={{color : emailerror === 'Email Valid' ? 'white' : 'red'}}>{emailerror}</span>
        </div>
        <div>
        <input className="form-control mb-3" name="company" placeholder="Enter Your Company" value={company} onChange={empCompany}/>
        <span style={{color: companyerror === 'Company Valid' ? 'white' : 'red'}}>{companyerror}</span>
        </div>
        <div>

        <select className="form-control" name="role" value={role} onChange={empRole}>
            <option value="">Select A Role</option>
            <option value='Mern Stack'>Mern Stack</option>
            <option value='React'>React</option>
            <option value='Angular'>Angular</option>
            <option value='Java'>Java</option>
            <option value='Python'>Pyhton</option>
        </select>
        {/* <span style={{color : roleerror === 'Role Valid' ? 'white' : 'red'}}>{roleerror}</span> */}
        </div>
        <div>
            <button className="btn btn-success mx-auto mr-5 mt-3 w-50 p-2" onClick={handlerData}>
                {editId ? "Update employee" : "Add Employee" }
            </button>
        </div>
    </div>
              <h2> <b className="text-danger">Employee Imformation Table</b></h2>
    <table className="table table-dark mt-3">
        <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Contact</th>
                <th>City</th>
                <th>Email</th>
                <th>Company</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                todo.map((emp,index)=>{
                         return(
                            <tr>
                                {/* <td>{emp.id}</td> */}
                                <td>{index + 1}</td>
                                <td>{emp.name}</td>
                                <td>{emp.contact}</td>
                                <td>{emp.city}</td>
                                <td>{emp.email}</td>
                                <td>{emp.company}</td>
                                <td>{emp.role}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={deleteStudent}>Delete</button>
                                    <button className="btn btn-warning ms-2" onClick={()=>editEmp(emp)}>Edit</button>
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

    

export default EmployeeSECond;