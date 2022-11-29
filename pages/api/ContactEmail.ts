// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import mailchimp from "@mailchimp/mailchimp_marketing";
import sgMail from "@sendgrid/mail";
import md5 from "md5";

const SG_API_KEY = process.env.SENDGRID_API_KEY;
const MP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MP_API_SERVER = process.env.MAILCHIMP_API_SERVER;

//SendGrid Setup Call
sgMail.setApiKey(SG_API_KEY!);

//Mailchimp Setup Call
mailchimp.setConfig({
  apiKey: MP_API_KEY,
  server: MP_API_SERVER,
});

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const form = JSON.parse(req.body);
    const listId = MP_AUDIENCE_ID!;
    const subscriberHash = md5(form.senderEmail.toLowerCase());
    const subscribingUser = {
      firstName: form.senderFName,
      lastName: form.senderLName,
      email: form.senderEmail,
    };

    console.log(
      form.senderID,
      form.senderEmail,
      form.senderLName,
      form.senderFName
    );
    const msg = {
      to: "iamjuliuseghan@icloud.com",
      from: "support@webncos.com",
      subject: `iamjulius, New Client Message with id ${form.senderID}`,
      text: `
             Client Name : ${form.senderFName} ${form.senderLName}\r\n 
             Client Email : ${form.senderEmail}\r\n
             Client Interest : ${form.projectType}\r\n
             Client Budget : ${form.projectBudget}\r\n
             Client Message : ${form.senderMessage}`,
      html: `
             Client Name : ${form.senderFName} ${form.senderLName}<br/>
             Client Email : ${form.senderEmail}<br/>
             Client Interest : ${form.projectType}<br/>
             Client Budget : ${form.projectBudget}<br/>
             Client Message : ${form.senderMessage}`,
    };
    try {
      //Sendgrid Works...
      await sgMail.send(msg);

      //This is to check is the email from the form is subscribe or not
      await mailchimp.lists.setListMember(listId, subscriberHash, {
        email_address: subscribingUser.email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName,
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(200).json({ success: false });
    }
  }
}
