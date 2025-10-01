"use server";

import transporter from "@/hooks/nodeMailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const telefone = formData.get("telefone") as string;
  const curriculo = formData.get("curriculo") as File;
  const mensagem = formData.get("mensagem") as string;

  // Configure the mailoptions object
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "recrutamento@slrengenharia.com",
    subject: "SLR Engineering - Trabalhe Conosco",
    text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    html: `
      <h1>SLR Engineering - Trabalhe Conosco</h1>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${telefone}</p>
      <p>Mensagem: ${mensagem}</p>
    `,
    attachments: curriculo
      ? [
          {
            filename: curriculo.name,
            content: Buffer.from(await curriculo.arrayBuffer()),
          },
        ]
      : [],
  };
  const send = await transporter.sendMail(mailOptions);

  if (send) {
    return Response.json({ message: "Message sent successfully" });
  } else {
    return Response.json({ message: "Message not sent" });
  }
}
