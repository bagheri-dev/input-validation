import { useState } from "react";
import validateForm from "./ErrorHandle";
import { FormData } from "./interface";

export default function Contactus() {
  const [formData, setFormData] = useState<FormData>({
    companyname: "",
    natureofbussiness: "",
    address: "",
    postcode: "",
    contactname: "",
    contactphone: "",
    email: "",
    linkedin: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  // Submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ValidationError = validateForm(formData);
    setErrors(ValidationError);

    if (Object.keys(ValidationError).length === 0) {
      console.log("Successfully Submit", formData);
    }
  };
  // change input value
  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="w-full">
        <div className="space-y-10 mb-20">
          <h2 className="text-5xl font-bold">Contact us</h2>
          <p className="text-base text-color-primery">
            Need an experienced and skilled hand with custom IT project? <br />{" "}
            Fill out the form to get a free consultation.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="text"
              name="companyname"
              placeholder="Your company name"
              onChange={handleChange}
              value={formData.companyname}
            />
            {errors.companyname && (
              <span className="text-red-500 py-2 block text-base">
                {errors.companyname}
              </span>
            )}
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="text"
              name="natureofbussiness"
              placeholder="Nature of Bussiness"
              onChange={handleChange}
              value={formData.natureofbussiness}
            />
            {errors.natureofbussiness && (
              <span className="text-red-500 py-2 block text-base">
                {errors.natureofbussiness}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border-b-4 border-b-gray-600 text-xl">
              <input
                className="outline-none w-full px-4 py-3"
                type="address"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
              />
              {errors.address && (
                <span className="text-red-500 py-2 block text-base">
                  {errors.address}
                </span>
              )}
            </div>
            <div className="border-b-4 border-b-gray-600 text-xl">
              <input
                className="outline-none w-full px-4 py-3"
                type="number"
                name="postcode"
                placeholder="Postcode"
                onChange={handleChange}
                value={formData.postcode}
              />
              {errors.postcode && (
                <span className="text-red-500 py-2 block text-base">
                  {errors.postcode}
                </span>
              )}
            </div>
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="text"
              name="contactname"
              placeholder="Contact name"
              onChange={handleChange}
              value={formData.contactname}
            />
            {errors.contactname && (
              <span className="text-red-500 py-2 block text-base">
                {errors.contactname}
              </span>
            )}
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="number"
              name="contactphone"
              placeholder="Contact Phone"
              onChange={handleChange}
              value={formData.contactphone}
            />
            {errors.contactphone && (
              <span className="text-red-500 py-2 block text-base">
                {errors.contactphone}
              </span>
            )}
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="email"
              name="email"
              placeholder="email@gmail.com"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && (
              <span className="text-red-500 py-2 block text-base">
                {errors.email}
              </span>
            )}
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="url"
              name="linkedin"
              placeholder="Linkedin"
              onChange={handleChange}
              value={formData.linkedin}
            />
            {errors.linkedin && (
              <span className="text-red-500 py-2 block text-base">
                {errors.linkedin}
              </span>
            )}
          </div>
          <div className="border-b-4 border-b-gray-600 text-xl">
            <input
              className="outline-none w-full px-4 py-3"
              type="text"
              name="idea"
              placeholder="Let`s talk about your idea"
              onChange={handleChange}
              value={formData.idea}
            />
            {errors.idea && (
              <span className="text-red-500 py-2 block text-base">
                {errors.idea}
              </span>
            )}
          </div>
          <div>
            <button
              className="w-full py-6 rounded-md bg-green-700 text-white "
              type="submit"
            >
              SUBMIT
            </button>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>I want to protect my data by signing an NDA</p>
          </div>
        </form>
      </div>
    </>
  );
}
