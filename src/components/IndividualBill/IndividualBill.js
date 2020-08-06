import React from 'react'

const IndividualBill = (props) => {
  return (
    <div className='IndividualBill'>
      <label>
        <input
          type="text"
          value={props.oneBill.person}
          onChange={props.nameChange}
          placeholder={'name'}/>
        <input
          style={{width: '60px', margin: '10px'}}
          type="text"
          value={props.oneBill.price}
          onChange={props.priceChange}
          placeholder={'price'}
        />
        сом
        <button
          style={{marginLeft: '20px'}} onClick={props.removePerson}>X</button>
      </label>
    </div>
  )
}

export default IndividualBill