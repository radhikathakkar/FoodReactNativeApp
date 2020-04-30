import yelp from '../../api/yelp';

export const getData = async () => {
    await yelp.get('/search', {
        params: {
            limit: 50,
            location: 'San Francisco'
        }
    })
        .then((response) => {
            return response.data.businesses;
        })
        .catch(error => {
            return error;
        })
    return;
}
