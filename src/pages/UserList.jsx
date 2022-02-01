import React from 'react';

function UserList() {
  const users = [
    'Eva',
    'Aude',
    'Anne',
    'Marc'
  ]
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    </div>
  );
}

export default UserList;