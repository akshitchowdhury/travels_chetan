import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero/HomeHero'
import HomeServices from './HomeServices/HomeServices'
import HomeCount from './HomeCount/HomeCount'
import HomeTourPackages from './HomeTourPackages/HomeTourPackages'

const Home = () => {
  return (
    <div>
    <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeTourPackages/>
      <HomeCount/>
      
    </div>
  )
}

export default Home
