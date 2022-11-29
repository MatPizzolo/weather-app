import React from 'react';
import Form from './Components/Form/Form';

import bckImage from './assets/cartoon.jpeg'

const App = () => {
    return(
    <>
      <img src={bckImage} style={styles.imagen}/>
            <Form /> 
      
    </>    
    )
}

const styles = {
  imagen: {
    
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }}

export default App;