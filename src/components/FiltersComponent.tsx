import * as React from 'react';
import InputNumberComponent from './InputNumberComponent';
import {  FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTags } from '../api/TagsController';
import { useDebouncedCallback } from 'use-debounce';

interface parentPops{
    handleMaxChange: Function,
    queryChange: Function
}

export default function FiltersComponent({ handleMaxChange, queryChange }: parentPops) {
    const [max, setMax] = React.useState(10);
    const [sort, setSort] = React.useState('popular');
    const [order, setOrder] = React.useState('desc');
    const [query, setQuery] = React.useState(`pagesize=10&order=asc&sort=activity&site=stackoverflow`)

    const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ["tags"],
        queryFn: () => fetchTags(query),
        enabled: false
    })

    const debounced = useDebouncedCallback(
        () => {
            refetch();
        },
        300
      );

    

    const handleChangeSort = (event: any) => {
        setSort(event.target.value)
        setQuery(`pagesize=${max}&order=${order}&sort=${event.target.value}&site=stackoverflow`)
        queryChange(`pagesize=${max}&order=${order}&sort=${event.target.value}&site=stackoverflow`)
        debounced()
    };
    const handleChangeOrder = (event: any) => {
        setOrder(event.target.value)
        setQuery(`pagesize=${max}&order=${event.target.value}&sort=${sort}&site=stackoverflow`)
        queryChange(`pagesize=${max}&order=${event.target.value}&sort=${sort}&site=stackoverflow`)
        debounced()
    };
    function handleChangeNumberMax(val: number){
        setMax(val)
        handleMaxChange(val)
        setQuery(`pagesize=${val}&order=${order}&sort=${sort}&site=stackoverflow`)
        queryChange(`pagesize=${val}&order=${order}&sort=${sort}&site=stackoverflow`)
        debounced()
    };

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
            <InputNumberComponent valueMax={max} handleChangeInput={handleChangeNumberMax} />
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