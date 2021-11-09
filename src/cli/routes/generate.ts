import { Grit, handleError, Options } from '../../'
import { logger } from '../../logger'
import { GritRoute } from '../cli'

export const generate: GritRoute = async (app, { args, options }) => {
	console.log('generating')

	const generator = args[0]
	const outDir = args[1]

	logger.log(generator, outDir, options)

	options

	const generatorOptions: Options = {
		generator,
		outDir: outDir || '.',
		updateCheck: true,
		answers: options.yes ? true : options.answers,
		...options,
	}

	try {
		const grit = new Grit(generatorOptions)

		console.log(options)

		await grit.run()
	} catch (error) {
		handleError(error)
	}
}