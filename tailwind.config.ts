import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.tsx"
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: 'minmax(18rem, 20rem) 1fr',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
			},
			maxWidth: {
				app: '700px'
			},
			colors: {
				violet: {
					25: '#fcfaff'
				},
				error: {
					25: '#FFFBFA',
					50: '#FEF3F2',
					100: '#FEE4E2',
					200: '#FECDCA',
					300: '#FDA29B',
					400: '#F97066',
					500: '#F04438',
					600: '#D92D20',
					700: '#B42318',
					800: '#912018',
					900: '#7A271A'
				}
			},

			animation: {
				slideDownAndFade: 'slideDownAndFade 100ms linear',
				// slideUpAndFade: 'slideUpAndFade 1s linear'
			},

			keyframes: {
				slideDownAndFade: {
					from: { 
						opacity: 0,
						transform: 'translateY(-14px)' 
					},
					to: { 
						opacity: 1,
						transform: 'translateY(0)'
					}
				},
				// slideUpAndFade: {
				// 	from: { opacity: 1 },
				// 	to: { opacity: 0 }
				// }
			}
		}
	},
	plugins: [],
};
export default config;
