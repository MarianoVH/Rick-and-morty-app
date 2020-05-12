import React, { useContext, useEffect, useCallback } from 'react';
import { Store } from './store';

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = useCallback(async () => {
    console.log("useCallback: check how many times it executes")
    //TODO: Move url and action to constants
    const URL = process.env.REACT_APP_RICK_AND_MORTY_ENDPOINT;
    const data = await fetch(URL)
    const dataJson = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJson._embedded.episodes
    })
  }, [dispatch])

  useEffect(() => {
    console.log("useEffect: check how many times it executes")
    fetchDataAction();
  }, [fetchDataAction])


  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!</p>
    </>
  )
}
