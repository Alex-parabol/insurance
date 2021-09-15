import "../src/index.css";
import styled from '@emotion/styled'
import React, {useState} from 'react'
import Header from './components/header'
import Form from './components/Form'
import Information from './components/Information'
import Result from './components/Result'
import Spinner from './components/Spinner/Spinner'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const FormContainer =  styled.div`
  background-color: #FFF;
  padding:3rem;
`


function App() {

  const [ information, setInformation ] = useState({
    price: 0,
    data: {
      brand:'',
      year: '',
      plan: ''
    }
  })
  const [ loading, setLoading ] = useState(false)

  const { price, data } = information
  

  return (
    <Container>
      <Header
      title='Insurance Pricer'
    />
      <FormContainer>
        <Form 
          setInformation={setInformation}
          setLoading={setLoading}
        />
        {loading ? <Spinner/> : null}
       
        <Information
          data={data}
        />
        { !loading ?
        <Result
          price={price}
      />  :
      null }
       
      </FormContainer>
    </Container>
    
  );
}

export default App;
