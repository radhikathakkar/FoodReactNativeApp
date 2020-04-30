import react, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm: string) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Francisco'
                }
            });
            setResult(res.data.businesses);
        }
        catch (e) {
            setErrMsg('Something went wrong');
        }
    }


    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, result, errMsg];
}