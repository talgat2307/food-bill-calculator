import React, { useState } from 'react'
import './App.css';
import RadioBtn from './components/RadioBtn'
import TotalBill from './components/TotalBill/TotalBill'
import TotalCalculator from './components/TotalBill/TotalCalculator'
import IndividualBill from './components/IndividualBill/IndividualBill'
import IndividualCalculator from './components/IndividualBill/IndividualCalculator'
import TipsDelivery from './components/IndividualBill/TipsDelivery'


const App = () => {

  const [check, setCheck] = useState({
    first: true,
    second: false
  });

  const [totalBill, setTotalBill] = useState({
    person: 0,
    orderSum: 0,
    tips: 0,
    delivery: 0
  });

  const [individualBill, setIndividualBill] = useState([
    {person: '', price: 0}
  ]);

  const [tipsDelivery, setTipsDelivery] = useState({
    tip: 0,
    deliver: 0
  });

  const checkRadio = () => {
    setCheck({
      first: !check.first,
      second: !check.second
    })
  };


  //For TotalBill component

  const addPerson = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTotalBill({...totalBill, person: value});
  };

  const addOrderSum = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTotalBill({...totalBill, orderSum: value});
  };

  const addTips = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTotalBill({...totalBill, tips: value});
  };

  const addDelivery = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTotalBill({...totalBill, delivery: value});
  };

  const totalSum = () => {
    const sum = totalBill.orderSum;
    const tips = sum/100 * totalBill.tips;
    return  sum + tips + totalBill.delivery;
  }

  const eachBill = () => {
    let oneBill = totalSum() / totalBill.person;
    if (isNaN(oneBill)) {
      oneBill = 0;
    }
    return Math.ceil(oneBill);
  };

  const personAmount = () => {
    return totalBill.person;
  };



  //For Individual component

  const addName = (e,index) => {
    const copyOneBill = [...individualBill];
    copyOneBill[index].person = e.target.value;
    setIndividualBill(copyOneBill);
  }

  const addPrice = (e,index) => {
    const copyOneBill = [...individualBill];
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    copyOneBill[index].price = value;
    setIndividualBill(copyOneBill);
  };

  const addInput = () => {
    const copyBill = [...individualBill];
    copyBill.push({person: '', price: 0});
    setIndividualBill(copyBill);
  };

  const removeInput = (index) => {
    const copyBill = [...individualBill];
    copyBill.splice(index,1);
    setIndividualBill(copyBill);
  };

  const addTip = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTipsDelivery({...tipsDelivery, tip: value});
  };

  const addDel = e => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) value = 0;
    setTipsDelivery({...tipsDelivery, deliver: value});
  };

  const individualTotalSum = () => {
    let totalSum = 0;
    for (let i = 0; i < individualBill.length; i++) {
      totalSum += individualBill[i].price;
    }
    return Math.ceil(totalSum + (totalSum/100 * tipsDelivery.tip) + tipsDelivery.deliver);
  };

  const eachPersonBill = () => {
    let arr = [];
    for (let i = 0; i < individualBill.length; i++) {
      arr.push(<p key={i}>{individualBill[i].person}: <strong>{Math.ceil(individualBill[i].price + ((individualBill[i].price/100)*tipsDelivery.tip) + (tipsDelivery.deliver/individualBill.length))}</strong></p>);
    }
    return arr;
  };


  //For switching between Radio buttons
  const showRadio = () => {
    if (check.first === false) {
      return (
        <div className='secondOption'>
          {individualBill.map((item,index) => {
            return (<IndividualBill
              key={index}
              oneBill={individualBill}
              nameChange={(e) => addName(e,index)}
              priceChange={(e) => addPrice(e,index)}
              removePerson={() => removeInput(index)}
            />);
          })}
          <button onClick={() => addInput()}><strong>+</strong></button>
          <TipsDelivery
            tipsDelivery={tipsDelivery}
            addOneTip={addTip}
            addOneDelivery={addDel}
          />
          <IndividualCalculator
            name={eachPersonBill()}
            totalBill={individualTotalSum()}
          />
        </div>
      );
    } else {
      return (
        <div className='firstOption'>
          <TotalBill
            total={totalBill}
            addPerson={addPerson}
            addOrderSum={addOrderSum}
            addTips={addTips}
            addDelivery={addDelivery}
          />
          <TotalCalculator
            totalSum={totalSum()}
            personAmount={personAmount()}
            eachBill={eachBill()}
          />
        </div>
      );
    }
  }


  return (
    <div className="App">
      <RadioBtn check={check} changeRadio={checkRadio} />
      {showRadio()}
    </div>
  );
}

export default App;
