import './App.css';
import Boxes from './components/boxes/Boxes';
import Button from './components/button/Button';
import Grid from './components/grid/Grid';
import Headline from './components/headline/Headline';
import Services from './components/services/Services';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <nav className="h-32 w-full overflow-hidden grid grid-cols-3 text-white items-center px-[100px] fixed  backdrop-blur-sm z-[99]">
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
        <div className="flex gap-10 font-medium justify-self-center ">
          <a href="#home">Home</a>
          <a href="#services">Service</a>
          <a href="#about">About</a>
        </div>
        <div className="justify-self-end">
          <Button text="Get in Touch" to="#contact" arrow={true} />
        </div>
      </nav>
      <div className=" max-w-[1920px] m-auto">
        <section className="h-screen flex flex-col justify-center items-center relative">
          <div className="w-full -mt-[100px] ">
            <div className="text-white w-full text-center ">
              <div className="h-32 w-64  bg-maincolor absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-[99] blur-[200px] "></div>
              <p className="text-maincolor">#1 Best Digital Agency</p>
              <h1
                className="xl:text-[96px] lg:text-[70px] md:text-[55px] font-black md:w-[800px]
              lg:w-[900px] lg:leading-[66px]
              sm:text-[40px] sm:w-[500px]
              sm:leading-[40px]
              text-[40px]
              w-[400px]
              leading-[40px]
              md:leading-[50px]
              xl:w-[1200px] mx-auto xl:leading-[100px]"
              >
                INNOVATIVE SOLUTIONS FOR MODERN BRANDS
              </h1>
              <p className="lg:w-[800px] md:w-[500px] mx-auto text-subtext">
                At Creative Solutions, we are a full-service creative agency
                dedicated to helping modern brand succeed in today’s fast-paced
                and competitive market.
              </p>
            </div>
          </div>
          <div className="mt-32 w-full flex justify-center items-center absolute bottom-20">
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
              <Services title="Website Development" border="top" number="01" />
              <Services title="Social Media Managment" border="" number="02" />
              <Services title="UI/UX Design" border="bottom" number="03" />
            </div>
          </div>
          <div className="pt-10">
            <Headline title="Services" />
            <div className="pt-[100px] pb-[100px]">
              <Work />
            </div>
          </div>
          <div className="pt-10">
            <Headline title="Our Mission" />
            <div className="pt-10 flex items-start justify-center gap-5">
              <Boxes
                icon="info"
                title="Introduction and Expertise"
                text="We're a creative digital agency that combines UI/UX design and web development to create exceptional digital experiences. Our passion for innovation and aesthetics drives us to deliver cutting-edge solutions that exceed client expectations."
              />
              <Boxes
                icon="design"
                title="User-Centered Design"
                text="We believe in user-centered design for impactful digital experiences. By understanding the target audience, we create intuitive interfaces that seamlessly connect with users. Extensive research, user testing, and iterative prototyping enhance the overall user experience."
              />
              <Boxes
                icon="dev"
                title="Seamless Web Development"
                text="Our web development team turns designs into high-performance websites using the latest technologies and industry best practices. From front-end to back-end development, we build robust and scalable websites optimized for speed, security, and responsiveness."
              />
              <Boxes
                icon=""
                title="Collaboration and Growth"
                text="Collaboration is key to project success. We value transparent communication, involving clients at every stage. Long-term partnerships are important, with continuous support and maintenance even after project completion. We stay updated on UI/UX design and web development trends to provide innovative solutions that help clients grow online."
              />
            </div>
          </div>
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
      </div>
    </>
  );
}

export default App;
