import React from 'react'
import Banner from '../../Components/Banner/Banner'
import PropularSkills from '../../Components/PopularSkills/PopularSkills'

export default function Home() {

  return (
    <div>
      <div className='h-[550px]mb-30 '>
        <Banner></Banner>
      </div>
      <div className='container mx-auto px-10'>
        <PopularSkills></PopularSkills>
      </div>
    </div>
  )
}