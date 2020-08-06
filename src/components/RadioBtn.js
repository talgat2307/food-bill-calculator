import React from 'react'

const RadioBtn = (props) => {
  return (
    <div className='Select'>
      <p>Сумма заказа считается</p>
      <label className='radio'>
        <input
          type="radio"
          name='value'
          onChange={props.changeRadio}
          checked={props.check.first}
        />
        Поровну между всеми участниками
      </label>
      <label className='radio'>
        <input
          type="radio"
          name='value'
          onChange={props.changeRadio}
          checked={props.check.second}
        />
        Каждому индивидуально
      </label>
    </div>
  )
}

export default RadioBtn