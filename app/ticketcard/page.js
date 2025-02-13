"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { setCurrentStep, resetAll } from "@/store/slices/ticketSlice";
import { ticketOptions } from "@/constants/data";

const TicketCard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentStep, ticketForm, ticketSelection } = useSelector(
    (state) => state.ticket
  );
  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const {
    fullName = "",
    email = "",
    avatarUrl = "",
    specialRequest = "",
  } = ticketForm || {};

  const { selectedTicketType = "", numberOfTickets = 1 } =
    ticketSelection || {};

  const selectedTicket = ticketOptions.find(
    (ticket) => ticket.id === selectedTicketType
  );

  const handleDownloadTicket = () => {
    const ticketData = `
Ticket for Techember Fest ’25
Name: ${fullName}
Email: ${email}
Ticket Type: ${
      selectedTicket
        ? selectedTicket.label === "free"
          ? "free"
          : `$${selectedTicket.price}`
        : ""
    }
Number of Tickets: ${numberOfTickets}
Special Request: ${specialRequest}
    `;
    const blob = new Blob([ticketData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ticket.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleBookAnotherTicket = () => {
    dispatch(resetAll());
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <Nav />
      <div
        className="w-full max-w-[700px] h-auto bg-[#041E23] text-white border border-[#0E464F] relative 
                   sm:top-40 top-20 rounded-[40px] flex flex-col items-center gap-8 sm:p-[48px] p-4 mx-auto"
      >
        {/* Header: Title and Progress Bar */}
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between">
            <p className="capitalize text-[32px] font-thin">ready</p>
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

        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="w-full flex flex-col justify-center text-center items-center gap-2">
            <p className="text-[32px] capitalize">your ticket is booked!</p>
            <p className="text-[16px]">
              Check your email for a copy or you can{" "}
              <strong className="cursor-pointer" onClick={handleDownloadTicket}>
                download
              </strong>
            </p>
          </div>
          <div
            className="bg-[url(https://res.cloudinary.com/dbitkdy7t/image/upload/v1739378175/Subtract_guklfs.svg)]
                       w-full max-w-[300px] h-[600px] flex flex-col items-center relative"
          >
            <div
              className="w-full max-w-[260px] h-[456px] p-[14px] rounded-2xl border border-[#24A0B5] 
                         absolute top-6 flex flex-col items-center gap-3"
            >
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-[34px]">Techember Fest ’25</h1>
                <p className="text-[14px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                <p className="text-[14px]">📅 March 15, 2025 | 7:00 PM</p>
              </div>
              <div className="w-full max-w-[140px] h-[140px] rounded-xl border-4 border-[#24A0B5]">
                {avatarUrl ? (
                  <CldImage
                    src={avatarUrl}
                    alt="avatar"
                    width={140}
                    height={140}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No image
                  </div>
                )}
              </div>
              <div className="w-full max-w-[232px] h-[160px] bg-[#08343C] border border-[#133D44] flex flex-col items-center p-1 rounded-lg">
                <div className="w-full ">
                  <div className="w-full flex">
                    <div className="w-1/2 h-[45px] border-b border-r border-[#12464E]">
                      <span className="text-[10px] text-gray-400">
                        Enter your name
                      </span>
                      <p className="text-[10px]">{fullName}</p>
                    </div>
                    <div className="w-1/2 h-[45px] border-b border-[#12464E]">
                      <span className="text-[10px] text-gray-400 pl-1">
                        Enter your email *
                      </span>
                      <p className="text-[10px] pl-1">{email}</p>
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-1/2 h-[45px] border-b border-r border-[#12464E]">
                      <span className="text-[10px] text-gray-400">
                        ticket type:
                      </span>
                      <p className="text-[10px]">
                        {selectedTicket
                          ? selectedTicket.label === "free"
                            ? "free"
                            : `$${selectedTicket.price}`
                          : ""}
                      </p>
                    </div>
                    <div className="w-1/2 h-[45px] border-b border-[#12464E]">
                      <span className="text-[10px] text-gray-400 pl-1">
                        Ticket for :
                      </span>
                      <p className="text-[10px] pl-1">{numberOfTickets}</p>
                    </div>
                  </div>
                  <div className="w-full h-[65px] flex flex-col pt-1">
                    <span className="text-[10px] text-gray-400">
                      Special request?
                    </span>
                    <p className="text-[10px] pl-1">{specialRequest}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[107%]">
                <CldImage
                  src="https://res.cloudinary.com/dbitkdy7t/image/upload/v1739378176/Bar_Code_oocr1b.svg"
                  alt="code"
                  width={236}
                  height={68}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[556px] flex flex-col md:flex-row gap-6">
          <Button
            type="button"
            onClick={handleBookAnotherTicket}
            className="md:w-[266px] w-full h-[48px] text-[16px] text-[#24A0B5] border border-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            book another ticket
          </Button>
          <Button
            type="button"
            onClick={handleDownloadTicket}
            className="md:w-[266px] w-full h-[48px] text-[16px] bg-[#24A0B5] rounded-lg py-3 px-6 capitalize"
          >
            download ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
