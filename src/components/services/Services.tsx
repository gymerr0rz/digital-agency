import { useState } from 'react';
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

  const [showExamples, setShowExamples] = useState(false);

  const handleToggleExamples = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowExamples(!showExamples);
  };

  return (
    <div
      className={`mx-auto min-h-[300px] w-[95%] border border-stroke flex flex-col items-center justify-center 2xl:justify-between gap-5 md:gap-0 px-10 py-10 2xl:gap-10 ${side} bg-[#232325]/10 2xl:flex-row 2xl:min-h-[200px] overflow-hidden transition-all`}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full flex-col xl:flex-row">
          <div className="flex 2xl:hover:translate-x-10 transition-transform duration-1000 whitespace-nowrap justify-between ">
            <span className="text-subtext">{number ? number : 'Unknown'}</span>
            <h1 className="text-white text-[25px] lg:text-[60px] 2xl:text-[70px] xl:text-[60px] md:text-[45px] font-black uppercase">
              {title ? title : 'Unknown'}
            </h1>
          </div>
          <div className="flex" onClick={handleToggleExamples}>
            <Button to="" text="UPCOMING" arrow={false} />
          </div>
        </div>
        {/* {showExamples && (
          <div className="animate-fade  text-white">
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Services;
