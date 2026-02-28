import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { Listcontext } from "./context/context";

export default function SEARCHE() {
  const {search, setSearch, reloud} = useContext(Listcontext);
  
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ width: "100%", display: "flex", justifyContent: "center",borderBottom:"solid 0.5px #c8c0c097",pb:"10px" }}
    >
      <TextField
        size="small"
        label="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}

            
        sx={{
          width: "350px",
        }}


      />

      <Button onClick={reloud} size="small" variant="contained">
        Reload
      </Button>

      
    </Stack>
  );
}
