import React, { useEffect, useState } from 'react';

import Api from './services/api';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

const App = () => {
	const [contacts, setContacts] = useState([]);
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const value = await Api.getContacts();
      await setContacts(value);
      await setList(value);
    }
    fetchData();
  }, []);
  
  return (
    <>
      <Topbar/>
      <Filters
        contacts={contacts}
        setList={setList}
      />
      <Contacts contacts={list}/>
    </>
  );
}

export default App;
