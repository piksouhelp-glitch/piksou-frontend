import { Suspense } from "react"
import EmbedSupport from "./EmbedSupport"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading support...</div>}>
      <EmbedSupport />
    </Suspense>
  )
}