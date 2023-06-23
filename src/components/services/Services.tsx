import Button from '../button/Button';

interface IServices {
  number: string;
  border: string;
  title: string;
}

const Services = ({ number, border, title }: IServices) => {
  const side =
    border === 'top'
      ? 'rounded-t-3xl'
      : border === 'bottom'
      ? 'rounded-b-3xl'
      : 'rounded-none';

  return (
    <div
      className={`mx-auto h-[300px] w-[95%] border border-stroke flex flex-col items-center justify-center 2xl:justify-between gap-5 md:gap-0 px-10 2xl:gap-10 ${side} bg-[#232325]/10 2xl:flex-row 2xl:h-[200px] `}
    >
      <div className="flex 2xl:hover:translate-x-10 transition-transform duration-1000">
        <span className="text-subtext pr-1">{number ? number : 'Unknown'}</span>
        <h1
          className="text-white text-[20px] 2xl:text-[80px] xl:text-[70px] md:text-[50px] font-black uppercase whitespace-nowrap 
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