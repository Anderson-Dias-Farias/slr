"use server";

import transporter from "@/hooks/nodeMailer";

export async function POST(request: Request) {
  try {
    console.log("[WORK API] Iniciando requisição...");
    
    const formData = await request.formData();
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const curriculo = formData.get("curriculo") as File;
    const mensagem = formData.get("mensagem") as string;

    console.log("[WORK API] Dados recebidos:", {
      nome: nome ? "presente" : "ausente",
      email: email ? "presente" : "ausente",
      telefone: telefone ? "presente" : "ausente",
      curriculo: curriculo ? `presente (${curriculo.name}, ${curriculo.size} bytes)` : "ausente",
      mensagem: mensagem ? "presente" : "ausente",
    });

    // Validação dos campos
    if (!nome || !email || !telefone) {
      console.error("[WORK API] Campos obrigatórios faltando:", {
        nome: !!nome,
        email: !!email,
        telefone: !!telefone,
      });
      return Response.json(
        { 
          success: false, 
          message: "Campos obrigatórios faltando",
          error: "Missing required fields"
        },
        { status: 400 }
      );
    }

    console.log("[WORK API] Verificando variáveis de ambiente...");
    console.log("[WORK API] EMAIL_USER existe:", !!process.env.EMAIL_USER);

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

    console.log("[WORK API] Enviando email...");
    const send = await transporter.sendMail(mailOptions);
    console.log("[WORK API] Resposta do transporter:", {
      messageId: send.messageId,
      accepted: send.accepted,
      rejected: send.rejected,
    });

    if (send && send.messageId) {
      console.log("[WORK API] Email enviado com sucesso!");
      return Response.json({ 
        success: true,
        message: "Message sent successfully" 
      });
    } else {
      console.error("[WORK API] Falha ao enviar email - sem messageId");
      return Response.json(
        { 
          success: false,
          message: "Message not sent",
          error: "No message ID returned"
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("[WORK API] Erro ao processar requisição:", error);
    console.error("[WORK API] Stack trace:", error.stack);
    
    return Response.json(
      { 
        success: false,
        message: error.message || "Erro ao enviar mensagem",
        error: error.toString()
      },
      { status: 500 }
    );
  }
}
