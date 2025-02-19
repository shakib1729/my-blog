import BaseImage from 'next/image';

const Image = ({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) => (
  <figure className="flex flex-col items-center text-center">
    <BaseImage src={src} alt={alt} width={width} height={height} />
    {caption ? <figcaption className="mt-2 italic text-gray-600">{caption}</figcaption> : null}
  </figure>
);

export default Image;
