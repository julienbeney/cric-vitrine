"use client";
import { Title } from "../components/homepage/title";

export default function NotFound({errorMessage}: {errorMessage: string}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title title="404" />
      <p className="text-xl">{errorMessage}</p>
    </div>
  )
}