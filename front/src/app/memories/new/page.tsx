import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="hover:file-gray-1 checkbox-sm flex items-center gap-1 text-gray-200"
      >
        <ChevronLeft className="h-4 w-4" />
        volta à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="item-center flex gap-4">
          <label
            htmlFor="midia"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            {' '}
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100 "
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className=" h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 "
            />
            Tornar memória pública
          </label>
        </div>

        <input type="file" id="midia" className="invisible h-0 w-0" />

        <textarea
          name="content"
          spellCheck={false}
          className="bg-traparent text-l w-full flex-1 resize-none rounded border-0 bg-transparent p-0 leading-relaxed
          text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos, e relates sobre essa experiência que você quer lembrar para semre."
        />
      </form>
    </div>
  )
}
