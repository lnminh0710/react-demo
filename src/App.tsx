import { useCallback, useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { getUser } from './services/user.service';
import { User } from './models/user.model';

export default App;

function App() {
  const [users, setUsers] = useState<User[] | undefined>([]);
  const getData = useCallback(() => {
    getUser()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex gap-4 m-auto justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex items-center justify-center my-12">
        <button onClick={() => getData()}>Get users</button>
      </div>
      <div className="flex flex-col items-start">
        {users?.map((_u: User) => <li key={_u.id}>{_u.name}</li>)}
      </div>
    </>
  );
}
