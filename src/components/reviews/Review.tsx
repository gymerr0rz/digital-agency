interface IReview {
  image: string;
  text: string;
  customer: string;
}

const Review = ({ image, text, customer }: IReview) => {
  return (
    <div className="h-[300px] w-[1000px] border border-stroke flex justify-start items-start p-10 gap-5 overflow-hidden rounded-2xl relative">
      <img src={image} alt="Face" className="h-32 relative" />
      <img
        src={image}
        alt="Face"
        className="h-32 absolute blur-[100px] opacity-50"
      />
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-[#9F9F9F] w-96">{text ? text : 'Unknown'}</h1>
        <span className="text-stroke">{customer ? customer : 'Unknown'}</span>
      </div>
    </div>
  );
};

export default Review;
