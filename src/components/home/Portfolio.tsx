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
    let imgClassName = 'object-contain max-h-full max-w-full';

    if (company.name === 'Ondigo') {
      logoSrc = '/images/logos/ondigo.png';
    } else if (company.name === 'Deci') {
      logoSrc = '/images/logos/deciai.png';
      imgClassName = 'object-contain h-8 w-auto';
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
          className="block bg-gradient-to-br from-gray-100/10 to-transparent backdrop-blur-sm border border-black/10 rounded-xl p-6 h-full transition-all duration-300 hover:border-black/30 hover:translate-y-[-5px] group"
        >
          <div className="flex items-center justify-start h-20 mb-4 relative overflow-hidden">
            {logoSrc && (
              <img
                src={logoSrc}
                alt={`${company.name} logo`}
                className={`${imgClassName} transition-all duration-300 filter grayscale group-hover:filter-none`}
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/logo-placeholder.png';
                }}
              />
            )}
          </div>
          <h3 className="text-lg text-black mb-1 flex items-center">
            {company.name}
            {company.url && <ExternalLink className="w-4 h-4 ml-1 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-500/10 text-gray-600 mr-2">
              {company.category}
            </span>
            {company.status === 'acquired' && (
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600">
                Acquired
              </span>
            )}
            {company.status === 'ipo' && (
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600">
                IPO
              </span>
            )}
          </div>
        </a>
      </div>
    );
  };

  return (
    <Section id="portfolio" className="">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-on-scroll opacity-0">
            Our <span className="text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Portfolio</span>
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
            From early-stage startups to successful exits, we've partnered with exceptional founders building
            the future of AI, data, and security.
          </p>
          <p className="text-black/60 max-w-3xl mx-auto text-center mt-4 animate-on-scroll opacity-0 animation-delay-500">
            Permissionless founders 😊
          </p>
        </div>
        
        {divisionOrder.map(divisionName => {
          const companiesInDivision = groupedCompanies[divisionName] || [];
          if (companiesInDivision.length === 0) return null;

          return (
            <div key={divisionName} className="mb-16">
              <h3 
                className="text-2xl font-light text-black mb-8 animate-on-scroll opacity-0"
                dangerouslySetInnerHTML={{ __html: divisionName }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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