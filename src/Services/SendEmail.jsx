import Axios from "axios";

const apiUrl = process.env.REACT_APP_RJA_API_URL;
const SendEmail = (object) => Axios.post(`${apiUrl}/Email/sendEmail`, object);

export function NewVisitorEmail() {
  const emailModel = {
    subject: "Someone checked your website.",
    body: `new visitor at ${new Date()}`,
  };

  SendEmail(emailModel);
}

export function ContactUsEmail(form) {
  console.log(form);
  const ContactUsEmailObj = {
    subject: "Someone wants to contact you!",
    body: ``,
  };

  SendEmail(ContactUsEmailObj);
}
