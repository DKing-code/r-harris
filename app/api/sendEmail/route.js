import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, name, msg } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'lawrichardharris@gmail.com',
                pass: process.env.EMAIL_PASSCODE
            }
        })

        const mailOption = {
            from: email,
            to: 'lawrichardharris@gmail.com',
            subject: "Message from Website",
            html: `
        <h3>${name} : ${email}</h3>
       
        <p>${msg}</> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}


// fjrvfsvomrhcnhux