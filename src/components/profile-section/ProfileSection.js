import React from 'react';
import { Box, Container, Card } from '@material-ui/core';

export function ProfileSection(props) {
    return (
        <Box >
            <Container>
                <Card>
                    <h4>{props.title}</h4>
                </Card>
            </Container>
        </Box>
    );
}