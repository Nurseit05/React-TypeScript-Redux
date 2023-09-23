import React, {FC} from 'react';
import { IUser } from '../types/type';

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void; 
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray'}} >
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}, geo {user.address.geo.lat}
        </div>
    );
};

export default UserItem;