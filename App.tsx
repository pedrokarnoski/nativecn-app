import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/Profile";

import "@/styles/global.css";

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="auto" />
    </>
  );
}
