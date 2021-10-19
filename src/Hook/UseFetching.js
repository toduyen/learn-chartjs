import React, { useEffect, useState } from "react";
import axios from "axios";
const UseFetching = (initialUrl , initialData) => {
    const [Data, setData] = useState(initialData);
    const [Url, setUrl] = useState(initialUrl)
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                const getData = await axios(Url);
                setData(getData.data);
            } catch{
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [Url])
    return [{Data , Loading , Error},setUrl];
};
export default UseFetching;