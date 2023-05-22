import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="hover:file-gray-1 checkbox-sm flex items-center gap-1 text-gray-200"
      >
        <ChevronLeft className="h-4 w-4" />
        volta à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
