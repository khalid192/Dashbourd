import { Card } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import { useContext} from "react";
import { Listcontext } from "./context/context";
import { Delete } from "@mui/icons-material";

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
  const {selectedData,setlist} = useContext(Listcontext);



 function Delete (e){  const id = parseInt(e.currentTarget.id);
  setlist(prev => prev.filter(i => i.id !== id));
 }
  
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
        <List sx={style} fullHeight aria-label="mailbox folders">
          {selectedData.map((i) => (
            <div key={i.id}>
              <ListItem>
                <Box sx={butt}>
                  <Typography>{i.name}</Typography>

                  <Button size="small" id={i.id} onClick={Delete} variant="contained" color="error">
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
