# Setup Instructions

## Install VSCode

Go to this website: https://code.visualstudio.com/

Install VS Code as directed.

## Install Node JS

Go to this website: https://nodejs.org/en/download/

Install NodeJS as instructed.

## Install Yarn

Yarn provides better consistency to ensure all dependencies are equal across development environments. We use Yarn version 1 in this repository.

Install Yarn "Classic", version 1.22.x, at this website: https://classic.yarnpkg.com/en/docs/install#windows-stable

In the future, this repository may be upgraded to Yarn @latest.

## Fork this Repository

Using the github web interface, fork this repository to create your own working copy of this code.

## Configure VSCode

Once the code is local to your machine:

- Open VS Code
- Choose 'Open Folder'
- Choose the folder where this code is saved
- Go to File > Extensions
- Ensure the following are installed
  - ESLint
  - Jest
  - Jest Runner
  - Prettier ESLint

Once these extensions are configured, install your dependencies:

- Open a Terminal
  - Open the Terminal menu item from the top menu
  - Select 'New Terminal'
- Run `yarn -v`, ensure you receive `1.22.x`
- Run `yarn`, you should observe your dependencies being installed.

## Useful Commands

The following commands, if typed in terminal, will be useful in building the application:

- `yarn run dev` - a developmental build of the server which will change as you change the internal server code.
- `yarn run start` - starts the server 'normally'
- `yarn run build` - builds the server into the `dist` folder
- `yarn run test` - runs all unit tests and code coverage report

Good luck!
