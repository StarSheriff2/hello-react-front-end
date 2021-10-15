import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting, selectRandomGreeting } from './greetingSlice';
import styles from './Greeting.module.scss';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const greeting = useSelector(selectRandomGreeting);

  return (
    <>
      <h1 className={`${styles.heading}`}>My First Full-Stack App with Rails and React 😸</h1>
      <p className={`${styles.greeting}`}>{greeting}</p>
    </>
  );
};

export default Greeting;
