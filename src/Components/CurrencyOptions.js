import "./CurrencyOptions.css"

import React, { useEffect, useState } from 'react'

const CurrencyOptions = () => {

     const defaultFirstSelectValue = "USD"

     const [inputvalue, setinputvalue] = useState(0);
     const [data, setdata] = useState([]);
     const [selectcurrency, setselectedcurrency] = useState()


     useEffect(() => {
          const fetchdata = async () => {
               try {
                    const response = await fetch("https://open.er-api.com/v6/latest/USD")
                    const jsondata = await response.json();
                    setdata(jsondata.rates)

               } catch (error) {
                    console.log('Error:', error);
               }
          }
          fetchdata();
     }, [])

     const handleSelectChange = (e) => {
          setselectedcurrency(e.target.value);
     }
     const result = (data[selectcurrency] * inputvalue).toFixed(2)
     return (
          <div>
               <div className="currency-options">
                    <select onChange={handleSelectChange} value={selectcurrency}>
                         <option value="">Select a currency</option>
                         {Object.keys(data).map(key => (
                              <option key={key} value={key}>
                                   {key}
                              </option>
                         ))}
                    </select>
                    <input type="number" placeholder='enter USD' onChange={(e) => { setinputvalue(e.target.value) }} />
               </div>
               <div className="result">

                    {isNaN(result) ? (
                         <span>please select a USD</span>
                    ) : (
                         <span>USD amount in {selectcurrency} is {result}</span>
                    )}

               </div>
          </div>
     )
}

export default CurrencyOptions