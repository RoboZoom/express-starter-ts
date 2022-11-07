import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

interface exitOptions {
	cleanup: boolean;
	exit: boolean;
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
function exitHandler(options: exitOptions, exitCode: number) {
	if (options.cleanup) console.log('clean');
	if (exitCode || exitCode === 0) console.log(`Exit Handler: ${exitCode}`);
	if (options.exit) process.exit();
}

//catches ctrl+c event
process.on(
	'SIGINT',
	exitHandler.bind(null, {
		cleanup: false,
		exit: true,
	})
);

// catches "kill pid" (for example: nodemon restart)
process.on(
	'SIGUSR1',
	exitHandler.bind(null, {
		cleanup: false,
		exit: true,
	})
);
process.on(
	'SIGUSR2',
	exitHandler.bind(null, {
		cleanup: false,
		exit: true,
	})
);

// catches uncaught exceptions
process.on(
	'uncaughtException',
	exitHandler.bind(null, {
		cleanup: false,
		exit: true,
	})
);
