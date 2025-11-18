"use server";

import transporter from "@/hooks/nodeMailer";

export async function POST(request: Request) {
  try {
    console.log("[SUPPLIER API] Iniciando requisição...");
    
    const formData = await request.formData();
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const portfolio = formData.get("portfolio") as File;
    const mensagem = formData.get("mensagem") as string;

    console.log("[SUPPLIER API] Dados recebidos:", {
      nome: nome ? "presente" : "ausente",
      email: email ? "presente" : "ausente",
      telefone: telefone ? "presente" : "ausente",
      portfolio: portfolio ? `presente (${portfolio.name}, ${portfolio.size} bytes)` : "ausente",
      mensagem: mensagem ? "presente" : "ausente",
    });

    // Validação dos campos
    if (!nome || !email || !telefone) {
      console.error("[SUPPLIER API] Campos obrigatórios faltando:", {
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

    console.log("[SUPPLIER API] Verificando variáveis de ambiente...");
    console.log("[SUPPLIER API] EMAIL_USER existe:", !!process.env.EMAIL_USER);

    // Configure the mailoptions object
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "suprimentos@slrengenharia.com",
      subject: "SLR Engineering - Seja Fornecedor",
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
      html: `
        <h1>SLR Engineering - Seja Fornecedor</h1>
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Mensagem: ${mensagem}</p>
      `,
      attachments: portfolio
        ? [
            {
              filename: portfolio.name,
              content: Buffer.from(await portfolio.arrayBuffer()),
            },
          ]
        : [],
    };

    console.log("[SUPPLIER API] Enviando email...");
    const send = await transporter.sendMail(mailOptions);
    console.log("[SUPPLIER API] Resposta do transporter:", {
      messageId: send.messageId,
      accepted: send.accepted,
      rejected: send.rejected,
    });

    if (send && send.messageId) {
      console.log("[SUPPLIER API] Email enviado com sucesso!");
      return Response.json({ 
        success: true,
        message: "Message sent successfully" 
      });
    } else {
      console.error("[SUPPLIER API] Falha ao enviar email - sem messageId");
      return Response.json(
        { 
          success: false,
          message: "Message not sent",
          error: "No message ID returned"
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[SUPPLIER API] Erro ao processar requisição:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro ao enviar mensagem";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("[SUPPLIER API] Stack trace:", errorStack);
    
    return Response.json(
      { 
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.toString() : String(error)
      },
      { status: 500 }
    );
  }
}

