import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { Linkedin } from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  title: string;
  linkedin: string;
  image: string;
};

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Avishag Bohbot',
      title: 'Founder Velocity X',
      linkedin: 'https://www.linkedin.com/in/avishagbohbot/',
      image: '/images/team/avishag.jpeg'
    },
    {
      id: 2,
      name: 'Tal Fialkow',
      title: 'Head of Ai Dream Security, Operator @ Velocity x',
      linkedin: 'https://www.linkedin.com/in/tal-fialkow-486b8455/',
      image: '/images/team/tal_fialkow.jpg'
    },
    {
      id: 3,
      name: 'Itzik Polad',
      title: 'Chief Data Officer @ L-Sport Venture Partner Velocity X',
      linkedin: 'https://www.linkedin.com/in/itzik-polad/',
      image: '/images/team/itzik.png'
    },
    {
      id: 4,
      name: 'Gadi Lifshitz',
      title: 'Engineering Manager Meta, Operator Velocity X',
      linkedin: 'https://www.linkedin.com/in/lgadi/',
      image: '/images/team/gadi_lifshitz.png'
    },
    {
      id: 5,
      name: 'Barak Ben Rachel',
      title: 'Ex Armis, Operator Velocity X',
      linkedin: 'https://www.linkedin.com/in/barakbr/',
      image: '/images/team/barak.png'
    },
    {
      id: 6,
      name: 'Alon Boxiner',
      title: 'Founder Eva, Ex Checkpoint, Operator @ Velocity x',
      linkedin: 'https://www.linkedin.com/in/alon-boxiner-a1a713b4/',
      image: '/images/team/alon_boxiner.jpg'
    },
    {
      id: 7,
      name: 'Keren Ben Zvi',
      title: 'CDO PayU',
      linkedin: 'https://www.linkedin.com/in/keren-ben-zvi-data/',
      image: '/images/team/keren.png'
    },
    {
      id: 8,
      name: 'Victor Shafran',
      title: 'Post Exit Founder- Databnd.ai, Operator VelocityX',
      linkedin: 'https://www.linkedin.com/in/victor-shafran-88b63b3/',
      image: '/images/team/victor_shafran.png'
    },
    {
      id: 9,
      name: 'Adi Glasman',
      title: 'VP Engineering & Data @ Zendesk, Operator Velocity X',
      linkedin: 'https://www.linkedin.com/in/glasman/',
      image: '/images/team/adi.png'
    },
    {
      id: 10,
      name: 'Liat Ashkenazi',
      title: 'Head of Data @ Artlist, Operator at Velocity X',
      linkedin: 'https://www.linkedin.com/in/liat-ashkenazi-2296a722/',
      image: '/images/team/liat_ashkenazi.png'
    },
    {
      id: 11,
      name: 'Daniella Gutlansky',
      title: 'Senior Product Management @Cruise, Operator Velocity X',
      linkedin: 'https://www.linkedin.com/in/daniella-gutlansky/',
      image: '/images/team/daniella_gutlansk.png'
    },
    {
      id: 12,
      name: 'Shmuel Milavski',
      title: 'Business Intelligence Manager at WalkMe',
      linkedin: 'https://www.linkedin.com/in/shmuel-milavski-7337673a/',
      image: '/images/team/shmuel.jpg'
    },
    {
      id: 13,
      name: 'Eti Fakiri',
      title: 'Director of Product Management Meta, Operator VelocityX',
      linkedin: 'https://www.linkedin.com/in/estherfakiri/',
      image: '/images/team/eti_fakiri.png'
    }
  ];

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

  return (
    <Section id="team" className="bg-gradient-to-b from-black to-gray-900">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-on-scroll opacity-0">
            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Team</span> Behind Your Team
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
            Operators, data executives, and post-exit founders with deep expertise in AI, data, and security.
            We've been there, built that, and now we're helping the next generation of founders succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group animate-on-scroll opacity-0"
              style={{ animationDelay: `100ms` }}
            >
              <div className="bg-gradient-to-br from-blue-900/10 to-transparent backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-blue-400/30 group-hover:translate-y-[-5px]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white font-medium mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{member.title}</p>
                  </div>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0 animation-delay-1200">
          <p className="text-white/70">
            Our team brings decades of experience from leading companies including Meta, Google, Zendesk, and successful startups.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Team;