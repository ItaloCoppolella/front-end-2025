import { useState } from "react";

function RegistrationForm() {
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
          <button type="submit">Registrati</button>
        </form>
    );
}

export default RegistrationForm;