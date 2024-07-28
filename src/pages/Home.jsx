import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Home() {
  return (
    <div className="pt-14 w-full ">
      <h1 className="text-4xl text-[#022959]  font-bold mb-3">Personal info</h1>
      <p className="text-xl text-[#022959]   opacity-50 mb-9">
        Please provide your name, email address, and phone number.
      </p>
      <Form className="w-full mb-24">
        <FormInput
          type="text"
          label="Name :"
          name="name"
          placeholder="e.g. Stephen King"
        />
        <FormInput
          type="email"
          label="Email Address :"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          type="text"
          label="Phone Number :"
          name="phoneNumber "
          placeholder="e.g. +1 234 567 890"
        />
      </Form>
      <div className="flex justify-end">
        <Link
          to="/selectPlan"
          className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg  px-8 py-3 text-white "
          href="#"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}

export default Home;
