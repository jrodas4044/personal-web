export default function Stack() {
  const bannerStyle = {
    backgroundImage: "url(/bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="flex flex-col justify-center items-start bg-gray-900 w-screen h-full">
        <div className="mx-auto p-8 container">
          <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 font-bold text-4xl text-transparent">
            Stack
          </h3>

          <div>
            <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mt-12 mb-8 font-bold text-2xl text-transparent">
              Frontend
            </h3>
            <div className="gap-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-8">
              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                />
                <span className="mt-2">React</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=eETV3RNHVrWA&format=png&color=000000"
                />
                <span className="mt-2">Vue</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                />
                <span className="mt-2">Tailwind</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000"
                />
                <span className="mt-2">Next.js</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000"
                />
                <span className="mt-2">TypeScript</span>
              </div>
            </div>

            <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mt-12 font-bold text-2xl text-transparent">
              Backend
            </h3>

            <div className="gap-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-8">
              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                />
                <span className="mt-2">Node</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  className="w-12 h-12"
                  src="https://img.icons8.com/?size=100&id=Y9Kxy8Xl1id8&format=png&color=000000"
                />
                <span className="mt-2 text-center">AWS LAMBDA</span>
              </div>
            </div>

            <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mt-12 font-bold text-2xl text-transparent">
              Key AWS Services I&apos;ve Used
            </h3>

            <div className="gap-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-8">
              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg"
                  className="w-12 h-12"
                />
                <span className="mt-2">API-Gateway</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg"
                  className="w-12 h-12"
                />
                <span className="mt-2">DynamoDB</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  src="https://icon.icepanel.io/AWS/svg/Analytics/OpenSearch-Service.svg"
                  className="w-12 h-12"
                />
                <span className="mt-2">OpenSearch</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg"
                  className="w-12 h-12"
                />
                <span className="mt-2">OpenSearch</span>
              </div>

              <div className="flex flex-col justify-center items-center bg-gray-900 shadow p-4 rounded-2xl">
                <img
                  src="https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg"
                  className="w-12 h-12"
                />
                <span className="mt-2 text-center">AWS Amplify</span>
              </div>
            </div>
          </div>

          <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mt-12 font-bold text-2xl text-transparent">
            Technologies I&apos;ve Had the Opportunity to Work With
          </h3>

          <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-8">
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Laravel
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Phalcon PHP
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Laravel Nova
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Wordpress
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Symfony
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              MySql
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Postgres
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Azure
            </div>
            <div className="bg-gradient-to-r from-emerald-900 to-indigo-800 my-4 rounded-2xl w-32 font-bold text-center">
              Digital Ocean
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
