// import React from 'react';
// import pencil from '../assets/pencil.svg'
// import plusicon from '../assets/plusicon.svg'
// import userProfileIcon from '../assets/userProfileIcon.svg'

// const UserProfilePage = () => {
//   const user = {
//     name: 'ბალერინა',
//     lastName: 'კაპუჩინა',
//     title: 'ჩემი პროფილის გვერდი',
//     email: 'დაამატეთ ინფორმაცია',
//     phone: 'დაამატეთ ინფორმაცია',
//     address: 'დაამატეთ ინფორმაცია',
//     profilePic: userProfileIcon,
//   };

//   return (
//     <div className='p-20 pt-40 bg-[#E6F3FF]'>
//       <div className="bg-gray-50 min-h-screen p-4 font-sans">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6 flex items-center space-x-6 border border-blue-200">
//             <img
//               src={user.profilePic}
//               alt="User Profile"
//               className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//             />
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{user.name} {user.lastName}</h1>
//               <p className="text-gray-600 mt-1">{user.title}</p>
//             </div>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:space-x-8">
//             <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6 mb-8 lg:mb-0">
//               <h2 className="text-xl font-bold text-gray-700 mb-4">ჩემი მონაცემები</h2>
//               <ul className="space-y-2">
//                 <li className="p-3 rounded-lg text-gray-800 font-semibold bg-gray-100 border-l-4 border-blue-500">
//                   პროფილის რედაქტირება
//                 </li>
//                 <li className="p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">
//                   გასვლა
//                 </li>
//               </ul>
//             </div>
//             <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">ჩემი მონაცემები</h2>
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div className="space-y-1">
//                     <p className="text-sm text-gray-500">სახელი</p>
//                     <p className="font-semibold text-gray-800">{user.name}</p>
//                   </div>
//                   <img
//                   className='hover:cursor-pointer'
//                   src={pencil} alt="" />
//                 </div>
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div className="space-y-1">
//                     <p className="text-sm text-gray-500">გვარი</p>
//                     <p className="font-semibold text-gray-800">{user.lastName}</p>
//                   </div>
//                   <img
//                   className='hover:cursor-pointer'
//                   src={pencil} alt="" />
//                 </div>
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div className="space-y-1">
//                     <p className="text-sm text-gray-500">ელ ფოსტა</p>
//                     <p className="font-semibold text-gray-800">{user.email}</p>
//                   </div>
//                   <img
//                   className='hover:cursor-pointer'
//                   src={plusicon} alt="" />
//                 </div>
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div className="space-y-1">
//                     <p className="text-sm text-gray-500">ტელეფონი</p>
//                     <p className="font-semibold text-gray-800">{user.phone}</p>
//                   </div>
//                   <img
//                   className='hover:cursor-pointer'
//                   src={plusicon} alt="" />
//                 </div>
//                 <div className="flex items-center justify-between pb-4">
//                   <div className="space-y-1">
//                     <p className="text-sm text-gray-500">მისამართი</p>
//                     <p className="font-semibold text-gray-800">{user.address}</p>
//                   </div>
//                   <img
//                   className='hover:cursor-pointer'
//                   src={plusicon} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
