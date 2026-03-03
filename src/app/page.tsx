import Contact from '@/component/contact/contact'
import CustomizeTripSection from '@/component/CustomizeTripSection/customizeTripSection'
import Experiences from '@/component/Experiences/experiences'
import FooterHero from '@/component/Footer/footer'
import Home from '@/component/Home/home'
import JourneySearch from '@/component/Journey/journey'
import LuxurySection from '@/component/luxury/luxuryPakaga'
import PlanTripSection from '@/component/PlanTripSection/planTripSection'
import Reviews from '@/component/Reviews/reviews'
import VacationHero from '@/component/VacationHero/vacationHero'
import WhyChampionsClub from '@/component/WhyChampionsClub/whyChampionClub'
import dynamic from 'next/dynamic'
import React from 'react'
// const Journey = dynamic(() => import('@/component/Journey/journey'), {
//   loading: () => <p>Loading Journey...</p>,
// })

function Page() {
  return (
    <div>
      <Home />
      <JourneySearch />
      <Experiences />
      <LuxurySection />
      <WhyChampionsClub />
      <PlanTripSection />
      <CustomizeTripSection />
      <VacationHero />
      <Reviews />
      <Contact />
      <FooterHero />
    </div>
  )
}

export default Page