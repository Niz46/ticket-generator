"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import {
  updateTicketForm,
  setCurrentStep,
  resetAll,
} from "@/store/slices/ticketSlice";

const attendeeSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  avatarUrl: Yup.string()
    .url("Invalid URL.")
    .required("Avatar URL is required."),
});

const TicketForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentStep, ticketForm } = useSelector((state) => state.ticket);
  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const [errors, setErrors] = useState({});

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        const fileUrl = URL.createObjectURL(file);
        dispatch(updateTicketForm({ avatarUrl: fileUrl }));
        e.dataTransfer.clearData();
      }
    }
  };

  useEffect(() => {
    const handlePaste = (e) => {
      if (e.clipboardData.files && e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith("image/")) {
          const fileUrl = URL.createObjectURL(file);
          dispatch(updateTicketForm({ avatarUrl: fileUrl }));
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    attendeeSchema
      .validate(
        {
          fullName: ticketForm.fullName,
          email: ticketForm.email,
          avatarUrl: ticketForm.avatarUrl,
        },
        { abortEarly: false }
      )
      .then(() => {
        setErrors({});
        dispatch(setCurrentStep(currentStep + 1));
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  const handleReset = () => {
    dispatch(resetAll());
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <Nav />
      {/* Container */}
      <div className="w-full max-w-[700px] h-auto bg-[#041E23] text-white border border-[#0E464F] relative top-40 rounded-[40px] flex flex-col items-center gap-8 sm:p-[48px] p-4 mx-auto">
        {/* Header: Title and Progress Bar */}
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between">
            <p className="capitalize text-[32px] font-thin">attendee details</p>
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

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="w-full h-full bg-[#08252B] border border-[#0E464F] rounded-[32px] gap-8 sm:p-6 p-4 flex flex-col"
        >
          <div className="w-full h-auto border border-[#07373F] rounded-[24px] flex flex-col sm:p-6 p-4 gap-8">
            <p className="capitalize">upload profile photo</p>
            <div
              className="w-full max-w-[508px] h-[200px] bg-[#091a1d] flex justify-center items-center relative"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              style={
                ticketForm.avatarUrl
                  ? {
                      backgroundImage: `url(${ticketForm.avatarUrl})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              {!ticketForm.avatarUrl && (
                <div className="w-full max-w-[220px] h-[220px] bg-[#0E464F] border-4 border-[#24A0B5] flex flex-col justify-center items-center absolute p-6 gap-4 rounded-[32px]">
                  <CldImage
                    src="https://res.cloudinary.com/dbitkdy7t/image/upload/v1739361033/icon_j9ytxt.svg"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-[16px] font-thin text-center">
                    Drag & drop or click to <br /> upload
                  </p>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 mt-4">
              <label className="capitalize text-[16px] font-thin text-gray-200/85">
                Avatar URL
              </label>
              <input
                type="url"
                value={ticketForm.avatarUrl}
                onChange={(e) =>
                  dispatch(updateTicketForm({ avatarUrl: e.target.value }))
                }
                className="h-[48px] bg-transparent border border-[#07373F] p-2 rounded-xl outline-none"
                placeholder="Enter image URL"
              />
              {errors.avatarUrl && (
                <p className="text-red-500 text-sm mt-2">{errors.avatarUrl}</p>
              )}
            </div>
          </div>

          <div className="w-full h-1 bg-[#0E464F] rounded-full mt-2"></div>

          <div className="w-full h-auto flex flex-col gap-2">
            <label className="capitalize text-[16px] font-thin text-gray-200/85">
              enter your name
            </label>
            <input
              type="text"
              value={ticketForm.fullName}
              onChange={(e) =>
                dispatch(updateTicketForm({ fullName: e.target.value }))
              }
              className="h-[48px] bg-transparent border border-[#07373F] p-2 rounded-xl outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
            )}
          </div>
          <div className="w-full h-auto flex flex-col gap-2">
            <label className="capitalize text-[16px] font-thin text-gray-200/85">
              enter your email*
            </label>
            <input
              type="email"
              value={ticketForm.email}
              onChange={(e) =>
                dispatch(updateTicketForm({ email: e.target.value }))
              }
              className="h-[48px] bg-transparent border border-[#07373F] p-2 rounded-xl outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="capitalize text-[16px] font-thin text-gray-200/85">
              special request
            </label>
            <textarea
              className="h-[127px] bg-transparent border border-[#07373F] rounded-xl text-gray-300/35 capitalize outline-none p-2"
              placeholder="Textarea"
              value={ticketForm.specialRequest}
              onChange={(e) =>
                dispatch(updateTicketForm({ specialRequest: e.target.value }))
              }
            ></textarea>
          </div>

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
    </div>
  );
};

export default TicketForm;
