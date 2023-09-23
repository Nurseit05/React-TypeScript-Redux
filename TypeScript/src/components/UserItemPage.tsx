import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { IUser } from '../types/type';
import { useParams, useNavigate } from 'react-router-dom';

interface UserItemPageParams {
    id: string;
    [key: string]: string | undefined;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const histori = useNavigate()
  
    useEffect(() => {
      FetchUser()
    }, [])
  
    async function FetchUser() {
      try {
        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(res.data)
      } catch(e) {
        alert(e)
      }
    }

    return (
        <div>
            <button onClick={() => histori('/users')} >Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.suite}
            </div>
        </div>
    );
};

export default UserItemPage;