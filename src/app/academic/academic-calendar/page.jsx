import Link from "next/link";

const page = () => {
  return (
    <section>
      <Link
        href="http://ngdc-raj.ac.bd/wp-content/uploads/2015/11/HSC-Prospectus-2015-2016.pdf"
        target="_blank"
        className="mb-5 inline-block font-bold text-red-600"
      >
        HSC Prospectus 2015-2016
      </Link>
      <br />
      <Link
        href="http://ngdc-raj.ac.bd/wp-content/uploads/2015/11/Syllabus.docx"
        target="_blank"
        className="inline-block font-bold text-red-600"
      >
        Download Academic Calendar / Syllabus
      </Link>
    </section>
  );
};

export default page;
