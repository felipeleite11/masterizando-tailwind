import { LogOut } from "lucide-react";
import { Button } from "./Button";

export function Profile() {
	return (
		<div className="flex items-center gap-3">
			<img src="https://github.com/felipeleite11.png" alt="" className="h-10 w-10 rounded-full" />

			<div className="flex flex-col flex-1 truncate">
				<span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Felipe Leite</span>
				<span className="text-sm text-zinc-500 overflow-ellipsis overflow-hidden dark:text-zinc-400">felipe@robot.rio.br</span>
			</div>

			<Button type="button" variant="ghost">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</Button>
		</div>
	)
}