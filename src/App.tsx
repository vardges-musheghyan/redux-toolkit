import {useDispatch} from 'react-redux';


import {useAppDispatch, useAppSelector} from './store';

import {increment, decrement, amountBy} from './store/slices/counterSlice';
import {useEffect} from 'react';
import {getUser} from './store/slices/userSlice';


function App() {

    const dispatch = useAppDispatch();

    const value = useAppSelector( function callback(state){
        return state.user;
    });


    useEffect( () => {
        console.log(value, 'USER')
    }, [value] )



  return (
    <div >
        <button onClick={ () => {
            dispatch(getUser());
        } } >getUser</button>
    </div>
  );
}

export default App;




