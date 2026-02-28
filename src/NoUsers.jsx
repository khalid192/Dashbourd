
import Typography from "@mui/material/Typography";
import image from  "./icone/image.png"

export default function NOUSERS() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={image} alt="No Users" width="200" height="200" />
      <Typography variant="h6" gutterBottom style={{ textAlign: "center", my: 2 }}>
        No users found.
      </Typography>
    </div>
  );
}