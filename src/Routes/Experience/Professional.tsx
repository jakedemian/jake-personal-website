import React from 'react';
import { VStack } from '@chakra-ui/react';

import ProfessionalCard from 'src/Routes/Experience/ProfessionalCard';

const Professional: React.FC = () => {
  return (
    <VStack w="100%" pr={{ base: 0, lg: 2 }}>
      <ProfessionalCard
        {...{
          logoPath: '/img/synapse-studios-logo.png',
          companyName: 'Synapse Studios',
          jobTitle: 'Senior Software Developer',
          timeframeStart: 'Winter 2021',
          timeframeEnd: 'Present',
          linkHref: 'https://synapsestudios.com',
          linkAriaLabel: 'Synapse Studios website link',
          jobDescription:
            'Synapse Studios is a software development agency based in Tempe, AZ. I work' +
            ' full-time remote with a team of developers, product people,  and UI/UX' +
            ' designers to develop software solutions for businesses.',
        }}
      />
      <ProfessionalCard
        {...{
          logoPath: '/img/health-street-logo.png',
          companyName: 'Health Street',
          jobTitle: 'Software Developer',
          timeframeStart: 'Winter 2019',
          timeframeEnd: 'Winter 2021',
          linkHref: 'https://health-street.net',
          linkAriaLabel: 'Health Street website link',
          jobDescription:
            'Health Street is an intermediary that sets individuals and businesses up with ' +
            'drug screening services, background checking, and more.  I optimized, ' +
            'refactored, redesigned, and maintained large portions of the health-street.net website.',
        }}
      />
      <ProfessionalCard
        {...{
          logoPath: '/img/publicis-sapient-logo.png',
          companyName: 'Publicis Sapient',
          jobTitle: 'Software Developer',
          timeframeStart: 'Spring 2015',
          timeframeEnd: 'Winter 2019',
          linkHref: 'https://www.publicissapient.com/',
          linkAriaLabel: 'Publicis Sapient website link',
          jobDescription:
            'Publicis Sapient is an agency focused on providing software development services' +
            ' to businesses.  I worked with clients such as Sherwin-Williams and Luxottica.',
        }}
      />
      <ProfessionalCard
        {...{
          logoPath: '/img/steris-logo.png',
          companyName: 'STERIS Corp.',
          jobTitle: 'Computer Engineering Intern',
          timeframeStart: 'Fall 2013',
          timeframeEnd: 'Fall 2014',
          linkHref: 'https://www.steris.com/',
          linkAriaLabel: 'STERIS website link',
          jobDescription:
            'I did two stints of internship at STERIS as a part of my University co-op ' +
            'program.  At STERIS I primarily helped develop a surgical lighting system, working ' +
            'with both desktop and embedded software + hardware on a daily basis.',
        }}
      />
      <ProfessionalCard
        {...{
          logoPath: '/img/nanotronics-logo.png',
          companyName: 'Nanotronics',
          jobTitle: 'Software Engineering Intern',
          timeframeStart: 'Winter 2013',
          timeframeEnd: 'Summer 2013',
          linkHref: 'https://www.nanotronics.co/',
          linkAriaLabel: 'Nanotronics website link',
          jobDescription:
            'My first internship through my University co-op program.  Nanotronics builds advanced' +
            ' silicon wafer processing machines.  I worked on the nSpec scanner, interfacing ' +
            'with both the hardware and software side.',
        }}
      />
    </VStack>
  );
};

export default Professional;
