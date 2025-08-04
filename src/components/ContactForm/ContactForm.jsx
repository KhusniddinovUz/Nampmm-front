import React, {useState} from 'react';
import './ContactForm.css'; //

export default function ContactForm() {
  // ---------- local state ----------
  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ---------- helpers ----------
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  // very light validation
  const validate = () => {
    const newErr = {};
    if (!form.fullname.trim()) newErr.fullname = 'Majburiy';
    if (!form.phone.trim()) newErr.phone = 'Majburiy';
    if (!form.message.trim()) newErr.message = 'Majburiy';
    return newErr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    console.log('Submitted payload:', form);
    setSubmitted(true);
    setForm({fullname: '', phone: '', message: ''});
  };

  return (
      <>
        <section className="contact-wrapper">
          <h2>Murojaatlar so'rovnomasi</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="form-grid">
              <div className="form-rows-wrapper">
                <label>
                  <span>Ism familiya <sup>*</sup></span>
                  <input
                      type="text"
                      name="fullname"
                      placeholder="Kiritish"
                      value={form.fullname}
                      onChange={handleChange}
                  />
                  {errors.fullname && <small>{errors.fullname}</small>}
                </label>

                <label>
                  <span>Telefon raqam <sup>*</sup></span>
                  <input
                      type="tel"
                      name="phone"
                      placeholder="Kiritish"
                      value={form.phone}
                      onChange={handleChange}
                  />
                  {errors.phone && <small>{errors.phone}</small>}
                </label>
              </div>

              <label className="message-row">
                <span>Xabar <sup>*</sup></span>
                <textarea
                    name="message"
                    rows="1"
                    placeholder="Kiritish"
                    value={form.message}
                    onChange={handleChange}
                />
                {errors.message && <small>{errors.message}</small>}
              </label>
            </div>

            <button type="submit" className="send-btn">
              {submitted ? 'Yuborildi ✓' : <>Yuborish&nbsp;<span
                  className="arrow">→</span></>}
            </button>
          </form>
        </section>
      </>

  );
}
