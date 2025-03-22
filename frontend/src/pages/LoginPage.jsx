import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import { Mail, Lock, Loader } from "lucide-react";
import MotionButton from "../components/MotionButton";

const LoginPage = () => {
    const MDiv = motion.div;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
        await login(email, password);
	};

	return (
		<MDiv
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text'>
					Welcome Back
				</h2>

				<form onSubmit={handleLogin}>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className='flex items-center mb-6'>
						<Link to='/forgot-password' className='text-sm text-blue-400 hover:underline'>
							Forgot password?
						</Link>
					</div>

                    {error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}

					<MotionButton
						type='submit'
						disabled={isLoading}
						className='w-full py-3 px-4 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
					>
						{isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}
                    </MotionButton>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center'>
				<p className='text-sm'>
					Don't have an account?{" "}
					<Link to='/signup' className='text-blue-400 hover:underline'>
						Sign up
					</Link>
				</p>
			</div>
		</MDiv>
	);
};

export default LoginPage;