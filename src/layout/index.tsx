import styled from "styled-components";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import Sidebar from "./AppSidebar";
import Topbar from "./AppTopbar";

const Layout = () => {
    return (
        <Wrapper>
          <Sidebar/>
             <div className="d-flex topbar flex-column min-vh-100 ">
    <Topbar />
    <div className="flex-grow-1  content ">
      <AppContent />
    </div>
    <AppFooter />
  </div>
        </Wrapper>  
    )
  
}


export default Layout


const Wrapper = styled.div`
  display:flex;

  .topbar {
    width:100%;
  }
  .content {}
  
`;