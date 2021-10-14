import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting, selectRandomGreeting } from './greetingSlice';
import styles from './Greeting.module.scss';

const Greeting = () => {
  const dispatch = useDispatch();

  const greeting = useSelector(selectRandomGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <>
      <h1>
        Greeting:
        {' '}
        {greeting}
      </h1>
    </>
  );
};

export default Greeting;
