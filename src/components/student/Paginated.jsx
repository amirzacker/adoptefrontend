import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Pagination } from '@material-ui/lab';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  // ...
];

const Paginated = () => {

  const [users, setUsers] = useState([]);



useEffect(() => {
  // Axios version
  axios.get("/users").then((result) => setUsers(result.data));
}, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const pages = Math.ceil(users.length / itemsPerPage);
  const paginatedData = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {paginatedData.map(item => (
        <div key={item._id}>{item.email}</div>
      ))}
      <Pagination count={pages} page={currentPage} onChange={handleChange} />
    </div>
  );
};

export default Paginated;
