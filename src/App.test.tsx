import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});

describe('App', () => {
  it('Vite + React to be in document', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});

// describe('Test App with real service', () => {
//   const renderComponent = () => render(<App />);

//   test('Call real api when click button', async () => {
//     const { getByText, getAllByRole } = renderComponent();

//     fireEvent.click(getByText('Get users'));

//     await waitFor(() => {
//       const userList = getAllByRole('listitem');
//       expect(userList).toHaveLength(10);
//       expect(userList[0]).toHaveTextContent('Leanne Graham');
//       expect(userList[1]).toHaveTextContent('Ervin Howell');
//     });
//   });
// });

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test App with service and mockup', () => {
  const renderComponent = () => render(<App />);

  test('Call api when click button with mockup data', async () => {
    const { getByText, getAllByRole } = renderComponent();

    // Provide the data object to be returned
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Joe Doe',
        },
        {
          id: 2,
          name: 'Jane Doe',
        },
      ],
    });

    fireEvent.click(getByText('Get users'));

    await waitFor(() => {
      const userList = getAllByRole('listitem');
      expect(userList).toHaveLength(2);
      expect(userList[0]).toHaveTextContent('Joe Doe');
      expect(userList[1]).toHaveTextContent('Jane Doe');
    });
  });
});
