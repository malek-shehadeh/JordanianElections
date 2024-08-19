// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// // import footer from "../footer";
// import Navbar from "../NAVBAR";
// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     start_time: "",
//     end_time: "",
//     candidate1_id: "",
//     candidate2_id: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateNationalId = (id) => {
//     return id.length === 10;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate national IDs
//     if (
//       !validateNationalId(formData.candidate1_id) ||
//       !validateNationalId(formData.candidate2_id)
//     ) {
//       setError("الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/debates", formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: "تم إرسال الطلب بنجاح!",
//         text: "ننتظر موافقة الأدمن على طلبك",
//         icon: "success",
//         confirmButtonText: "موافق",
//       });

//       // Clear the form fields
//       setFormData({
//         name: "",
//         start_time: "",
//         end_time: "",
//         candidate1_id: "",
//         candidate2_id: "",
//       });

//       navigate("/create-debate");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError("المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.");
//       } else {
//         setError("حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.");
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {/*
//   <div className="max-w-md mx-auto mt-10">
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//       {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="name"
//         >
//           اسم المناظرة
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="start_time"
//         >
//           وقت البداية
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="start_time"
//           type="datetime-local"
//           name="start_time"
//           value={formData.start_time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="end_time"
//         >
//           وقت النهاية
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="end_time"
//           type="datetime-local"
//           name="end_time"
//           value={formData.end_time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="candidate1_id"
//         >
//           الرقم الوطني للمرشح الأول
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="candidate1_id"
//           type="number"
//           name="candidate1_id"
//           value={formData.candidate1_id}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="candidate2_id"
//         >
//           الرقم الوطني للمرشح الثاني
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="candidate2_id"
//           type="number"
//           name="candidate2_id"
//           value={formData.candidate2_id}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           إرسال الطلب
//         </button>
//       </div>
//     </form>
//   </div> */}
//   {/* ///////////////////////////// */}
//   {/* <div
//   className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//   style={{
//     backgroundImage: "url('/picture.jpg')",
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     backgroundBlendMode: "overlay",
//     backgroundPosition: "20% 30%",
//   }}
// >
//   <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B]">طلب مناظرة</h2>
//   {error && <p className="text-red-500 text-sm mb-4 text-right">{error}</p>}
//   <form onSubmit={handleSubmit} className="space-y-4">
//     <div className="flex flex-col items-end">
//       <label className="mb-1 text-[#8E1B3B]" htmlFor="name">اسم المناظرة</label>
//       <input
//         className="w-full border rounded-md p-2 text-right bg-gray-50"
//         id="name"
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         dir="rtl"
//       />
//     </div>
//     <div className="flex flex-col items-end">
//       <label className="mb-1 text-[#8E1B3B]" htmlFor="start_time">وقت البداية</label>
//       <input
//         className="w-full border rounded-md p-2 text-right bg-gray-50"
//         id="start_time"
//         type="datetime-local"
//         name="start_time"
//         value={formData.start_time}
//         onChange={handleChange}
//         required
//         dir="rtl"
//       />
//     </div>
//     <div className="flex flex-col items-end">
//       <label className="mb-1 text-[#8E1B3B]" htmlFor="end_time">وقت النهاية</label>
//       <input
//         className="w-full border rounded-md p-2 text-right bg-gray-50"
//         id="end_time"
//         type="datetime-local"
//         name="end_time"
//         value={formData.end_time}
//         onChange={handleChange}
//         required
//         dir="rtl"
//       />
//     </div>
//     <div className="flex flex-col items-end">
//       <label className="mb-1 text-[#8E1B3B]" htmlFor="candidate1_id">الرقم الوطني للمرشح الأول</label>
//       <input
//         className="w-full border rounded-md p-2 text-right bg-gray-50"
//         id="candidate1_id"
//         type="number"
//         name="candidate1_id"
//         value={formData.candidate1_id}
//         onChange={handleChange}
//         required
//         dir="rtl"
//       />
//     </div>
//     <div className="flex flex-col items-end">
//       <label className="mb-1 text-[#8E1B3B]" htmlFor="candidate2_id">الرقم الوطني للمرشح الثاني</label>
//       <input
//         className="w-full border rounded-md p-2 text-right bg-gray-50"
//         id="candidate2_id"
//         type="number"
//         name="candidate2_id"
//         value={formData.candidate2_id}
//         onChange={handleChange}
//         required
//         dir="rtl"
//       />
//     </div>
//     <div className="flex justify-end">
//       <button
//         type="submit"
//         className="bg-[#8E1B3B] text-white px-6 py-2 rounded-md hover:bg-[#72152d] transition duration-300"
//       >
//         إرسال الطلب
//       </button>
//     </div>
//   </form>
// </div> */}
//   {/* //////////////////////////////// */}
{
  /* <div
  className="w-full max-w-2xl mx-auto mt-10 p-8 rounded-lg shadow-lg"
  style={{
    backgroundImage: "url('/picture.jpg')",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <h2 className="text-2xl font-bold mb-8 text-right text-[#8E1B3B]">
    طلب مناظرة جديدة
  </h2>
  {error && (
    <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
  )}
  <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
    <div className="flex flex-col">
      <label className="mb-2 text-[#8E1B3B] font-semibold" htmlFor="name">
        اسم المناظرة
      </label>
      <input
        className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label
          className="mb-2 text-[#8E1B3B] font-semibold"
          htmlFor="start_time"
        >
          وقت البداية
        </label>
        <input
          className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
          id="start_time"
          type="datetime-local"
          name="start_time"
          value={formData.start_time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex-1">
        <label
          className="mb-2 text-[#8E1B3B] font-semibold"
          htmlFor="end_time"
        >
          وقت النهاية
        </label>
        <input
          className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
          id="end_time"
          type="datetime-local"
          name="end_time"
          value={formData.end_time}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label
          className="mb-2 text-[#8E1B3B] font-semibold"
          htmlFor="candidate1_id"
        >
          الرقم الوطني للمرشح الأول
        </label>
        <input
          className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
          id="candidate1_id"
          type="number"
          name="candidate1_id"
          value={formData.candidate1_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex-1">
        <label
          className="mb-2 text-[#8E1B3B] font-semibold"
          htmlFor="candidate2_id"
        >
          الرقم الوطني للمرشح الثاني
        </label>
        <input
          className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
          id="candidate2_id"
          type="number"
          name="candidate2_id"
          value={formData.candidate2_id}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    <div className="flex justify-end mt-8">
      <button
        type="submit"
        className="bg-[#8E1B3B] text-white px-8 py-3 rounded-md hover:bg-[#72152d] transition duration-300 text-lg font-semibold"
      >
        إرسال الطلب
      </button>
    </div>
  </form>
</div> */
}
//       {/* <footer /> */}
//     </>
//   );
// };

// export default DebateRequestForm;
///////////////////////////////////////////////////
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../NAVBAR";

const DebateRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    start_time: "",
    end_time: "",
    candidate1_id: "",
    candidate2_id: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateNationalId = (id) => {
    return id.length === 10;
  };

  const validateDates = () => {
    const now = new Date();
    const startTime = new Date(formData.start_time);
    const endTime = new Date(formData.end_time);

    if (startTime < now) {
      return "لا يمكن إنشاء مناظرة بتاريخ سابق. يرجى اختيار تاريخ مستقبلي.";
    }

    if (endTime <= startTime) {
      return "يجب أن يكون وقت النهاية بعد وقت البداية.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate national IDs
    if (
      !validateNationalId(formData.candidate1_id) ||
      !validateNationalId(formData.candidate2_id)
    ) {
      setError("الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.");
      return;
    }

    // Validate dates
    const dateError = validateDates();
    if (dateError) {
      setError(dateError);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/debates", formData);

      // Show SweetAlert2 success message
      Swal.fire({
        title: "تم إرسال الطلب بنجاح!",
        text: "ننتظر موافقة الأدمن على طلبك",
        icon: "success",
        confirmButtonText: "موافق",
      });

      // Clear the form fields
      setFormData({
        name: "",
        start_time: "",
        end_time: "",
        candidate1_id: "",
        candidate2_id: "",
      });

      navigate("/create-debate");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.");
      } else {
        setError("حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.");
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <div
        className="w-full max-w-2xl mx-auto mt-10 p-8 rounded-lg shadow-lg"
        style={{
          backgroundImage: "url('/picture.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-2xl font-bold mb-8 text-right text-[#8E1B3B]">
          طلب مناظرة جديدة
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
          <div className="flex flex-col">
            <label className="mb-2 text-[#8E1B3B] font-semibold" htmlFor="name">
              اسم المناظرة
            </label>
            <input
              className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                className="mb-2 text-[#8E1B3B] font-semibold"
                htmlFor="start_time"
              >
                وقت البداية
              </label>
              <input
                className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
                id="start_time"
                type="datetime-local"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 text-[#8E1B3B] font-semibold"
                htmlFor="end_time"
              >
                وقت النهاية
              </label>
              <input
                className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
                id="end_time"
                type="datetime-local"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                className="mb-2 text-[#8E1B3B] font-semibold"
                htmlFor="candidate1_id"
              >
                الرقم الوطني للمرشح الأول
              </label>
              <input
                className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
                id="candidate1_id"
                type="number"
                name="candidate1_id"
                value={formData.candidate1_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 text-[#8E1B3B] font-semibold"
                htmlFor="candidate2_id"
              >
                الرقم الوطني للمرشح الثاني
              </label>
              <input
                className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
                id="candidate2_id"
                type="number"
                name="candidate2_id"
                value={formData.candidate2_id}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-[#8E1B3B] text-white px-8 py-3 rounded-md hover:bg-[#72152d] transition duration-300 text-lg font-semibold"
            >
              إرسال الطلب
            </button>
          </div>
        </form>
      </div> */}

      {/* ////////// */}
      {/* <div
        className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
        style={{
          backgroundImage: "url('/picture.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "20% 30%",
        }}
      >
        <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B]">
          طلب مناظرة
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-end">
            <label className="mb-1 text-[#8E1B3B]" htmlFor="name">
              اسم المناظرة
            </label>
            <input
              className="w-full border rounded-md p-2 text-right bg-gray-50"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-[#8E1B3B]" htmlFor="start_time">
              وقت البداية
            </label>
            <input
              className="w-full border rounded-md p-2 text-right bg-gray-50"
              id="start_time"
              type="datetime-local"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-[#8E1B3B]" htmlFor="end_time">
              وقت النهاية
            </label>
            <input
              className="w-full border rounded-md p-2 text-right bg-gray-50"
              id="end_time"
              type="datetime-local"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-[#8E1B3B]" htmlFor="candidate1_id">
              الرقم الوطني للمرشح الأول
            </label>
            <input
              className="w-full border rounded-md p-2 text-right bg-gray-50"
              id="candidate1_id"
              type="number"
              name="candidate1_id"
              value={formData.candidate1_id}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-[#8E1B3B]" htmlFor="candidate2_id">
              الرقم الوطني للمرشح الثاني
            </label>
            <input
              className="w-full border rounded-md p-2 text-right bg-gray-50"
              id="candidate2_id"
              type="number"
              name="candidate2_id"
              value={formData.candidate2_id}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#8E1B3B] text-white px-6 py-2 rounded-md hover:bg-[#72152d] transition duration-300"
            >
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
     */}
      <div
        className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
        style={{
          backgroundImage: "url('/path-to-election-themed-background.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-right text-white">
          طلب مناظرة
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-end">
            <label className="mb-1 text-white" htmlFor="name">
              اسم المناظرة
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-right bg-gray-100"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-white" htmlFor="start_time">
              وقت البداية
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-right bg-gray-100"
              id="start_time"
              type="datetime-local"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-white" htmlFor="end_time">
              وقت النهاية
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-right bg-gray-100"
              id="end_time"
              type="datetime-local"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-white" htmlFor="candidate1_id">
              الرقم الوطني للمرشح الأول
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-right bg-gray-100"
              id="candidate1_id"
              type="number"
              name="candidate1_id"
              value={formData.candidate1_id}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="mb-1 text-white" htmlFor="candidate2_id">
              الرقم الوطني للمرشح الثاني
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-right bg-gray-100"
              id="candidate2_id"
              type="number"
              name="candidate2_id"
              value={formData.candidate2_id}
              onChange={handleChange}
              required
              dir="rtl"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DebateRequestForm;
