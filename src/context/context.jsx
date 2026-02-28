import { createContext, useState, useEffect, use } from "react";
import axios from "axios";

export const Listcontext = createContext(null);

export default function PList({ children }) {
  const [list, setlist] = useState([]);

  const [search, setSearch] = useState("");



  function reloud() {

      axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setlist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
   reloud();
  }, []);

  const itemsPerPage = 5;

  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const filteredUsers = list.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  const startIndex = (page - 1) * itemsPerPage;
  const selectedData = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  useEffect(() => {
    selectedData.length === 0 && page > 1 ? setPage(page - 1) : null;
  }, [selectedData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <Listcontext
        value={{
          setlist,
          list,
          totalPages,
          selectedData,
          startIndex,
          setPage,
          page,
          search,
          setSearch,
          filteredUsers,
          reloud
        }}
      >
        {children}
      </Listcontext>
    </>
  );
}
