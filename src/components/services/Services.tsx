import Button from '../button/Button';

interface IServices {
  number: string;
  top: boolean;
  title: string;
}

const Services = ({ number, top, title }: IServices) => {
  const side = top ? 'rounded-t-3xl' : 'rounded-b-3xl';

  return (
    <div
      className={`mx-auto h-[200px] w-[1800px] border border-stroke flex items-center justify-between px-10 gap-10 ${side} bg-[#232325]/10`}
    >
      <div className="flex hover:translate-x-10 transition-transform duration-1000">
        <span className="text-subtext">{number ? number : 'Unknown'}</span>
        <h1
          className="text-white text-[96px] font-black uppercase whitespace-nowrap 
        "
        >
          {title ? title : 'Unknown'}
        </h1>
      </div>
      <div className="flex">
        <Button to="#examples" text="Examples" arrow={false} />
      </div>
    </div>
  );
};

export default Services;
