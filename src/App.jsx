import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';

/**
 * Redirect /book route to /contact while preserving URL search parameters (e.g. ?room=...)
 */
function BookToContactRedirect() {
  const location = useLocation();
  const search = location.search ? `${location.search}&book=true` : '?book=true';
  return <Navigate to={`/contact${search}#reservation-form-card`} replace />;
}

// Statically imported for immediate first paint
import HomePage from './pages/home/HomePage';

// Lazy-loaded routes for ultra-fast initial bundle loading
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ResortFacilities = lazy(() => import('./pages/resort/ResortPages').then(m => ({ default: m.ResortFacilities })));
const RoomDetails = lazy(() => import('./pages/rooms/RoomsPages').then(m => ({ default: m.RoomDetails })));
const ExperiencesOverview = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.ExperiencesOverview })));
const SafariPage = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.SafariPage })));
const WildlifePage = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.WildlifePage })));
const NaturePage = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.NaturePage })));
const FamilyPage = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.FamilyPage })));
const CouplesPage = lazy(() => import('./pages/experiences/ExperiencesPages').then(m => ({ default: m.CouplesPage })));
const MasterEventsPage = lazy(() => import('./pages/events/EventsPage'));
const DiningPage = lazy(() => import('./pages/dining/DiningPage'));
const PenchSafariPage = lazy(() => import('./pages/pench/PenchSafariPage'));
const SillariGatePage = lazy(() => import('./pages/pench/PenchPages').then(m => ({ default: m.SillariGatePage })));
const ThingsToDoPage = lazy(() => import('./pages/pench/PenchPages').then(m => ({ default: m.ThingsToDoPage })));
const HowToReachPage = lazy(() => import('./pages/pench/PenchPages').then(m => ({ default: m.HowToReachPage })));
const BestTimeToVisitPage = lazy(() => import('./pages/pench/PenchPages').then(m => ({ default: m.BestTimeToVisitPage })));
const PackagesOverview = lazy(() => import('./pages/packages/PackagesPages').then(m => ({ default: m.PackagesOverview })));
const PackageDetails = lazy(() => import('./pages/packages/PackagesPages').then(m => ({ default: m.PackageDetails })));
const GalleryPage = lazy(() => import('./pages/gallery/GalleryPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));

/**
 * App Root Component
 * 
 * Configures the complete React Router multi-page architecture
 * for Go Flamingo Resort (Pench – Sillari Gate).
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* About & Resort */}
          <Route path="about" element={<AboutPage />} />
          <Route path="resort" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="resort/about" element={<Navigate to="/about" replace />} />
          <Route path="resort/facilities" element={<ResortFacilities />} />
          <Route path="resort/pool" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="resort/dining" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="facilities" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="amenities" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="stay/amenities" element={<Navigate to="/resort/facilities" replace />} />
          <Route path="stay/facilities" element={<Navigate to="/resort/facilities" replace />} />

          {/* Stay / Rooms Group — Direct category pages */}
          <Route path="rooms" element={<Navigate to="/stay/deluxe-rooms" replace />} />
          <Route path="stay" element={<Navigate to="/stay/deluxe-rooms" replace />} />
          <Route path="rooms/:slug" element={<RoomDetails />} />
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

          {/* Dedicated Pench Safari Hub */}
          <Route path="pench-safari" element={<PenchSafariPage />} />
          <Route path="pench/safari" element={<Navigate to="/pench-safari" replace />} />

          {/* Pench Destination Hub */}
          <Route path="pench" element={<Navigate to="/pench-safari" replace />} />
          <Route path="pench/sillari-gate" element={<SillariGatePage />} />
          <Route path="pench/safari-guide" element={<Navigate to="/pench-safari" replace />} />
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
          <Route path="faq" element={<Navigate to="/contact" replace />} />

          {/* Booking redirects directly to Unified Contact Page */}
          <Route path="book" element={<BookToContactRedirect />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
