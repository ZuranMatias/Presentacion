import React from 'react'
import { MDBSwitch } from 'mdb-react-ui-kit'
import { usethemeVariable } from '../context/themeContext'
import { useTextData } from '../context/textContext'
import { useLanguageVariable } from '../context/languageContext'
import styleColors from '../assets/styleColors'

function LanguageSlider() {
  const themeData = usethemeVariable()
  const colors = styleColors()
  const text = useTextData().sliders.languageSlider
  const languageData = useLanguageVariable()


  return (
    <>
      <MDBSwitch
        label={text[languageData.language]}
        labelStyle={{
          color: themeData.theme === 'dark' ? colors.dark : colors.light,
        }}
        onChange={() => languageData.changeLanguage()}
      />
    </>
  )
}

export default LanguageSlider
