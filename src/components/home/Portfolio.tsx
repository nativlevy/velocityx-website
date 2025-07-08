import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';

type PortfolioCompany = {
  id: number;
  name: string;
  url: string;
  status?: 'acquired' | 'ipo' | 'active';
  category?: string;
  division: string;
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const companies: PortfolioCompany[] = [
    {
      id: 1,
      name: 'Dream Security',
      url: 'https://dreamgroup.com/',
      status: 'active',
      category: 'Security',
      division: 'Velocity<sup>x</sup>',
    },
    {
      id: 4,
      name: 'Forsight Robotics',
      url: 'https://www.forsightrobotics.com/',
      status: 'active',
      category: 'Robotics',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 5,
      name: 'Deci',
      url: 'http://www.deci.ai/',
      status: 'acquired',
      category: 'AI',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 6,
      name: 'Holisto',
      url: 'https://www.holisto.com/',
      status: 'acquired',
      category: 'Travel',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 7,
      name: 'Ondigo',
      url: '',
      status: 'acquired',
      category: 'Connectivity',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 8,
      name: 'Laguna Health',
      url: 'https://www.lagunahealth.com/about-us',
      status: 'active',
      category: 'Health',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 9,
      name: 'Antidot',
      url: 'https://www.antidot.net/',
      status: 'active',
      category: 'Fintech, AI',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 10,
      name: 'Rightbound',
      url: 'https://rightbound.io/',
      status: 'active',
      category: 'Sales',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 11,
      name: 'Carbon Blue',
      url: 'https://carbonblue.cc/',
      status: 'active',
      category: 'CDR',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 12,
      name: 'Agave',
      url: 'https://www.agavehealth.com/',
      status: 'active',
      category: 'Mental Health',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 14,
      name: 'Remilk',
      url: 'https://remilk.com/',
      status: 'active',
      category: 'FoodTech',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 15,
      name: 'Calmigo',
      url: 'https://calmigo.com/',
      status: 'active',
      category: 'Wellness',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 16,
      name: 'Moovex',
      url: 'https://www.movexii.com/en',
      status: 'acquired',
      category: 'Logistics',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 17,
      name: 'Simplex',
      url: 'https://www.simplex.com/',
      status: 'acquired',
      category: 'Fintech',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 18,
      name: 'Zoomd',
      url: 'https://zoomd.com/',
      status: 'ipo',
      category: 'Marketing',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 19,
      name: 'Conbo',
      url: 'https://www.conbo.ai/',
      status: 'active',
      category: 'AI',
      division: 'GP Portfolio [Avishag]',
    },
    {
      id: 20,
      name: 'Stealth AI',
      url: '',
      status: 'active',
      category: 'AI',
      division: 'Velocity<sup>x</sup>',
    },
    {
      id: 22,
      name: 'Troup.Ai [Stealth] Infra A',
      url: '',
      status: 'active',
      category: 'Infra AI',
      division: 'Velocity<sup>x</sup>',
    },
    {
      id: 23,
      name: 'Oz [stealth] EW',
      url: '',
      status: 'active',
      category: 'EW',
      division: 'Velocity<sup>x</sup>',
    },
    {
      id: 24,
      name: 'Stealth AI - Agent',
      url: '',
      status: 'active',
      category: 'AI',
      division: 'Velocity<sup>x</sup>',
    },
  ];

  // Group companies by new divisions
  const divisionOrder = ['Velocity<sup>x</sup>', 'GP Portfolio [Avishag]'];
  const groupedCompanies = companies.reduce((acc, company) => {
    const divisionName = company.division;
    if (!acc[divisionName]) {
      acc[divisionName] = [];
    }
    acc[divisionName].push(company);
    return acc;
  }, {} as Record<string, PortfolioCompany[]>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const generateLogoUrl = (url: string) => {
    // Extract domain from URL
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    domain = domain.split('/')[0];
    return `https://cdn.brandfetch.io/${domain}/w/400/h/400?c=1idjQoo38323pC02ZXr`;
  };

  const CompanyCard = ({ company }: { company: PortfolioCompany }) => {
    let logoSrc: string | undefined = undefined;
    let imgClassName = 'object-contain max-h-full max-w-full filter contrast-110 brightness-90';

    if (company.name === 'Ondigo') {
      logoSrc = '/images/logos/ondigo.png';
    } else if (company.name === 'Deci') {
      logoSrc = '/images/logos/deciai.png';
      imgClassName = 'object-contain h-6 sm:h-8 md:h-10 w-auto filter contrast-110 brightness-90';
    } else if (company.name === 'Oz [stealth] EW') {
      logoSrc = '/images/logos/LOGO_OZ.jpg';
    } else if (company.url) {
      logoSrc = generateLogoUrl(company.url);
    }

    return (
      <div className="animate-on-scroll opacity-0" style={{ animationDelay: `50ms` }}>
        <a
          href={company.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block vintage-border vintage-shadow bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 h-full transition-all duration-700 hover:shadow-lg group"
        >
          <div className="flex flex-col h-full">
            {/* Logo section */}
            <div className="flex items-center justify-start h-12 sm:h-14 md:h-16 lg:h-16 mb-2 sm:mb-3 relative overflow-hidden">
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt={`${company.name} logo`}
                  className={`${imgClassName} transition-all duration-500 group-hover:brightness-100`}
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/logo-placeholder.png';
                  }}
                />
              )}
            </div>
            
            {/* Company name */}
            <h3 className="text-sm sm:text-base md:text-lg text-black mb-2 flex items-start vintage-text group-hover:text-black/90 transition-colors leading-tight flex-grow">
              <span className="flex-1 line-clamp-2">{company.name}</span>
              {company.url && <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />}
            </h3>
            
            {/* Tags section - aligned to bottom */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-auto">
              <span className="inline-flex items-center justify-center text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/5 text-black/70 vintage-text tracking-wider leading-none">
                {company.category}
              </span>
              {company.status === 'acquired' && (
                <span className="inline-flex items-center justify-center text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/10 text-black/80 vintage-text tracking-wider leading-none">
                  Acquired
                </span>
              )}
              {company.status === 'ipo' && (
                <span className="inline-flex items-center justify-center text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/10 text-black/80 vintage-text tracking-wider leading-none">
                  IPO
                </span>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <Section id="portfolio" className="bg-gray-50 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-black mb-6 md:mb-8 animate-on-scroll opacity-0 vintage-text">
          <span className="font-normal">Portfolio</span>
          </h2>
        </div>
        
        {divisionOrder.map(divisionName => {
          const companiesInDivision = groupedCompanies[divisionName] || [];
          if (companiesInDivision.length === 0) return null;

          return (
            <div key={divisionName} className="mb-12 md:mb-20">
              <h3 
                className="text-xl sm:text-2xl font-thin text-black mb-6 sm:mb-8 md:mb-10 animate-on-scroll opacity-0 vintage-text px-4 md:px-0"
                dangerouslySetInnerHTML={{ __html: divisionName }}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {companiesInDivision.map(company => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Portfolio; 