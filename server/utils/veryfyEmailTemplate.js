const verifyEmailTemplate = (email, url) => {
    return `
    <div style="font-family: sans-serif; font-size: 16px; line-height: 24px; color: #4a4a4a;">
    <p style="margin: 0 0 20px;">Hi,</p>
    <p style="margin: 0 0 20px;">Thank you for registering on our platform. Please click the button below to verify ${email}.</p>
    <a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 4px;">Verify Email</a>
    <p style="margin: 20px 0 0;">If you did not register on our platform, please ignore this email.</p>
    <p style="margin: 20px 0 0;">Best regards,</p>
    <p style="margin: 0;">Mynstor Team</p>
    </div>
        `
};

export default verifyEmailTemplate;