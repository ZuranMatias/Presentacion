import React from 'react'
import { MDBSwitch } from 'mdb-react-ui-kit'
import { usethemeVariable } from '../context/themeContext'
import { useTextData } from '../context/textContext'
import { useLanguageVariable } from '../context/languageContext'
import styleColors from '../assets/styleColors'

function ThemeSlider() {
  const themeData = usethemeVariable()
  const colors = styleColors()
  const text = useTextData().sliders.themeSlider
  const language = useLanguageVariable().language

  return (
    <>
      <MDBSwitch
        label={text[language]}
        labelStyle={{
          color: themeData.theme === 'dark' ? colors.dark : colors.light,
        }}
        onChange={() => themeData.toggleTheme()}
      />
    </>
  )
}

export default ThemeSlider
