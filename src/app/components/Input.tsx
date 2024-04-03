import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface InputRootProps extends ComponentProps<'div'> {

}

interface InputPrefixProps extends ComponentProps<'div'> {

}

interface InputControlProps extends ComponentProps<'input'> {

}

function InputPrefix(props: InputPrefixProps) {
	return (
		<div {...props}></div>
	)
}

function InputControl(props: InputControlProps) {
	return (
		<input className="outline-none w-full flex-1 border-0 bg-transparent text-zinc-900 placeholder-zinc-600 px-1 py-2 dark:placeholder-zinc-400 dark:text-zinc-100" {...props} />
	)
}

function InputRoot({ className, ...props }: InputRootProps) {
	return (
		<div 
			className={twMerge(
				'flex w-full items-center gap-2 rounded-lg border border-zinc-300 p-0 shadow-sm px-2',
				'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
				'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
				className
			)}
			{...props}
		/>
	)
}

export const Input = {
	Prefix: InputPrefix,
	Control: InputControl,
	Root: InputRoot
}