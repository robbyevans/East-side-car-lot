import React from "react";
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <main className="w-full h-screen bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
        <div className="w-full h-full bg-black/60 relative">
          <div className="w-full h-1/3 flex items-center justify-center">
            <h1 className="uppercase font-bold text-5xl text-white">
              east side car lot
            </h1>
          </div>
          <div className="w-full h-1/3 flex items-center justify-end">
            <div className="w-1/3">
              <h1 className="uppercase font-extrabold text-7xl text-white pr-4">
                we provide <span className="text-red-500"> 24 hour</span>{" "}
                parking space
              </h1>
              <Link to="/signup" className=" inline-block uppercase text-white rounded-3xl bg-red-700 p-4 text-4xl font-bold mt-24 ">
                welcome
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
