export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? '' // Uses proxy during development
    : 'https://mern-ecommerce-app-ybe3.onrender.com'; // Backend URL in production

export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
