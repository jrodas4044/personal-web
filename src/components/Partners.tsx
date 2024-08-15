export default function Partners() {
  const bannerStyle = {
    backgroundImage: "url(/bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={bannerStyle} className="bg-gray-900 px-4 py-8">
        <div className="flex flex-col justify-centers items-center">
          <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 font-bold text-4xl text-transparent">
            Partners
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center space-y-4 py-8">
          <div className="px-4 py-2">
            <img src="/partner1.png" className="w-48" alt="Partner 1" />
          </div>
          <div className="px-4 py-2">
            <img src="/partner2.png" className="w-48" alt="Partner 2" />
          </div>
          <div className="px-4 py-2">
            <img src="/partner3.png" className="w-48" alt="Partner 3" />
          </div>
          <div className="px-4 py-2">
            <img src="/partner4.png" className="w-48" alt="Partner 4" />
          </div>
        </div>
      </div>
    </>
  );
}
