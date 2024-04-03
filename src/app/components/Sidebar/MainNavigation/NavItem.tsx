import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

interface NavItemProps {
	title: string
	icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
	return (
		<a href="" className="flex gap-3 items-center rounded px-3 py-2 hover:bg-violet-50 group dark:hover:bg-zinc-800">
			<Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-600" />

			<span className="text-zinc-700 font-medium group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">{title}</span>

			<ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
		</a>
	)
}