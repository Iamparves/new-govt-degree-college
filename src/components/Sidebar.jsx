import {
  importanLinks,
  quickLinks,
  sidebarMenu,
  usefulLinks,
} from "@/data/sidebarLinks";
import Link from "next/link";
import SidebarCalendar from "./SidebarCalendar";
import SidebarCard from "./SidebarCard";
import SidebarImage from "./SidebarImage";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <aside className="space-y-3">
      <SidebarCard title="Message from Principal">
        <SidebarImage maxWidth={200} imgSource="/sidebar/principal.jpg" />
        <Link
          className="!mt-3 block text-[#E91E63]"
          href="/message-from-principal"
        >
          View Details →
        </Link>
      </SidebarCard>
      <SidebarCard title="Message from Vice Principal">
        <SidebarImage maxWidth={200} imgSource="/sidebar/vice-principal.jpg" />
        <Link
          className="!mt-3 block text-[#E91E63]"
          href="/message-from-vice-principal"
        >
          View Details →
        </Link>
      </SidebarCard>
      <SidebarCard title="স্বাধীনতার সুবর্ণজয়ন্তী">
        <SidebarImage maxWidth={250} imgSource="/sidebar/bangladesh-50.jpg" />
        <Link
          className="!mt-4 block text-center text-lg font-bold text-[#E91E63]"
          href="http://shed.portal.gov.bd/sites/default/files/files/shed.portal.gov.bd/npfblock//%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87%20%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A6%A8%E0%A6%BE1.pdf"
          target="_blank"
        >
          মুজিব বর্ষে কর্মপরিকল্পনা
        </Link>
      </SidebarCard>
      <SidebarCard title="Important Links">
        <SidebarLinks links={importanLinks} />
      </SidebarCard>
      <SidebarCard title="Quick Links">
        <SidebarLinks links={quickLinks} />
      </SidebarCard>
      <SidebarCard title="Sidebar Menu">
        <SidebarLinks links={sidebarMenu} />
      </SidebarCard>
      <SidebarCard title="Useful Links">
        <SidebarLinks links={usefulLinks} />
      </SidebarCard>
      <SidebarCalendar />
      <SidebarCard title="জরুরি হটলাইন">
        <SidebarImage imgSource="/sidebar/biwta.jpeg" />
        <SidebarImage imgSource="/sidebar/national-helpline.jpg" />
      </SidebarCard>
      <SidebarCard title="করোনা ভাইরাস প্রতিরোধে যোগাযোগ">
        <Link href="https://corona.gov.bd/" target="_blank">
          <SidebarImage imgSource="/sidebar/corona.jpg" />
        </Link>
      </SidebarCard>
      <SidebarCard title="একদেশ">
        <Link href="http://ekdesh.ekpay.gov.bd/" target="_blank">
          <SidebarImage imgSource="/sidebar/ekdesh.jpg" />
        </Link>
      </SidebarCard>
      <SidebarCard title="ডেঙ্গু প্রতিরোধে করণীয়">
        <Link
          href="https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c"
          target="_blank"
        >
          <SidebarImage maxWidth={200} imgSource="/sidebar/dengue.jpg" />
        </Link>
      </SidebarCard>
    </aside>
  );
};

export default Sidebar;
