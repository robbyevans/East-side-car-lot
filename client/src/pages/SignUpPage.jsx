// import React from "react";
// import { Link} from "react-router-dom"
// import SignUpForm from "../components/SignUpForm";
// import  react, { useState } from 'react'


// const SignUpPage = () => {
  
//     // function handleSubmit(e) {
//     //   e.preventDefault();
//     //   setIsLoading(true);
//     //   fetch("/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({ name, password, passwordConfirmation, email, carNumber }),
//     //   }).then((r) => {
//     //     setIsLoading(false);
//     //     if (r.ok) {
//     //       r.json().then((user) => console.log(user));
//     //     } else {
//     //       r.json().then((err) => console.log(err.errors));
//     //     }
//     //   });
//     // }

//   return (
//     <>



// <nav id="header" class="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-24">
//       <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
//          <label for="menu-toggle" class="cursor-pointer md:hidden block">
//             <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
//                <title>menu</title>
//                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//             </svg>
//          </label>
//          <input class="hidden" type="checkbox" id="menu-toggle"/>
//          <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
//             <nav>
//                <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
//                   <li><Link to="/login" class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Login</Link></li>
//                   <li><Link to="/slots" class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Slots</Link></li>
//                   <li><Link to="/about" class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >About</Link></li>
//                </ul>
//             </nav>
//          </div>
//          <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
//             <div class="auth flex items-center w-full md:w-full">
//                <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
//                <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
//             </div>
//          </div>
//       </div>
//    </nav>

   








     
// <div class="relative flex h-full w-full">    









//   <div class="h-screen w-1/2 bg-black">
//     <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
//       <div>
//         <p class="text-2xl">Sign Up</p>
//         <p></p>
//       </div>
//       <div class="my-6">
//         <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
//       </div>
//       <div>
//         <fieldset class="border-t border-solid border-gray-600">
//           <legend class="mx-auto px-2 text-center text-sm">Or Sign up via our secure system</legend>
//         </fieldset>
//       </div>
//       <div class="mt-10">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label class="mb-2.5 block font-extrabold" for="email">Email</label>
//             <input type="text"  value={name} onChange={(e)=>setname=(e.target.value)} class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
//           </div>
//           <div class="mt-4">
//             <label class="mb-2.5 block font-extrabold" for="email">Password</label>
//             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
//           </div>  
//           <div class="mt-4">
//             <label class="mb-2.5 block font-extrabold" for="email"> Confirm Password</label>
//             <input type="password" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
//           </div>
//           <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
           
//             {/* <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div> */}
            
//             {/* <div>
//               <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
//             </div> */}
//           </div>
//           <div class="my-10">
//             <button class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   <div class="h-screen w-1/2 bg-blue-600">
//     <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
//   </div>
// </div>
//     </>
//   );
// };

// export default SignUpPage;
