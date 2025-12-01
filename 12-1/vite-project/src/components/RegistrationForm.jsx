import { useState } from "react";

function RegistrationForm() {
    const [errors, setErrors] = useState({}) //con {} stiamo inizializzando un oggetto vuoto, con [] un array vuoto
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Funzione chiamata ogni volta che un input cambia
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // Funzione che valida i dati del form
    const validate = () => {
      const newErrors = {}
      if (!formData.name) {
        newErrors.name = "Il nome è obbligatorio"
      }
      if (!formData.email) {
        newErrors.email = "L'email è obbligatoria"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "L'email non è valida";
      }
      if (!formData.password) {
        newErrors.password = "La password è obbligatoria"
      } else if (formData.password.length < 6) {
        newErrors.password = "La password deve essere di almeno 6 caratteri";
      }
      return newErrors;
    };

    const handleSubmit = (event) => {
      event.preventDefault(); // Previene il ricaricamento della pagina
      const formErrors = validate(); // Chiama la validazione
      setErrors(formErrors); // Mostra gli errori
    };

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Nome: <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <br />
            Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <br />
            Password: <input type="password" name="password" value={formData.password} onChange={handleChange}  />
            {errors.password && <p>{errors.password}</p>}
          </label>
          <br />
          <button type="submit">Sign In!</button>
        </form>
    );
}

export default RegistrationForm;