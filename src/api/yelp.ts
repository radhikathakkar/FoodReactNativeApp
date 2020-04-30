import Axios from 'axios';

export default
    Axios.create({
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            Authorization:
                'Bearer VeVtI3LXtL7JcEI4hTcdZ42-MlG43XP-cqDZxHl_84l6mg0LOpsqTEJwLl43JSBg6c9CH2RRgUiD7VbIvkI0mbPCuJQKcerizS1jYfcdyWqDEv8VxhAIOcTmFYmmXnYx'
        }
    });
