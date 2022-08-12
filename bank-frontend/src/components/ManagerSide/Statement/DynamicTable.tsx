import { useContext, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AuthContext, { AuthContextType } from "../../../context/AuthContext";
import AddTransferFundForm from "./AddTransferFundForm";

type onTransferProps={
    myData: Array<any>;
};

const DynamicTable = (props: onTransferProps) => {

// get table column
//  const column = Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
    //  return column.map((data)=>{
    //      return <th key={data}>{data}</th>
    //  })
 }

// get table row data
const tdData =() =>{
   
    //  return TableData.map((data)=>{
    //    return(
    //        <tr>
    //             {
    //                column.map((v)=>{
    //                    return <td>{data[v]}</td>
    //                })
    //             }
    //        </tr>
    //    )
    //  })
}


  return (
      <table className="table">
        <thead>
         {/* <tr>{ThData()}</tr> */}
        </thead>
        <tbody>
        {/* {tdData()} */}
        </tbody>
       </table>
  )
}
export default DynamicTable;