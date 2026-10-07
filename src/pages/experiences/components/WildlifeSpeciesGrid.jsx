import React, { useState } from 'react';
import { Badge, Heading, Text } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

export default function WildlifeSpeciesGrid({ predators = [], herbivores = [], birdlife, className = '' }) {
  const [activeTab, setActiveTab] = useState('predators');

  const tabs = [
    { id: 'predators', label: 'Apex Predators' },
    { id: 'herbivores', label: 'Herbivores & Mammals' },
    { id: 'birds', label: 'Avian Life (~310 Species)' },
  ];

  // Verified image mapping for herbivores
  const herbivoreImages = {
    'Gaur (Indian Bison)': IMAGES.hero.pench,
    'Chital (Spotted Deer)': IMAGES.wildlife.spottedDeer,
    'Sambar Deer': IMAGES.wildlife.forestCanopy,
    'Sloth Bear': IMAGES.home.resort,
  };

  return (
    <div className={cn('space-y-8 sm:space-y-10', className)}>
      {/* Category Selection Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-5 sm:px-7 py-2.5 sm:py-3 rounded-[3px] text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                isActive
                  ? 'bg-forest-deep text-ivory shadow-md ring-1 ring-gold/40'
                  : 'bg-ivory-pure border border-sand/40 text-charcoal-muted hover:text-forest-deep hover:border-gold/50'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Apex Predators */}
      {activeTab === 'predators' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {predators.map((pred, idx) => (
            <div
              key={pred.name || idx}
              className="group overflow-hidden rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/70 hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              {pred.image && (
                <div className="relative aspect-[16/11] overflow-hidden bg-forest-dark">
                  <img
                    src={pred.image}
                    alt={pred.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute top-3.5 right-3.5">
                    <Badge variant="gold" size="sm" className="font-semibold text-[0.625rem] tracking-wider uppercase">
                      {pred.tag}
                    </Badge>
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2.5">
                    <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-xl font-semibold mb-0.5">
                      {pred.name}
                    </Heading>
                    <span className="text-[0.75rem] italic text-charcoal-muted font-serif block">
                      {pred.scientific}
                    </span>
                  </div>
                  <Text variant="caption" className="text-charcoal/80 text-xs sm:text-[0.8125rem] leading-relaxed font-light">
                    {pred.desc}
                  </Text>
                </div>
                <div className="mt-5 pt-4 border-t border-sand/20 flex items-center justify-between text-[0.6875rem] text-charcoal-muted uppercase tracking-wider font-semibold">
                  <span>Pench Heartland</span>
                  <span className="text-gold">Native Fauna</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Herbivores & Mammals */}
      {activeTab === 'herbivores' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {herbivores.map((herb, idx) => (
            <div
              key={herb.name || idx}
              className="group overflow-hidden rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark">
                <img
                  src={herbivoreImages[herb.name] || IMAGES.wildlife.spottedDeer}
                  alt={herb.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[0.65rem] uppercase tracking-wider text-sand-light font-bold">
                    Pench Wildlife
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg font-semibold mb-0.5">
                    {herb.name}
                  </Heading>
                  <span className="text-[0.7rem] italic text-charcoal-muted font-serif block mb-3">
                    {herb.scientific}
                  </span>
                  <Text variant="caption" className="text-charcoal/80 text-xs leading-relaxed font-light">
                    {herb.desc}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Avian Highlights (~310 Species) */}
      {activeTab === 'birds' && birdlife && (
        <div className="space-y-6">
          {/* Birding Hero Banner */}
          <div className="relative overflow-hidden rounded-[3px] bg-forest-dark text-ivory border border-sand/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src={IMAGES.wildlife.birding}
                  alt="Birdwatching in Pench National Park"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-dark/90 lg:block hidden" />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 lg:pr-10 space-y-3">
                <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                  Important Bird Area (IBA)
                </Badge>
                <Heading as="h4" variant="title" font="serif" className="text-ivory text-2xl sm:text-3xl font-semibold">
                  {birdlife.title}
                </Heading>
                <p className="text-xs sm:text-sm text-sand/85 leading-relaxed font-light">
                  {birdlife.description}
                </p>
                <p className="text-xs text-gold-light italic">
                  *Best birding season runs from October to March when winter migrants join resident riverine and canopy species.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {birdlife.groups?.map((group, idx) => (
              <div
                key={group.category || idx}
                className="p-6 sm:p-7 rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/60 transition-all duration-300"
              >
                <Heading as="h5" variant="title" font="serif" className="text-forest-deep text-lg font-semibold mb-4 pb-3 border-b border-sand/20">
                  {group.category}
                </Heading>
                <ul className="space-y-2.5">
                  {group.species?.map((sp, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-[0.8125rem] text-charcoal/85 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{sp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
