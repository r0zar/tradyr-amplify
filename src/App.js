import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div">
          <Box color="primary.main">primary.main</Box>
          <Box color="primary.main">primary.main</Box>
          <Box color="primary.main">primary.main</Box>
          <Box color="primary.main">primary.main</Box>
          <Box color="primary.main">primary.main</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.primary">text.primary</Box>
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
