import ProductSVG from '../images/ProductSVG';
import ReactSVG from '../images/ReactSVG';
import WorkSVG from '../images/WorkSVG';

const WhyChooseUs = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-center text-[3rem] uppercase font-black">
        Why Choose Us?
      </h1>
      <p className="text-center text-subtext w-[350px] lg:w-[600px] mx-auto text-[14px]">
        Choose us over our competitors for exceptional results, unmatched
        customer service, competitive pricing, innovative solutions, and
        personalized customization.
      </p>
      <div className="flex lg:flex-row text-center lg:text-left flex-col justify-center gap-24 items-center py-24">
        <div className="w-[350px] lg:w-[600px] text-white flex flex-col gap-5 order-1 lg:order-none">
          <h1 className="font-black text-[3rem] leading-10">
            Seamless Communication
          </h1>
          <p className="text-md">
            Effective communication is the cornerstone of successful
            collaborations. We prioritize clear and transparent communication
            channels throughout the entire project lifecycle. Our dedicated
            project managers and development teams ensure that we understand
            your vision, goals, and expectations from the start. We provide
            regular progress updates, facilitate open dialogue, and actively
            seek your feedback at every stage of the development process. This
            approach ensures that we stay aligned with your
          </p>
        </div>
        <WorkSVG />
      </div>
      <div className="flex lg:flex-row text-center lg:text-left flex-col justify-center gap-24 items-center py-24">
        <ReactSVG />
        <div className="w-[350px] lg:w-[600px] text-white flex flex-col gap-5">
          <h1 className="font-black text-[3rem] leading-10">
            Expertise in React
          </h1>
          <p className="text-md">
            Our team consists of highly skilled and experienced developers who
            are well-versed in React, the leading JavaScript library for
            building user interfaces. React offers numerous advantages,
            including improved performance, modular component-based
            architecture, and a vibrant ecosystem of tools and libraries. By
            leveraging the power of React, we can deliver robust, scalable, and
            high-performing web applications that meet your specific
            requirements.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row text-center lg:text-left flex-col justify-center gap-24 items-center py-24">
        <div className="w-[350px] lg:w-[600px] text-white flex flex-col gap-5 order-1 lg:order-none">
          <h1 className="font-black text-[3rem] leading-10">
            Satisfying Products
          </h1>
          <p className="text-md">
            Our focus is not just on completing projects but on delivering
            exceptional solutions that leave a lasting impact. We are committed
            to providing you with a satisfying product that not only meets your
            functional requirements but also delights your end-users. By
            leveraging the power of React, we create highly interactive and
            intuitive user interfaces that enhance the user experience and drive
            engagement. Our goal is to help you achieve your business objectives
            and establish a strong online presence that sets you apart from your
            competitors.
          </p>
        </div>
        <ProductSVG />
      </div>
    </div>
  );
};

export default WhyChooseUs;
