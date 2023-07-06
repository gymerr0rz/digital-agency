interface IFeature {
  title: string;
}
const Pricing = () => {
  const Feature = ({ title }: IFeature) => {
    return (
      <li className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5c40c9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="min-w-[24px] min-h-[24px]"
        >
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        {title}
      </li>
    );
  };

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start text-white  gap-10  ">
      <div className="w-[350px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-10 shadow-md hover:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all duration-700">
        <div className="text-center">
          <h1 className=" text-[24px]">Basic Website</h1>
          <span className=" text-[48px] font-bold">£300</span>
          <p className="text-[14px]">
            Save 40% – <span className=" line-through">£500.00</span>
          </p>
        </div>
        <ul className="py-10 flex flex-col gap-5">
          <Feature title="1 Page" />
          <Feature title="40% Down Payment" />
          <Feature title="2 Day Completion" />
          <Feature title="Mobile Friendly" />
          <Feature title="Complete Design & Deployment" />
          <Feature title="Cross Browser Compatible" />
        </ul>
      </div>
      <div className="w-[350px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-10 shadow-md hover:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all duration-700">
        <div className="text-center">
          <h1 className=" text-[24px]">Standard Website</h1>
          <span className=" text-[48px] font-bold">£800</span>
          <p className="text-[14px]">
            Save 40% – <span className=" line-through">£1333.99</span>
          </p>
        </div>
        <ul className="py-10 flex flex-col gap-5">
          <Feature title="5 Pages" />
          <Feature title="Website Content Provided" />
          <Feature title="40% Down Payment" />
          <Feature title="1 Week Completion" />
          <Feature title="Mobile Friendly" />
          <Feature title="Complete Design & Deployment" />
          <Feature title="Cross Browser Compatible" />
          <Feature title="Domain/Hosting Purchase Walk Through" />
        </ul>
      </div>
      <div className="w-[350px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-10 shadow-md hover:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all duration-700z">
        <div className="text-center">
          <h1 className=" text-[24px]">Elite Website</h1>
          <span className=" text-[48px] font-bold">£1700</span>
          <p className="text-[14px]">
            Save 40% – <span className=" line-through">£2833.99</span>
          </p>
        </div>
        <ul className="py-10 flex flex-col gap-5">
          <Feature title="5-10 Pages" />
          <Feature title="SEO provided" />
          <Feature title="Website Content Provided" />
          <Feature title="40% Down Payment" />
          <Feature title="2 Week Completion" />
          <Feature title="Mobile Friendly" />
          <Feature title="Complete Design & Deployment" />
          <Feature title="Cross Browser Compatible" />
          <Feature title="Domain/Hosting Purchase Walk Through" />
          <Feature title="Free Domain Name" />
          <Feature title="Free 1 year Hosting" />
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
