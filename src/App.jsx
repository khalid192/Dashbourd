import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SEARCHE from "./Search.jsx";
import List from "./List.jsx";
import BCHP from "./ButtonChangePage.jsx";



function App() {
  return (
    <>
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            height: "80vh",
            width: "60vw",
            padding: 0,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}
          
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              textAlign: "center",
              my: 2,
              padding: "5px 0px",
              background: "linear-gradient(135deg,#7ea0e9,#133172)",
              color: "#fff",
              fontWeight: "bolder",
              width:"100%"
            }} 
          >
            Smart Users Dashboard
          </Typography>
         
          <SEARCHE/>
                    <Typography
            variant="h6"
            gutterBottom
            style={{
              my: 2,
              padding: "5px 0px",
              color: "#2e2e2e",
              fontWeight: "bold",
              width:"72%"
            }} 
          >
           User List
          </Typography>
          <List/>
          <BCHP/>


        </Card>
        
      </Container>
    </>
  );
}

export default App;
