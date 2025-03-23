export const VERIFICATION_EMAIL_TEMPLATE = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Verify Your Email</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="background: linear-gradient(to right, #2196F3, #1976D2); padding: 30px 20px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Verify Your Email</h1>
                </div>
                <!-- Body -->
                <div style="padding: 30px 20px; color: #333333;">
                    <p style="margin: 0 0 12px;">Hello,</p>
                    <p style="margin: 0 0 12px;">Thank you for signing up! Your verification code is:</p>
                    <div style="text-align: center; margin: 24px 0;">
                        <span style="display: inline-block; background-color: #e3f2fd; padding: 12px 24px; font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #1976D2; border-radius: 6px;">
                            {verificationCode}
                        </span>
                    </div>
                    <p style="margin: 0 0 12px;">Enter this code on the verification page to complete your registration.</p>
                    <p style="margin: 0 0 12px;">This code will expire in 15 minutes for security reasons.</p>
                    <p style="margin: 0;">If you didn't create an account with us, please ignore this email.</p>
                </div>
            </div>
        </body>
    </html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Password Reset Successful</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="background: linear-gradient(to right, #2196F3, #1976D2); padding: 30px 20px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Password Reset Successful</h1>
                </div>
                <!-- Body -->
                <div style="padding: 30px 20px; color: #333;">
                    <p style="margin: 0 0 12px;">Hello,</p>
                    <p style="margin: 0 0 12px;">We're writing to confirm that your password has been successfully reset.</p>
                    <div style="text-align: center; margin: 24px 0;">
                        <div style="background-color: #2196F3; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 28px;">
                            ✓
                        </div>
                    </div>
                    <p style="margin: 0 0 12px;">If you did not initiate this password reset, please contact our support team immediately.</p>
                    <p style="margin: 0 0 12px;">For security reasons, we recommend that you:</p>
                    <ul style="margin: 0 0 12px 20px; padding: 0;">
                        <li>Use a strong, unique password</li>
                        <li>Enable two-factor authentication if available</li>
                        <li>Avoid using the same password across multiple sites</li>
                    </ul>
                </div>
            </div>
        </body>
    </html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Reset Your Password</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="background: linear-gradient(to right, #2196F3, #1976D2); padding: 30px 20px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Password Reset</h1>
                </div>
                <!-- Body -->
                <div style="padding: 30px 20px; color: #333;">
                    <p style="margin: 0 0 12px;">Hello,</p>
                    <p style="margin: 0 0 12px;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
                    <p style="margin: 0 0 20px;">To reset your password, click the button below:</p>
                    <div style="text-align: center; margin: 24px 0;">
                        <a href="{resetURL}" style="background-color: #2196F3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                            Reset Password
                        </a>
                    </div>
                </div>
            </div>
        </body>
    </html>
`;