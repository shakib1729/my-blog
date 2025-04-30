import { MapPin } from 'lucide-react';
import type { Experience } from '@/types';

const TimelineNode = ({
  title,
  organization,
  location,
  period,
  description,
  skills = [],
  isFirst = false,
  isLast = false,
}: Omit<Experience, 'id'> & {
  isFirst: boolean;
  isLast: boolean;
}) => {
  return (
    <div className="flex mb-8 last:mb-0">
      <div className="relative z-10 mr-4">
        <div
          className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center ${
            isFirst ? 'bg-blue-500' : isLast ? 'bg-teal-500' : 'bg-gradient-to-br from-blue-400 to-teal-400'
          }`}
        >
          <MapPin className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-sm border-l-2 border-blue-100 p-4 transition-all hover:shadow-md">
        <div className="flex flex-col">
          <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-center">
            <h3 className="font-medium text-gray-800">{title}</h3>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full mt-1 sm:mt-0 inline-block sm:w-auto w-fit">
              {period}
            </span>
          </div>
          <span className="text-sm text-teal-600 mb-2">
            {organization} • {location}
          </span>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-1">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineNode;
