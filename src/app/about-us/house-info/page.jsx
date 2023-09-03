"use client";

import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: 1,
    class: "একাদশ",
    classRowSpan: 8,
    division: "বিজ্ঞান",
    divisionRowSpan: 4,
    house: "পলাশী",
    rollNo: "০১ থেকে ১৫৫",
  },
  {
    id: 2,
    class: "একাদশ",
    division: "বিজ্ঞান",
    house: "একুশে",
    rollNo: "১৫৬ থেকে ৩১০",
  },
  {
    id: 3,
    class: "একাদশ",
    division: "বিজ্ঞান",
    house: "রেসকোর্স",
    rollNo: "৩১১ থেকে ৪৬৫",
  },
  {
    id: 4,
    class: "একাদশ",
    division: "বিজ্ঞান",
    house: "মুজিবনগর",
    rollNo: "৪৬৬ থেকে ৬২২",
  },
  {
    id: 5,
    class: "একাদশ",
    division: "মানবিক",
    divisionRowSpan: 2,
    house: "টেকনাফ",
    rollNo: "৭০০ থেকে ৮৫০",
  },
  {
    id: 6,
    class: "একাদশ",
    division: "মানবিক",
    house: "তেঁতুলিয়া",
    rollNo: "৮৫১ থেকে ১০০০",
  },
  {
    id: 7,
    class: "একাদশ",
    division: "ব্যবসায় শিক্ষা",
    divisionRowSpan: 2,
    house: "চলনবিল",
    rollNo: "১১০০ থেকে ১২৭৫",
  },
  {
    id: 8,
    class: "একাদশ",
    division: "ব্যবসায় শিক্ষা",
    house: "সেন্টমার্টিন",
    rollNo: "১২৭৬ থেকে ১৪০০",
  },
  {
    id: 9,
    class: "দ্বাদশ",
    classRowSpan: 8,
    division: "বিজ্ঞান",
    divisionRowSpan: 4,
    house: "শিলাইদহ",
    rollNo: "০১ থেকে ১৫০",
  },
  {
    id: 10,
    class: "দ্বাদশ",
    division: "বিজ্ঞান",
    house: "জাফলং",
    rollNo: "১৫১ থেকে ৩০০",
  },
  {
    id: 11,
    class: "দ্বাদশ",
    division: "বিজ্ঞান",
    house: "সুন্দরবন",
    rollNo: "৩০১ থেকে ৪৫০",
  },
  {
    id: 12,
    class: "দ্বাদশ",
    division: "বিজ্ঞান",
    house: "মহেশখালী",
    rollNo: "৪৫১ থেকে ৬০০",
  },
  {
    id: 13,
    class: "দ্বাদশ",
    division: "মানবিক",
    divisionRowSpan: 2,
    house: "ত্রিশাল",
    rollNo: "৭০০ থেকে ৮৫০",
  },
  {
    id: 14,
    class: "দ্বাদশ",
    division: "মানবিক",
    house: "রসুলপুর",
    rollNo: "৮৫১ থেকে ১০০০",
  },
  {
    id: 15,
    class: "দ্বাদশ",
    division: "ব্যবসায় শিক্ষা",
    divisionRowSpan: 2,
    house: "মহাস্থানগড়",
    rollNo: "১১০০ থেকে ১২৭৫",
  },
  {
    id: 16,
    class: "দ্বাদশ",
    division: "ব্যবসায় শিক্ষা",
    house: "পাহাড়পুর",
    rollNo: "১২৭৬ থেকে ১৪০০",
  },
];

const Page = () => {
  return (
    <section>
      <p className="mb-4 text-center font-bold">
        একাদশ ও দ্বাদশ শ্রেণির হাউজ (সেকশন) পরিচিতি
      </p>
      <p className="mb-4 text-justify">
        বৈচিত্রময় প্রাকৃতিক সৌন্দর্যে পরিপূর্ণ বাংলাদেশের ভূ-প্রাকৃতিক স্থান ও
        পরিবেশ, এর অপার সৌন্দর্য এবং এদেশের গণমানুষের রাজনৈতিক ইতিহাস ও ঘটনা
        প্রবাহ এবং প্রাচীন সভ্যতার নিদর্শনের সাথে শিক্ষার্থী প্রজন্মকে পরিচিত
        করার লক্ষে বিভিন্ন হাউজের নামকরণ করা হয়েছে যেন শিক্ষার্থীরা আমাদের দেশের
        ইতিহাস-ঐতিহ্য ভূ-প্রকৃতি সম্পর্কে একটি প্রাথমিক ধারণা পেতে পারে।
      </p>
      <div className="">
        <Table
          className="rsuiteTable"
          bordered
          cellBordered
          autoHeight
          data={data}
        >
          <Column
            verticalAlign="middle"
            flexGrow={1}
            minWidth={70}
            rowSpan={(rowData) => {
              return rowData.classRowSpan;
            }}
          >
            <HeaderCell className="text-base font-bold text-dark">
              শ্রেণি
            </HeaderCell>
            <Cell dataKey="class" />
          </Column>
          <Column
            verticalAlign="middle"
            flexGrow={1}
            minWidth={100}
            rowSpan={(rowData) => {
              return rowData.divisionRowSpan;
            }}
          >
            <HeaderCell className="text-base font-bold text-dark">
              বিজ্ঞান
            </HeaderCell>
            <Cell dataKey="division" />
          </Column>

          <Column flexGrow={1} minWidth={100}>
            <HeaderCell className="text-base font-bold text-dark">
              হাউজ
            </HeaderCell>
            <Cell dataKey="house" />
          </Column>

          <Column flexGrow={1.5} minWidth={150}>
            <HeaderCell className="text-base font-bold text-dark">
              রোল নং
            </HeaderCell>
            <Cell dataKey="rollNo" />
          </Column>
        </Table>
      </div>
    </section>
  );
};

export default Page;
