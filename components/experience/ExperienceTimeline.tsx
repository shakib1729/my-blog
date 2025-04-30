import TimelineNode from './TimelineNode';
import type { Experience } from '@/types';

const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No experiences to display</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-6 top-6 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full z-0" />
      {experiences.map((experience, index) => (
        <TimelineNode
          key={experience.id}
          title={experience.title}
          organization={experience.organization}
          location={experience.location}
          period={experience.period}
          description={experience.description}
          skills={experience.skills}
          isFirst={index === 0}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
