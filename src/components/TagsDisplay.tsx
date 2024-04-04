import { CircularProgress, Grid, Snackbar } from '@mui/material';
import * as React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTags } from '../api/TagsController';
import TagCardComponent from './TagCardComponent';

export default function TagsDisplay() {
    const [snack, setSnack] = React.useState(false)

    const { data: tags, isLoading, error } = useQuery({
        queryKey: ["tags"],
        queryFn: () => fetchTags()
    })

    const handleClose = ()=>{
        setSnack(false)
    }
    
        if (isLoading) return <CircularProgress />

        if (error) return (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={2000}
                open={snack}
                onClose={handleClose}
                message="I love snacks"
            />)
        

        return (
            <>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    tags?.items.map((tag) => (
                        <Grid item>
                            <TagCardComponent key={tag.name + tag.count} tag={tag}  />
                        </Grid>
                    ))
                )}
            </>
        )
}