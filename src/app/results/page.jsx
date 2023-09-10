import { resultList } from "@/data/resultList";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const page = () => {
  return (
    <section>
      <h2 className="mb-3 text-3xl font-bold">Notices</h2>
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="w-full border-collapse border border-[#ddd] text-left text-sm text-dark md:text-base">
          <thead>
            <tr>
              <td className="border border-[#ddd] p-2.5 font-bold">SL</td>
              <td className="border border-[#ddd] p-2.5 font-bold">
                Notice Title
              </td>
              <td className="border border-[#ddd] p-2.5 font-bold md:min-w-[160px]">
                Published Date
              </td>
              <td className="border border-[#ddd] p-2.5 font-bold">Download</td>
            </tr>
          </thead>
          <tbody>
            {resultList.map((result, index) => {
              return (
                <tr
                  key={index}
                  className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]"
                >
                  <td className="border border-[#ddd] p-2.5">{index + 1}</td>
                  <td className="border border-[#ddd] p-2.5">
                    <Link href={`/results/${result.id}`}>{result.title}</Link>
                  </td>
                  <td className="border border-[#ddd] p-2.5">{result.date}</td>
                  <td className="border border-[#ddd] p-2.5 text-xl md:text-2xl">
                    <Link
                      href={result.pdfLink}
                      target="_blank"
                      className="mx-auto block w-min"
                    >
                      <FaDownload />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default page;
