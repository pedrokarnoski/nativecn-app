import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/Profile";

import { ToastProvider } from "@/components/Toast";

import "@/styles/global.css";

export default function App() {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar style="light" />
    </ToastProvider>
  );
}
