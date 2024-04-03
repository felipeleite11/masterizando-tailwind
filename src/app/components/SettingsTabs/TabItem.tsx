import * as Tabs from "@radix-ui/react-tabs"
import { motion } from 'framer-motion'

interface TabItemProps {
	value: string
	title: string
	isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
	return (
		<Tabs.Trigger 
			className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-700 dark:hover:text-violet-300 data-[state=active]:text-violet-700 outline-none dark:data-[state=active]:text-violet-400" 
			value={value}
		>
			<span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 rounded whitespace-nowrap">{title}</span>

			{isSelected && (
				<motion.div layoutId="active-tab" className="absolute left-0 right-0 h-0.5 bg-violet-700 -bottom-px dark:bg-violet-300" />
			)}
		</Tabs.Trigger>
	)
}