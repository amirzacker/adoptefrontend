import { useCallback, useState, useEffect } from 'react';

const users = ['Eva', 'Aude', 'Anne', 'Marc', 'Sansom']

function UserList() {
  const [searchCriteria, setSearchCriteria] = useState('')
  const handleSearch = useCallback(event => setSearchCriteria(event.target.value), [])

  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(() => {
    setFilteredUsers(users.filter(user => user.toLowerCase().includes(searchCriteria.toLowerCase())))
  }, [searchCriteria])

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
      <ul>
        {filteredUsers.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    </div>
  );
}

export default UserList;