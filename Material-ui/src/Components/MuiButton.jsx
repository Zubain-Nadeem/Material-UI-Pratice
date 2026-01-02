import React from 'react'
import { Stack, Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

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

            <Stack spacing={2} direction={'row'}>
                <Button variant='contained' size='small' >Small</Button>
                <Button variant='contained' size='medium' >Medium</Button>
                <Button variant='contained' size='large' >Large</Button>
            </Stack>

            <Stack spacing={3} direction={'row'}>
                <Button variant='contained' color='secondary' startIcon={<SendIcon />} >Send</Button>
                <Button variant='contained' color='secondary' endIcon={<DeleteIcon />} >Delete</Button>
            </Stack>

            <Stack direction={'row'} spacing={3}>
                <IconButton aria-label='delete' color='success'>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label='send' color='primary'>
                    <SendIcon fontSize='small' />
                </IconButton>
                <IconButton aria-label='send' color='secondary'>
                    <SendIcon fontSize='large' />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default MuiButton
