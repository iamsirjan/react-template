import React from 'react'
import styled from 'styled-components'
import Dashboard from '../../pages/dashboard'
import {Routes, Route } from "react-router-dom";
function AppContent() {
  return (
    <Wrapper>
       
         <Routes>
         <Route path='/dashboard'  element={<Dashboard/>} />
           </Routes>
    </Wrapper>
  )
}

export default AppContent

const Wrapper = styled.div`
background:#f7f7f7;
padding:30px;
height:98%;

`