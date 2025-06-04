"use client";
import{ useState } from "react";

export default function RegisterFormPage(){
    const[form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        confirm:"",
    });
    const[error, setError] = useState(" ");
    const[success, setSuccess] = useState (false);

    const handleChange =(e) =>{
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(" ");
        setSuccess(false);
    };
     const handleSubmit = (e) => {
        e.preventDefalut();
        const {name, email, password, confirm} = form;

        if(!name || !email || !password || !confirm){
            setError("Semua Kolom Wajib Diisi.");
            return;
        }
        if (password.length < 6) {
            setError("Password minimal 6 karakter.");
            return;
        }

        if (password !== confirm) {
            setError("Password dan konfirmasi tidak cocok.");
            return;
        }

    // Simulasi pendaftaran sukses
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirm: "" });
    }, 500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">Registrasi berhasil!</p>}

        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          className="w-full border p-2 rounded mb-3"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          value={form.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirm"
          placeholder="Konfirmasi Password"
          className="w-full border p-2 rounded mb-4"
          value={form.confirm}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
