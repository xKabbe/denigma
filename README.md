<p align="center">
  <img src="public/denigma_logo.png">
</p>

<p align="center">
  <a href='https://github.dev/xKabbe/denigma/blob/master' alt="Open in VSCode">
    <img src="https://img.shields.io/badge/Open%20in%20Visual%20Studio%20Code-blue?logo=visualstudiocode&logoColor=blue&labelColor=555" />
  </a>
  <a href='https://github.com/xKabbe/denigma/actions/workflows/test_react_application.yml' alt="Test React Application">
    <img src="https://github.com/xKabbe/denigma/actions/workflows/test_react_application.yml/badge.svg" />
  </a>
  <a href='https://coveralls.io/github/xKabbe/denigma?branch=master' alt="Coverage Status">
    <img src="https://coveralls.io/repos/github/xKabbe/denigma/badge.svg?branch=master" />
  </a>
  <a href='https://github.com/xKabbe/denigma/issues?q=is%3Aissue+is%3Aopen' alt="GitHub issues">
    <img src="https://img.shields.io/github/issues/xKabbe/denigma?color=blue&logo=github" />
  </a>
  <a href='https://github.com/xKabbe/denigma/issues?q=is%3Aissue+is%3Aclosed' alt="GitHub closed issues">
    <img src="https://img.shields.io/github/issues-closed/xKabbe/denigma?color=success&logo=github" />
  </a>
</p>

`DeNigmA` is made up of the two words `Enigma` (message encryption) and `DNA` (deoxyribonucleic acid) and is a hobby project for the visualisation of DNA and RNA sequences. The basic idea is adapted from [seqviz](https://github.com/Lattice-Automation/seqviz) and is to be structured similarly, but further modified and enhanced.

## Useful Links

### React Jest Testing

- [React & TypeScript (Testing)](https://components.guide/) - React Testing Guid And More
- [How To Approach A Testcase](https://polvara.me/posts/my-approach-when-it-comes-to-testing) - My Approach When It Comes to Testing ([Polvara Blog](https://polvara.me/))
- [5 Testing Library Tips](https://polvara.me/posts/five-things-you-didnt-know-about-testing-library) - 5 Things You (Probably) Didn't Know About Testing Library ([Polvara Blog](https://polvara.me/))

## Running & Debugging the application

1. Clone repo:
   - `git clone https://github.com/xKabbe/denigma.git`
2. Install project dependencies:
   - `cd denigma`
   - `npm run init` (performs a [Clean Install](https://docs.npmjs.com/cli/v8/commands/npm-ci))
3. Restart VS Code to refresh TypeScript Intellisense, otherwise you might see errors in the editor:
   - Close VS Code
   - Open a new VS Code window
   - Open the folder where the project was cloned
4. Start the application:
   - Open a new terminal
   - `npm start`
5. Start debugging in VS Code:
   - Press `F5` or click on `Run and Debug` > `Green Debug Icon`
   - You can set breakpoints and inspect components in the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

More commands regarding testing, debugging and running the application are:

| Command               | Description                                      | Evironment File |
| :-------------------- | :----------------------------------------------- | :-------------- |
| `npm test`            | Executes Unit Tests outputting to `out/coverage` | .env.test       |
| `npm start`           | Runs the App in http://localhost:3000            | .env.local      |
| `npm run start-https` | Runs the App in https://localhost:3001 (HTTPS)   | .env.local      |
| `npm run sbook`       | Runs Storybook in http://localhost:3002          | .env.local      |
| `npm run sbook-https` | Runs Storybook in https://localhost:3003 (HTTPS) | .env.local      |

## Creator

[Steven Karbjinsky](https://github.com/xKabbe)

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=xKabbe)

## Copyright and License

Code and documentation released under [the MIT license](https://github.com/xKabbe/denigma/blob/master/LICENSE)
