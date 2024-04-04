import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import FiltersComponent from './FiltersComponent';
import { Grid } from '@mui/material';
import TagsDisplay from './TagsDisplay';

export default function ListComponent() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <FiltersComponent />
        </Grid>

        <Grid item xs={12} >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <TagsDisplay />
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Grid container  alignItems="center" justifyContent="center">
                <Pagination count={10} color="primary" />
            </Grid>
        </Grid>
    </Grid >
  );
}