import { createContext, useState, useEffect } from "react";
import { Reloud } from "../Features/users/api";
import { useFilterUsers } from "../Features/users/searchFilter";



//============================================//
// Create a context for the user list and related functions
//============================================//
export const Listcontext = createContext(null);






export default function PList({ children }) {

  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);





  //============================================//
  // Function to reload the user list
  //============================================//
  function reloud() {
    Reloud({ setlist, setLoading, setError });
  }
  useEffect(() => {
    reloud();
  }, []);




  //============================================//
  // Search Logic
  //============================================//
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [ListSearch, setListSearch] = useState(search);

  useFilterUsers({
    setListSearch,
    debouncedSearch,
    list,
    setDebouncedSearch,
    search,
  });




  //============================================//
  // Pagination Logic
  //============================================//
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const selectedData = ListSearch.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(ListSearch.length / itemsPerPage);

  //============================================//
  // State for pagination button alignment
  //============================================//


  const [alignment, setAlignment] = useState(1);
  
  const handleChange = (event, newAlignment) => {
    newAlignment != null ? setAlignment(newAlignment) : null;
  };
  
  useEffect(() => {
    setPage(alignment);
  }, [alignment]);

  useEffect(() => {
   setAlignment(page)
  }, [page]);
    
  function Next() {
    setAlignment((i) => {
      return Number(i) + 1;
    });
    setPage(alignment);
  }
  function Pervious() {
    setAlignment((i) => {
      return Number(i) - 1;
    });
    setPage(alignment);
  }

  //============================================//
  // Handle Page Change when selectedData is empty
  //============================================//
  useEffect(() => {
    selectedData.length === 0 && page > 1 ? setPage(page - 1) : null;
  }, [selectedData]);




  //============================================//
  // Delete Function
  //============================================//
  function Delete(e) {
    const id = parseInt(e.currentTarget.id);
    setlist((prev) => prev.filter((i) => i.id !== id));
  }



  
  return (
    <>
      <Listcontext
        value={{
          Delete,
          setlist,
          list,
          totalPages,
          selectedData,
          setPage,
          page,
          search,
          setSearch,
          reloud,
          loading,
          error,
          alignment,
          handleChange,
          Next,
          Pervious,
        }}
      >
        {children}
      </Listcontext>
    </>
  );
}
