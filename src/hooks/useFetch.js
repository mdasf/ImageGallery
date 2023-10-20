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
    //   const source = axios.CancelToken.source();
    //   console.log(VITE_UNSPLASH_ACCESS_KEY)
    // const controller=new AbortController();
      axios.get(url, 
        {
            baseURL: BASE_URL,
            headers: {
                Authorization: `Client-ID ${VITE_UNSPLASH_ACCESS_KEY}`,
              },
            // cancelToken: source.token 
            // signal: controller.signal,
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
    //   return ()=>{
    //     controller.abort()
    //   }
  }, [url])

  return { data, loading, error }
}

export default useFetch;