import { resultList } from "@/data/resultList";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const page = ({ params: { resultId } }) => {
  const result = resultList.find((n) => n.id == resultId);
  const { title, date, pdfLink } = result;

  return (
    <section>
      <div className="mb-5 border-b pb-3">
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="mb-10">
        <h4 className="mb-3 text-xl font-bold">Click to Download File:</h4>
        <Link
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white"
          href={pdfLink}
          target="_blank"
        >
          <span className="text-lg">
            <FaDownload />
          </span>
          <span className="text-base">Download Result</span>
        </Link>
      </div>
    </section>
  );
};

export default page;
