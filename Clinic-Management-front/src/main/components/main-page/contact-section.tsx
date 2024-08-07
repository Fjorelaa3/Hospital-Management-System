import React from "react";

const ContactSection = () => {
  return (
    <div className="container px-4 shadow-lg rounded">
      <h2 className="text-center blue-color pt-3">
        <i className="fas fa-clock"></i> Timetable
      </h2>
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 w-75 mx-auto">
            <h2 className="fw-bolder blue-color">AFMSH ProHealth Clinic</h2>
            <p className="fw-bold text-secondary">
              The AFMSH ProHealth Clinic ensures the best healthcare as well as clinical service with 
              exceptional personal care. We guarantee the best healthcare and clinical 
              service with  the best personal care.
            </p>
            <p className="mt-4">
              <i className="blue-color fas fa-location-arrow"></i> Tiranë-Rinas, km. 12, 1000
            </p>
            <p>
              <i className="blue-color fas fa-phone"></i> +355 69 953 8811
            </p>
            <div className="mb-3 fs-4">
              <i className="fab fa-facebook-square me-4"></i>
              <i className="fab fa-twitter me-4"></i>
              <i className="fab fa-instagram me-4"></i>
              <i className="fab fa-linkedin-in me-4"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-3 w-75 mx-auto">
            <h4 className="fw-bolder">Open</h4>
            <table className="table bluish-bg text-secondary fw-bold rounded">
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Emergency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
