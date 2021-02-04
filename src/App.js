import React from 'react';
import './App.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Category from './Category';

function App() {
  return (
    <>
      <div className="appHeader">
           <ArrowBackIcon /> 
          <h1>Categories</h1>
      </div>
      <div className="categories">
          <Category 
              image="https://img.pngio.com/business-woman-transparent-png-stickpng-business-woman-png-230_352.png"
              title="Women"
          />
          <Category 
              image="https://lh3.googleusercontent.com/proxy/XA0R-ZTzy2d_4g1i9ilU0f6bgRfQFIh2LS4HwYONw24-V5d8wnTHHOm6U0LJOgrZzdo4Oqx8YL5xch6NEa8AIDWyGp5KRLWv8-rjIr3AnHA7tR0VKGwQ"
              title="Men"
          />
          <Category 
              image="https://lh3.googleusercontent.com/proxy/0c3PD8u_7FlSrGMQOK8oJR1BTbQkal207hkvNSw8ZOpxnp7eyW3zYxmQPcdnNe3UP6dhb8nqWSy4SDnV7Oi1w_iDL4WnTJ1rrN9lT23Mtizga1m7qcPB7B40BKG8uKMgbL0QkZ_U15hjok5nCFKe-PhdgDcMNj6uQtlbjDA-fmnEDVhDHA"
              title="Kids"
          />
          <Category 
              image="https://www.freeiconspng.com/uploads/fashion-model-png-af-fashion-model-18.png"
              title="New Collection"
          />
      </div>
    </>
  );
}

export default App;