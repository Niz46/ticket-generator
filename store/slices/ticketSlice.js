import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  ticketForm: {
    fullName: "",
    email: "",
    avatarUrl: "",
    specialRequest: "",
  },
  ticketSelection: {
    selectedTicketType: "",
    numberOfTickets: 1,
  },
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateTicketForm: (state, action) => {
      state.ticketForm = { ...state.ticketForm, ...action.payload };
    },
    updateTicketSelection: (state, action) => {
      state.ticketSelection = { ...state.ticketSelection, ...action.payload };
    },
    resetTicketForm: (state) => {
      state.ticketForm = initialState.ticketForm;
    },
    resetTicketSelection: (state) => {
      state.ticketSelection = initialState.ticketSelection;
    },
    resetAll: (state) => {
      state.ticketForm = initialState.ticketForm;
      state.ticketSelection = initialState.ticketSelection;
      state.currentStep = 1;
    },
  },
});

export const {
  setCurrentStep,
  updateTicketForm,
  updateTicketSelection,
  resetTicketForm,
  resetTicketSelection,
  resetAll,
} = ticketSlice.actions;

export default ticketSlice.reducer;
