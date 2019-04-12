import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "darkdevil94@naver.com",
    to: "darkdevil94@naver.com",
    subject: subject,
    html: html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullname: string, key: string) => {
  const emailSubject = `Hello! ${fullname}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verfication/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
