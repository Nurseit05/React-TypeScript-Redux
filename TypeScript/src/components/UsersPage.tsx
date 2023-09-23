import React, {FC, useEffect, useState} from 'react';
import { IUser } from '../types/type';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const histori = useNavigate()
  
    useEffect(() => {
      FetchUsers()
    }, [])
  
    async function FetchUsers() {
      try {
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch(e) {
        alert(e)
      }
    }

    return (
        <List 
            items={users} 
            renderItem={(user: IUser) => <UserItem onClick={(user) => histori('/users/' + user.id )} user={user} key={user.id} /> } 
        />
    );
};

export default UsersPage;