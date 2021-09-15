import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtainGapYears, obtainBrandPrice , planPrice} from '../helper'

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

`;

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display:block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #d8d8d8;
    --webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    font-weight: bold;
    border:none;
    transition: background-color 0.7s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #09c8da;
    }
`

const Error = styled.div`
    color: #ffffffd4;
    background-color: #d11d1d83;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 97%;
    text-align: center
`

const Form = ({setInformation, setLoading}) => {

    const [ data, setData ]= useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [ error, setError ] = useState(false);

    //we extract the values from the state

    const { brand, year, plan } = data;

    // Read form data and we keep it in the state

    const ObtainInfo = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // when the user submits the form

    const handleSubmit = e => {
        e.preventDefault();
        if(brand === '' || year === '' || plan === ''){
            setError(true);
            return;
        } else {
            setError(false);
        }

        //base price

        let price = 2000

        //obtain the difference for each year
        const difference = obtainGapYears(year)

       

        // we take off 3% for each year

        price = price - ((difference * 3) * price)/100
       

        // 
         price = obtainBrandPrice(brand) * price

        // basic plan 20%
        // complete 50%

        price = (price * planPrice(plan)).toFixed(2)
        
        //We move the info to App
        setLoading(true)
        
        setTimeout(()=>{
            setLoading(false)
           setInformation({
            price : price,
            data
        })
        },2000)

         
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error>All fields must be filled</Error> :  null}
            <Field>
                <Label>Brand</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={ObtainInfo}
                >
                    <option value="">--Select--</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                     name='year'
                     value={year}
                     onChange={ObtainInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                </Select>
            </Field>
            <Field>
                    <Label>Plan</Label>
                    <InputRadio 
                            type="radio"
                            name="plan"
                            value="basic"
                            checked={plan === 'basic'}
                            onChange={ObtainInfo}
                    /> Basic
                    <InputRadio 
                            type="radio"
                            name="plan"
                            value="complete"
                            checked={plan === 'complete'}
                            onChange={ObtainInfo}
                    /> Complete
                </Field>
            <Button type="submit">PRICE</Button>
        </form>
    );
}

export default Form