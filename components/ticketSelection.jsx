"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { ticketOptions } from "@/constants/data";
import {
  setCurrentStep,
  updateTicketSelection,
  resetAll,
} from "@/store/slices/ticketSlice";

const TicketSelection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentStep, ticketSelection } = useSelector((state) => state.ticket);
  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const [validationError, setValidationError] = useState("");

  const ticketSelectionSchema = Yup.object().shape({
    selectedTicketType: Yup.string().required("Please select a ticket type."),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ticketSelectionSchema
      .validate({ selectedTicketType: ticketSelection.selectedTicketType })
      .then(() => {
        setValidationError("");
        dispatch(setCurrentStep(currentStep + 1));
      })
      .catch((error) => {
        setValidationError(error.message);
      });
  };

  const handleReset = () => {
    dispatch(resetAll());
    router.push("/");
  };

  return (
    <div className="w-full max-w-[700px] h-auto bg-[#041E23] text-white border border-[#0E464F] relative sm:top-40 top-20 rounded-[40px] flex flex-col items-center gap-8 sm:p-[48px] p-4 mx-auto">
      {/* Header: Title and Progress Bar */}
      <div className="w-full flex flex-col">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[32px] font-thin">ticket selection</p>
          <p className="capitalize text-[19px] text-gray-100/75">
            step {currentStep}/{totalSteps}
          </p>
        </div>
        <div className="w-full h-1 bg-[#0E464F] rounded-full mt-2">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="h-full bg-[#24A0B5] rounded-full transition-all duration-300"
          ></div>
        </div>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full h-full bg-[#08252B] border border-[#0E464F] rounded-[32px] gap-8 sm:p-6 p-4 flex flex-col"
      >
        {/* Event Info Card */}
        <div className="w-full h-auto border border-[#07373F] bg-[linear-gradient(to_top,_#08252B_70%,_#477d87_100%)] rounded-[24px] flex flex-col justify-center items-center sm:p-6 p-4 gap-8">
          <div className="flex flex-col items-center">
            <h1 className="sm:text-[62px] text-[40px]">Techember Fest ’25</h1>
            <p className="text-center text-[14px] text-gray-200 mb-2 font-extralight">
              Join us for an unforgettable experience at <br /> [Event Name]!
              Secure your spot now.
            </p>
            <p className="text-center text-[14px]">📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <div className="w-full h-1 bg-[#0E464F] rounded-full mt-2"></div>

        {/* Ticket Type Selection */}
        <div className="w-full max-w-[556px] flex flex-col gap-2">
          <p className="capitalize text-[16px]">select ticket type:</p>
          <div
            className="w-full h-auto bg-[#052228] border border-[#07373F] flex flex-wrap justify-between items-center gap-4 p-4 rounded-[24px]"
          >
            {ticketOptions.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() =>
                  dispatch(
                    updateTicketSelection({ selectedTicketType: ticket.id })
                  )
                }
                className={`sm:w-[158px] w-full sm:h-[110px] h-auto flex flex-col gap-1 p-3 border rounded-xl transition-all duration-500 cursor-pointer border-[#197686] ${
                  ticketSelection.selectedTicketType === ticket.id
                    ? "bg-[#12464E]"
                    : "hover:bg-[#12464E]"
                }`}
              >
                <p className="text-[24px] font-semibold capitalize">
                  {ticket.label === "free" ? "free" : `$${ticket.price}`}
                </p>
                <p className="text-[15px] text-[#FAFAFA] font-thin uppercase">
                  {ticket.access}
                </p>
                <p className="text-[#D9D9D9] font-thin text-sm">
                  {ticket.available}
                </p>
              </div>
            ))}
          </div>
          {validationError && (
            <p className="text-red-500 text-sm mt-2">{validationError}</p>
          )}
        </div>

        {/* Number of Tickets */}
        <div className="w-full max-w-[556px] flex flex-col gap-2">
          <p className="capitalize text-[16px]">number of tickets</p>
          <select
            value={ticketSelection.numberOfTickets}
            onChange={(e) =>
              dispatch(
                updateTicketSelection({
                  numberOfTickets: Number(e.target.value),
                })
              )
            }
            className="w-full h-[48px] bg-transparent border border-[#07373F] p-3 rounded-xl outline-none"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-[556px] flex flex-col md:flex-row gap-6">
          <Button
            type="button"
            onClick={handleReset}
            className="md:w-[266px] w-full h-[48px] text-[16px] text-[#24A0B5] border border-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            cancel
          </Button>
          <Button
            type="submit"
            className="md:w-[266px] w-full h-[48px] text-[16px] bg-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TicketSelection;
