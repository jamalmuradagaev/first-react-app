import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import CarSection from "./CarSection/CarSection.jsx"
import DifferencesSection from "./DifferencesSection/DifferencesSection.jsx";
import IntroSection from "./IntroSection/IntroSection.jsx";
import TabsSection from "./TabsSection/TabsSection.jsx";
import FeedBackSection from "./FeedBackSection/FeedBackSection.jsx";
import EffectSection from './EffectSection/EffectSection.jsx'
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />

      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <CarSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && <FeedBackSection />}

        {tab === 'effect' && <EffectSection />}
      </main>

      <Footer />
    </>
  )
}

