import React, { useRef } from 'react';
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
      title: 'Head of AI Dream Security, Operator @ Velocity x',
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
      id: 9,
      name: 'Adi Glasman',
      title: 'VP Engineering & Data @ Zendesk, Operator Velocity X',
      linkedin: 'https://www.linkedin.com/in/glasman/',
      image: '/images/team/adi.png'
    },
    {
      id: 8,
      name: 'Victor Shafran',
      title: 'Post Exit Founder- Databnd.ai, Operator VelocityX',
      linkedin: 'https://www.linkedin.com/in/victor-shafran-88b63b3/',
      image: '/images/team/victor_shafran.png'
    },
    {
      id: 7,
      name: 'Keren Ben Zvi',
      title: 'CDO PayU',
      linkedin: 'https://www.linkedin.com/in/keren-ben-zvi-data/',
      image: '/images/team/keren.png'
    },
    {
      id: 13,
      name: 'Eti Fakiri',
      title: 'Director of Product Management @ Meta Superintelligence Labs',
      linkedin: 'https://www.linkedin.com/in/estherfakiri/',
      image: '/images/team/eti_fakiri.png'
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
      id: 12,
      name: 'Shmuel Milavski',
      title: 'Business Intelligence Manager at WalkMe',
      linkedin: 'https://www.linkedin.com/in/shmuel-milavski-7337673a/',
      image: '/images/team/shmuel.jpg'
    },
    {
      id: 6,
      name: 'Alon Boxiner',
      title: 'Founder Eva, Ex Checkpoint, Operator @ Velocity x',
      linkedin: 'https://www.linkedin.com/in/alon-boxiner-a1a713b4/',
      image: '/images/team/alon_boxiner.jpg'
    }
  ];

  return (
    <Section id="team" className="bg-white relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-black mb-6 md:mb-8 vintage-text">
            Meet the <span className="font-normal">Team Behind Your Team</span>
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto leading-relaxed text-base md:text-lg px-4 md:px-0">
            AI, data, and infra operators from Meta, Google, Microsoft, and beyond—built, scaled, exited. Now backing the next wave.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group"
            >
              <div className="vintage-border vintage-shadow bg-white rounded-lg overflow-hidden h-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter contrast-110 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                    <h3 className="text-xs sm:text-sm md:text-base text-white font-light mb-1 vintage-text leading-tight">{member.name}</h3>
                    <p className="text-white/95 text-xs leading-tight line-clamp-2 sm:line-clamp-3">{member.title}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 text-black/80 p-2 sm:p-2.5 rounded-full backdrop-blur-sm shadow-lg touch-target group/linkedin"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;