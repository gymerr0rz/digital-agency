import * as Lucide from 'lucide-react';

interface IBoxes {
  title: string;
  text: string;
  icon: string;
}

const Boxes = ({ title, text, icon }: IBoxes) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 w-96  p-px dark:from-zinc-500 dark:via-zinc-900 dark:to-darker">
        <div className="relative flex h-full flex-col gap-6 rounded-2xl p-8 bg-[#080a0b]">
          {icon === 'info' ? (
            <Lucide.BadgeInfo
              color="#5c40c9"
              className="min-h-[2rem] min-w-[2rem]"
            />
          ) : icon === 'design' ? (
            <Lucide.Paintbrush
              color="#5c40c9"
              className="min-h-[2rem] min-w-[2rem]"
            />
          ) : icon === 'dev' ? (
            <Lucide.Code2
              color="#5c40c9"
              className="min-h-[2rem] min-w-[2rem]"
            />
          ) : (
            <Lucide.Shrub
              color="#5c40c9"
              className="min-h-[2rem] min-w-[2rem]"
            />
          )}
          <div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {title}
            </h4>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxes;
