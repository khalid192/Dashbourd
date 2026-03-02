import axios from "axios";

//============================================//
// Function to reload user data from the API
//============================================//
 export function Reloud({setLoading,setError,setlist}) {
      setLoading(true);
      setError(false);
      axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setlist(res.data);
    })
    .catch((err) => {
      setError(true);

    })
   .finally(() => setLoading(false));
  }
