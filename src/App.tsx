import { useState } from 'react';
import './App.css';
import Boxes from './components/boxes/Boxes';
import Button from './components/button/Button';
import Headline from './components/headline/Headline';
import Services from './components/services/Services';
import ShowNav from './components/shownav/ShowNav';
import Pricing from './components/pricing/Pricing';
import WhyChooseUs from './components/whychooseus/ChooseUs';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import MessageSVG from './components/images/MessageSVG';
import logo from '../logo.png';

function App() {
  const [showNav, setShowNav] = useState(false);

  const onClose = () => {
    setShowNav(false);
  };

  return (
    <>
      {/* {showPlanModal ? <PlanModal onClose={onCloseModal} /> : null} */}
      {showNav ? <ShowNav onClose={onClose} /> : null}
      <nav className="w-full flex justify-between lg:justify-center text-white items-center  fixed backdrop-blur-sm z-[99] grid-cols-2 lg:grid-cols-3 lg:grid gap-0 h-40 px-[50px] lg:px-[100px]">
        <div className="justify-self-start flex">
          <div className="flex justify-center items-center gap-3">
            <img src={logo} alt="" className="max-h-[50px]" />
            <h1 className="font-black text-3xl">Thrivify</h1>
          </div>
        </div>
        <div className="lg:flex gap-10 font-medium justify-self-center hidden ">
          <a href="#services">Service</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="justify-self-end hidden lg:block">
          <Button text="Get in Touch" to="#contact" arrow={true} />
        </div>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setShowNav(true)}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200  p-px dark:from-zinc-500 dark:via-zinc-900 dark:to-darker">
            <div className="relative flex flex-col gap-6 rounded-2xl p-4 bg-[#080a0b]">
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-[1920px] m-auto animate-fade">
        <section
          id="home"
          className="animate-fade-down animate-duration-1000 flex flex-col justify-center items-center relative overflow-hidden"
        >
          <div className="pt-[300px] w-full ">
            <div className="text-white w-full text-center relative">
              <p className="text-maincolor font-black uppercase">
                #1 Best Digital Agency
              </p>
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
              <p className="lg:w-[800px] md:w-[500px] mx-auto w-[400px] lg:text-base text-sm text-subtext ">
                At Thrivify we are devoted to create a custom functional and
                visually appealing website.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="mt-52">
          <div>
            <Headline title="Services" />
            <div className="pt-10">
              <Services title="Website Development" border="top" number="01" />
              <Services title="UI/UX Design" border="" number="02" />
              <Services
                title="Social Media Advertising"
                border=""
                number="03"
              />
              <Services title="Copywriting" border="bottom" number="04" />
            </div>
          </div>
        </section>
        <section id="pricing" className="mt-10">
          <div>
            <Headline title="Pricing" />
            <div className="pt-24">
              <div className="pb-10">
                <h1 className="text-center uppercase text-white text-[48px] leading-10 md:leading-0 font-black">
                  Web design pricing plans
                </h1>
                <p className="pt-5 text-center text-subtext w-[350px] md:w-[500px] mx-auto text-[14px]">
                  Choose the right pricing plan for your website and budget,
                  whether you’re just starting out or looking to upgrade a
                  current website.
                </p>
              </div>
              <Pricing />
            </div>
          </div>
        </section>
        <section id="process">
          <div className="pt-10">
            <Headline title="Process" />
            <div className="p-24">
              <Work />
            </div>
          </div>
        </section>
        <section id="whychooseus">
          <div className="pt-10">
            <Headline title="Why Choose Us" />
            <div className="py-24">
              <WhyChooseUs />
            </div>
          </div>
        </section>
        <section id="mission">
          <div className="pt-10">
            <Headline title="Our Mission" />
            <div className="pt-10 flex gap-5 flex-col justify-center items-center lg:flex-row lg:items-start ">
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
        <section id="contact">
          <div className="pt-10">
            <Headline title="Contact" />
            <div className="py-24 flex flex-col xl:flex-row justify-center items-center gap-20   xl:gap-40 overflow-hidden">
              <div className="flex jusitfy-center items-center flex-col gap-10">
                <div>
                  <h1 className="text-white font-black text-center text-[3rem] uppercase">
                    WANNA WORK WITH US?
                  </h1>
                  <p className="text-center text-subtext w-[350px] lg:w-[500px] mx-auto text-[14px]">
                    Feel free to get in touch, and let's embark on a journey of
                    creativity and innovation together!
                  </p>
                </div>
                <MessageSVG />
              </div>
              <div>
                <Contact />
              </div>
            </div>
          </div>
        </section>
        <footer className="pt-20 h-[400px]">
          <div className="mx-auto w-[95%] h-10 border-l border-t border-stroke"></div>
          <div className="px-[50px] pb-9 flex justify-between items-center lg:items-start lg:flex-row flex-col gap-10 lg:gap-0">
            <div className="flex flex-col justify-start lg:justify-between items-center lg:items-start">
              <div className="flex justify-center items-center gap-3 pt-5">
                <img src={logo} alt="" className="max-h-[50px]" />
                <h1 className="font-black text-white text-3xl">Thrivify</h1>
              </div>
              <span className="text-subtext pt-3">
                @Thrivify 2023. All Rights Reserved
              </span>
            </div>
            <div className="flex gap-10 text-white pr-0 lg:pr-20">
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
