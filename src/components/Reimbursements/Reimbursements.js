import React, { useState } from "react";
import Layout1 from "../Layout1";
import "./re.css";
const Reimbursements = () => {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    paymentType: "",
    outOfPocketExpense: [],
    materialTransportation: "",
    other: "",
    raisedBy: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "amount" && !/^\d*$/g.test(value)) {
      // If non-numeric characters are entered, do not update state
      return;
    }
    setFormData((prevData) => {
      // Handle checkbox values
      if (type === "checkbox") {
        const updatedOutOfPocketExpense = checked
          ? [...prevData.outOfPocketExpense, name]
          : prevData.outOfPocketExpense.filter((item) => item !== name);

        return { ...prevData, outOfPocketExpense: updatedOutOfPocketExpense };
      }

      return { ...prevData, [name]: value };
    });
  };
  const resetForm = () => {
    setFormData({
      date: "",
      amount: "",
      paymentType: "",
      outOfPocketExpense: [],
      materialTransportation: "",
      other: "",
      raisedBy: "",
      remarks: "",
    });
    setErrors({
      date: "",
      amount: "",
      paymentType: "",
      outOfPocketExpense: "",
      materialTransportation: "",
      other: "",
      raisedBy: "",
      remarks: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.date) {
      newErrors.date = "Date is required";
      alert("Date is required");
    }

    if (!formData.amount || isNaN(parseFloat(formData.amount))) {
      newErrors.amount = "Valid amount is required";
      alert("Valid amount is required");
    }

    if (!formData.paymentType) {
      newErrors.paymentType = "Payment type is required";
      alert("Payment type is required");
    }

    if (formData.outOfPocketExpense.length === 0) {
      newErrors.outOfPocketExpense = "Select at least one expense type";
      alert("Select at least one expense type");
    }

    if (
      formData.outOfPocketExpense.includes("Material Transportation") &&
      !formData.materialTransportation
    ) {
      newErrors.materialTransportation =
        "Material Transportation details are required";
      alert("Material Transportation details are required");
    }

    if (formData.outOfPocketExpense.includes("Other") && !formData.other) {
      newErrors.other = "Other details are required";
      alert("Other details are required");
    }

    if (!formData.raisedBy) {
      newErrors.raisedBy = "Raised by is required";
      alert("Raised by is required");
    }

    setErrors(newErrors);

    // If there are no errors, you can submit the form data or perform further actions
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Reimbursement Form Submitted Successfully");
      resetForm();
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <Layout1 title="Reimbursement Form">
      <div>
        <h2>Reimbursement Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div1>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <div className="error">{errors.date}</div>
          </div1>

          <div1>
            <label>Amount:</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <div className="error">{errors.amount}</div>
          </div1>

          <div1>
            <label>Payment Type:</label>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
            >
              <option value="">Select Payment Type</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
            <div className="error">{errors.paymentType}</div>
          </div1>

          <div1>
            <label>Out of Pocket Expense:</label>
            <div className="div2">
              <label style={{ whiteSpace: "nowrap" }}>
                Material Transportation
              </label>
              <input
                type="checkbox"
                id="materialTransportation"
                name="Material Transportation"
                checked={formData.outOfPocketExpense.includes(
                  "Material Transportation"
                )}
                style={{ marginLeft: "-135px" }}
                onChange={handleChange}
              />
            </div>
            <div className="div2">
              <label>Other</label>
              <input
                type="checkbox"
                name="Other"
                checked={formData.outOfPocketExpense.includes("Other")}
                onChange={handleChange}
              />
            </div>
            <div className="error">{errors.outOfPocketExpense}</div>
          </div1>

          {formData.outOfPocketExpense.includes("Material Transportation") && (
            <div1>
              <label>Material Transportation Details:</label>
              <input
                type="text"
                name="materialTransportation"
                value={formData.materialTransportation}
                onChange={handleChange}
              />
              <div className="error">{errors.materialTransportation}</div>
            </div1>
          )}

          {formData.outOfPocketExpense.includes("Other") && (
            <div1>
              <label>Other Details:</label>
              <input
                type="text"
                name="other"
                value={formData.other}
                onChange={handleChange}
              />
              <div className="error">{errors.other}</div>
            </div1>
          )}

          <div1>
            <label>Raised By:</label>
            <select
              name="raisedBy"
              value={formData.raisedBy}
              onChange={handleChange}
            >
              <option value="">Select Employee</option>
              <option value="Employee1">Employee 1</option>
              <option value="Employee2">Employee 2</option>
              {/* Add more employee options as needed */}
            </select>
            <div className="error">{errors.raisedBy}</div>
          </div1>

          <div1>
            <label>Remarks:</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            ></textarea>
          </div1>

          <button
            type="submit"
            style={{
              marginLeft: "32%",
              marginTop: "5px",
              marginBottom: "5px",
              width: "500px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout1>
  );
};

export default Reimbursements;
