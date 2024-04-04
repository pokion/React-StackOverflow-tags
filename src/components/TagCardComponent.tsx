import { Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import ITag from '../entities/ITag'

interface TagProps {
    tag: ITag;
}

export default function TagCardComponent({ tag }: TagProps) {
  return (
    <Card variant="outlined">
        <CardContent>
            <Typography variant="h6" component="div">
                {tag.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Posts: {tag.count}
            </Typography>
        </CardContent>
    </Card>
  );
}