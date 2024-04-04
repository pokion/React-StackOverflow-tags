import * as React from 'react';
import InputNumberComponent from './InputNumberComponent';
import {  FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

export default function FiltersComponent() {
    const [sort, setSort] = React.useState('popular');
    const [order, setOrder] = React.useState('desc');

    const handleChangeOrder = (event: SelectChangeEvent) => {
        setOrder(event.target.value as string);
    };

    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

  return (
    <Grid container alignItems="center" justifyContent="center">
        <Grid item>
            <TextField id="outlined-basic" label="Tag name" variant="outlined" />
        </Grid>
        <Grid item>
            <InputNumberComponent />
        </Grid>
        <Grid item>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort"
                    onChange={handleChangeSort}
                >
                <MenuItem value={'popular'}>popular</MenuItem>
                <MenuItem value={'activity'}>activity</MenuItem>
                <MenuItem value={'name'}>name</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Order</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    label="Order"
                    onChange={handleChangeOrder}
                >
                <MenuItem value={'desc'}>desc</MenuItem>
                <MenuItem value={'asc'}>asc</MenuItem>
            </Select>
            </FormControl>
        </Grid>
    </Grid >
  );
}