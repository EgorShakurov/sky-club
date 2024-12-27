import React, { useState } from "react"; 
import style from './FormServices.module.css';

function FormServices() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        service: ""
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        const newErrors = { ...errors };

        if (name === "name") {
            if (!value.trim()) {
                newErrors.name = "Имя не должно быть пустым";
            } else {
                newErrors.name = "";
            }
        }

        if (name === "phone") {
            if (!validatePhone(value)) {
                newErrors.phone = "Введите корректный номер телефона";
            } else {
                newErrors.phone = "";
            }
        }

        if (name === "email") {
            if (!validateEmail(value)) {
                newErrors.email = "Введите корректный email";
            } else {
                newErrors.email = "";
            }
        }

        if (name === "service") {
            if (!value || value === "Выбор услуги...") {
                newErrors.service = "Пожалуйста, выберите услугу";
            } else {
                newErrors.service = "";
            }
        }

        setErrors(newErrors);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const newErrors = { ...errors };

        if (name === "name" && !value.trim()) {
            newErrors.name = "Имя не должно быть пустым";
        }

        if (name === "phone" && !validatePhone(value)) {
            newErrors.phone = "Введите корректный номер телефона";
        }

        if (name === "email" && !validateEmail(value)) {
            newErrors.email = "Введите корректный email";
        }

        if (name === "service" && (!value || value === "Выбор услуги...")) {
            newErrors.service = "Пожалуйста, выберите услугу";
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Имя не должно быть пустым";
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = "Введите корректный номер телефона";
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = "Введите корректный email";
        }

        if (!formData.service || formData.service === "Выбор услуги...") {
            newErrors.service = "Пожалуйста, выберите услугу";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(`Данные успешно отправлены:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nУслуга: ${formData.service}`);
            
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: ""
            });
            setErrors({
                name: "",
                phone: "",
                email: "",
                service: ""
            });
        }
    };

    return (
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <span className={style.title}>Успейте отправить заявку</span>
                <div className={style.formGroup}>
                    <label htmlFor="name">Введите имя</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Ваше имя" 
                        value={formData.name} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        className={errors.name ? style.inputError : ""}
                    />
                    {errors.name && <span className={style.errorText}>{errors.name}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="phone">Введите телефон</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Ваш телефон" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        className={errors.phone ? style.inputError : ""}
                    />
                    {errors.phone && <span className={style.errorText}>{errors.phone}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Введите почту</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Ваш email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        className={errors.email ? style.inputError : ""}
                    />
                    {errors.email && <span className={style.errorText}>{errors.email}</span>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="service">Выберите услугу</label>
                    <select 
                        id="service" 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        className={errors.service ? style.inputError : ""}
                    >
                        <option value="">Выбор услуги...</option>
                        <option value="Аренда лыж">Аренда лыж</option>
                        <option value="Аренда сноубордов">Аренда сноубордов</option>
                        <option value="Аренда горнолыжного комплекта">Аренда горнолыжного комплекта</option>
                    </select>
                    {errors.service && <span className={style.errorText}>{errors.service}</span>}
                </div>
                <button type="submit" className={style.submitButton}>Отправить заявку</button>
            </form>
        </div>
    );
}

export default FormServices;