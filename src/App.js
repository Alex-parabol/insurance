import "../src/index.css";
import styled from '@emotion/styled'
import React from 'react'
import Header from './components/header'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const FormContainer =  styled.div`
  background-color: #FFF;
  padding:3rem;
`
function App() {
  return (
    <Container>
      <Header
      title='Insurance quote'
    />
      <FormContainer>
        
      </FormContainer>
    </Container>
    
  );
}

export default App;
