import { useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from '../constants.js'

const VITE_UNSPLASH_ACCESS_KEY='5eGqstnADtAkeLswb9WUErCKiHE3XAHqPR2a3RvOGNw';


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    console.log(url);
      setLoading('loading...')
      setData(null);
      setError(null);
   
      axios.get(url, 
        {
            baseURL: BASE_URL,
            headers: {
                Authorization: `Client-ID ${VITE_UNSPLASH_ACCESS_KEY}`,
              },
          
        })
      .then(res => {
          setLoading(false);

          console.log(res.data);
            // console.log(url);
          res.data && setData(res.data);
      })
      .catch(err => {
          setLoading(false)
          setError(err.message)
      })
   
  }, [url])

  return { data, loading, error }
}

export default useFetch;
