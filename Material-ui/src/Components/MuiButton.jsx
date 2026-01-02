import React from 'react'
import { Stack, Button } from '@mui/material'

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={3}>
                <Button variant='text'>Button 1</Button>
                <Button variant='contained' onClick={() => alert('Hello')}>Button 2</Button>
                <Button variant='outlined'>Button 3</Button>
            </Stack>

            <Stack direction={'row'} spacing={3}>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>

            </Stack>
        </Stack>
    )
}

export default MuiButton
