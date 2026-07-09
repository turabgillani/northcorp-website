"use client";

import { SiteProvider, useSite } from "./SiteContext";
import Header from "./Header";
import Hero from "./Hero";
import ComplianceBand from "./ComplianceBand";
import Pitch from "./Pitch";
import VerticalsCarousel from "./VerticalsCarousel";
import CapabilityBoundaries from "./CapabilityBoundaries";
import Integrations from "./Integrations";
import WhyAgency from "./WhyAgency";
import Process from "./Process";
import About from "./About";
import ClosingCTA from "./ClosingCTA";
import Footer from "./Footer";
import CallDemoModal from "./CallDemoModal";
import BookingFormModal from "./BookingFormModal";

function HomeContent() {
  const { callDemo, bookingForm } = useSite();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ComplianceBand />
      <Pitch />
      <VerticalsCarousel />
      <CapabilityBoundaries />
      <Integrations />
      <WhyAgency />
      <Process />
      <About />
      <ClosingCTA />
      <Footer />
      <CallDemoModal callDemo={callDemo} />
      <BookingFormModal bookingForm={bookingForm} />
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteProvider>
      <HomeContent />
    </SiteProvider>
  );
}
