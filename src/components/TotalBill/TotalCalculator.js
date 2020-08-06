import React, { useState } from 'react'

const TotalCalculator = (props) => {
  const [bill, setBill] = useState(false);

  const showBill = () => {
    if(bill === true) {
      return (
        <div className='bill'>
          <p>Общая сумма: <strong>{props.totalSum}</strong> сом</p>
          <p>Количество человек: <strong>{props.personAmount}</strong></p>
          <p>Каждый платит по: <strong>{props.eachBill}</strong> сом</p>
        </div>
      );
    }
  };

  return (
    <div className='Bill'>
      <button onClick={() => setBill(true)}>Расчитать</button>
      {showBill()}
    </div>
  )
}

export default TotalCalculator