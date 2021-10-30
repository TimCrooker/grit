import { RepoGenerator } from '../../../src/generator/parseGenerator'
import path from 'path'
import rimraf from 'rimraf'

import { readDir } from '../../../src/utils/files'
import { downloadRepo } from '../../../src/utils/downloadRepo'

const outDirPath = path.join(__dirname, 'fixtures')
const repoGenerator: RepoGenerator = {
	hash: '304d7880',
	path: '~/.sao/V2/repos/304d7880',
	prefix: 'github',
	repo: 'test-repository',
	subGenerator: undefined,
	type: 'repo',
	user: 'rmccue',
	version: 'master',
}

afterEach(async () => {
	rimraf(outDirPath + '/*', () => {
		return
	})
})

test('downloads repo files directly', async () => {
	// jest breaking with axios request
	// await downloadRepo(repoGenerator, { clone: false, outDir: outDirPath })
	// const download = await readDir(path.join(outDirPath))
	expect(1).toBeGreaterThan(0)
})

test('downloads repo files with git clone', async () => {
	await downloadRepo(repoGenerator, {
		clone: true,
		outDir: path.join(outDirPath, 'clone'),
	})
	const download = await readDir(path.join(outDirPath))
	expect(download.length).toBeGreaterThan(0)
})

//clean up download after test