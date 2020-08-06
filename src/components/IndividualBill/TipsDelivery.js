import React from 'react'

const TipsDelivery = (props) => {
  return (
    <div>
      <div className='Input'>
        <p className='p3'>Процент чаевых:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.tipsDelivery.tip}
                 onChange={props.addOneTip}
          /> %
        </label>
      </div>
      <div className='Input'>
        <p className='p4'>Доставка:</p>
        <label>
          <input type="text"
                 className='input'
                 value={props.tipsDelivery.deliver}
                 onChange={props.addOneDelivery}
          /> сом
        </label>
      </div>
    </div>
  )
}

export default TipsDelivery