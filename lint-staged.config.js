const path = require('path');

const nextSrcEslint = (filenames) => {
  const lintFiles = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((c) => c.startsWith('src'))
    .map((c) => `--file ${c}`);

  return lintFiles.length > 0
    ? `next lint --fix ${lintFiles.join(' ')}`
    : 'echo nothing to lint !';
};

module.exports = {
  '*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '*.{js,jsx,ts,tsx}': [
    (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
    nextSrcEslint,
  ],
  '**/*.(md|json|yml|yaml)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
