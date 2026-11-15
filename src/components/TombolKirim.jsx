"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

export default function TombolKirim({teks}) {
  const { pending } = useFormStatus()

  return(
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Mengirim" : teks}
    </Button>
  )
}
