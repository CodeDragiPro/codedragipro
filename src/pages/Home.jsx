import React from 'react'
import SectionSeparator from '../components/SectionSeparator'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='md:mx-20 mx-8 font-montserrat'>
      <SectionSeparator text="une idée pourrait vous changer la vie"/>
      <Hero/>
      <SectionSeparator text="Services"/>
      <Services/>
    </div>
  )
}

export default Home
