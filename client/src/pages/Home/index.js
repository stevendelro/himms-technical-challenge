import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import ReportsList from '../../components/ReportsList';

export default function Home({ loading }) {
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Typography variant="h3">
        <ReportsList />
      </Typography>
    </>
  );
}
