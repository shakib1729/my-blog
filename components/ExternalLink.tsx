const ExternalLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline font-medium text-slate-900">
      {title}
    </a>
  );
};

export default ExternalLink;
