import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';

export default function SEARCHE() {
  return (
    <Stack spacing={2} direction="row" sx={{width:"100%",display:"flex",justifyContent:"center"}}>
        
      <TextField size="small" style={{width:"350px"}} />
      <Button variant="contained">Contained</Button>

    </Stack>
  );
}
