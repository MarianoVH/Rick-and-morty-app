import React, { useContext, useEffect, useCallback } from 'react';
import { Store } from './Store';

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = useCallback(async () => {
    console.log("useCallback: check how many times it executes")
    //TODO: Move url and action to constants
    const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
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
