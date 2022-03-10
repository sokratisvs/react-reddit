import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setPosts} from '../redux/reddit';
import { selectFilteredPosts } from '../redux/reddit';
import RedditItem  from './RedditItem';

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

export const PostsPage = () => {
    const [loading, setLoading] = useState(false);
    const data = useSelector(selectFilteredPosts);

    const dispatch = useDispatch();
    useEffect(() => {
        async function storeFetchedData() {
            // Set loading to true while waiting for response
            setLoading(true);
            const result = await fetchData(URL);
            setLoading(false);
            // dispatch to the redux store the action with the response object
            dispatch(setPosts(result))
          }
          storeFetchedData();
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>
    if (data?.error) return <h1>Something went wrong!</h1>
    return (
        <div>
            { data ? (
                <div>
                <h1>Items</h1>
                <div>
                    {data?.map((item) => {
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
        </div>
    )
}

export default PostsPage