import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import actions from '../../redux/userRedux/action'
import { UserProps } from '../types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';



function UserList() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(actions.getUsers())
    },[])
    const user:any = useSelector((state) => state)
     
    const handleDelete = (id:number) => {
      dispatch(actions.deleteUsers(id))
    }
  return (
    <div>
     <Table >
      <thead>
        <tr>
        
         
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Company Name </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {
            user.user.allUsers?.map((data:UserProps,i:number) => (

              
        <tr key={i}>
         
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.address.city}</td>
          <td>{data.phone}</td>
          <td>{data.company.name} </td>
        <td >
          <AiFillDelete onClick={() => handleDelete(data.id)} cursor="pointer" color="#D68910" size={22} />
          <AiFillEdit cursor="pointer" style={{marginLeft:'5px'}} color="#AA336A" size={22} />
        </td>

        </tr>
        ))  
    }
      
      
      </tbody>
    </Table>
    </div>
  )
}

export default UserList
