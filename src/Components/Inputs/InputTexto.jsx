import { TextField } from '@mui/material'
import React from 'react'

export default function InputTexto({ value, setValue, label, placeholder, readOnly, shrink, type="text" }) {
  return (
    <TextField
        className='m-0'
        margin="normal"
        required
        fullWidth
        type={type}
        id="texto"
        autoComplete='off'
        label={label}
        name="texto"
        autoFocus
        value={value}
        placeholder={placeholder}
        onChange={(e)=>{setValue(e.target.value)}}
        inputProps={{readOnly: readOnly}}
        InputLabelProps={{ shrink: shrink }}
        sx={{mb: 0, mt: 0}}
    />
  )
}