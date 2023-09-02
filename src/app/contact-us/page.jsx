"use client";

import Link from "next/link";

const Page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2 className="mb-5 text-[34px] font-bold">Contact us</h2>
      <div className="space-y-3 text-dark">
        <p>
          <b>Principal’s office: </b>{" "}
          <Link href="tel:+8802588850630" target="_blank">
            +8802588850630
          </Link>
        </p>
        <p>
          <b>Vice Principal’s office: </b>{" "}
          <Link href="tel:+8802588850661" target="_blank">
            +8802588850661
          </Link>
        </p>
        <p>
          <b>Head Assistant: </b>{" "}
          <Link href="tel:+8801941360290" target="_blank">
            +8801941360290
          </Link>
        </p>
      </div>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col gap-1">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="border p-4 outline-none" />
        </div>
        <div className="mb-5 flex flex-col gap-1">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" className="border p-4 outline-none" />
        </div>
        <div className="mb-5 flex flex-col gap-1">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" className="border p-4 outline-none" />
        </div>
        <div className="mb-5 flex flex-col gap-1">
          <label htmlFor="message">Your message (optional)</label>
          <textarea
            id="message"
            className="h-56 resize-none border p-4 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-primary p-3 text-lg font-bold text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Page;
