import { options } from './cubeConfig';
const optionText = [...options.entries()]
  .map(([key, { description }]) => `        ${key}, ${description}`)
  .join('\r\n');

export function showMenu() {
  console.log(`
    blync-party
        Run a light pattern or just change the color of your Blync light.
        Use a built-in pattern, color name, or hex code!

    Usage
        blync-party [option]
        blync-party [hex code]
        blync-party [color name]

    Examples
        blync-party party
        blync-party cyan
        blync-party #FF0000
        blync-party 00FF00

    Options
${optionText}
    `);
}
