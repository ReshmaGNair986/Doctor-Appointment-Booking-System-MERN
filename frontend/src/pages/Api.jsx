import React, { useState } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const Api = () => {
    var[user,setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
    console.log(res.data)
    setuser(res.data)
    
   })
  return (
    <div>
        <TableContainer>   
            <Table>
                <TableHead>
                
                    <TableBody>
                        {user.map((val)=>{
                            return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell> &nbsp; &nbsp;
                        <TableCell>{val.age}</TableCell> &nbsp; &nbsp;
                           <TableCell>{val.doctorname}</TableCell> &nbsp; &nbsp;
                        <TableCell>{val.date}</TableCell> &nbsp; &nbsp;
                         <TableCell>{val.time}</TableCell> &nbsp; &nbsp;
                    </TableRow>
                            )
                        })}
                    </TableBody>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api