// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import Footer from "../footer";
// import Navbar from "../NAVBAR";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       {/*
//       <div className="max-w-4xl mx-auto mt-10">
//         <h2 className="text-2xl font-bold mb-6 text-center">قائمة المناظرات</h2>
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b border-gray-200">
//                 اسم المناظرة
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200">
//                 المرشح الأول
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200">
//                 المرشح الثاني
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200">
//                 وقت البداية
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200">
//                 وقت النهاية
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200">الاجراء</th>
//             </tr>
//           </thead>
//           <tbody>
//             {debates.map((debate) => (
//               <tr key={debate.id}>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   {debate.name}
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   {debate.candidate1_name}
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   {debate.candidate2_name}
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   {new Date(debate.start_time).toLocaleString()}
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   {new Date(debate.end_time).toLocaleString()}
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   <button
//                     onClick={() =>
//                       (window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`)
//                     }
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
//                   >
//                     الانضمام
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}
//       <div
//         className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الاجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => (
//                 <tr key={debate.id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate1_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate2_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.start_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.end_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     <button
//                       onClick={() =>
//                         (window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`)
//                       }
//                       className="bg-[#8E1B3B] hover:bg-[#72152d] text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
//                     >
//                       الانضمام
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// };

// export default DebatesList;
// ////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../NAVBAR";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const isDebateActive = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     return now >= start && now <= end;
//   };

//   const handleJoinClick = (debate) => {
//     if (isDebateActive(debate.start_time, debate.end_time)) {
//       window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
//     } else {
//       alert("هذه المناظرة انتهت");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الاجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => (
//                 <tr key={debate.id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate1_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate2_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.start_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.end_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     <button
//                       onClick={() => handleJoinClick(debate)}
//                       className={`${
//                         isDebateActive(debate.start_time, debate.end_time)
//                           ? "bg-[#8E1B3B] hover:bg-[#72152d]"
//                           : "bg-gray-400 cursor-not-allowed"
//                       } text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300`}
//                       disabled={
//                         !isDebateActive(debate.start_time, debate.end_time)
//                       }
//                     >
//                       {isDebateActive(debate.start_time, debate.end_time)
//                         ? "الانضمام"
//                         : "انتهت"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DebatesList;
// //////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../NAVBAR";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const isDebateActive = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     return now >= start && now <= end;
//   };

//   const handleJoinClick = (debate) => {
//     if (isDebateActive(debate.start_time, debate.end_time)) {
//       window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
//     } else {
//       alert("هذه المناظرة انتهت");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="w-full md:w-4/5 lg:w-5/6 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الاجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => (
//                 <tr key={debate.id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate1_name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate2_name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.start_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.end_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     <button
//                       onClick={() => handleJoinClick(debate)}
//                       className={`${
//                         isDebateActive(debate.start_time, debate.end_time)
//                           ? "bg-[#8E1B3B] hover:bg-[#72152d]"
//                           : "bg-gray-400 cursor-not-allowed"
//                       } text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300`}
//                       disabled={
//                         !isDebateActive(debate.start_time, debate.end_time)
//                       }
//                     >
//                       {isDebateActive(debate.start_time, debate.end_time)
//                         ? "الانضمام"
//                         : "انتهت"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DebatesList;
// //////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../NAVBAR";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const getDebateStatus = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);

//     if (now < start) {
//       const diff = start - now;
//       const minutes = Math.floor(diff / 60000);
//       if (minutes <= 30) {
//         return "سوف تبدأ قريبًا";
//       } else {
//         return "لم تبدأ بعد";
//       }
//     } else if (now >= start && now <= end) {
//       return "جارية الآن";
//     } else {
//       return "انتهت";
//     }
//   };

//   const handleJoinClick = (debate) => {
//     const status = getDebateStatus(debate.start_time, debate.end_time);
//     if (status === "جارية الآن") {
//       window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
//     } else {
//       alert(`هذه المناظرة ${status}`);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="w-full md:w-4/5 lg:w-5/6 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الحالة
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الإجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => (
//                 <tr key={debate.id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate1_name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate2_name}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.start_time).toLocaleDateString("en-GB")}{" "}
//                     {new Date(debate.start_time).toLocaleTimeString("en-GB")}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.end_time).toLocaleDateString("en-GB")}{" "}
//                     {new Date(debate.end_time).toLocaleTimeString("en-GB")}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     {getDebateStatus(debate.start_time, debate.end_time)}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-200 text-right">
//                     <button
//                       onClick={() => handleJoinClick(debate)}
//                       className={`${
//                         getDebateStatus(debate.start_time, debate.end_time) ===
//                         "جارية الآن"
//                           ? "bg-[#8E1B3B] hover:bg-[#72152d]"
//                           : "bg-gray-400 cursor-not-allowed"
//                       } text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300`}
//                       disabled={
//                         getDebateStatus(debate.start_time, debate.end_time) !==
//                         "جارية الآن"
//                       }
//                     >
//                       {getDebateStatus(debate.start_time, debate.end_time) ===
//                       "جارية الآن"
//                         ? "الانضمام"
//                         : getDebateStatus(
//                             debate.start_time,
//                             debate.end_time
//                           ) === "سوف تبدأ قريبًا"
//                         ? "سوف تبدأ قريبًا"
//                         : "انتهت"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DebatesList;
// /////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../NAVBAR";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const getDebateStatus = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);

//     if (now < start) {
//       const diff = start - now;
//       const minutes = Math.floor(diff / 60000);
//       if (minutes <= 30) {
//         return `ستبدأ خلال ${minutes} دقيقة${minutes > 1 ? "ات" : ""}`;
//       } else {
//         return " تبدأ قريبًا";
//       }
//     } else if (now >= start && now <= end) {
//       return "جارية الآن";
//     } else {
//       return "انتهت";
//     }
//   };

//   const handleJoinClick = (debate) => {
//     const status = getDebateStatus(debate.start_time, debate.end_time);
//     if (status === "جارية الآن") {
//       window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
//     } else {
//       alert(`هذه المناظرة ${status}`);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="w-full md:w-4/5 lg:w-5/6 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الحالة
//                 </th>
//                 <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الإجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => {
//                 const status = getDebateStatus(
//                   debate.start_time,
//                   debate.end_time
//                 );
//                 return (
//                   <tr key={debate.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {debate.name}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {debate.candidate1_name}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {debate.candidate2_name}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {new Date(debate.start_time).toLocaleDateString("en-GB")}{" "}
//                       {new Date(debate.start_time).toLocaleTimeString("en-GB")}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {new Date(debate.end_time).toLocaleDateString("en-GB")}{" "}
//                       {new Date(debate.end_time).toLocaleTimeString("en-GB")}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       {status}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-200 text-right">
//                       <button
//                         onClick={() => handleJoinClick(debate)}
//                         className={`${
//                           status === "جارية الآن"
//                             ? "bg-[#8E1B3B] hover:bg-[#72152d]"
//                             : "bg-gray-400 cursor-not-allowed"
//                         } text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300`}
//                         disabled={status !== "جارية الآن"}
//                       >
//                         {status === "جارية الآن" ? "الانضمام" : status}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DebatesList;
//////////////////////////////////
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../NAVBAR";

const DebatesList = () => {
  const [debates, setDebates] = useState([]);

  useEffect(() => {
    const fetchDebates = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/debates");
        setDebates(response.data);
      } catch (error) {
        console.error("Error fetching debates:", error);
      }
    };

    fetchDebates();
  }, []);

  const getDebateStatus = (startTime, endTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now < start) {
      const diff = start - now;
      const minutes = Math.floor(diff / 60000);
      if (minutes <= 30) {
        return {
          status: "لم تبدأ بعد",
          actionText: `ستبدأ خلال ${minutes} دقيقة${minutes > 1 ? "ات" : ""}`,
        };
      } else {
        return {
          status: "لم تبدأ بعد",
          actionText: "ستبدأ قريبًا",
        };
      }
    } else if (now >= start && now <= end) {
      return {
        status: "جارية الآن",
        actionText: "الانضمام",
      };
    } else {
      return {
        status: "انتهت",
        actionText: "انتهت",
      };
    }
  };

  const handleJoinClick = (debate) => {
    const { status } = getDebateStatus(debate.start_time, debate.end_time);
    if (status === "جارية الآن") {
      window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
    } else {
      alert(`هذه المناظرة ${status}`);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full md:w-4/5 lg:w-5/6 mx-auto mt-10 p-6 rounded-lg shadow-lg"
        style={{
          backgroundImage: "url('/picture.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "20% 30%",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-right text-[#8E1B3B]">
          قائمة المناظرات
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  اسم المناظرة
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  المرشح الأول
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  المرشح الثاني
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  وقت البداية
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  وقت النهاية
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  الحالة
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
                  الإجراء
                </th>
              </tr>
            </thead>
            <tbody>
              {debates.map((debate) => {
                const { status, actionText } = getDebateStatus(
                  debate.start_time,
                  debate.end_time
                );
                return (
                  <tr key={debate.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {debate.name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {debate.candidate1_name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {debate.candidate2_name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {new Date(debate.start_time).toLocaleDateString("en-GB")}{" "}
                      {new Date(debate.start_time).toLocaleTimeString("en-GB")}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {new Date(debate.end_time).toLocaleDateString("en-GB")}{" "}
                      {new Date(debate.end_time).toLocaleTimeString("en-GB")}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      {status}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-right">
                      <button
                        onClick={() => handleJoinClick(debate)}
                        className={`${
                          status === "جارية الآن"
                            ? "bg-[#8E1B3B] hover:bg-[#72152d]"
                            : "bg-gray-400 cursor-not-allowed"
                        } text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300`}
                        disabled={status !== "جارية الآن"}
                      >
                        {actionText}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DebatesList;
