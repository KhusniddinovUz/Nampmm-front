import React, {useState} from 'react';
import './ContactForm.css';
import axios from "axios";
import {toast} from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  const validate = () => {
    const newErr = {};
    if (!form.fullname.trim()) newErr.fullname = 'Majburiy';
    if (!form.phone.trim()) newErr.phone = 'Majburiy';
    if (!form.message.trim()) newErr.message = 'Majburiy';
    return newErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    const payload = {
      "full_name": form.fullname,
      "phone": form.phone,
      "message": form.message
    }

    try {
      const res = await axios.post('http://192.168.1.7:8008/metrics/contact/', payload);

      if (res.status === 201) {
        toast.success("Murojaat yuborildi", {
          style: {fontFamily: "Gt Eesti Pro Display"},
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      if (err.response) {
        const {status} = err.response;

        if (status === 429) {
          toast.error("Iltimos keyinroq qayta urinib ko'ring.", {
            style: {fontFamily: "Gt Eesti Pro Display"},
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Serverda xatolik. Keyinroq urinib ko'ring.", {
            style: {fontFamily: "Gt Eesti Pro Display"},
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }

      } else {
        toast.error("Serverda xatolik. Keyinroq urinib ko'ring.", {
          style: {fontFamily: "Gt Eesti Pro Display"},
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

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
              Yuborish
            </button>
          </form>
        </section>
      </>

  );
}
