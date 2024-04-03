'use client'

import React, { ComponentProps, useId, createContext, useContext, useState } from 'react'

interface FilInputContextType {
	id: string
	files: File[]
	onFilesSelected: (files: File[], multiple: boolean) => void
}

interface RootProps extends ComponentProps<'div'> {}

export const FileInputContext = createContext({} as FilInputContextType)

export function Root(props: RootProps) {
	const id = useId()

	const [files, setFiles] = useState<File[]>([])

	function onFilesSelected(files: File[], multiple: boolean) {
		if(multiple) {
			setFiles(old => [...old, ...files])
		} else {
			setFiles(files)
		}
	}

	return (
		<FileInputContext.Provider value={{
			id,
			files,
			onFilesSelected
		}}>
			<div {...props} />
		</FileInputContext.Provider>
	)
}

export const useFileInput = () => useContext(FileInputContext)