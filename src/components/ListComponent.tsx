import * as React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTags } from '../api/TagsController';
import ITag from '../entities/ITag'
import Pagination from '@mui/material/Pagination';
import FiltersComponent from './FiltersComponent';
import { Grid } from '@mui/material';
import TagsDisplay from './TagsDisplay';

export default function ListComponent() {
  const queryClient = useQueryClient();
  const [max, setMax] = React.useState(10)
  const [pages, setPages] = React.useState(10)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [query, setQuery] = React.useState(`pagesize=10&order=asc&sort=activity&site=stackoverflow`)

  const { data, isError, refetch } = useQuery({
      queryKey: ["tags"],
      queryFn: () => fetchTags(`page=${currentPage}&${query}`)
  })

  const handleMaxChange = (val: number)=>{
    setMax(val)
    if(data){
        setPages(Math.ceil(data.total / val))
    }
  }

  const handlePageChange = (_event: any, val: number)=>{
    setCurrentPage(val)
    refetch()
  }

  const handleQueryChange = (query: string)=>{
    setQuery(query)
  }

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <FiltersComponent handleMaxChange={handleMaxChange} queryChange={handleQueryChange} />
        </Grid>

        <Grid item xs={12} >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <TagsDisplay />
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Grid container  alignItems="center" justifyContent="center">
                <Pagination count={pages} color="primary" onChange={(event,val)=>handlePageChange(event,val)}  />
            </Grid>
        </Grid>
    </Grid >
  );
}