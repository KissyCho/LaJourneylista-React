import React from 'react'
import { HeaderContainer } from './styles'

import logo from '../../assets/img/seetrpio-logo.svg'
import MainTransparent from '../Buttons/MainTransparent'

const Header = () => {
  return (
    <HeaderContainer className='header'>
      <img src={logo} alt='logo' className='header__logo' />
      <MainTransparent className='header__button'>Вход</MainTransparent>
    </HeaderContainer>
  )
}

export default Header
