import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import Upload from './upload/Upload'

const theme = {
  global: {
    colors: {
      brand: '#00739D',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

// const AppBar = (props) => (
//   <Box
//     tag='header'
//     direction='row'
//     align='center'
//     justify='between'
//     background='brand'
//     pad={{ left: 'medium', right: 'small', vertical: 'small' }}
//     elevation='medium'
//     style={{ zIndex: '1' }}
//     {...props}
//   />
// );

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              {/* <AppBar>
                <Heading level='3' margin='none'>My App</Heading>
                <Button
                  icon={<Notification />}
                  onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                />
              </AppBar> */}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <Upload />
                </Box>
                  {/* {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction="horizontal" open={showSidebar}>
                      <Box
                        flex
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                      >
                        sidebar
                      </Box>
                    </Collapsible>
                  ): (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        sidebar
                      </Box>
                    </Layer>
                  )} */}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;