import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Typography component="div">
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
          {/* <Box color="secondary.main">secondary.main</Box>
          <Box color="error.main">error.main</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.secondary">text.secondary</Box>
          <Box color="text.disabled">text.disabled</Box>
          <Box color="text.hint">text.hint</Box> */}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
