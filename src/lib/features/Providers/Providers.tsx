"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/features/store/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
