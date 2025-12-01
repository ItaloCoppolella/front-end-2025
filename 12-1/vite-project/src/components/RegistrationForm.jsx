import { useState } from "react";

function RegistrationForm() {
    const [errors, setErrors] = useState({}) //con {} stiamo inizializzando un oggetto vuoto, con [] un array vuoto
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

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

    return(
        <form>
          <label>
            Nome: <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <br />
            Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <br />
            Password: <input type="password" name="password" value={formData.password} onChange={handleChange}  />
          </label>
          <br />
          <button type="submit">Sign In!</button>
        </form>
    );
}

export default RegistrationForm;