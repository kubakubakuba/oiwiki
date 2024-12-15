import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import markdownItFootnote from 'markdown-it-footnote'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/',
	title: "OI Wiki",
	description: "Souhrn znalostí z OI",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Státnice', link: '/statnice_b/' },
		],

		sidebar: [
			{
				text: 'Info',
				link: '/info/',
				items: [
					{
						text: 'Státnice',
						link: '/statnice_b/',
						collapsed: true,
						items: [
							{
								text: 'Obecné',
								link: '/statnice_b/obecne/',
								collapsed: true,
								items: [
									{ text: 'DMA', link: '/statnice_b/obecne/dma' },
									{ text: 'LAG', link: '/statnice_b/obecne/lag' },
									{ text: 'PRP', link: '/statnice_b/obecne/prp' },
									{ text: 'MA1', link: '/statnice_b/obecne/ma1' },
									{ text: 'LGR', link: '/statnice_b/obecne/lgr' },
									{ text: 'PJV', link: '/statnice_b/obecne/pjv' },
									{ text: 'APO', link: '/statnice_b/obecne/apo' },
									{ text: 'PSI', link: '/statnice_b/obecne/psi' },
									{ text: 'MA2', link: '/statnice_b/obecne/ma2' },
									{ text: 'PST', link: '/statnice_b/obecne/pst' },
									{ text: 'ALG', link: '/statnice_b/obecne/alg' },
									{ text: 'OSY', link: '/statnice_b/obecne/osy' },
									{ text: 'DBS', link: '/statnice_b/obecne/dbs' },
									{ text: 'PDV', link: '/statnice_b/obecne/pdv' },
									{ text: 'OPT', link: '/statnice_b/obecne/opt' }
								]
							},
							{
								text: 'AI',
								link: '/statnice_b/specializace/_ai/',
								collapsed: true,
								items: [
									{ text: 'NUM', link: '/statnice_b/specializace/num' },
									{ text: 'JAG', link: '/statnice_b/specializace/jag' },
									{ text: 'ZUI', link: '/statnice_b/specializace/zui' },
									{ text: 'FUP', link: '/statnice_b/specializace/fup' },
									{ text: 'RPZ', link: '/statnice_b/specializace/rpz' },
								]
							},
							{
								text: 'Hry',
								link: '/statnice_b/specializace/_hry/',
								collapsed: true,
								items: [
									{ text: 'ZUI', link: '/statnice_b/specializace/zui' },
									{ text: 'IUR', link: '/statnice_b/specializace/iur' },
									{ text: 'VGO', link: '/statnice_b/specializace/vgo' },
									{ text: 'PGR', link: '/statnice_b/specializace/pgr' },
									{ text: 'HRY', link: '/statnice_b/specializace/hry' },
								]
							},
							{
								text: 'Software',
								link: '/statnice_b/specializace/_software/',
								collapsed: true,
								items: [
									{ text: 'JAG', link: '/statnice_b/specializace/jag' },
									{ text: 'FUP', link: '/statnice_b/specializace/fup' },
									{ text: 'SIN', link: '/statnice_b/specializace/sin' },
									{ text: 'OMO', link: '/statnice_b/specializace/omo' },
									{ text: 'TS1', link: '/statnice_b/specializace/ts1' },
								]
							},
							{
								text: 'IoT',
								link: '/statnice_b/specializace/_iot/',
								collapsed: true,
								items: [
									{ text: 'EAM', link: '/statnice_b/specializace/eam' },
									{ text: 'LSP', link: '/statnice_b/specializace/lsp' },
									{ text: 'PKS', link: '/statnice_b/specializace/pks' },
									{ text: 'PSR', link: '/statnice_b/specializace/psr' },
									{ text: 'NVS', link: '/statnice_b/specializace/nvs' },
								]
							},

						]
					},
				]
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kubakubakuba/oiwiki' }
		],

		editLink: {
			pattern: 'https://github.com/kubakubakuba/oiwiki/edit/main/:path'
		},
	

		search: {
			provider: 'local'
		},
	},

	markdown: {
		config: (md) => {
			md.use(markdownItMathjax3);
			md.use(markdownItFootnote)
		}
	},
})
