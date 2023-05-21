'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function OnMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }
    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        name="coverUrl"
        type="file"
        id="midia"
        className="invisible h-0 w-0"
        onChange={OnMediaSelected}
        accept="image/*"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className=" aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
