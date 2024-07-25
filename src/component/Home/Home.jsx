import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero/HomeHero'
import HomeServices from './HomeServices/HomeServices'
import HomeCount from './HomeCount/HomeCount'

const Home = () => {
  return (
    <div>
    <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeCount/>
    </div>
  )
}

export default Home
