import { GritRoute } from '@/cli/config'
import { promptGeneratorRun, promptOutDir } from '@/cli/prompts'
import { NpmSearch } from '@/utils/npm'
import { spinner } from '@/utils/spinner'
import {
	getGenerator,
	NpmGenerator,
	parseGenerator,
	RepoGenerator,
	store,
} from 'gritenv'
import { HomeChoice, ExitChoice } from '..'

/**
 *  This route lets the user search for generators using npm search.
 *
 *  eventuall make this searchable
 */
export const find: GritRoute = async (app, { options, args }) => {
	// Get a list of installed npm generators from the store
	const installedNpmGenerators = store.generators.npmGeneratorsNames

	const searchTerm = args[1] as string

	// get the generators from npm (packages that start with `grit-` and have the `grit-generator` keyword)
	app.spinner.start('searching for grit-generators')
	const data = await NpmSearch({
		keywords: ['grit-generator'],
		resultCount: 50,
	})
	app.spinner.stop()

	// Create inquirer choices with search results
	const choices = [
		...data
			.filter(({ package: { name, description } }) => {
				return (
					!searchTerm ||
					name.includes(searchTerm) ||
					description.includes(searchTerm)
				)
			})
			.map(({ package: { name, description } }) => {
				name = name.replace('grit-', '')
				const alreadyInstalled = installedNpmGenerators.includes(name)

				return {
					name: `${name} ${app.colors.gray(description)}${
						alreadyInstalled ? app.colors.yellow(' installed') : ''
					} `,
					value: { generator: name, installed: alreadyInstalled },
				}
			}),
		new app.inquirer.Separator(),
		{ name: 'Refresh list', value: 'find' },
		HomeChoice,
		ExitChoice,
		new app.inquirer.Separator(),
	]

	// prompt the user with the above choices
	const { answer } = await app.prompt([
		{
			type: 'list',
			name: 'answer',
			message: 'Install and run a generator',
			choices,
			loop: true,
		},
	])

	// Navigate to the appropriate route
	if (!answer.generator) {
		// if the answer is a route navigate to it
		return await app.navigate(answer)
	}

	// if the answer is a generator
	const generator = answer.generator as string
	const alreadyInstalled = answer.installed as boolean

	// if the generator is already installed then run it
	if (alreadyInstalled) {
		const outDir = await promptOutDir()
		await (await getGenerator({ generator, outDir })).run()
		return await app.navigate('home')
	}

	// ask user if they want to run the generator after installation
	const run = await promptGeneratorRun()

	// install the generator
	try {
		spinner.start(`Installing ${app.colors.cyan('grit-' + answer.generator)}`)
		await store.generators.add(
			parseGenerator(answer.generator) as NpmGenerator | RepoGenerator
		)
		spinner.succeed(`Installed ${app.colors.cyan('grit-' + generator)}`)
	} catch (e) {
		spinner.stop()
		throw e
	}

	// install and run the generator
	if (run === true) {
		const outDir = await promptOutDir()

		// Run the chosen generator
		await (
			await getGenerator({
				generator: answer.generator,
				...options,
				outDir,
			})
		).run()
	}

	// Go home after installing the generator
	return await app.navigate('home')
}

export const FindChoice = {
	name: 'Discover new generators',
	value: 'find',
}