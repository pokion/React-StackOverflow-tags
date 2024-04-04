import { CircularProgress, Grid } from '@mui/material';
import * as React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTags } from '../api/TagsController';
import TagCardComponent from './TagCardComponent';

export default function TagsDisplay() {
    const queryClient = useQueryClient();

    const { data: tags, isLoading, error } = useQuery({
        queryKey: ["tags"],
        queryFn: () => fetchTags()
    })
    
        if (isLoading) return <CircularProgress />

        if (error) return "error"

        return (
            <>
                {tags?.items.map((tag) => (
                    <Grid item>
                        <TagCardComponent key={tag.name + tag.count} tag={tag}  />
                    </Grid>
                ))}
            </>
        )
}