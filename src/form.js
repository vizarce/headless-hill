import React from "react";
import { useState } from "react";

export function FormInput(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      console.log("Дані форми:", formData);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } else {
      alert("Будь ласка, заповніть всі поля!");
    }
  };

  return (
    <div className={props.class || "form-container"}>
      <h2>Форма зворотного зв'язку</h2>
      {submitted ? (
        <div className="success-message">
          <h3>✓ Дякуємо, {formData.name}!</h3>
          <p>Ваше повідомлення успішно відправлено.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Ім'я:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введіть ваше ім'я"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введіть вашу пошту"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Повідомлення:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Введіть ваше повідомлення"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className={props.bclass || "submit-btn"}>
            Відправити
          </button>
        </form>
      )}
    </div>
  );
}
