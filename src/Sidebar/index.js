import React, { useState, useEffect } from 'react'

//All the svg files
import logo from '../assets/logo.svg'
import Home from '../assets/home-solid.svg'
import Team from '../assets/social.svg'
import Calender from '../assets/sceduled.svg'
import Projects from '../assets/starred.svg'
import Documents from '../assets/draft.svg'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);
    background-color: var(--background);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: '';
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${props => (props.clicked ? '1.5' : '1rem')};
    transform: ${props => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${props => (props.clicked ? '1.2' : '1.5rem')};
    transform: ${props => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

const SidebarContainer = styled.div`
  background-color: red;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width:4rem;
  position: relative;
  position: absolute;
  top: 0;
  z-index: -1;
   padding-top:20rem;
  p{
    color:white;
    transform: rotate(-90deg);
    font-size:28px;
    letter-spacing: 10px;
    text-transform: uppercase;
   
  }
`

const Logo = styled.div`
  width: 2rem;
  margin: 2rem 0;

  img {
    width: 100%;
    height: auto;
  }
`

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 6rem 0 0 3rem;;

  position: absolute;

  left: 0;

  width: ${props => (props.clicked ? '15rem' : '3rem')};
  transition: all 0.5s ease;
top:0;
  height: 100vh;
  z-index: -1;
`

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);
    background-color: var(--background);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`

const Text = styled.span`
  width: ${props => (props.clicked ? '100%' : '0')};
  overflow: hidden;
  margin-left: ${props => (props.clicked ? '1.5rem' : '0')};
  transition: all 0.3s ease;
`

const Sidebar = () => {
  const [click, setClick] = useState(true)

  const handleClick = () => setClick(!click)

  const [width, setWindowWidth] = useState(0)

  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    if (width < 998) {
      setClick()
    } else {
      setClick(true)
    }
  }

  console.log(width)

  return (
    <Container>
      {width < 998 ? (
        <Button clicked={click} onClick={() => handleClick()}>
          Click
        </Button>
      ) : (
        ''
      )}
    
      <SlickBar clicked={click}>
        <Item exact activeClassName='active' to='/'>
          <Text clicked={click}>Home</Text>
        </Item>
        <Item activeClassName='active' to='/team'>
          <Text clicked={click}>Team</Text>
        </Item>
        <Item activeClassName='active' to='/calender'>
          <Text clicked={click}>Calender</Text>
        </Item>
        <Item activeClassName='active' to='/documents'>
          <Text clicked={click}>Documents</Text>
        </Item>
        <Item activeClassName='active' to='/projects'>
          <Text clicked={click}>Projects</Text>
        </Item>
        <Item exact activeClassName='active' to='/empty'>
          <Text clicked={click}>Empty</Text>
        </Item>
      </SlickBar>
      <SidebarContainer>
        <p> Java</p>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar
