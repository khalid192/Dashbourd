import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function SEARCHE() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ width: "100%", display: "flex", justifyContent: "center",borderBottom:"solid 0.5px #c8c0c097",pb:"10px" }}
    >
      <TextField
        size="small"
        sx={{
          width: "350px",
          "& .MuiInputBase-root": {
            height: "30px",
          },
          "& .MuiInputBase-input": {
            padding: "2px 6px",
            fontSize: "16px",
          },
        }}
      />

      <Button sx={{ height: "30px" }} variant="contained">
        Contained
      </Button>

      
    </Stack>
  );
}
