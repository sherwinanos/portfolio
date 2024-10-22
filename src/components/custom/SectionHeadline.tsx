

interface HeadlineInterface {
  eyebrow: string;
  headline: string;
  subHeadline: string;
}

interface HeadlineProps {
  data: HeadlineInterface;
}

const SectionHeadline: React.FC<HeadlineProps> = ({ data }) => {
  return (
    <div className="container mx-auto mb-12">
      <div className="text-center">
        <p className="uppercase tracking-widest">{data.eyebrow}</p>
        <h2 className="mt-0 mb-4 lg:mt-4 lg:mb-8">{data.headline}</h2>
        {data.subHeadline &&
          <p className="lg:w-1/2 lg:mx-auto px-4 lg:px-0">{data.subHeadline}</p>
        }
      </div>
    </div>
  );
};

export default SectionHeadline