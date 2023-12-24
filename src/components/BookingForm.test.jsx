import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import BookingForm from './BookingForm';
import { ThemeProvider } from '../ThemeContext';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders BookingForm component', () => {
  const { getByText } = render(
    <ThemeProvider>
      <BookingForm submitFormData={() => {}} availableTimes={[]} onDateChange={() => {}} />
    </ThemeProvider>
  );
  expect(getByText(/Reserve a Table/i)).toBeInTheDocument();
});

// test('submits form with valid data', async () => {
//   const submitFormData = jest.fn().mockResolvedValue(true);
//   const availableTimes = ['12:00', '13:00', '14:00']; // Mock available times
//   const onDateChange = jest.fn(); // Mock onDateChange function

//   const { getByPlaceholderText, getByText } = render(
//     <ThemeProvider>
//       <BookingForm submitFormData={submitFormData} availableTimes={availableTimes} onDateChange={onDateChange} />
//     </ThemeProvider>
//   );

//   fireEvent.change(getByPlaceholderText('John Doe'), { target: { value: 'Jay Chow' } });
//   fireEvent.change(getByPlaceholderText('foo@bar.com'), { target: { value: 'foo@bar.com' } });

//   fireEvent.click(getByText('Reserve'));

//   await waitFor(() => expect(submitFormData).toHaveBeenCalled(), { timeout: 3000 });
// });
