import React from 'react'
import styled from '@emotion/styled'
import {firstLetterMayus} from '../helper'

const InformationContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;

`

const Information = ({data}) => {

    const {brand, year, plan } = data;
        if(brand === ''|| year === '' || plan === ''){
                return null
                } 

                
    return (
        <InformationContainer>
          <h2>Summary of payment</h2>
          <ul>
              <li>Brand: {firstLetterMayus(brand)}</li>
              <li>Year: {year}</li>
              <li>Plan: {firstLetterMayus(plan)}</li>
          </ul>
          </InformationContainer>
    );
}

export default Information