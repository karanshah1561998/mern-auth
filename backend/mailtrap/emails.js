import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
			message_type: "transactional",
		});

		console.log("Email Sent Successfully: ", response);
	} catch (error) {
		console.error(`Error Sending Verification: `, error);
		throw new Error(`Error Sending Verification Email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];
	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "d03f694f-3525-40d6-81ed-9e25c0481d03",
			template_variables: {
				company_info_name: "MERN AUTH",
				name: name,
			},
		});

		console.log("Welcome email sent successfully: ", response);
	} catch (error) {
		console.error(`Error sending welcome email: `, error);
		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
			message_type: "transactional",
		});

        console.log("Password reset email sent successfully: ", response);
	} catch (error) {
		console.error(`Error sending password reset email: `, error);
		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
			message_type: "transactional",
		});

		console.log("Password reset email sent successfully: ", response);
	} catch (error) {
		console.error(`Error sending password reset success email: `, error);
		throw new Error(`Error sending password reset success email: ${error}`);
	}
};