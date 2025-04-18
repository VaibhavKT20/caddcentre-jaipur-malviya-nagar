import React from "react";

const LocationMap = () => {
  return (
    <div className="w-[80%] h-96 mr-10">
      {" "}
      {/* Adjusted width to 80% */}
      <iframe
        title="CADD Centre Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3727685556766!2d75.824537!3d26.894629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e9ea3d2a8f%3A0x19e9c0d6e2f6e7aa!2sCADD%20Centre%20Malviya%20Nagar%20Jaipur!5e0!3m2!1sen!2sin!4v1712329611612!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
