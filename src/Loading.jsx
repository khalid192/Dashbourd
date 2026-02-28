import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="3.5rem" />
    </Stack>
  );
}