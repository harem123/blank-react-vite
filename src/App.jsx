import './App.css'

function App() {
  return (
    <>
      <div className=" mt-80 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl text-indigo-950  font-bold">Calidad de Generacion</h1>
          <h4 className="mt-4 text-gray-500">Ingrese los productos a consultar para obtener un listado de las fechas de la ultima orden y la ultima anomalia</h4>
        </div>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Productos
            </label>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-col">
            
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Productos"/>
          </div>
          <button className="bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Consultar
          </button>
        </div>
      </div>
    </>
  );
}

export default App
