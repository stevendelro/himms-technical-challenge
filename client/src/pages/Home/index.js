import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Home({ loading }) {
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Typography variant="h3">home page</Typography>
    </>
  );
}
