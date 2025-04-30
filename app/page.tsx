import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import ExternalLink from '@/components/ExternalLink';
import { Globe } from 'lucide-react';

import { experiences } from '@/data/experiences';

const Index = () => (
  <>
    <header className="p-4 text-center text-gray-600">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Globe className="h-5 w-5 text-blue-500" />
        <p className="italic">Explorer at heart, engineer by profession</p>
      </div>
      <p className="max-w-lg mx-auto">
        <RoughNotationGroup show>
          a full-stack software engineer curious to explore new things. Passionate about&nbsp;
          <RoughNotation type="highlight" color="#abf1f5" animationDelay={1000}>
            travel
          </RoughNotation>
          ,&nbsp;
          <RoughNotation type="highlight" color="#dfffb8" animationDelay={1000}>
            movies&nbsp;
          </RoughNotation>
          and&nbsp;
          <RoughNotation type="highlight" color="pink" animationDelay={1000}>
            tech
          </RoughNotation>
          . Find me on <ExternalLink href="https://www.linkedin.com/in/shakib-1729/" title="LinkedIn" />,{' '}
          <ExternalLink href="https://github.com/shakib1729" title="GitHub" /> or{' '}
          <ExternalLink href="https://www.instagram.com/shakib_ahmed_12" title="Instagram" />.
        </RoughNotationGroup>
      </p>
    </header>
    <main className="lg:p-4">
      <ExperienceTimeline experiences={experiences} />
    </main>
  </>
);

export default Index;
