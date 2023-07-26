import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xdorozne');
  if (state.succeeded) {
    return (
      <p className="text-white text-center">
        Thanks for contacting us! We will be with you shortly.
      </p>
    );
  }
  return (
    <div className="w-[350px] lg:w-[500px] bg-[rgba(255,255,255,0.01)] rounded-xl p-10 shadow-md  border-[rgba(255,255,255,0.01)] border-2 transition-all duration-700 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-white justify-center items-center gap-5"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-subtext">
            Your Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            className="w-[250px] lg:w-[450px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-5  focus:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all outline-none duration-700 resize-none"
            placeholder="ex. John"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-subtext">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-[250px] lg:w-[450px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-5  focus:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all outline-none duration-700 resize-none"
            placeholder="ex. johndoe@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="plan" className="text-subtext">
            Plan
          </label>
          <select
            id="plan"
            name="plan"
            className="w-[250px] lg:w-[450px]  bg-[#0E1011] rounded-xl p-5   appearance-none focus:border-maincolor focus:bg-[#0E1011] border-[rgba(255,255,255,0.01)] border-2 transition-all outline-none duration-700"
          >
            <option selected disabled>
              Choose a plan...
            </option>
            <option value="Basic" className=" hover:bg-maincolor">
              Basic Website
            </option>
            <option value="Standard" className=" hover:bg-maincolor">
              Standard Website
            </option>
            <option value="Elite" className=" hover:bg-maincolor">
              Elite Website
            </option>
          </select>
          <ValidationError prefix="Plan" field="plan" errors={state.errors} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-subtext">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-[250px] lg:w-[450px]  bg-[rgba(255,255,255,0.01)] rounded-xl p-5 h-52  focus:border-maincolor border-[rgba(255,255,255,0.01)] border-2 transition-all outline-none duration-700 resize-none"
            placeholder="Your message..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-[250px] lg:w-[450px]  bg-[rgba(255,255,255,0.01)] rounded-xl py-5  border-[rgba(255,255,255,0.01)] border-2 transition-all outline-none duration-700 resize-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
