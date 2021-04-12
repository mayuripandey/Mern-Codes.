import React from 'react';
import UserItem from './UserItem';

import UsersLists from './UserItem';
import './UsersLists.css';

 const UserList = props => {
     if (props.items.length === 0) {
         return (
              <div className="center">
             <h2> No users.</h2>
         </div>
         );
     };
     return (
        <ul className="users-lists">
         {props.items.map(user => (
           <UserItem 
            key={user.id} 
            id={user.id}
            image={user.image} 
            name={user.name} 
            placeCount={user.places}
            />  
         ))}
            
         </ul>
     );
 };

 export default UsersList;
