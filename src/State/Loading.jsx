import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

//============================================//
// Component to display a loading spinner while data is being fetched
//============================================//
export default function Loading() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="3.5rem" />
    </Stack>
  );
}