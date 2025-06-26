import { useState } from "react";

export default function SignUp() {
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!mobile || !email || !username || !password) {
            setMessage("Please fill in all fields.");
        } else {
            setMessage("Sign-up successful!");
            // You can hook into Redux or API here later
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Sign Up
            </h2>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Mobile No.</label>
                <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter 10-digit mobile number"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Choose a username"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Create a password"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
                Create Account
            </button>

            {message && (
                <p
                    className={`mt-4 text-center font-medium ${
                        message === "Sign-up successful!" ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {message}
                </p>
            )}
        </form>
    );
}
