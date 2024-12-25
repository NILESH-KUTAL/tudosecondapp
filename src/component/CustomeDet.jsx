import { useState } from "react";

const CustomeDet = ()=>{

      const [custname,setcustname] = useState('')
      const [errorCust,seterrorCust] = useState('')

      const [productname,setproduct] = useState('')
      const [errorProd,seterrorProd] = useState('')

      const [proprice,setproprice] = useState('')
      const [errorprice,seterrorprice] = useState('')

    const [editId,setEditId] = useState(null)

      const [todo,settodo] = useState([])

      const custName=(event)=>{
        const cust_name = event.target.value
        setcustname(cust_name)
              
        const name_pattern = /[A-Z][a-z\s]+$/.test(cust_name)

        if(!name_pattern)
        {
            seterrorCust('First Letter Captial Uppercase lowercase And space')
        }
        else
        {
            seterrorCust('Name Is Valid')
        }
        // seterrorCust('')


      }

      const productName=(event)=>{
        const pro_name = event.target.value
        setproduct(pro_name)

        const product_pattern = /^[A-Za-z\d\s]+$/.test(pro_name)

        if(!product_pattern)
        {
            seterrorProd('Only Alphabet And Number')
        }

        else
        {
            seterrorProd('Product Valid')
        }
        
      }

      const productPrice=(event)=>{
        const pro_price = event.target.value
        setproprice(pro_price)

        const price_pattern = /\d/.test(pro_price)


        if(!price_pattern){
            seterrorprice('Only Number')
        }else{
            seterrorprice('Price is valid')
        }
    }

        
    const deleteCust=(index)=>{
         
        const DeleteData = [...todo]

        DeleteData.splice(index,1)

        settodo(DeleteData)

        alert('As You Sure Delete Data')
         

    }

    const editCust = (item)=>{
           setcustname(item.custname)
            setproduct(item.productname)
            setproprice(item.proprice)
            setEditId(item.id)
    }
    // const addProduct = () => {
    //     if (
    //       errorcustname === "Valid name" &&
    //       errorproduct === "Valid name" &&
    //       errorprice === "Valid Input" &&
    //       custname.trim() &&
    //       product.trim() &&
    //       price.trim()
    //     ) {
   

      const addProductHandler=()=>{
        if(
            errorCust === 'Name Is Valid' &&
            custname.trim() && productname.trim() && proprice.trim() )
        {
            const today = new Date()
            const currentDate = today.toLocaleDateString();
            const currentTime = today.toLocaleTimeString();
            const date_time = ` ${currentDate} ${currentTime} `


            if(editId)
            {
                settodo((oldData)=>
                oldData.map((item)=>{
                    return item.id === editId ? {...item , custname , productname , proprice , date : date_time} : item
                })
            )
                setEditId(null)
        }else
        {
            settodo([...todo, {id : Date.now(), custname , productname , proprice , date : date_time }])
                
        }


             // After click on button the form filed cleared

             setcustname('')
             setproduct('')
             setproprice('');
             
             seterrorCust('')
             seterrorProd('')
             seterrorprice('')


        }
        else
        {
            alert('All Filed Required')
        }
        
      }

      const printCustDetails=(cust)=>{

        const printdata= window.open("","", "width=800, height=600")
    printdata.document.write(`<html><head><title>Print Customer</title></head><body>`)

    printdata.document.write(`
            <h2>Customer Detalis</h2>
            <h3>Recipt Number : ${cust.id}</h3>
            <h3>Name : ${cust.custname}</h3>
            <h3>Product Name : ${cust.productname}</h3>
            <h3>Product Price : ${cust.proprice}</h3>
            <h3>Date And Time  : ${cust.date}</h3>
            <h3>Thank You !!! Visit Again</h3>
        `)

        printdata.document.write(`</body></html>`)
        printdata.print()
        printdata.close()


      }




    return(
        <div>
        <h2>Customer Details</h2>
        <div className="w-50 bg-dark p-4 mx-auto rounded-3">
            <div>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Name"
                    value={custname}
                    onChange={custName}
                />
                <span style={{color : errorCust === 'Name Is Valid' ? 'white' : 'red'}}>{errorCust}</span>
            </div>
            <div>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Product"
                    value={productname}
                    onChange={productName}
                />
                <span style={{color : errorProd === 'Product Valid' ? 'white' : 'red'}}>{errorProd}</span>
            </div>
            <div>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Product Price"
                    value={proprice}
                    onChange={productPrice}
                />
                <span style={{color : errorprice === 'Price is valid' ? 'white' : 'red'}}>{errorprice}</span>

            </div>
            <button className="btn btn-success w-100" onClick={addProductHandler }>
                {editId ? "Update" : "Submit" }
            </button>
        </div>
        <div id="printSection" className="w-75 mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Receipt No</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date and Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.custname}</td>
                                    <td>{item.productname}</td>
                                    <td>{item.proprice}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className="btn btn-primary me-1" onClick={()=>printCustDetails(item)}>
                                            Print
                                        </button>
                                        <button className="btn btn-warning me-1" onClick={()=>editCust(item)}>Edit </button>
                                        <button className="btn btn-danger" onClick={deleteCust}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};


export default CustomeDet;

   