import React from 'react'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CraveFeast from '../media/CraveFeast.png'

// const drawerWidth = 240;
// const navItems = ['Home', 'Profile', 'Login'];

function DrawerAppBar(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"black", color: "white"}}>
  
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img alt="logo" src={CraveFeast} style={{height:'50px',width:'50px'}}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="/home" sx={{ color: '#fff' }}>Home</Button>
              <Link to="/profile"><Button sx={{ color: '#fff' }}>Profile</Button></Link>
              <Button href="/login"sx={{ color: '#fff' }} onClick={()=>window.localStorage.removeItem('user')}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Navbar = () => {
  return (
    <div>
      <DrawerAppBar/>
      {/* <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </Router> */}
      </div>
  )
}

export default Navbar

// 