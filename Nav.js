import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';
import Languages from './Languages';
import Drawer from '@mui/material/Drawer';


const Nav = () => {
  const [opendra,setOpenDra]=useState(false)
  const handleOpen=()=>{setOpenDra(true)}
  const handleClose=()=>{setOpenDra(false)}
  return (
    <div className='nav'>
    <div className='burgerLogo'>
    <Button variant='outlined' color='primary' onClick={handleOpen}><MenuIcon sx={{fontSize:'40px'}}/></Button>
    <img src='book.png' alt='' className='logo'/>
    </div>
    <div className='Search'>
       <Input placeholder='Search Here'/>
       <SearchIcon sx={{fontSize:'40px'}}/>
    </div>
    
    <div className='lang'>
      <Languages/>
    </div>
    
    <Drawer
            anchor='left'
            open={opendra}
            onClose={handleClose}
          >
            <hr style={{width:'40vw'}}/>
          </Drawer>
    </div>
  )
}

export default Nav