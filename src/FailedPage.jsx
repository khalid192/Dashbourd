import { Button } from "@mui/material";
import Failed from "./icone/Failed.png";





export default function FailedPage() {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <img width={100} src={Failed} alt="Failed to load data" />
            <h3>Failed to load data. </h3>
            <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                Retry
            </Button>

        </div>
    );
}