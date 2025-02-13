"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentPath } from "@/store/slices/navigationSlice";

const NavigationTracker = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPath(pathname));
  }, [pathname, dispatch]);

  return null;
};

export default NavigationTracker;
