import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, zip, service } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Storm Troopers Contact" `,
      to: "stormtroopersroofing@stormtroopersroofing.com",
      // to: process.env.SMTP_EMAIL,
      subject: "New Estimate Request",
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
