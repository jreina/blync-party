import { options } from "./cubeConfig";
const optionText = [...options.entries()].map(
  ([key, { description }]) => `        ${key}, ${description}`
).join('\r');

export function showMenu() {
  console.log(`
    Usage
        blync-party mood

    Options
${optionText}
    `);
}
