import React from 'react'

const TotalBill = (props) => {
  return (
    <>
      <div className='Input'>
        <p className='p1'>Человек:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.total.person}
                 onChange={props.addPerson}
          /> чел
        </label>
      </div>
      <div className='Input'>
        <p className='p2'>Сумма заказа:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.total.orderSum}
                 onChange={props.addOrderSum}
          /> сом
        </label>
      </div>
      <div className='Input'>
        <p className='p3'>Процент чаевых:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.total.tips}
                 onChange={props.addTips}
          /> %
        </label>
      </div>
      <div className='Input'>
        <p className='p4'>Доставка:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.total.delivery}
                 onChange={props.addDelivery}
          /> сом
        </label>
      </div>
    </>
  )
}

export default TotalBill