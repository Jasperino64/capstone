import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import BookingPage from './Booking';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConfirmedBooking from './components/ConfirmedBooking';
import { ThemeProvider } from './ThemeContext';
import Layout from './components/Layout';
import OrderForm from './components/OrderForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/book",
    element: (
      <Layout>
        <BookingPage />
      </Layout>
    ),
  },
  {
    path: "/order",
    element: (
      <Layout>
        <OrderForm />
      </Layout>
    ),
  },
  {
    path: "/success",
    element: (
      <Layout>
        <ConfirmedBooking />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        {router}
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();