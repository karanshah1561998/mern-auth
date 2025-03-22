import { motion } from "framer-motion";
import { formatDate } from "../utils/date";
import { useAuthStore } from "../store/authStore";
import MotionButton from "../components/MotionButton";

const DashboardPage = () => {
    const MDiv = motion.div;
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<MDiv
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>
				Dashboard
			</h2>

			<div className='space-y-6'>
				<MDiv
					className='p-4 bg-white bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Profile Information</h3>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
				</MDiv>
				<MDiv
					className='p-4 bg-white bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Account Activity</h3>
					<p>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p>
						<span className='font-bold'>Last Login: </span>

						{formatDate(user.lastLogin)}
					</p>
				</MDiv>
			</div>

			<MDiv
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<MotionButton
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</MotionButton>
			</MDiv>
		</MDiv>
	);
};

export default DashboardPage;