import React, { useState } from 'react'

const IndividualCalculator = (props) => {
  const [bill, setBill] = useState(false);

  const showBill = () => {
    if(bill === true) {
      return (
        <div>
          <div>Общая сумма: <strong>{props.totalBill}</strong> сом</div>
          <div>{props.name} <strong>{props.price}</strong></div>
        </div>
      );
    }
  };

  return (
    <div>
      <button
        style={{marginBottom: '20px'}}
        onClick={() => setBill(true)}>Расчитать</button>
      {showBill()}
    </div>
  )
}

export default IndividualCalculator;