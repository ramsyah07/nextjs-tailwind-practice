"use client";
import { useState} from "react";

export default function SubmitForm() {
    const [form, setForm] = useState({name:" ", job: " "});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            setSuccess(true);
        }
        setLoading(false);
    };

    return(
        <div className="min-h-screen p-8 ">
            <h1 className="text-2xl font-bold mb-4">📤 Submit ke API Dummy</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md space-y-4">
                <input
                    className="w-full border p-2 rounded"
                    placeholder="Nama"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                 <input
          className="w-full border p-2 rounded"
          placeholder="Pekerjaan"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Mengirim..." : "Kirim"}
        </button>
        {success && <p className="text-green-600">Berhasil dikirim!</p>}
      </form>
    </div>
  );
}