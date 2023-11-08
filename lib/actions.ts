"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

    async function bookingAction(formData: FormData) {

      const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const startDate = formData.get("startDate");
      const endDate = formData.get("endDate");
      const guests = formData.get("guests");
      const email = formData.get("email");
      const property = formData.get("property_id");


      const res = await resend.emails.send({
        from: "info@poppinn.co.za",
        to: "bookings@poppinn.co.za",
        // cc: `Name <${email}>`,
        subject: "Booking Form Submission",
        html: `<div>
                <h1>Booking Form Submission</h1>
                <h2>Property ${property}</h2>
                <p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Check In: ${startDate}</p>
                <p>Check Out: ${endDate}</p>
                <p>Guests: ${guests}</p>
             </div>`,
      });

      console.log({res})

      redirect("/thank-you");
    }


    export {bookingAction}
