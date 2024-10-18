import { useState } from 'react';

// Which component
const Which = ({ icon, name, isActive, onClick }) => {
  return (
 
    <div onClick={onClick}
      className={`w-full sm:w-[180px] h-[69px] text-[#71717A] rounded-md border-[1px] bg-[#f5f5f5] border-[#E4E4E7] box flex gap-[10px] py-6 pl-4 items-center hover:bg-[#f26722] hover:text-[#fff] transition-colors hover:scale-105 transition-transform`}
    >
      <p className="img">{icon}</p>
      <p className="text-[14px]">{name}</p>
    </div>
  );
};

// Parent component
const Incident2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const incidents = [
    { icon: <img src="\img\Avalanche.png" alt=""/>, name: "Avalanche" },
    { icon: <img src="\img\Biological.png" alt=""/>, name: "Biological" },
    { icon: <img src="\img\Blizzard.png" alt=""/>, name: "Blizzard" },
    { icon: <img src="\img\ColdFreezing.png" alt=""/>, name: "Cold/Freezing" },
    { icon: <img src="\img\Drought.png" alt=""/>, name: "Drought" },
    { icon: <img src="\img\Earthquake.png" alt=""/>, name: "Earthquake" },
    { icon: <img src="\img\Flooding.png" alt=""/>, name: "Flooding" },
    { icon: <img src="\img\Heat.png" alt=""/>, name: "Heat Wave" },
    { icon: <img src="\img\Hail.png" alt=""/>, name: "Hail" },
    { icon: <img src="\img\Lightning.png" alt=""/>, name: "Lightning" },
    { icon: <img src="\img\ManMade.png" alt=""/>, name: "Man Made" },
    { icon: <img src="\img\Mudslide.png" alt=""/>, name: "Mudslide" },
    { icon: <img src="\img\SevereStorm.png" alt=""/>, name: "Severe Storm" },
    { icon: <img src="\img\SevereStorm.png" alt=""/>, name: "Strong Wind" },
    { icon: <img src="\img\Tornado.png" alt=""/>, name: "Tornado" },
    { icon: <img src="\img\Tsunami.png" alt=""/>, name: "Tsunami" },
    { icon: <img src="\img\volcanic.png" alt=""/>, name: "Volcanic Eruption" },
    { icon: <img src="\img\Wildfire.png" alt=""/>, name: "Wildfire" },
  ];

  return (
    <div className="flex justify-center md:px-0 px-4 md:mb-0 mb-4">
      <div>
        <h1 className="text-[24px] font-bold py-5 text-center sm:text-left">
          Which of these best describes the incident?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {incidents.map((incident, index) => (
            <Which
              key={index}
              icon={incident.icon}
              name={incident.name}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incident2;