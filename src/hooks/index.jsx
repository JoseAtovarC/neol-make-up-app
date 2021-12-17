import { useEffect, useState } from 'react'


export function useFetch (url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); 


    useEffect(() => {
        const fetchData = async () => {
           
            try {
                const resp= await fetch(url, options);
                const data = await resp.json();
                setData(data);
            } catch (e) {
                setData(null);
                setError(e);
            }       
        }
        fetchData();
    },[]);

    return { data, error, setData }
} ;

export function useFetchDetails (url, id) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); 


    useEffect(() => {
        const fetchData = async () => {
           
            try {
                const resp= await fetch(url);
                const data = await resp.json();
                setData(data.filter(v=> {
                   
                   return v.id ===id}))
               
            } catch (e) {
                setData(null);
                setError(e);
            }       
        }
        fetchData();
    },[]);

    return { data, error, setData }
} 