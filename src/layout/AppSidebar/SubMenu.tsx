import React, { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
 
const SidebarLink = styled.div`

  
  .navlink {
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  color:gray;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  margin:5px;
  }
 
 

`;
 
const SidebarLabel = styled.span`
  margin-left: 16px;
  
  @media (max-width: 768px) {
    display: none;
  }

`;
 
const DropdownLink = styled(NavLink)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  // text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
 
 
  &:hover {
    background: green;
    cursor: pointer;
  }
`;
 

const Menudrop = styled.div`
@media (max-width: 768px) {
  display: none;
}
`
const Wrapper = styled.div`
 .activeClassName {
    color:red !important;
.inactiveClassName {
  color:gray;
}
`

type itemtype  = {
    path: string;
    subNav:Array<
    submenutype
    > ;
    title: string;
    icon:JSX.Element;
    iconOpened: JSX.Element;
    iconClosed: JSX.Element;

}
interface submenutype  {
  path:string;
  title:string;
  icon:JSX.Element;
  cName: string;
}




const SubMenu= ( {item}:{item:itemtype} ) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav);

  let activeStyle = {
        background: "#252831",
    cursor: "pointer",
    color:"#fff",
    borderRadius:'6px'
  
  };
  return (
    <>
<SidebarLink>
 
  <NavLink 
  className="navlink"
     style={({ isActive }) =>
     isActive ? activeStyle : undefined
   } 
    to={item.path}
    onClick={item.subNav && showSubnav}
    >
      
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <Menudrop>
          {item.subNav && subnav
           ?  item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </Menudrop>

      </NavLink>
      </SidebarLink>

     
      {subnav &&
        item.subNav.map((subitem:submenutype, index:number) => {
          return (
            <DropdownLink to={subitem.path} key={index}>
              {subitem.icon}
              <SidebarLabel>{subitem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
 
export default SubMenu;