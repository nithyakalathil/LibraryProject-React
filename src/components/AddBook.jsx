import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {

const [data,changedata]=useState(
    {
        "name":"",
        "Category":"",
        "year":"",
        "AuthorName":"",
        "Description":"",
        "Name":"",
        "pName":"",
        "price":"",
        "Edition":"",
    }
)

const inputHolder=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)

    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") 
                {
                    alert("successfully added")
                
            } else {
                alert("error")
                
            }
        }
    ).catch(
        (error)=>(alert(error.message))
    )

}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Booktitle</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Category</label>
    <select name="Category" id="" className="form-control" value={data.Category} onChange={inputHolder} >
        <option value="Biography">Biography</option>
        <option value="Auto Biography">Auto Biography</option>
        <option value="Fiction">Fiction</option>
        <option value="size">size</option>
    </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Published Year</label>
    <input type="text" className="form-control" name="year" value={data.year} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Author Name</label>
    <input type="text" className="form-control" name='AuthorName' value={data.AuthorName} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Description</label>
    <textarea name="Description" id="" className="form-control" value={data.Description} onChange={inputHolder}></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Destributer Name</label>
    <input type="text" className="form-control" name='Name' value={data.Name} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Publisher Name</label>
    <input type="text" className="form-control" name='pName' value={data.pName} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Price</label>
    <input type="text" className="form-control" name='price' value={data.price} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Edition</label>
    <input type="text" className="form-control" name='Edition' value={data.Edition} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success" onClick={readValue}>Signin</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddBook