import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants';

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SG_API_KEY)

export default function SendMail (req, res) {
    const body = JSON.parse(req.body);


const message =`
Name: ${body.name} \r\n
Email: ${body.email} \r\n\
Phone Number: ${body.phone} \r\n\
Subject: ${body.subject} \r\n\
Date Requested : ${body.email} \r\n\
Additional Message: ${body.message}
`;

const data = {
    to: 'thomas.alexander.booth@gmail.com',
    from: 'tomboothprogramming@gmail.com' ,
    subject:`[NEW ENQUIRY FOR ${body.date}] - ${body.subject}`,
    text: `${message}`,
    html: `${message.replace(/\r\n/g, '<br/>')}`
};

mail.send(data)

    console.log(message)
     res.status(200).json({status:'ok'})
     res.status(500).json({status:'error'})
}