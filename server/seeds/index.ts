import fs from 'fs';


export default async function () {
	const files = fs.readdirSync(__dirname);
	for (const fileName of files) {

		try {
			// Skip the current file
			if (fileName !== 'index.ts') {
				
				const seed = await import(`${__dirname}/${fileName}`);
				await seed.default();
			}
		}
		catch (err) {
			console.log(err)
		}

	}
}
