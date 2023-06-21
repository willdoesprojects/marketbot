import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      zipcode,
    };

    const response = await fetch('./SignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log('Response:', responseData);
  };

  return (
    <div>
      <br />
      <h2 className="block text-center !important">Create Your Markebot Account</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="name w-1/4 mx-auto">
          <input
            type="name"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group w-1/4 mx-auto">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group w-1/4 mx-auto">
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group w-1/4 mx-auto">
          <input
            type="zipcode"
            className="form-control"
            id="zipcodeInput"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
