
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

/**
 * Redirect /book route to /contact while preserving URL search parameters (e.g. ?room=...)
 */
function BookToContactRedirect() {
  const location = useLocation();
  const search = location.search ? `${location.search}&book=true` : '?book=true';
  return <Navigate to={`/contact${search}#reservation-form-card`} replace />;
}

// Page components
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import {
  ResortOverview,
  ResortAbout,
  ResortFacilities,
  ResortPool,
  ResortDining,
} from './pages/resort/ResortPages';
import { RoomsOverview, RoomDetails } from './pages/rooms/RoomsPages';
import {
  ExperiencesOverview,
  SafariPage,
  WildlifePage,
  NaturePage,
  FamilyPage,
  CouplesPage,
} from './pages/experiences/ExperiencesPages';
import {
  WeddingsOverview,
  CelebrationsPage,
  EventsPage,
} from './pages/weddings/WeddingsPages';
import MasterEventsPage from './pages/events/EventsPage';
import {
  CorporateOverview,
  RetreatsPage,
  MeetingsPage,
} from './pages/corporate/CorporatePages';
import DiningPage from './pages/dining/DiningPage';
import {
  PenchOverview,
  SillariGatePage,
  SafariGuidePage,
  ThingsToDoPage,
  HowToReachPage,
  BestTimeToVisitPage,
} from './pages/pench/PenchPages';
import { PackagesOverview, PackageDetails } from './pages/packages/PackagesPages';
import GalleryPage from './pages/gallery/GalleryPage';
import ContactPage from './pages/contact/ContactPage';
import BookPage from './pages/book/BookPage';

/**
 * App Root Component
 * 
 * Configures the complete React Router multi-page architecture
 * for Go Flamingo Resort (Pench – Sillari Gate).
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* About & Resort */}
          <Route path="about" element={<AboutPage />} />
          <Route path="resort" element={<AboutPage />} />
          <Route path="resort/about" element={<Navigate to="/about" replace />} />
          <Route path="resort/facilities" element={<ResortFacilities />} />
          <Route path="resort/pool" element={<ResortPool />} />
          <Route path="resort/dining" element={<ResortDining />} />

          {/* Stay / Rooms Group */}
          <Route path="rooms" element={<RoomsOverview />} />
          <Route path="rooms/:slug" element={<RoomDetails />} />
          <Route path="stay" element={<RoomsOverview />} />
          <Route path="stay/:slug" element={<RoomDetails />} />

          {/* Experiences Group */}
          <Route path="experiences" element={<ExperiencesOverview />} />
          <Route path="experiences/safari" element={<SafariPage />} />
          <Route path="experiences/wildlife" element={<WildlifePage />} />
          <Route path="experiences/nature" element={<NaturePage />} />
          <Route path="experiences/family" element={<FamilyPage />} />
          <Route path="experiences/couples" element={<CouplesPage />} />

          {/* Events & Celebrations (5.1 Weddings, 5.2 Corporate, 5.3 Conferences, 5.4 Social Celebrations) */}
          <Route path="events" element={<MasterEventsPage />} />
          <Route path="weddings" element={<MasterEventsPage />} />
          <Route path="weddings/celebrations" element={<MasterEventsPage />} />
          <Route path="weddings/events" element={<MasterEventsPage />} />
          <Route path="corporate" element={<MasterEventsPage />} />
          <Route path="corporate/retreats" element={<MasterEventsPage />} />
          <Route path="corporate/meetings" element={<MasterEventsPage />} />

          {/* Dedicated Dining Page */}
          <Route path="dining" element={<DiningPage />} />

          {/* Pench Destination Hub */}
          <Route path="pench" element={<PenchOverview />} />
          <Route path="pench/sillari-gate" element={<SillariGatePage />} />
          <Route path="pench/safari-guide" element={<SafariGuidePage />} />
          <Route path="pench/things-to-do" element={<ThingsToDoPage />} />
          <Route path="pench/how-to-reach" element={<HowToReachPage />} />
          <Route path="pench/best-time-to-visit" element={<BestTimeToVisitPage />} />

          {/* Packages Group */}
          <Route path="packages" element={<PackagesOverview />} />
          <Route path="packages/:slug" element={<PackageDetails />} />

          {/* Gallery */}
          <Route path="gallery" element={<GalleryPage />} />

          {/* Contact & Unified Direct Reservations */}
          <Route path="contact" element={<ContactPage />} />

          {/* Booking redirects directly to Unified Contact Page */}
          <Route path="book" element={<BookToContactRedirect />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
