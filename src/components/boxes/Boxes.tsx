import * as Lucide from 'lucide-react';

interface IBoxes {
  title: string;
  subtext: string;
  text: string;
  icon: string;
}

const Boxes = ({ title, subtext, text, icon }: IBoxes) => {
  return (
    <div className="w-[422px] h-[651px] bg-[#232325]/10 border border-stroke rounded-xl p-10 flex overflow-hidden flex-col gap-5 relative">
      <span className="min-h-[4rem] min-w-[4rem] bg-maincolor absolute -z-10 blur-3xl "></span>
      {icon === 'info' ? (
        <Lucide.BadgeInfo
          size={50}
          color="#5c40c9"
          className="min-h-[4rem] min-w-[4rem]"
        />
      ) : icon === 'design' ? (
        <Lucide.Paintbrush
          size={50}
          color="#5c40c9"
          className="min-h-[4rem] min-w-[4rem]"
        />
      ) : icon === 'dev' ? (
        <Lucide.Code2
          size={50}
          color="#5c40c9"
          className="min-h-[4rem] min-w-[4rem]"
        />
      ) : (
        <Lucide.Shrub
          size={50}
          color="#5c40c9"
          className="min-h-[4rem] min-w-[4rem]"
        />
      )}

      <div>
        <h1 className="text-white font-medium leading-8">
          {title ? title : 'Unknown'}
        </h1>
        <br />
        <h1 className="text-white font-normal leading-8 text-sm">
          {text ? text : 'Unknown'}
          <b className="text-subtext font-normal text-sm"> {subtext}</b>
        </h1>
      </div>
    </div>
  );
};

export default Boxes;
