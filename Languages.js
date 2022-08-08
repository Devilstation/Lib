import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useContext, useEffect } from 'react'
import { Context } from './Parent'
const Languages = () => {
    const Cont=useContext(Context)
    useEffect(() => {
        fetch(`https://libretranslate.de/languages`).then(result=>result.json()).then(langs=> Cont.langs[1](langs))
            
            
    }, [])
    console.log(Cont.langs[0])
    const handleChange=(e)=>{  Cont.active[1](e.target.value)}
  return (
     <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth classes>
      <InputLabel id="demo-simple-select-label">Languages</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={Cont.active[0]}
        
        onChange={handleChange}
      >
       {Cont.langs[0].map((items)=> <MenuItem value={items.code}>{items.name}</MenuItem>)}
      </Select>
    </FormControl>
  </Box>
  )
}

export default Languages