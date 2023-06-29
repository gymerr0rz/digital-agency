import Button from '../../components/button/Button';

interface IPlanModal {
  onClose: () => void;
}

const PlanModal = ({ onClose }: IPlanModal) => {
  return (
    <div className="fixed z-[200] w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
      <div className="plan-modal text-white border-2 border-[rgba(255,255,255,0.02)]  w-[500px]  backdrop-blur-lg rounded-lg p-5">
        <form action="" className="flex flex-col gap-5">
          <span className="flex justify-end items-center">
            <h1
              onClick={onClose}
              className="uppercase font-black cursor-pointer bg-[rgba(255,255,255,0.05)] w-10 h-10 flex items-center justify-center rounded-xl"
            >
              X
            </h1>
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>Name</b> (required)
            </label>
            <input
              type="text"
              placeholder="John"
              className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>Email</b> (required)
            </label>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="0123456789"
              className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>What Web Design Pack are you interested in?</b> (required)
            </label>
            <select className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border   cursor-pointer drop-shadow-md  w-72 duration-300 hover:bg-[rgba(255,255,255,0.1)] focus:bg-black">
              <option value="" disabled selected>
                Select...
              </option>
              <option value="basic">Basic Website</option>
              <option value="standard">Standard Website</option>
              <option value="elite">Elite Website</option>
            </select>
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>How did you find out about us?</b>
            </label>
            <input
              type="text"
              placeholder=""
              className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="" className="">
              <b>Upload Website plan.</b> (required)
            </label>
            <input
              type="text"
              placeholder=""
              className="px-2 rounded-md h-10 outline-none text-white bg-[rgba(0,0,0,0.3)] border"
            />
          </span>
          <div className="flex justify-center items-center p-5">
            <Button to="" text="Send" arrow={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanModal;
