import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="w-full bg-white py-6" id="contact-us">
      <div className="w-[80%] h-full mx-auto shadow-black shadow-lg flex">
        {/* left section */}
        <div className="hidden lg:block bg-[#276ceb] text-white p-6 w-full h-full">
          <h3 className="font-bold text-3xl mb-5">
          Website build and design that ensures your website reflects your company right up to the current date.
          </h3>
          <div className="flex flex-col gap-2  text-xl">
            <p>- Eye catching, on-brand websites</p>
            <p>- E-Commerce or traditional brochure website</p>
            <p>- Responsive view for desk/laptop, smartphone & tablet</p>
            <p>- User friendly, intuitive drag and drop page editor</p>
            <p>- Multiple admin and user editor role acces</p>
            <p>- Optional maintenance and updates packages</p>
          </div>
        </div>
        {/* right section */}
        <div className="p-6 relative w-full mx-auto lg:w-full h-full bg-white">
          <form>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <div className="my-1">
              <label className="py-2">First Name</label>
              <input
                type="text"
                className="border p-1 rounded-md border-black w-full"
              />
            </div>
            <div className="my-2">
              <label className="py-2">Last Name</label>
              <input
                type="text"
                className="border p-1 rounded-md border-black w-full"
              />
            </div>
            <div className="my-2">
              <label className="py-2">Company</label>
              <input
                type="text"
                className="border p-1 rounded-md border-black w-full"
              />
            </div>
            <div className="my-2">
              <label className="py-2">Email</label>
              <input
                type="email"
                className="border p-1 rounded-md border-black w-full"
              />
            </div>
            <div className="my-2">
              <label className="py-2">Phone</label>
              <input
                type="number"
                className="border p-1 rounded-md border-black w-full"
              />
            </div>
            <div className="my-2">
              <label className="py-2">Support</label>
              <input
                type="password"
                className="border p-1 rounded-md border-black w-full"
                placeholder="Website, Graphic Design, full-Stack, etc"
              />
            </div>
            <button className="rounded-md my-2 w-full py-2 bg-blue-500 text-white mb-4 hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
