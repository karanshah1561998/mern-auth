import './index.css';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

import FloatingShape from "./components/FloatingShape";
import LoadingSpinner from './components/LoadingSpinner';

// Protected route logic
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
	if (!isAuthenticated) return <Navigate to='/login' replace />;
	if (!user.isVerified) return <Navigate to='/verify-email' replace />;
	return children;
};

// Redirect if already logged in
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
	if (isAuthenticated && user.isVerified) return <Navigate to='/' replace />;
	return children;
};

// Only runs checkAuth on protected paths
const AuthInitializer = () => {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;
	return <Outlet />;
};

function App() {

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
			{/* Animated Background Shapes */}
			<FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

			<Routes>
				{/* Protected routes (run checkAuth) */}
				<Route element={<AuthInitializer />}>
					<Route path='/' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
					<Route path='/verify-email' element={<EmailVerificationPage />} />
				</Route>

				{/* Public routes (no checkAuth) */}
				<Route path='/signup' element={<RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser>} />
				<Route path='/login' element={<RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser>} />
				<Route path='/forgot-password' element={<RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser>} />
				<Route path='/reset-password/:token' element={<RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser>} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>

			<Toaster />
		</div>
	);
}

export default App;