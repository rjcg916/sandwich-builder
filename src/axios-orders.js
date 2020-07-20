import axios from 'axios';

const OrdersService = axios.create( {
   baseURL: 'https://sandwich-builder-f511b.firebaseio.com/'
});

export default OrdersService;