import React, { useContext, useEffect, useCallback } from 'react';
import { Store } from './store';
import { callToApi } from './utils';

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string; }
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = useCallback(async () => {
    console.log("useCallback: check how many times it executes")
    //TODO: Move action to constants
    const data = await callToApi(process.env.REACT_APP_RICK_AND_MORTY_ENDPOINT || "");
    return dispatch({
      type: 'FETCH_DATA',
      payload: data._embedded.episodes
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
