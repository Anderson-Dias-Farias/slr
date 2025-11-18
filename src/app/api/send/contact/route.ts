"use server";

import transporter from "@/hooks/nodeMailer";

export async function POST(request: Request) {
  try {
    console.log("[CONTACT API] Iniciando requisição...");
    
    const body = await request.json();
    console.log("[CONTACT API] Body recebido:", JSON.stringify(body, null, 2));
    
    const { nome, email, telefone, cidade, empresa } = body;

    // Validação dos campos
    if (!nome || !email || !telefone || !cidade || !empresa) {
      console.error("[CONTACT API] Campos obrigatórios faltando:", {
        nome: !!nome,
        email: !!email,
        telefone: !!telefone,
        cidade: !!cidade,
        empresa: !!empresa,
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

    console.log("[CONTACT API] Verificando variáveis de ambiente...");
    console.log("[CONTACT API] EMAIL_USER existe:", !!process.env.EMAIL_USER);

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

    console.log("[CONTACT API] Enviando email...");
    const send = await transporter.sendMail(mailOptions);
    console.log("[CONTACT API] Resposta do transporter:", {
      messageId: send.messageId,
      accepted: send.accepted,
      rejected: send.rejected,
    });

    if (send && send.messageId) {
      console.log("[CONTACT API] Email enviado com sucesso!");
      return Response.json({ 
        success: true,
        message: "Message sent successfully" 
      });
    } else {
      console.error("[CONTACT API] Falha ao enviar email - sem messageId");
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
    console.error("[CONTACT API] Erro ao processar requisição:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro ao enviar mensagem";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("[CONTACT API] Stack trace:", errorStack);
    
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
