'use client'

import { ChangeEvent, ComponentProps } from "react"

import { useFileInput } from "./Root"

interface ControlProps extends Omit<ComponentProps<'input'>, 'id'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
	const { id, onFilesSelected } = useFileInput()

	function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
		if(!e.target.files?.length) {
			return
		}

		onFilesSelected(Array.from(e.target.files), multiple)
	}

	return (
		<input 
			type="file" 
			className="sr-only" 
			id={id} 
			onChange={handleFilesSelected} 
			multiple={multiple}
			{...props} 
		/>
	)
}