import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useState } from "react";

export default function BCHP() {
  const [alignment, setAlignment] = useState("1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"center",
          height:"50px",
          m:0.5,
         
          "& > *": {
            m: 2,
          },
        
        }}
      >

      <Button size="small" color="inherit"  variant="contained" style={{margin:10,padding:4}} startIcon={<ArrowLeftIcon />}>
        Pervious
      </Button>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          
          style={{display:"flex",alignContent:"center",margin:0,height:'30px'}}
        >
          <ToggleButton value="1">1</ToggleButton>
          <ToggleButton value="2">2</ToggleButton>
          <ToggleButton value="3">3</ToggleButton>
          <ToggleButton value="3">4</ToggleButton>
          <ToggleButton value="3">5</ToggleButton>
        </ToggleButtonGroup>

         <Button size="small"  variant="contained" color="inherit"  style={{margin:10,padding:4}} endIcon={<ArrowRightIcon sx={{m:0,p:0}} />}>
        Next
      </Button>
      </Box>
    </>
  );
}
