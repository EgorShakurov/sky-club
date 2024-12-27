import React, { useState, useEffect } from "react";
import style from './Support.module.css';

function Support() {

    useEffect(() => {
        const timer = setTimeout(() => {
          const supportElement = document.querySelector("#support");
          if (supportElement) {
            supportElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300); 
    
        return () => clearTimeout(timer);
      }, []);
      
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        question: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        question: ""
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "name":
                if (!value.trim()) error = "Имя не должно быть пустым";
                break;
            case "phone":
                if (!validatePhone(value)) error = "Введите корректный номер телефона";
                break;
            case "email":
                if (!validateEmail(value)) error = "Введите корректный email";
                break;
            case "date":
                if (!value) error = "Выберите дату";
                break;
            case "question":
                if (!value.trim()) error = "Вопрос не должен быть пустым";
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "Поле не должно быть пустым";
            }
        });
    
        setErrors(newErrors);
    
        if (Object.values(newErrors).every((error) => !error)) {
            alert(`Данные успешно отправлены:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nДата: ${formData.date}\nВопрос: ${formData.question}`);
    
            setFormData({
                name: "",
                phone: "",
                email: "",
                date: "",
                question: ""
            });
            setErrors({
                name: "",
                phone: "",
                email: "",
                date: "",
                question: ""
            });
        }
    };

    return (
        <section id="support" className={style.formContainer}>
            <span className={style.formTitle}>Задайте вопрос</span>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.name ? style.inputError : ""}
                    />
                    {errors.name && <span className={style.errorText}>{errors.name}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Введите ваш телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone ? style.inputError : ""}
                    />
                    {errors.phone && <span className={style.errorText}>{errors.phone}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Введите ваш email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email ? style.inputError : ""}
                    />
                    {errors.email && <span className={style.errorText}>{errors.email}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="date">Дата</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.date ? style.inputError : ""}
                    />
                    {errors.date && <span className={style.errorText}>{errors.date}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="question">Ваш вопрос</label>
                    <textarea
                        id="question"
                        name="question"
                        placeholder="Введите текст вашего вопроса"
                        rows="5"
                        value={formData.question}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.question ? style.inputError : ""}
                    />
                    {errors.question && <span className={style.errorText}>{errors.question}</span>}
                </div>
                <button type="submit" className={style.submitButton}>Отправить</button>
            </form>
        </section>
    );
}


export default Support;