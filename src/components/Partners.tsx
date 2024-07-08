export default function Partners() {
  return (
   <>
      <div className="px-4 py-8 bg-gray-900">
        <div className="flex flex-col items-center justify-centers">
          <h3 className="text-2xl text-gray-400">Partners</h3>
          <span className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
            He trabajado con
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center py-8">
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
  )
}
