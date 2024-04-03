'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends Select.SelectItemProps {
	text: string
	extraText?: string
	image?: string
}

export function SelectItem({ text, extraText, image, ...props }: SelectItemProps) {
	return (
		<Select.Item className="flex items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 outline-none justify-between cursor-pointer data-[disabled]:cursor-not-allowed dark:data-[highlighted]:bg-zinc-700" {...props}>
			<Select.ItemText asChild>
				<div className="flex gap-2 items-center text-black dark:text-zinc-100">
					{image && <img src={image} alt={text} className="w-6 h-6" />}

					{text}

					{extraText && <span className="text-zinc-400 text-sm">{extraText}</span>}
				</div>
			</Select.ItemText>

			<Select.ItemIndicator>
				<Check className="w-4 h-4 text-violet-500 dark:text-violet-300" />
			</Select.ItemIndicator>
		</Select.Item>
	)
}