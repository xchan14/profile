import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Avatar, makeStyles, Container, Grid } from '@material-ui/core';
import { ProfileSection } from './components/profile-section/ProfileSection';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 300,
    height: 300
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div style={{"marginTop":"300px"}}></div>
      <Grid container>
          <Avatar alt="Remy Sharp" href="/logo192.jpg" className={classes.avatar} />
      </Grid>
      <ProfileSection title="Cover Page" ></ProfileSection>
      <ProfileSection title="Career"></ProfileSection>
      <ProfileSection title="Education"></ProfileSection>
    </div>
  );
}

export default App;
