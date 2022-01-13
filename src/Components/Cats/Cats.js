import React from 'react';
import CatIndex from './CatIndex'
import { Container } from 'reactstrap';
 
const Cats = () => {
   return (
     <Container className="App">
       <br/>
       <CatIndex />
     </Container>
   );

}
 
export default Cats;