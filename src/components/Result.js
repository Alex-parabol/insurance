import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Advice = styled.p`
    background-color: rgb(127, 224, 237);
    padding: 1rem;
    color: #fff;
    text-align:center;
`
const Cost = styled.p`
    padding: 1rem;
    text-align: center;
    background-color: #08585f;
    color: #fff;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin:0;
    border-top: 1px solid #fff;
`

const Result = ({price}) => {

    return (
        (price === 0) ? <Advice>Please, choose a brand, year and plan.</Advice>
         :
         <TransitionGroup
            component='span'
            className='result'
         >
             <CSSTransition
                classNames='result'
                key={price}
                timeout={{enter:300, exit: 300}}
             >
                <Cost>Your total is: <span>{price}€</span></Cost> 
             </CSSTransition>
         </TransitionGroup>
          
    );
}

export default Result