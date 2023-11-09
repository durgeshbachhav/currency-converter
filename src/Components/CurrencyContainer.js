import './CurrencyContainer.css';

import React from 'react'
import CurrencyOptions from './CurrencyOptions';
import { FcCurrencyExchange } from 'react-icons/fc'

const CurrencyContainer = () => {
  return (
    <div className='main-container'>
     <h4><FcCurrencyExchange /> Currency converter</h4>
     <CurrencyOptions /> 
    </div>
  )
}

export default CurrencyContainer