import Link from "next/link";

const admissionLinks = [
  {
    title: "HSC Admission",
    link: "https://easycollegemate.com/ecmngdc/public/Admission/HSC",
    fees: "",
    guideline: "",
  },
  {
    title: "HSC Form Fill-up",
    link: "http://139.162.8.132/ecmngdc/HSC/formfillup",
    fees: "",
    guideline: "",
  },
  {
    title: "Honors Admission",
    link: "https://easycollegemate.com/ecmngdc/Admission/Honours",
    fees: "",
    guideline: "",
  },
  {
    title: "Degree 1st year Admission",
    link: "http://139.162.8.132/ecmngdc/Admission/Degree",
    fees: "",
    guideline: "",
  },
  {
    title: "Master Final Year",
    link: "http://139.162.8.132/ecmngdc/Admission/Masters",
    fees: "",
    guideline: "",
  },
  {
    title: "Masters Admission",
    link: "https://ngdc-raj.ac.bd/ecm/public/Admission/Masters",
    fees: "",
    guideline: "",
  },
];

const page = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Online Admission</h2>
      <p className="my-3 text-lg font-bold text-primary">Admission Links:</p>

      <table className="w-full border-collapse border border-[#ddd] text-sm text-dark md:text-base">
        <thead className="text-center">
          <tr className="bg-gray-100">
            <td className="border border-[#ddd] p-2 font-bold" rowSpan={2}>
              Level of Online Admission
            </td>
            <td className="border border-[#ddd] p-2 font-bold">Link</td>
            <td className="border border-[#ddd] p-2 font-bold" rowSpan={2}>
              Fees
            </td>
            <td className="border border-[#ddd] p-2 font-bold" rowSpan={2}>
              Guideline
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-[#ddd] p-2 font-bold">
              Online Admission
            </td>
          </tr>
        </thead>
        <tbody>
          {admissionLinks.map((row, index) => {
            return (
              <tr
                key={index}
                className="transition-all duration-300 even:bg-[#f2f2f2] hover:bg-[#f2f2f2]"
              >
                <td className="border border-[#ddd] p-2">{row.title}</td>
                <td className="border border-[#ddd] p-2 text-center font-bold text-red-500">
                  <Link href={row.link} target="_blank">
                    Click Here
                  </Link>
                </td>
                <td className="border border-[#ddd] p-2">{row.fees}</td>
                <td className="border border-[#ddd] p-2">{row.guideline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default page;
