export default function Stack() {

  const bannerStyle = {
    backgroundImage: "url(/bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
return (<>
<div style={bannerStyle} className="flex flex-col items-start justify-center w-screen h-full">
    <div className="container mx-auto p-8">
      <h3 className="text-4xl font-bold text-gray-400 text-center mt-12">Stack</h3>

      <div>
          <h3 className="text-2xl mt-12 mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
            Frontend
          </h3>
        <div className="flex flex-wrap items-center  justify-start space-x-8">
            <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
              <img src="https://img.icons8.com/?size=100&id=eETV3RNHVrWA&format=png&color=000000"/>
              <span className="mt-2">Vue.js</span>
            </div>

            <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
              <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"/>
              <span className="mt-2">Tailwind</span>
            </div>

            <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
              <img src="https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000"/>
              <span className="mt-2">Next.js</span>
            </div>

            <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
              <img src="https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000"/>
              <span className="mt-2">TypeScript</span>
            </div>
        </div>

        <h3 className="mt-12 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
          Backend
        </h3>

        <div className="mt-8 flex flex-wrap items-center justify-start space-x-8">

          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"/>
            <span className="mt-2">Node</span>
          </div>

            <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
              <img src="https://img.icons8.com/?size=100&id=Y9Kxy8Xl1id8&format=png&color=000000"/>
              <span className="mt-2">AWS LAMBDA</span>
            </div>
        </div>

        <h3 className="mt-12 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
          Principales Servicios que he utilizado en AWS
        </h3>


        <div className="mt-8 flex flex-wrap items-center justify-start space-x-8">
          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg" className="w-[100px]"/>
            <span className="mt-2">API-Gateway</span>
          </div>

          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" className="w-[100px]"/>
            <span className="mt-2">DynamoDB</span>
          </div>

          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://icon.icepanel.io/AWS/svg/Analytics/OpenSearch-Service.svg" className="w-[100px]"/>
            <span className="mt-2">OpenSearch</span>
          </div>

          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" className="w-[100px]"/>
            <span className="mt-2">OpenSearch</span>
          </div>

          <div className='flex flex-col items-center justify-center p-4 bg-gray-900 shadow rounded-2xl' >
            <img src="https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg" className="w-[100px]"/>
            <span className="mt-2 text-center">AWS Amplify</span>
          </div>

        </div>


      </div>

        <h3 className="mt-12 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
        Tecnologías con las que Tuve la Oportunidad de Trabajar
        </h3>

        <div className="flex flex-wrap items-center justify-center space-x-4 mt-8 mb-12">
          <div className='bg-gradient-to-r from-emerald-900 to-indigo-800 w-32 rounded-2xl font-bold text-center my-4' >Laravel</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Phalcon PHP</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Laravel Nova</div>
          <div className='bg-gradient-to-r from-emerald-800 to-indigo-900 w-32 rounded-2xl font-bold text-center' >Wordpress</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Symfony</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >MySql</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Postgres</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Azure</div>
          <div className='bg-gradient-to-r from-emerald-800 to-blue-800 w-32 rounded-2xl font-bold text-center' >Digital Ocean</div>
        </div>

    </div>
</div>
  </>)
}
