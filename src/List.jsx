import { Card } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Height } from "@mui/icons-material";
import { useContext } from "react";
import {Listcontext} from "./context/context"

const style = {
  p: 0,
  width: "100%",
  maxWidth: 480,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",


};
const butt = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function () {
    const list = useContext(Listcontext)
    console.log(list)
  return (
    <> <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center"}}>
      <List sx={style} aria-label="mailbox folders">

        {list.map((i)=><><div key={i.id}>
                    <ListItem>
          <Box sx={butt}>
            <Typography>Drafts</Typography>

            <Button size="small" variant="contained"  color="error" >
              Delete
            </Button>
          </Box>
        </ListItem>
        <Divider component="li" /></div></>
        )}




      </List>
      </div>
    </>
  );
}
