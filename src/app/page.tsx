import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react"
import { Input } from "./components/Input"
import { Select } from "./components/Form/Select"
import { SettingsTabs } from "./components/SettingsTabs"
import * as FileInput from "./components/Form/FileInput" 
import { SelectItem } from "./components/Form/Select/SelectItem"
import { countryFlags } from "./utils/country-flags"
import { timezoneList } from "./utils/timezones"
import { Textarea } from "./components/Form/Textarea"
import { Button } from "./components/Button"

const countryList = Object.values(countryFlags)

export default function Home() {
	return (
		<>
			<h1 className="text-3xl text-zinc-900 font-medium dark:text-zinc-100">Settings</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
					</div>

					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">Cancel</Button>
						<Button type="submit" form="settings">Save</Button>
					</div>
				</div>

				<form action="" id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form lg:items-center">
					 	<label htmlFor="first-name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
						<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
							<Input.Root>
								<Input.Control id="first-name" defaultValue="Felipe" />
							</Input.Root>

							<div className="flex flex-col gap-3 lg:block">
								<label htmlFor="last-name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last name</label>

								<Input.Root>
									<Input.Control id="last-name" defaultValue="Leite" />
								</Input.Root>
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form lg:items-center pt-5">
					 	<label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>

						<div className="flex lg:grid lg:grid-cols-2 gap-6">
							<Input.Root>
								<Input.Prefix>
									<Mail className="h-5 w-5 text-zinc-500" />
								</Input.Prefix>

								<Input.Control id="email" defaultValue="felipe@robot.rio.br" />
							</Input.Root>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Your photo
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">This will be displayed on your profile.</span>
						</label>

						<FileInput.Root className="flex lg:items-start gap-5 flex-col lg:flex-row">
							<FileInput.ImagePreview />

							<FileInput.Trigger extra="SVG, PNG, JPG or GIF (max. 800x400px)" />
							
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>

						<div className="flex lg:grid lg:grid-cols-2 gap-6">
							<Input.Root>
								<Input.Control id="role" defaultValue="CTO" />
							</Input.Root>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
						
						<Select placeholder="Select a country...">
							{countryList.map(country => (
								<SelectItem key={country.name} value={country.name} text={country.name} image={country.image} />
							))}
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
						
						 <Select placeholder="Select the timezone...">
							{timezoneList.map(timezone => (
								<SelectItem 
									key={timezone.zone} 
									value={timezone.zone} 
									text={timezone.zone}
									extraText={timezone.gmt}
								/>
							))}
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Bio
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">Write a short introduction.</span>
						</label>

						<div className="space-y-3">
							<div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
								<Select defaultValue="normal">
									<SelectItem value="normal" text="Normal text" defaultChecked />
									<SelectItem value="md" text="Markdown" defaultChecked />
								</Select>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Bold className="w-5 h-5 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button type="button" variant="ghost">
										<Italic className="w-5 h-5 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button type="button" variant="ghost">
										<Link className="w-5 h-5 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button type="button" variant="ghost">
										<List className="w-5 h-5 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button type="button" variant="ghost">
										<ListOrdered className="w-5 h-5 text-zinc-500" strokeWidth={3} />
									</Button>
								</div>
							</div>

							<Textarea 
								id="bio"
								defaultValue="I'm a Product Designer..."
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
					 	<label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Portfolio projects
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">Share a few snippets of your work.</span>
						</label>
						
						<FileInput.Root>
							<FileInput.Trigger />
							
							<FileInput.Control multiple />

							<FileInput.FileList />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<Button type="button" variant="outline">Cancel</Button>
						<Button type="submit">Save</Button>
					</div>
				</form>
			</div>
		</>
	)
}
