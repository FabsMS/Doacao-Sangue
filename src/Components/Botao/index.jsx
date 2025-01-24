import { Button } from '@mui/material'
import React from 'react'

export default function BotaoComum({ texto, icone, funcao, funcaoParaDesabilitar, fontWeight, border, height, width, fontSize, background = '#40A2CD', backgroundHover = '#3388ac', fontColor = '#FFFFFF', font, borderRadius }) {
  return (
    <>
      <Button variant="contained" disabled={funcaoParaDesabilitar} startIcon={icone} onClick={funcao} sx={{ background: background, fontWeight: fontWeight, fontSize: fontSize, color: fontColor, height: height, width: width, border: border, '&:hover': { background: backgroundHover }, borderRadius: borderRadius }}>{texto}</Button>
    </>
  )
}