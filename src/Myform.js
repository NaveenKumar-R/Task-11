import React, { Component } from "react";

class Myform extends Component{
   constructor(){
       super();
       this.state={
           title : "GUVI CRUD App",
           employeeData : [],
           act : 0,
           index : ''
       }
   }
   
   handleSubmit= (e) =>{
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.empName.value;
    let empid = this.refs.empId.value;
    let email = this.refs.empEmail.value;

    if(this.state.act === 0){
        let newEmployee ={
            "name" : name,
            "empid" :empid,
            "email" : email
        }
        employeeData.push(newEmployee);
    }

    else{
        let index = this.state.index;
        employeeData[index].name = name;
        employeeData[index].empid = empid;
        employeeData[index].email = email;
    }
    

    this.setState({
        employeeData : employeeData,
        act : 0
    })

    this.refs.myForm.reset();

   }


   handleEdit= (i) =>{
        let employeeData = this.state.employeeData[i];
        this.refs.empName.value = employeeData.name;
        this.refs.empId.value = employeeData.empid;
        this.refs.empEmail.value = employeeData.email;

        this.setState({
            employeeData : employeeData,
            act : 1,
            index : i
        });
   }

   handleDelete= (i) =>{
       let employeeData = this.state.employeeData;
       employeeData.splice(i,1);
       this.setState({
           employeeData : employeeData
       });
   }
   
    render(){
        let employeeData = this.state.employeeData;
       return(
           <>
           <h1>{this.state.title}</h1>
             <form ref="myForm" className="ui form">
               <div className="fields">
                   <div className="four wide field">
                        <label>Name</label>
                        <input type="text" ref="empName" name= "full_name" placeholder="Full Name" />
                   </div>

                   <div className="four wide field">
                        <label>Emp Id</label>
                        <input type="text" ref="empId" name= "emp_id" placeholder="1234" />
                   </div>

                   <div className="four wide field">
                        <label>E-mail</label>
                        <input type="email" ref="empEmail" name= "email" placeholder="guvi@gmail.com" />
                   </div>

                   <div className="four wide field">
                        <button className="ui primary button submit-button" onClick={e => this.handleSubmit(e) }>Save</button> 
                   </div>
               </div>
             </form>
             <div className="data">
              <table className="ui celled table">
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Emp Id</th>
                       <th>Email</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       employeeData.map((data, i)=> 
                       <tr key={i}>
                           <td>{data.name}</td>
                           <td>{data.empid}</td>
                           <td>{data.email}</td>
                           <td>
                    <button className="mini ui blue button" onClick={i => this.handleEdit(i)}>Edit</button>
                    <button className="mini ui red button" onClick={i => this.handleDelete(i)}>Delete</button>
                </td>
                       </tr>)
                   }
               </tbody>
             </table>
            </div>
           </>
       );
    }
}

export default Myform;