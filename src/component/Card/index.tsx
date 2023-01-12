import {Button, Card} from 'react-bootstrap';
import styled from 'styled-components';

type cardprops  = {
   count:number;
   title:string;
   bgcolor:string;
   icon: JSX.Element;
}
function Cards({item}:{item:cardprops}) {

   
  return (
      <Wrapper bgcolor={item.bgcolor}>
              <div className="card-icon">
               {item.icon}
       </div>
      <div>
      
       <h2 className="card-count">{item.count}</h2>
       <p className="card-title">{item.title}</p>
      </div>
    </Wrapper>

  );
}

export default Cards;

interface cardstyleprops {
    bgcolor: string;
  }

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
background:${(props:cardstyleprops) => props.bgcolor};
padding:10px;
border-radius:6px;
flex-grow:1;
margin:10px;


.icon path {
    stroke: #fff; 
}

.card-count {
      color:#fff;
}
.card-title {
      color:#fff;
}

`