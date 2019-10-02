import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Avatar, makeStyles, Container, Grid, Tab, Tabs, TabPanel } from '@material-ui/core';
import { ProfileSection } from './components/profile-section/ProfileSection';

const profileBoxWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  avatar: {
    margin: 10,
    width: 250,
    height: 250,
    marginTop: 30,
    fontSize: 64,
  },
  profileBox: {
    height: '100vh',
    width: profileBoxWidth,
    backgroundColor: '#D4D4D4'
  },
  contentBox: {
    /*width: `calc(100%-${profileBoxWidth}px)`,*/
    flexGrow: 1,
  },
  tabs: {
    marginTop: 100,
    width: 'auto',
  },
  tab: {
    fontSize: 28
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App" className={classes.root}>

      <div className={classes.profileBox}>

        <Grid container justify="center">
          <Avatar alt="Remy Sharp" className={classes.avatar} >A</Avatar>
        </Grid>

      </div>

      <div className={classes.contentBox}>
        <Container >
          <Tabs className={classes.tabs}
            centered>
            <Tab className={classes.tab} label="Career" />
            <Tab className={classes.tab} label="Education" />
            <Tab className={classes.tab} label="Contact" />
          </Tabs>
          <div hidden={false} >
            Career dadfaa
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
