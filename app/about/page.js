"use client";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <Nav />
      <div className="w-full max-w-[700px] h-auto bg-[#041E23] text-white border border-[#0E464F] relative sm:top-40 top-20 rounded-[40px] flex flex-col items-center gap-8 sm:p-[48px] p-4 mx-auto">
        <p className="text-[14px]">
          Event Ticket Booking UI – Open Source Practice Project 🎟️ <br />
          <br />
          Overview <br />
          <br />
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, <br />
          explore, and build upon. The design focuses on a seamless, login-free
          ticket reservation flow, <br />
          allowing users to book event tickets quickly and efficiently.
          <br />
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by <br />
          integrating payment solutions, user authentication (optional), and
          ticket validation systems.
          <br />
          Flow & Features
          <br />
          1️⃣ Ticket Selection <br />
          • Users can browse available tickets (Free & Paid). <br />
          • Ticket options are displayed in a list or card view. <br />
          • For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
          details. <br />
          • For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
          payment modal. <br />
          <br />
          2️⃣ Attendee Details Form <br />
          • Users input their Name, Email, and optional Phone Number. <br />
          • Profile Picture Upload <br />
          • Users can upload a profile picture which will be displayed as a
          preview before submission. <br />
          • Ticket summary is visible to ensure users review their details
          before submission. <br />
          <br />
          3️⃣ Payment or Success Page <br />
          • After submitting the attendee details, users are directed to: <br />
          • Payment Page (for paid tickets) → Displays payment options and
          processes the transaction. <br />
          • Success Page (for free tickets) → Shows a confirmation message and
          ticket details. <br />
          • If the ticket is free, the user is taken directly to the Ticket
          Confirmation Page. <br />
          • If the ticket is paid, developers can integrate Stripe, Paystack, or
          Flutterwave to process <br />
          payments before showing the confirmation page. <br />
          • Upon successful booking, users should receive: <br />
          • A visual ticket preview with a unique QR Code. <br />
          • An option to download the ticket as PDF or save it to their device.{" "}
          <br />
          • An email confirmation containing ticket details. <br />
          How to Build This 🚀 <br />
          <br />
          This UI can be implemented using:
          <br />
          📌 Frontend (Next.js or React)
          <br />
          • Component Breakdown: <br />
          • TicketCard.tsx → Displays ticket details <br />
          • AttendeeForm.tsx → Captures user details <br />
          • PaymentModal.tsx → Handles payment processing <br />
          • SuccessScreen.tsx → Shows the final ticket preview <br />
          • State Management: React’s Context API, Zustand, or Redux (if
          needed). <br />
          • File Handling: Users should be able to upload images (profile
          picture for ticket) using Firebase <br />
          Storage, Cloudinary, or local preview with URL.createObjectURL().{" "}
          <br />
          <br />
          📌 Backend (Optional) <br />
          • If persistence is required, a backend can be built using: <br />
          • Node.js & Express or Firebase Functions <br />
          • Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
          records <br />
          <br />
          📌 Payment Integration <br />
          • For paid events, developers should integrate: <br />
          • Stripe Checkout (for international transactions) <br />
          • Paystack or Flutterwave (for African users) <br />
          What You’ll Learn 🧑‍💻 <br />
          • File handling & validation (profile picture uploads). <br />
          • Dynamic UI updates based on ticket selection. <br />
          • Persisting bookings using local state or a backend. <br />
          • Integrating payment gateways for ticket purchases. <br />
          • Generating & validating QR Codes for event check-in (Advanced).{" "}
          <br />
          Need Help? Reach Out! 💬 <br />
        </p>

        <p className="sm:text-[80px] text-5xl">💛 Enjoy</p>

        <div className="w-full max-w-[556px] sm:h-[80px] h-auto flex sm:flex-row flex-col justify-center items-center gap-6 border border-[#0E464F] px-4 py-2 rounded-2xl">
          <Button
            type="button"
            className="sm:w-[266px] w-full h-[48px] text-[16px] text-[#24A0B5] border border-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            design file
          </Button>
          <Button
            type="button"
            className="sm:w-[266px] w-full h-[48px] text-[16px] bg-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            github code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
