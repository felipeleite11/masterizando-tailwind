'use client'

import { Cog, LifeBuoy, Menu, Search } from "lucide-react"
import * as Collapsible from "@radix-ui/react-collapsible"

import { Logo } from "./Logo"
import { MainNavigation } from "./MainNavigation"
import { NavItem } from "./MainNavigation/NavItem"
import { UsedSpaceWidget } from "../UsedSpaceWidget"
import { Profile } from "../Profile"
import { Input } from "../Input"
import { Button } from "../Button"

export function Sidebar() {
	return (
		<Collapsible.Root className="border-r border-zinc-200 flex flex-col gap-6 p-4 border-b fixed left-0 top-0 right-0 data-[state=open]:bottom-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative lg:data-[state=closed]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:h-screen dark:bg-zinc-900 dark:border-zinc-800">
			<div className="flex items-center justify-between">
				<Logo />

				<Collapsible.Trigger className="lg:hidden" asChild>
					<Button variant="ghost">
						<Menu className="w-6 h-6" />
					</Button>
				</Collapsible.Trigger>

			</div>

			<Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
				<Input.Root>
					<Input.Prefix>
						<Search className="w-5 h-5 text-zinc-500" />
					</Input.Prefix>

					<Input.Control placeholder="Search..." />
				</Input.Root>

				<MainNavigation />

				<div className="mt-auto flex flex-col gap-6">
					<nav className="space-y-0.5">
						<NavItem title="Support" icon={LifeBuoy} />
						<NavItem title="Settings" icon={Cog} />
					</nav>

					<UsedSpaceWidget />

					<div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>

					<Profile />
				</div>
			</Collapsible.Content>			
		</Collapsible.Root>
	)
}