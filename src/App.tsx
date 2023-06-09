import './App.css';
import Boxes from './components/boxes/Boxes';
import Button from './components/button/Button';
import Grid from './components/grid/Grid';
import Headline from './components/headline/Headline';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <section className="h-screen w-full grid grid-rows-3">
        <nav className="h-32 w-full  overflow-hidden grid grid-cols-3 text-white items-center px-[100px]">
          <svg
            className=" cursor-pointer"
            width="151"
            height="89"
            viewBox="0 0 151 89"
            fill="none"
          >
            <path
              d="M51.5 66H45.3125V42.5625H51.5V51.7812H59.6719V42.5625H65.8594V66H59.6719V57.1719H51.5V66ZM89.2812 66H82.4375L77.9688 58.25H75.1875V66H69V42.5625H78.4375C80.4688 42.5625 82.1979 42.8698 83.625 43.4844C85.0521 44.099 86.1406 44.9948 86.8906 46.1719C87.651 47.3385 88.0312 48.75 88.0312 50.4062C88.0312 51.9583 87.6979 53.2969 87.0312 54.4219C86.3646 55.5469 85.401 56.4323 84.1406 57.0781L89.2812 66ZM75.1875 53.4844H77.9531C79.1927 53.4844 80.125 53.2552 80.75 52.7969C81.3854 52.3281 81.7031 51.6354 81.7031 50.7188C81.7031 49.8021 81.3854 49.1146 80.75 48.6562C80.125 48.1875 79.1927 47.9531 77.9531 47.9531H75.1875V53.4844ZM97.3438 42.5625V66H91.1562V42.5625H97.3438ZM114.703 66H108.219L99.0625 42.5625H105.547L111.453 58.8125L117.359 42.5625H123.844L114.703 66ZM125.562 66V42.5625H141.188V47.9531H131.75V51.5781H140.562V56.9688H131.75V60.6094H141.344V66H125.562ZM146.656 66.3125C145.906 66.3125 145.302 66.0833 144.844 65.625C144.385 65.1667 144.156 64.5625 144.156 63.8125C144.156 63.0625 144.385 62.4583 144.844 62C145.302 61.5417 145.906 61.3125 146.656 61.3125C147.406 61.3125 148.01 61.5417 148.469 62C148.927 62.4583 149.156 63.0625 149.156 63.8125C149.156 64.5625 148.927 65.1667 148.469 65.625C148.01 66.0833 147.406 66.3125 146.656 66.3125Z"
              fill="white"
            />
            <path
              d="M30.2036 67.6448L19.3105 61.7727L36.4372 30.0011L24.994 23.8326L30.1097 14.3423L63.8894 32.5516L58.7736 42.0418L47.3303 35.8732L30.2036 67.6448Z"
              fill="#5C40C9"
            />
          </svg>
          <div className="flex gap-10 font-medium justify-self-center">
            <a href="#home">Home</a>
            <a href="#services">Service</a>
            <a href="#about">About</a>
          </div>
          <div className="justify-self-end">
            <Button text="Get in Touch" to="#contact" arrow={true} />
          </div>
          <span className="w-[90vw] h-[1px] bottom-0 bg-stroke"></span>
        </nav>
        <div className="w-full justify-self-center">
          <div className="flex flex-col text-white text-center relative">
            <div className="h-32 w-64  bg-maincolor absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-[99] blur-[200px] "></div>
            <p className="text-maincolor">#1 Best Digital Agency</p>
            <h1 className="text-[96px] font-black w-[1200px] mx-auto leading-[116px]">
              INNOVATIVE SOLUTIONS FOR MODERN BRANDS
            </h1>
            <p className="w-[800px] mx-auto text-subtext">
              At Creative Solutions, we are a full-service creative agency
              dedicated to helping modern brand succeed in today’s fast-paced
              and competitive market.
            </p>
          </div>
        </div>
        <div className="pt-[150px] flex justify-center">
          <Grid
            number="01"
            title="Thrive development agency"
            text="for some of the world's top B2B unicorns"
          />
          <Grid
            number="02"
            title="Thrive development agency"
            text="for some of the world's top B2B unicorns"
          />
          <Grid
            number="03"
            title="Thrive development agency"
            text="for some of the world's top B2B unicorns"
          />
          <Grid
            number="04"
            title="Thrive development agency"
            text="for some of the world's top B2B unicorns"
          />
        </div>
      </section>
      <section id="services">
        <div>
          <Headline title="Services" />
          <div className="pt-10">
            <Services title="Website Development" top={true} number="01" />
            <Services title="UI/UX Design" top={false} number="02" />
          </div>
        </div>
        <div className="pt-10">
          <Headline title="Our Mission" />
          <div className="pt-10 flex items-center justify-center gap-5">
            <Boxes
              icon="info"
              title="Introduction and Expertise"
              text="Welcome to our creative digital agency, where we bring together the best of UI/UX design and web development to create exceptional digital experiences. With a passion for innovation and a keen eye for aesthetics, we pride ourselves on delivering cutting-edge solutions that not only meet but exceed our clients' expectations."
              subtext="Our team of talented designers and developers combines their expertise to craft user-centric interfaces and develop robust websites that captivate audiences and drive meaningful results."
            />
            <Boxes
              icon="design"
              title="User-Centered Design"
              text="At our agency, we firmly believe that user-centered design is the key to creating impactful digital experiences. We delve deep into understanding the target audience, their goals, and behaviors to design intuitive interfaces that seamlessly connect with users. Through extensive research, user testing, and iterative prototyping, we ensure that every interaction and visual element serves a purpose and enhances the overall user experience."
              subtext="Our design process revolves around empathy, placing the user at the heart of everything we create."
            />
            <Boxes
              icon="dev"
              title="Seamless Web Development"
              text="Our web development team is skilled at turning designs into fully functional, high-performance websites. Whether it's a simple landing page or a complex e-commerce platform, we leverage the latest technologies and industry best practices to deliver exceptional web solutions. "
              subtext="From front-end development using HTML, CSS, and JavaScript to back-end programming with Node.js, we build robust and scalable websites that are optimized for speed, security, and responsiveness. Our development process is agile, ensuring efficient collaboration and timely delivery."
            />
            <Boxes
              icon=""
              title="Collaboration and Growth"
              text="We understand that collaboration is vital for success in any project. We work closely with our clients, fostering transparent communication and involving them at every stage of the process. Our agency values long-term partnerships, and we strive to provide continuous support and maintenance even after the project is completed."
              subtext="We stay up to date with the latest trends in UI/UX design and web development, continuously expanding our knowledge and skill set to provide innovative solutions. Our ultimate goal is to help our clients grow their online presence and achieve their business objectives through exceptional digital experiences."
            />
          </div>
        </div>
        {/* <div className="pt-10 flex flex-col gap-5">
          <Headline title="What our customers think" />
          <div className="pt-10 flex justify-center items-center gap-5 px-20">
            <Review
              image={imageOne}
              text=" “I was very satisfied with my decision to work with agency on building
          the website for my brand, sans brodie. They did a great job for me.”"
              customer="James Cordoba - Ceo of banky"
            />
            <Review
              image={imageTwo}
              text=" “I was very satisfied with my decision to work with agency on building
          the website for my brand, sans brodie. They did a great job for me.”"
              customer="James Cordoba - Ceo of banky"
            />
          </div>
          <div className="flex justify-center items-center gap-5 px-20">
            <Review
              image={imageThree}
              text=" “I was very satisfied with my decision to work with agency on building
          the website for my brand, sans brodie. They did a great job for me.”"
              customer="James Cordoba - Ceo of banky"
            />
            <Review
              image={imageFour}
              text=" “I was very satisfied with my decision to work with agency on building
          the website for my brand, sans brodie. They did a great job for me.”"
              customer="James Cordoba - Ceo of banky"
            />
          </div>
        </div> */}
      </section>
      <footer className="pt-20 h-96">
        <div className="mx-auto w-[95%] h-10 border-l border-t border-stroke"></div>
        <div className="px-[50px] pb-9 flex justify-between">
          <div className="flex flex-col h-64 justify-between">
            <svg
              className="cursor-pointer"
              width="151"
              height="89"
              viewBox="0 0 151 89"
              fill="none"
            >
              <path
                d="M51.5 66H45.3125V42.5625H51.5V51.7812H59.6719V42.5625H65.8594V66H59.6719V57.1719H51.5V66ZM89.2812 66H82.4375L77.9688 58.25H75.1875V66H69V42.5625H78.4375C80.4688 42.5625 82.1979 42.8698 83.625 43.4844C85.0521 44.099 86.1406 44.9948 86.8906 46.1719C87.651 47.3385 88.0312 48.75 88.0312 50.4062C88.0312 51.9583 87.6979 53.2969 87.0312 54.4219C86.3646 55.5469 85.401 56.4323 84.1406 57.0781L89.2812 66ZM75.1875 53.4844H77.9531C79.1927 53.4844 80.125 53.2552 80.75 52.7969C81.3854 52.3281 81.7031 51.6354 81.7031 50.7188C81.7031 49.8021 81.3854 49.1146 80.75 48.6562C80.125 48.1875 79.1927 47.9531 77.9531 47.9531H75.1875V53.4844ZM97.3438 42.5625V66H91.1562V42.5625H97.3438ZM114.703 66H108.219L99.0625 42.5625H105.547L111.453 58.8125L117.359 42.5625H123.844L114.703 66ZM125.562 66V42.5625H141.188V47.9531H131.75V51.5781H140.562V56.9688H131.75V60.6094H141.344V66H125.562ZM146.656 66.3125C145.906 66.3125 145.302 66.0833 144.844 65.625C144.385 65.1667 144.156 64.5625 144.156 63.8125C144.156 63.0625 144.385 62.4583 144.844 62C145.302 61.5417 145.906 61.3125 146.656 61.3125C147.406 61.3125 148.01 61.5417 148.469 62C148.927 62.4583 149.156 63.0625 149.156 63.8125C149.156 64.5625 148.927 65.1667 148.469 65.625C148.01 66.0833 147.406 66.3125 146.656 66.3125Z"
                fill="white"
              />
              <path
                d="M30.2036 67.6448L19.3105 61.7727L36.4372 30.0011L24.994 23.8326L30.1097 14.3423L63.8894 32.5516L58.7736 42.0418L47.3303 35.8732L30.2036 67.6448Z"
                fill="#5C40C9"
              />
            </svg>
            <span className="text-subtext">
              @Thrive 2023. All Rights Reserved
            </span>
          </div>
          <div className="flex gap-10 text-white pr-20">
            <div className="flex flex-col gap-2">
              <a href="#">Products</a>
              <a href="#">Company</a>
              <a href="#">Insights</a>
              <a href="#">Support</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">Support</a>
              <a href="#">Terms of Use</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">Linkedin</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
