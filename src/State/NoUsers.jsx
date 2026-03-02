
import Typography from "@mui/material/Typography";
import NoUsers from  "../assets/icone/NoUsers.png"


//============================================//
// Component to display a message when no users are found
//============================================//
export default function NOUSERS() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={NoUsers} alt="No Users" width="200" height="200" />
      <Typography variant="h6" gutterBottom style={{ textAlign: "center", my: 2 }}>
        No users found.
      </Typography>
    </div>
  );
}