const SidebarCard = ({ title, children }) => {
  return (
    <div>
      <p className="bg-primary p-1 text-center text-white">{title}</p>
      <div className="space-y-2 border border-[#f1f1f1] p-2.5 text-darkBlue">
        {children}
      </div>
    </div>
  );
};

export default SidebarCard;
