interface IGrid {
  number: string;
  title: string;
  text: string;
}

const Grid = ({ number, title, text }: IGrid) => {
  return (
    <div className="text-white border-l-2 border-subtext w-[437px] h-[115px] flex flex-col justify-center items-start px-5 gap hover:border-maincolor transition-colors duration-500">
      <span className="text-subtext">{number ? number : 'Unknown'}</span>
      <h1>{title ? title : 'Unknown'}</h1>
      <p className="text-subtext">{text ? text : 'Unknown'}</p>
    </div>
  );
};

export default Grid;
