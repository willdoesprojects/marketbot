import { useState } from 'react'

function App2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("/api/add-data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          });
          const result = await response.json();
          if (result.success) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
          } else {
            alert("Failed to save data");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while saving data");
        }
      };

    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
 
        </>
    );
}
 
export default App2;