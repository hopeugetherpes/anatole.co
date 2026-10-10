import type { Metadata } from "next"
import NotFoundConsole from "./not-found-console"

export const metadata: Metadata = {
  title: "404 — Page not found | Anatole",
  description: "This page does not exist — but the rest of the site is still here.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return <NotFoundConsole />
}
