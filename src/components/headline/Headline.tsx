interface IHeadline {
  title: string;
}

const Headline = ({ title }: IHeadline) => {
  return (
    <div className="mx-auto w-[95%] relative px-5 overflow-hidden pb-5">
      <p className="text-white text-lg">{title ? title : 'Unknown'}</p>
      <span className="w-full absolute left-0 h-[1px] bottom-0 bg-stroke"></span>
    </div>
  );
};
export default Headline;
