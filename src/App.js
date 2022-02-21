import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavbarUsers from './Components/NavbarUsers';
import Users from './Components/Users';
import { v4 as uuidv4 } from 'uuid';
import Profile from './Components/Profile';

function App() {
  const [users,setUsers] = useState([
    {name : 'Imen', age : 24, email :'imen@gmail.com', id : uuidv4()},
    {name : 'Elyess', age : 19, email :'elyess@gmail.com', id : uuidv4()},
    {name : 'Ghassen', age : 24, email :'ghassen@gmail.com', id : uuidv4()},
    {name : 'Mahmoud', age : 27, email :'mahmoud@gmail.com', id : uuidv4()}
  ])
  return (
    <div>
      <NavbarUsers/>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/users' element={<Users users={users}/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users/:id' element={<Profile users={users}/>}/>  
      </Routes>
    </div>
  );
}

export default App;
