import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage, { initializeTimes, updateTimes } from './components/Booking';
import { ThemeProvider } from './ThemeContext';

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();


describe('Booking actions', () => {
  test('initializeTimes', async () => {
    const times = await initializeTimes(new Date());
    console.log(times);
    expect(times).toBeInstanceOf(Array);
    times.forEach(time => {
      expect(typeof time).toBe('string');
    });
  });

  test('updateTimes', async () => {
    const times = await updateTimes({}, { type: 'SET_TIMES', data: ['1:00PM'] });
    expect(times).toBeInstanceOf(Array);
    times.forEach(time => {
      expect(typeof time).toBe('string');
    });
  });
});


// // Mock fetchAPI function
// jest.mock('./utils/utils', () => ({
//   fetchAPI: jest.fn().mockResolvedValue([
//     '17:00', '17:30', '18:00', '18:30', '19:30', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
//   ]),
//   updateTimes: jest.fn().mockResolvedValue([
//     '17:00', '17:30', '18:00', '18:30', '19:30', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
//   ]),
// }));

// describe('Booking actions', () => {
//   test('initializeTimes', async () => {
//     const times = await initializeTimes(new Date());
//     expect(times).toBeInstanceOf(Array);
//     times.forEach(time => {
//       expect(typeof time).toBe('string');
//     });
//   });

//   test('updateTimes', async () => {
//     const times = await updateTimes(new Date(1677566972450));
//     expect(times).toBeInstanceOf(Array);
//     times.forEach(time => {
//       expect(typeof time).toBe('string');
//     });
//   });
// });
