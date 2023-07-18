import React from 'react';

const Body = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="container mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-1 lg:order-2">
            <img
              src="http://via.placeholder.com/473x400"
              alt="Placeholder Image 3"
              className="w-96 h-80 object-cover"
            />
          </div>
          <div className="pad2 col-lg-6 pt-4 pt-lg-0 order-2 lg:order-1 content">
            <div className="border-red-500 border rounded p-4 w-96 ml-auto mr-4 h-72 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-left">00+ Courses</h3>

              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus.
                Nulla non
              </p>

              <div className="text-left mt-7">
                <a href="#" className="text-blue-500 underline">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-1 lg:order-1 flex items-center">
            <img
              src="http://via.placeholder.com/473x400"
              alt="Placeholder Image 3"
              className="w-96 h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-1">
            <div className="border-red-500 border rounded p-4 w-96 ml-auto mr-4 h-72 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">00+ Courses</h3>

              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus.
                Nulla non
              </p>

              <div className="text-left mt-7">
                <a href="#" className="text-blue-500 underline">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-1 lg:order-2 flex items-center">
            <img
              src="http://via.placeholder.com/473x400"
              alt="Placeholder Image 3"
              className="w-96 h-80 object-cover"
            />
          </div>
          <div className="pad2 col-lg-6 pt-4 pt-lg-0 order-2 lg:order-1 content">
            <div className="border-red-500 border rounded p-4 w-96 ml-auto mr-4 h-72 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-left">00+ Courses</h3>

              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus.
                Nulla non
              </p>

              <div className="text-left mt-7">
                <a href="#" className="text-blue-500 underline">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
