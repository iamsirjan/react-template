import styled from "styled-components"
import {GrNotification} from 'react-icons/gr'
const Topbar = () => {
    return (
        <Wrapper>
               <div className="topbar-items">
               <img height="20" width="30" src="/flag.png" />
               <GrNotification  style={{fontSize:'20px'}}/>
                 
                <img style={{borderRadius:'100%'}} height="30" width="30" src="/avatar.png" />
               
               
               </div>
        </Wrapper>
    )
}

export default Topbar

const Wrapper = styled.div `
background:#fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width:100;
height:60px;
display:flex;
align-items:center;
justify-content:end;
.topbar-items {
    margin:10px;
    display:flex;
    flex:0.1;
    align-items:center;
    justify-content:space-between;

}





`