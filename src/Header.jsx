import flatpickr from "flatpickr";
import "flowbite";
import { useEffect, useState } from "react";
import "flatpickr/dist/flatpickr.min.css";

const Header = () => {
  useEffect(() => {
    flatpickr("#datepicker-autohide", {
      dateFormat: "d-m-Y",
    });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full h-full relative">
      <div className={`w-screen h-full flex flex-col items-center absolute`}>
        <header
          className={`w-full h-20 flex justify-between items-center py-3 px-16 top-0 fixed transition-colors duration-300  ${
            isScrolled ? "bg-white shadow-boxShadow" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="text-4xl text-customBlue">S9</span>
          </div>
          <div
            className={`flex gap-5 ${isScrolled ? "text-black" : "text-white"}`}
          >
            <button type="button" className="flex p-2 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>Transporter Login</span>
            </button>
            <button type="button" className="flex p-2 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span>Track</span>
            </button>
            <button
              type="button"
              className={`flex p-2 gap-3 px-4 rounded-lg ${
                isScrolled ? "bg-black text-white" : "bg-white text-black "
              }`}
            >
              <span>Customer Login</span>
            </button>
          </div>
        </header>
        <div className="w-11/12 h-2/3 flex flex-col justify-center items-start gap-2 mt-5">
          <span className="text-white text-5xl">
            Redefining Trucking Experience
          </span>
          <span className="text-white text-xl">
            One Stop for all your logistics needs.
          </span>
        </div>
        <div className="w-full h-1/3 flex flex-col justify-center items-center gap-0">
          <div className="w-11/12 bg-customGreen h-16 mt-4 rounded-md flex justify-center items-center p-1">
            <div className="flex justify-center items-center w-full gap-2">
              <form className="w-1/5 mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-6 text-black dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Pickup Area, City *"
                    required
                  />
                </div>
              </form>
              <form className="w-1/5 mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Drop Off Area, City *"
                    required
                  />
                </div>
              </form>
              <form className="mx-auto w-1/5">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    id="datepicker-autohide"
                    // eslint-disable-next-line react/no-unknown-property
                    datepicker
                    // eslint-disable-next-line react/no-unknown-property
                    datepicker-autohide
                    type="text"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Select date"
                  />
                </div>
              </form>
              <form className="w-1/5 mx-auto">
                <select className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                  <option>Truck Category</option>
                  <option value="Open truck">Open Truck</option>
                  <option value="Close truck">Close Truck</option>
                  <option value="High Bed Truck">High Bed Truck</option>
                  <option value="Low Bed Truck">Low Bed Truck</option>
                </select>
              </form>
              <form className="w-1/5 mx-auto">
                <select className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                  <option value="">Select Weight</option>
                  <option value="10 tons">10 Tons</option>
                  <option value="20 tons">20 Tons</option>
                  <option value="30 tons">30 Tons</option>
                  <option value="40 tons">40 Tons</option>
                </select>
              </form>
            </div>
          </div>
          <div
            className="w-1/5 bg-customGreen h-12 rounded-b-md flex flex-col justify-center items-center pb-1 mb-2"
            style={{
              clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
            }}
          >
            <div className="relative w-11/12 h-full flex justify-center items-center">
              <button
                type="button"
                className="bg-customBlue rounded-md text-white h-full w-full"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-full">
        {/* <img
          src="https://waifu2x.booru.pics/outfiles/2529b9e8327fba043b1de7cad171683de71eafda_s2_n2_y1.png"
          className="w-full h-full object-cover"
        /> */}
        <img
          src="https://waifu2x.booru.pics/outfiles/33012bfe7549f578f81ab4f7f29816cce5b609ae_s2_n2_y1.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Header;
