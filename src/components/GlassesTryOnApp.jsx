import React, { useState } from "react";
import { data } from "../assets/dataGlasses";
const glassesData = data;

const GlassesTryOnApp = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="min-h-screen bg-primary p-8">
      <h1 className="text-5xl text-center bg-black bg-opacity-70 text-white p-5 ">TRY GLASSES APP ONLINE</h1>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-5">
        <div className="flex justify-center mb-8 space-x-8">

          <div className="relative w-80 h-100 rounded-lg shadow-md">
            <img src="./assets/glassesImage/model.jpg" alt="Model" className="w-full h-full object-cover" />
            {selectedGlasses && <img src={selectedGlasses.url} alt={selectedGlasses.name} className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/3" />}


            <div className=" bg-black bg-opacity-10 from-black to-transparent h-28 flex flex-col justify-end p-5 absolute bottom-0 left-0 right-0">
              <h5 className="text-xl font-bold text-blue mb-2">{selectedGlasses ? selectedGlasses.name : ""}</h5>
              <p className="text-sm text-white">{selectedGlasses ? selectedGlasses.desc : ""}</p>
            </div>
          </div>


          <div className="relative w-80 h-100  rounded-lg ">
            <img src="./assets/glassesImage/model.jpg" alt="Model" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-5xl text-center bg-black bg-opacity-10 text-white p-5">Try glasses in here</h1>


        <div className=" justify-items-center grid grid-cols-3 gap-3">
          {glassesData.map((glasses) => (
            <div key={glasses.id} className=" p-3 cursor-pointer hover:border-red-700 border border-yellow-300 transition duration-500 w-24 h-24" onClick={() => handleSelectGlasses(glasses)}>
              <img src={glasses.url} alt={glasses.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassesTryOnApp;
