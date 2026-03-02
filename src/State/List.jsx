import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useContext } from "react";
import { Listcontext } from "../context/context";

//============================================//
// Component to display the list of users with delete functionality
//============================================//

const style = {
  p: 0,
  width: "100%",
  maxWidth: 480,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
  height: "100%",
};
const butt = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function () {
  
  const { selectedData, Delete } = useContext(Listcontext);

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <List sx={style} aria-label="mailbox folders">
          {selectedData.map((i) => (
            <div key={i.id}>
              <ListItem>
                <Box sx={butt}>
                  <Typography>{i.name}</Typography>

                  <Button
                    size="small"
                    id={i.id}
                    onClick={Delete}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </Box>
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </List>
      </div>
    </>
  );
}
