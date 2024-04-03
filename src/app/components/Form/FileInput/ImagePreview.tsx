'use client'

import { User } from "lucide-react"
import { useFileInput } from "./Root"
import { useMemo } from "react"

export function ImagePreview() {
	const { files } = useFileInput()

	const previewUrl = useMemo(() => {
		if(!files.length) {
			return null
		}

		return URL.createObjectURL(files[0])
	}, [files])

	if(previewUrl === null) {
		return (
			<div className="bg-violet-50 dark:bg-violet-500/10 h-16 w-16 flex items-center justify-center rounded-full">
				<User className="text-violet-500 h-8 w-8 dark:text-violet-300" />
			</div>
		)
	}

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={previewUrl} alt="" className="h-16 w-16 rounded-full object-cover" />
	)
}