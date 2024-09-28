export default function Offices() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
  return (
    <>
      <div className=" space-y-20 w-full">
        <div className="space-y-5">
          <h3 className="font-bold">Offices</h3>
          <p>
            United States <br /> 500 5th Avenue Suite 400, NY 10110
          </p>
          <p>
            United Kingdom <br />
            High St, Bromley BR1 1DN
          </p>
          <p>
            france <br />
            80 avenue des Terroirs de France, Paris
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="font-bold">For Quick Inquiries</h3>
          <p>+44 7777777777</p>
          <p>+1 3333333330</p>
        </div>
        <div className="space-y-5">
          <h3 className="font-bold">Would you like to join our newsletter?</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                className="outline-none border-b-2 border-gray-600"
                type="email"
                placeholder="Email"
              />
              <button className="px-5 py-3 bg-green-700 text-white">✔</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
