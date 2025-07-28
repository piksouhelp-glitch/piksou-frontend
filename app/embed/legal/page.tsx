import { Suspense } from "react"
import EmbedLegal from "./EmbedLegal"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading legal...</div>}>
      <EmbedLegal />
    </Suspense>
  )
}
