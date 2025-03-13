const forgotPasswordTemplate = ({ name, otp }) => {
    return `
    <div style="font-family: sans-serif; font-size: 16px; line-height: 24px; color: #4a4a4a;">
        <p style="margin: 0 0 20px;">Hi ${name},</p>
        <p style="margin: 0 0 20px;">We received a request to reset your password. Use the OTP below to proceed with resetting your password:</p>
        
        <h2 style="margin: 0 0 20px; padding : 20px; text-align: center; font-size: 24px; background-color: gray; color: black;">
  ${otp}
</h2>


        <p style="margin: 0 0 20px;"><strong>Note:</strong> This OTP is valid for only <strong>1 hour</strong>.</p>

        <p style="margin: 20px 0 0;">If you did not request a password reset, please ignore this email or contact support.</p>
        <p style="margin: 20px 0 0;">Best regards,</p>
        <p style="margin: 0;">Mynstro Team</p>
    </div>
    `;
};


export default forgotPasswordTemplate;