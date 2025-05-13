import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';

type PortfolioCompany = {
  id: number;
  name: string;
  url: string;
  status?: 'acquired' | 'ipo' | 'active';
  category?: string;
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const companies: PortfolioCompany[] = [
    {
      id: 1,
      name: 'Dream Security',
      url: 'https://dreamgroup.com/',
      status: 'active',
      category: 'Security'
    },

    {
      id: 4,
      name: 'Forsight Robotics',
      url: 'https://www.forsightrobotics.com/',
      status: 'active',
      category: 'Robotics'
    },
    {
      id: 5,
      name: 'Deci',
      url: 'http://www.deci.ai/',
      status: 'acquired',
      category: 'AI'
    },
    {
      id: 6,
      name: 'Splitty',
      url: 'https://www.splitty.com',
      status: 'acquired',
      category: 'Travel'
    },
    {
      id: 7,
      name: 'Ondigo',
      url: '',
      status: 'acquired',
      category: 'Connectivity'
    },
    {
      id: 8,
      name: 'Laguna Health',
      url: 'https://www.lagunahealth.com/about-us',
      status: 'active',
      category: 'Health'
    },
    {
      id: 9,
      name: 'Antidot',
      url: 'https://www.antidot.net/',
      status: 'active',
      category: 'Security'
    },
    {
      id: 10,
      name: 'Rightbound',
      url: 'https://rightbound.io/',
      status: 'active',
      category: 'Sales'
    },
    {
      id: 11,
      name: 'Carbon Blue',
      url: 'https://carbonblue.cc/',
      status: 'active',
      category: 'Sustainability'
    },
    {
      id: 12,
      name: 'Agave',
      url: 'https://www.agaveapi.com/',
      status: 'active', 
      category: 'Construction'
    },
    {
      id: 13,
      name: 'Holisto',
      url: 'https://www.holisto.com/',
      status: 'acquired',
      category: 'Travel'
    },
    {
      id: 14,
      name: 'Remilk',
      url: 'https://remilk.com/',
      status: 'active',
      category: 'FoodTech'
    },
    {
      id: 15,
      name: 'Sensi.Ai',
      url: 'https://www.sensi.ai/',
      status: 'active',
      category: 'AI'
    },
    {
      id: 16,
      name: 'Moovex',
      url: 'https://www.movexii.com/en',
      status: 'acquired',
      category: 'Logistics'
    },
    {
      id: 17,
      name: 'Simplex',
      url: 'https://www.simplex.com/',
      status: 'acquired',
      category: 'Fintech'
    },
    {
      id: 18,
      name: 'Zoomd',
      url: 'https://zoomd.com/',
      status: 'ipo',
      category: 'Marketing'
    },
    {
      id: 19,
      name: 'Conobo AI',
      url: 'https://www.conbo.ai/',
      status: 'active',
      category: 'AI'
    },
    {
      id: 20,
      name: 'Stealth AI',
      url: '',
      status: 'active',
      category: 'AI'
    },
    {
      id: 21,
      name: 'Stealth AI - Infra',
      url: '',
      status: 'active',
      category: 'AI'
    },
  ];

  // Group companies by status
  const activeCompanies = companies.filter(company => company.status === 'active');
  const acquiredCompanies = companies.filter(company => company.status === 'acquired');
  const ipoCompanies = companies.filter(company => company.status === 'ipo');

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

  const CompanyCard = ({ company }: { company: PortfolioCompany }) => (
    <div className="animate-on-scroll opacity-0" style={{ animationDelay: `50ms` }}>
      <a
        href={company.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-blue-900/10 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:border-blue-400/30 hover:translate-y-[-5px] group"
      >
        <div className="flex items-center justify-start h-20 mb-4 relative overflow-hidden">
          {company.url && (
            <img
              src={generateLogoUrl(company.url)}
              alt={`${company.name} logo`}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/logo-placeholder.png';
              }}
            />
          )}
        </div>
        <h3 className="text-lg text-white mb-1 flex items-center">
          {company.name}
          {company.url && <ExternalLink className="w-4 h-4 ml-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400 mr-2">
            {company.category}
          </span>
          {company.status === 'acquired' && (
            <span className="text-xs px-2 py-1 rounded-full bg-green-600/20 text-green-400">
              Acquired
            </span>
          )}
          {company.status === 'ipo' && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-400">
              IPO
            </span>
          )}
        </div>
      </a>
    </div>
  );

  return (
    <Section id="portfolio" className="">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-on-scroll opacity-0">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Portfolio</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
            From early-stage startups to successful exits, we've partnered with exceptional founders building
            the future of AI, data, and security.
          </p>
        </div>
        
        {activeCompanies.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-light text-white mb-8 animate-on-scroll opacity-0">
              Active Investments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}
        
        {acquiredCompanies.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-light text-white mb-8 animate-on-scroll opacity-0">
              Acquired
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {acquiredCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}
        
        {ipoCompanies.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-light text-white mb-8 animate-on-scroll opacity-0">
              Public Companies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ipoCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio; 