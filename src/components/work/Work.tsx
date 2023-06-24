const Work = () => {
  return (
    <div className="w-full md:block flex justify-center md:display items-center">
      <div className="flex flex-col justify-around text-white relative whitespace-nowrap md:flex-row gap-5 md:gap-0">
        <div className="absolute w-[75%] bg-maincolor h-2 top-1/2 left-[68px] rotate-90 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 md:left-auto md:rotate-0 -z-10"></div>
        <div className="flex flex-row md:flex-col items-center justify-start gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
          </svg>
          <span className="h-12 w-12 bg-maincolor text-xl rounded-full flex items-center justify-center shadow-2xl">
            1
          </span>
          <p>Speak To Me</p>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-start gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
            <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
            <path d="M14.5 17.5 4.5 15" />
          </svg>
          <span className="h-12 w-12 bg-maincolor text-xl rounded-full flex items-center justify-center shadow-2xl">
            2
          </span>
          <p>We Design Your Website</p>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-start gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="h-12 w-12 bg-maincolor text-xl rounded-full flex items-center justify-center shadow-2xl">
            3
          </span>
          <p>You Approve</p>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-start gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
            <path d="M17.64 15 22 10.64" />
            <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
          </svg>
          <span className="h-12 w-12 bg-maincolor text-xl rounded-full flex items-center justify-center shadow-2xl">
            4
          </span>
          <p>We Build Your Website</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
