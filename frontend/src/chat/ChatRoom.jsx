import { Container, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import UserNav from "../components/UserNav";
import UserFooter from "../components/UserFooter";

export default function Chat(){

    const ENTER_KEY_CODE = 13;

    const scrollBottomRef = useRef(null);
    const [chatMessages, setChatMessages] = useState([
        { user: 'john', message: 'hi' }
    ]);
    
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        scrollBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleEnterKey = (event) => {
        if(event.keyCode === ENTER_KEY_CODE){
            sendMessage();
        }
    }

    const sendMessage = () => {
        if(user && message) {
            setChatMessages([...chatMessages, {
                user: user,
                message: message
            }]);
            setMessage('');
        }
    };

    const listChatMessages = chatMessages.map((chatMessageDto, index) => 
        <ListItem key={index}>
            <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}`}/>
        </ListItem>
    );

    return (
     
        <Fragment>
           <UserNav />
            <Container>
                <Paper elevation={5} style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    <Box p={3}>
                        <Typography variant="h4" gutterBottom>
                            Happy chatting!
                        </Typography>
                        <Divider />
                        <List>
                            {listChatMessages}
                            <ListItem ref={scrollBottomRef}></ListItem>
                        </List>
                        <Grid container spacing={2} alignItems="center" style={{ marginTop: '20px' }}>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <TextField onChange={handleUserChange}
                                        value={user}
                                        label="Nickname"
                                        variant="outlined"/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <TextField onChange={handleMessageChange} onKeyDown={handleEnterKey}
                                        value={message}
                                        label="Type your message..."
                                        variant="outlined"/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={sendMessage}
                                    aria-label="send"
                                    color="primary">
                                        <SendIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            {/* <UserFooter /> */}
        </Fragment>
    );
}
