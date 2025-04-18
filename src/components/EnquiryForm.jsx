import React, { useState } from "react";

const EnquiryForm = () => {
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleSubmit = (e) => {
    if (!isCaptchaChecked) {
      e.preventDefault();
      alert("Please confirm you're not a robot.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="border border-gray-300 p-5 shadow-lg bg-white mt-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center text-red-600 mb-5">
        Enquire Now
      </h2>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        {/* Mobile */}
        <div className="flex gap-2">
          <select className="border border-gray-300 px-2 py-2 text-sm" required>
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+971">+971 (UAE)</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile"
            required
            className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        {/* Profile */}
        <select
          required
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Profile
          </option>
          <option value="Student">Student</option>
          <option value="Working Professional">Working Professional</option>
          <option value="Job Seeker">Job Seeker</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Entrepreneur">Entrepreneur</option>
        </select>

        {/* Stream */}
        <select
          required
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Stream
          </option>
          <option value="Engineering">Engineering</option>
          <option value="Architecture">Architecture</option>
          <option value="Design">Design</option>
          <option value="Commerce">Commerce</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Diploma">Diploma</option>
        </select>

        {/* Course */}
        <select
          required
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Course
          </option>
          <option value="AutoCAD">AutoCAD</option>
          <option value="Revit Architecture">Revit Architecture</option>
          <option value="SolidWorks">SolidWorks</option>
          <option value="STAAD Pro">STAAD Pro</option>
          <option value="CATIA">CATIA</option>
          <option value="Java Programming">Java Programming</option>
          <option value="Python Programming">Python Programming</option>
          <option value="Data Science">Data Science</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="EV Design">EV Design</option>
          <option value="Embedded Systems">Embedded Systems</option>
        </select>

        {/* Captcha - 3/4 width and aligned left */}
        <div className="w-3/4 border border-gray-300 px-4 py-3 bg-gray-50 flex items-center gap-3">
          <input
            type="checkbox"
            id="captcha"
            required
            onChange={(e) => setIsCaptchaChecked(e.target.checked)}
            className="w-6 h-6 accent-blue-600"
          />
          <label
            htmlFor="captcha"
            className="text-base text-gray-800 font-medium select-none"
          >
            I’m not a robot
          </label>
          <div className="ml-auto flex items-center gap-1">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="h-6"
            />
            <span className="text-[11px] text-gray-500">reCAPTCHA</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-1">
          <button
            type="submit"
            disabled={!isCaptchaChecked}
            className={`w-1/3 py-2 text-sm text-white font-medium transition-all duration-200 ${
              isCaptchaChecked
                ? "bg-black hover:bg-gray-800 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            style={{ borderRadius: "0px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
