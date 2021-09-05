function LanguageDetails({ title, Icon, color = "pink" }) {
  return (
    <div className="group cursor-pointer  m-2 p-2 flex flex-col flex-1 text-center items-center justify-center h-24 w-28 bg-gray-400 ">
      <Icon className="h-16 w-16 group-hover:text-blue-600 transition transform hover:scale-110 duration-300 mb-2" />

      <h2 className="text-lg font-bold capitalize opacity-0 group-hover:opacity-100 transition transform duration-500 hover:scale-105 -m-2 hover:translate-y-2 ">
        {title}
      </h2>
    </div>
  );
}

export default LanguageDetails;
