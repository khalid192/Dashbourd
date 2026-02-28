import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useContext, useState, useEffect } from "react";
import { Listcontext } from "./context/context";


export default function BCHP() {
  const { totalPages, setPage, page ,selectedData} =
    useContext(Listcontext);

  const [alignment, setAlignment] = useState(1);


  const handleChange = (event, newAlignment) => {
    newAlignment != null ? setAlignment(newAlignment) : null;
  };

  useEffect(() => {
    setPage(alignment);
  }, [alignment]);

  useEffect(() => {
   setAlignment(page)
  }, [selectedData]);
    
  console.log(1)
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

  const Blist = Array.from({ length: totalPages }, (_, i) => (
    <ToggleButton key={i + 1} value={i + 1}>
      {i + 1}
    </ToggleButton>
  ));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          m: 0.5,

          "& > *": {
            m: 2,
          },
        }}
      >
        <Button
          size="small"
          onClick={Pervious}
          disabled={alignment == 1}
          color="inherit"
          variant="contained"
          style={{ margin: 10, padding: 4 }}
          startIcon={<ArrowLeftIcon />}
        >
          Pervious
        </Button>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          style={{
            display: "flex",
            alignContent: "center",
            margin: 0,
            height: "30px",
          }}
        >
          {Blist}
        </ToggleButtonGroup>

        <Button
          size="small"
          onClick={Next}
          disabled={totalPages == alignment}
          variant="contained"
          color="inherit"
          style={{ margin: 10, padding: 4 }}
          endIcon={<ArrowRightIcon sx={{ m: 0, p: 0 }} />}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
