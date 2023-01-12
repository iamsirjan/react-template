import React, { useEffect } from "react"
import Cards from "../../component/Card"
import { FiUser } from 'react-icons/fi';
import styled from "styled-components";
import FormComponent from "../../component/Form";
import AddUser from "../AddUser";
import UserList from "../UserList";
import { useDispatch } from "react-redux";
import actions from "../../redux/userRedux/action";
import { useSelector } from "react-redux";

const Dashboard =  () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUsers())
    },[])
  
    const user:any = useSelector((state) => state)
    const userarr = user.user
    const data = [
        {
            title:'Total Users',
            count:userarr.allUsers.length,
            icon:<FiUser size={40} color='#fff' />,
            bgcolor:'#D68910'
        },
        {
            title:'New Users',
            count:userarr.newUsers.length ,

            icon:<FiUser size={40} color='#fff' />,
            bgcolor:'#D68910'

        }, 
        {
            title:'hello',
            count:4,
            icon:<FiUser size={40} color='#fff' />,
            bgcolor:'#D68910'

        }
    ]

    return (
        <Wrapper>
             <div className="dashboard-card">
        {data?.map((data,i) => (
           
       <Cards key={i} item={data} />
        ))}
       </div>
       <div className="form">
          <AddUser />
       </div>
        <div className="table">
            <UserList />
        </div>
        </Wrapper>
    )
}

export default Dashboard


const Wrapper = styled.div`
.dashboard-card {
    display:flex;
}
.form, .table {
    padding:10px;
    margin:10px;
    border-radius:6px;
    background:#fff;
    margin-top:50px;

}
.form-bottom-group {
    display:flex;
    justify-content:flex-end;
    
    
}
`