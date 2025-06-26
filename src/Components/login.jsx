import { useState } from "react";
import SignUp from "./signUp.jsx";

export default function Login({ setOpen }) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [signUp, setSignUp] = useState(false);

    function submitLogin(e) {
        e.preventDefault();

        if (username === "" || password === "") {
            setMessage("Please fill in all fields.");
        } else if (username === "ajinkya" && password === "ajinkya") {
            setMessage("Login successful!");
            setOpen(true);
        } else {
            setMessage("Invalid credentials.");
        }
    }

    function handleSignup() {
        setSignUp(true);
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center">
            {!signUp ? (
                <form
                    onSubmit={submitLogin}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Login
                    </h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Submit
                    </button>

                    {message && (
                        <p
                            className={`mt-4 text-center font-medium ${
                                message === "Login successful!"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {message}
                        </p>
                    )}

                    <hr className="my-6 border-gray-300" />

                    <button
                        type="button"
                        onClick={handleSignup}
                        className="w-full text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:text-gray-600 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
            ) : (
                <SignUp />
            )}
        </div>
    );
}
