import { useState,useContext } from "react";
import {Listcontext} from "./context/context.jsx"

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SEARCHE from "./Search.jsx";
import List from "./List.jsx";
import BCHP from "./ButtonChangePage.jsx";
import NOUSERS from "./NoUsers.jsx";
import Loading from "./Loading.jsx";
import FailedPage from "./FailedPage.jsx";


function App() {
  const {loading,error,selectedData} = useContext(Listcontext);
  console.log(error);
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
            height: "auto",
            width: "60vw",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            minHeight: "80vh",
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
              width: "100%",
            }}
          >
            Smart Users Dashboard
          </Typography>

          <SEARCHE />


          <Typography
            variant="h6"
            gutterBottom
            style={{
              my: 2,
              padding: "5px 0px",
              color: "#2e2e2e",
              fontWeight: "bold",
              width: "72%",
            }}
          >
            User List
          </Typography>


          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              width: "100%",
            }}
          >
            {error ? <FailedPage /> : loading ? <Loading /> : selectedData.length > 0 ? <List /> : <NOUSERS />}
          </div>
          {  selectedData.length > 0 ? <BCHP />: null}
        </Card>
      </Container>
    </>
  );
}

export default App;
