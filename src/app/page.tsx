import Experiences from '@/component/Experiences/experiences'
import Home from '@/component/Home/home'
import JourneySearch from '@/component/Journey/journey'
import dynamic from 'next/dynamic'
import React from 'react'

const Journey = dynamic(() => import('@/component/Journey/journey'), {
  loading: () => <p>Loading Journey...</p>,
})

function Page() {
  return (
    <div>
      <Home />
      <JourneySearch />
      <Experiences />
    </div>
  )
}

export default Page