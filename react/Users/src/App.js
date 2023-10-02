import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [inputValue, setInput] = useState('')

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.warn(err)
        alert('Ошибка при получение данные из сервера')
      })
      .finally(() => setLoading(false))
  }, [])

  const searchInputValue = (event) => {
    setInput(event.target.value)
  }

  const onClickInvites = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSucces = () => {
    setSuccess(true)
  }
  
  const onClickSuccesFalse = () => {
    setSuccess(false)
  }

  return (
    <div className="App">
      {success ?
        <Success count={invites.length} onClickSuccesFalse={onClickSuccesFalse} />
      : <Users
        value={inputValue} onClickSucces={onClickSucces}
        search={searchInputValue} invites={invites}
        items={users} isLoading={isLoading} onClickInvites={onClickInvites}
      />
    }
      
    </div>
  );
}

export default App;
