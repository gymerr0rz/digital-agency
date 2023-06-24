import Button from '../button/Button';

interface iShow {
  onClose: () => void;
}

const ShowNav = ({ onClose }: iShow) => {
  return (
    <div className="w-screen h-screen p-[50px] fixed z-[100] bg-[rgba(0,0,0,0.8)] backdrop-blur-sm ">
      <div className="flex justify-end items-center" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </div>
      <div className="flex-col gap-5 mt-10 font-medium text-white mb-10 flex justify-center items-center">
        <a href="#home">Home</a>
        <a href="#services">Service</a>
        <a href="#about">About</a>
      </div>
      <div className="flex justify-center items-center">
        <Button text="Get in Touch" to="#contact" arrow={true} />
      </div>
    </div>
  );
};

export default ShowNav;
