import { useEffect } from "react";

//============================================//
// Custom hook to filter users based on search input with debouncing
//============================================//

export function useFilterUsers({
  list,
  debouncedSearch,
  setListSearch,
  setDebouncedSearch,
  search,
}) {

  // If the list is not an array, set the search results to an empty array
  useEffect(() => {
    if (!Array.isArray(list)) {
      setListSearch([]);
      return;
    }

    // Filter the users based on the search input (case-insensitive)
    const filteredUsers = list.filter((user) =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    setListSearch(filteredUsers);
  }, [list, debouncedSearch]);

  // Debounce the search input to avoid excessive filtering while typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);
}
