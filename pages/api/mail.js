
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SG_API_KEY)

export default function SendMail (req, res) {
    const body = JSON.parse(req.body);

    function escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, function(message) { return map[message]; });
      }

    const message =`
    Name: ${escapeHtml(String(body.name))} \r\n
    Email: ${escapeHtml(String(body.email))} \r\n\
    Phone Number: ${escapeHtml(body.phone)} \r\n\
    Subject: ${escapeHtml(String(body.subject))} \r\n\
    Date Requested: ${escapeHtml(String(body.date))} \r\n\
    Additional Message: ${escapeHtml(String(body.message))}
    `;
    
    function escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
      }


const data = {
    to: 'process.env.TO_EMAIL',
    from: 'process.env.FROM_EMAIL' ,
    subject:`[NEW ENQUIRY] Subject: ${body.subject} | Date: ${body.date}`,
    text: `${message}`,
    html: `${escapeHtml(message).replace(/\r\n/g, '<br/>')}`
};

mail.send(data)

    console.log(message)
     res.status(200).json({status:'ok'})
     
}