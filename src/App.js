
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrease, increase } from './store/actions/action';
import { useState } from 'react';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const onIncreaseHandler = () => {
    dispatch(increase(number))
  }

  const onDecreaseHandler = () => {
    dispatch(decrease(number))
  }

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className='App'>
      <p className='counter'>Counter : {counter}</p>

      <div className='input'>
        <label>Input the number to add/subtract</label>
        <input type='number' onChange={(e) => onChangeHandler(e)} />
      </div>

      <button className='button' onClick={onIncreaseHandler}>Increase</button>
      <button className='button' onClick={onDecreaseHandler}>Decrease</button>
    </div>
  );
}

export default App;
