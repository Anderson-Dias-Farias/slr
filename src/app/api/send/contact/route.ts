"use server";

import transporter from "@/hooks/nodeMailer";

export async function POST(request: Request) {
  const { nome, email, telefone, cidade, empresa } = await request.json();

  // Configure the mailoptions object
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "comercial@slrengenharia.com",
    subject: "SLR Engineering - Contato",
    text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`,
    html: `
      <h1>SLR Engineering - Contato</h1>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${telefone}</p>
      <p>Cidade: ${cidade}</p>
      <p>Empresa: ${empresa}</p>
    `,
  };
  const send = await transporter.sendMail(mailOptions);

  if (send) {
    return Response.json({ message: "Message sent successfully" });
  } else {
    return Response.json({ message: "Message not sent" });
  }
}
