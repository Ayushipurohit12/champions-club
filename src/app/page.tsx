import Experiences from '@/component/Experiences/experiences'
import Home from '@/component/Home/home'
import JourneySearch from '@/component/Journey/journey'
import LuxurySection from '@/component/luxury/luxuryPakaga'
import PlanTripSection from '@/component/PlanTripSection/planTripSection'
import WhyChampionsClub from '@/component/WhyChampionsClub/whyChampionClub'
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
      <LuxurySection />
      <WhyChampionsClub />
       <PlanTripSection />
    </div>
  )
}

export default Page