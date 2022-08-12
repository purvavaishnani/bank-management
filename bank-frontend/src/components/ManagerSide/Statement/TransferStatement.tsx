import { useContext, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AuthContext, { AuthContextType } from "../../../context/AuthContext";
import AddTransferFundForm from "./AddTransferFundForm";
import Table from 'react-bootstrap/Table';

type onTransferProps={
};

type statementProps = {
    transactionAmount: number;
    toAccount: any;
    transactionDate: string;
}

const FundStatement = (props: onTransferProps) => {

    const [activity, setActivity] = useState('');
    const [accNo, setAccNo] = useState('');
    const [statement,setStatement] = useState([]);

    const handleWithdraw = async (accNo: string) => {
        try {
            const response = await axios.get(
                "http://localhost:9092/api/manager/miniStatement/?accNo=" +accNo
            );
            // if (response.status == 200 && response.data) {
            setStatement(response.data);
            console.log(response.data);
            } catch (err: any) {
            toast("Something wrong. Please try again.")
            }
    };


    return (
        <div className='page-style'>
            
            <AddTransferFundForm onTransferFund={handleWithdraw}></AddTransferFundForm> 
            <Table style={{border:"3px"}}>
                <tr>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                From Account
                            </th>
                            <th>
                                To Account
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        
                            {statement.map((data: any) => (
                                // setAccNo({data.fromAccount});
                                <tr>
                                <td>{data.toAccount.accHolderName}</td>
                                <td>{data.transactionDate}</td>
                                <td>{data.transactionAmount}</td>
                                <td>{data.transactionType}</td>
                                {/* <td>{data.fromAccount}</td> */}
                                <td>{data.toAccount.accNumber}</td>
                                </tr>
                            // <label style={{color:"blue",fontSize:"24px",fontFamily:"monospace",textAlign:"center"}}>{data.transactionAmount}</label>
                            ))}                                                              
                    </tbody>
                </tr>
            </Table>
        </div>
    );
}

export default FundStatement;