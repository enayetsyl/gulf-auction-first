import carAbstract from '../public/car-abstract.png';

import Image from "next/image";

const selectOptions = [
  {
    title: 'Select Make:',
    options: ['nissan', 'dodge', 'subaru'],
  },
  {
    title: 'Select Model:',
    options: ['grand caravan', 'nx', 'subaru'],
  },
  {
    title: 'Select Year:',
    options: [
      '2023',
      '2022',
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
    ],
  },
];

const handleSubmit = (e) => {
  e.preventDefault();
};
const VehicleSearch = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-0">
        <div className="relative col-span-2 px-4">
          <div
            className="absolute top-0 bottom-0 -right-0.5 h-full w-full bg-primary"
            style={{
              clipPath: `polygon(80% 0, 100% 0%, 100% 100%, 80% 100%, 97% 50%)`,
            }}
          />
          <Image src={carAbstract} alt="car abstract" />
        </div>
        <div className="bg-primary col-span-10 h-full flex items-center px-4 md:px-10">
          <form className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-end w-full">
            {selectOptions.map((item, i) => {
              const { title, options } = item;
              return (
                <div className="flex flex-col w-full" key={i}>
                  <label
                    htmlFor={title}
                    className="text-white font-semibold font-secondary mb-2"
                  >
                    {title}
                  </label>
                  <select
                    required
                    name={title}
                    id={title}
                    className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full"
                  >
                    {options.map((option, j) => (
                      <option className="uppercase" value={option} key={j}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}

            <div>
              <button
                type="submit"
                className="border border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-primary duration-500"
              >
                Search the vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleSearch;