import { motion } from "framer-motion";

const MotionButton = ({ children, ...props }) => {
    const MButton = motion.button;
	return (
		<MButton
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			{...props}
		>
			{children}
		</MButton>
	);
};

export default MotionButton;