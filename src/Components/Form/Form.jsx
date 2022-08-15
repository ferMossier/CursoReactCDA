import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre,
      email,
      telefono,
    };
    console.log(data);
  };
  const handleChangeName = (e) => {
    e.preventDefault();
    setNombre(e.target.value);
  };
  const handleChangeMail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangeTel = (e) => {
    e.preventDefault();
    setTelefono(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingresa tu nombre"
        onChange={handleChangeName}
        value={nombre}
      />
      <input
        type="text"
        name="email"
        placeholder="Ingresa tu email"
        onChange={handleChangeMail}
        value={email}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Ingresa tu telefono"
        onChange={handleChangeTel}
        value={telefono}
      />
      <button> Enviar</button>
    </form>
  );
};

export default Form;
