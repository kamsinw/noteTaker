import React,{useState} from 'react'
import './sidebar.css';

const sidebar = () =>{
   
    const clickhandler = () =>{
        console.log("clicked")
    }
    return(
        
        <div className = "border">
            <div>
              <form className = "formGroup" >
                <input type="file" className = 'form-control' required  />
                <button type = "submit" className = "uplBtn">
                        UPLOAD
                </button>
              </form>
            </div>
        </div>
    );
};
export default sidebar;