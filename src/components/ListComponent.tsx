import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import FiltersComponent from './FiltersComponent';
import { Box, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

export default function ListComponent() {
  return (
    <Grid>
        <Grid item xs={12}>
            <FiltersComponent />
        </Grid>

        <Grid item xs={12} >
            <Grid container spacing={2} alignItems="center" justifyContent="center" >
                <Grid item xs={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" component="div">
                                php
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Posts: 19283
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
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