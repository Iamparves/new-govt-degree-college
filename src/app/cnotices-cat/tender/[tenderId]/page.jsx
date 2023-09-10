import { tenderList } from "@/data/noticeList";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const page = ({ params: { tenderId } }) => {
  const notice = tenderList.find((n) => n.id == tenderId);
  const { title, date, summary, pdfLink } = notice;

  return (
    <section>
      <div className="mb-5 border-b pb-3">
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      {summary && <p className="mb-5 md:text-lg">{summary}</p>}
      <div className="mb-10">
        <h4 className="mb-3 text-xl font-bold">Click to Download File:</h4>
        <Link
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white"
          href={notice.pdfLink}
          target="_blank"
        >
          <span className="text-lg">
            <FaDownload />
          </span>
          <span className="text-base">Download Notice</span>
        </Link>
      </div>
    </section>
  );
};

export default page;
