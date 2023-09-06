const departments = [
  ["Bangla", "Political Science", "Accounting", "Physics"],
  ["English", "", "Management", "Chemistry"],
  ["Arabic & Islamic Studies", "", "", "Botany"],
  ["History", "Economics", "", "Zoology"],
  ["Islamic History & Culture", "ICT", "", "Geography"],
  ["Philosophy", "", "", ""],
  ["", "", "", "Mathematics"],
];

const page = () => {
  return (
    <section>
      <h3 className="text-3xl font-bold text-dark">Departments</h3>
      <table className="mt-5 w-full border-collapse border border-[#ddd] text-left text-sm text-red-600 md:text-base">
        <tbody>
          {departments.map((dept, index) => (
            <tr
              key={index}
              className="transition-all duration-300 even:bg-gray-100 hover:bg-gray-100"
            >
              <td className="border border-[#ddd] p-2">{dept[0]}</td>
              <td className="border border-[#ddd] p-2">{dept[1]}</td>
              <td className="border border-[#ddd] p-2">{dept[2]}</td>
              <td className="border border-[#ddd] p-2">{dept[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default page;
