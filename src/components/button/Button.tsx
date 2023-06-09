import Overlay from '../../assets/button.svg';

interface IProps {
  text: string;
  to: string;
  arrow: boolean;
}

const Button = ({ text, to, arrow }: IProps) => {
  return (
    <a href={to} className="relative group">
      <img src={Overlay} alt="" className="w-56 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black uppercase whitespace-nowrap flex items-center justify-center gap-2 text-white   ">
        {arrow ? (
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            className="group-hover:translate-x-[5px] duration-1000 transition-transform"
          >
            <path
              d="M1 5H7V1L14 8L7 15V11H1V5Z"
              stroke="#5C40C9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1H5C4.46957 1 3.96086 1.21071 3.58579 1.58579C3.21071 1.96086 3 2.46957 3 3V8C3 8.53043 2.78929 9.03914 2.41421 9.41421C2.03914 9.78929 1.53043 10 1 10C1.53043 10 2.03914 10.2107 2.41421 10.5858C2.78929 10.9609 3 11.4696 3 12V17C3 18.1 3.9 19 5 19H6"
              stroke="#5C40C9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V12C17 10.9 17.9 10 19 10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H14"
              stroke="#5C40C9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {text ? text : 'Hello'}
      </div>
    </a>
  );
};

export default Button;
