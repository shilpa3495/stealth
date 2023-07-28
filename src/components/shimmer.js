const Shimmer = () => {
  return (
    <>
      <div className="flex  p-[30px] animate-pulse ">
        <div className="px-4 py-2 bg-white text-white rounded w-44 h-8"></div>
      </div>
      <div className="gap-x-20 gap-y-20 justify-between flex-wrap  p-[30px] h-36 grid grid-cols-2 animate-pulse h">
        <div className="h-36 flex items-start gap-x-2  border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white"></div>
        <div className=" h-36 flex items-start gap-x-2  border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white"></div>
        <div className=" h-36 flex items-start gap-x-2  border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white"></div>
        <div className=" h-36 flex items-start gap-x-2  border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white"></div>
        <div className=" h-36 flex items-start gap-x-2  border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white"></div>
      </div>
    </>
  );
};

export default Shimmer;
