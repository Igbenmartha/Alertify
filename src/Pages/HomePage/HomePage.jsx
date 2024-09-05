import React from 'react'
import Hero from '../../Components/Hero/Hero'
import IncidentReporting from '../../Components/IncidentReprting/IncidentReporting'
import Features from '../../Components/Features/Features'
import InciWatch from '../../Components/InciWatch/InciWatch'
import Scenerio from '../../Components/Scenerio/Scenerio'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Scenerio/>

        <InciWatch/>
    </div>
  )
}

export default HomePage