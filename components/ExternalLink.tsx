const ExternalLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
};

export default ExternalLink;
