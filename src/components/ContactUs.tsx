import InputComponent from "./InputComponent";

export default function Contactus() {
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
        <form className="space-y-12">
          <InputComponent
            type="text"
            name="compony"
            placeholder="Your Compony Name"
          />
          <InputComponent
            type="text"
            name="nature"
            placeholder="Nature of Bussiness"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputComponent
              type="address"
              name="address"
              placeholder="Adress"
            />
            <InputComponent
              type="number"
              name="postcode"
              placeholder="Postcode"
            />
          </div>
          <InputComponent
            type="text"
            name="contactname"
            placeholder="Contact name"
          />
          <InputComponent
            type="number"
            name="contactphone"
            placeholder="Contact Phone"
          />
          <InputComponent
            type="email"
            name="email"
            placeholder="email@gmail.com"
          />
          <InputComponent type="url" name="linkedin" placeholder="Linkedin" />
          <InputComponent
            type="text"
            name="idea"
            placeholder="Let`s talk about your idea"
          />
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
