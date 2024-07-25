import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero/HomeHero'
import HomeServices from './HomeServices/HomeServices'

const Home = () => {
  return (
    <div>
    <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
    </div>
  )
}

export default Home
