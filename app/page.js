"use client";

import { useSelector } from "react-redux";
import Nav from "@/components/Nav";
import TicketForm from "./ticketform/page";
import TicketSelection from "@/components/ticketSelection";
import TicketCard from "./ticketcard/page";

export default function Home() {
  const { currentStep } = useSelector((state) => state.ticket);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative px-4 sm:px-0">
      <Nav />
      {currentStep === 1 && <TicketSelection />}
      {currentStep === 2 && <TicketForm />}
      {currentStep === 3 && <TicketCard />}
    </div>
  );
}
