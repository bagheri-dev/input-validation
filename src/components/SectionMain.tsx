import Contactus from "./ContactUs";
import Offices from "./Offices";
export default function SectionMain() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2 items-center lg:gap-20 py-10">
        <Contactus />
        <Offices />
      </div>
    </div>
  );
}
