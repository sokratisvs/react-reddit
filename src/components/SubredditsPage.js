import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
  import {storeData} from '../redux/data'
import RedditItem  from './RedditItem';
import PropTypes from 'prop-types';

const URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (url) => {
    let result;
    try {
        const response = await fetch(url);
        result = await response.json();
        return result;
    } catch (error) {
        return error;

    }
}

export const SubredditPage = () => {
    const [loading, setLoading] = useState(false);
    const data = useSelector((state) => {
        return state.data.value
    });

    const dispatch = useDispatch();
    useEffect(() => {
        async function storeFetchedData() {
            // Set loading to true while waiting for response
            setLoading(true);
            const result = await fetchData(URL);
            setLoading(false);
            // dispatch to the redux store the action with the response object
            dispatch(storeData(result))
          }
          storeFetchedData();
      }, [dispatch]);

    if (loading) return <h1>Loading...</h1>
    if (data?.error) return <h1>Something went wrong!</h1>
    return (
        <main className='App'>
                { data.results ? (
                    <div>
                    <h1>Items</h1>
                    <div>
                        {data?.results.map((item) => {
                            return <RedditItem key={item.name} {...item} />
                            }
                        )}
                    </div>
                </div>
                ) : (
                    <div>
                    <h1>No items</h1>
                    </div>
                )}
        </main>
    )
}

export default SubredditPage