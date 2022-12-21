// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
const ANSIColors = {
  '\u001b\\[0m': '§r',
  '\u001b\\[7m': '§l',
  '\u001b\\[90m': '§8',
  '\u001b\\[91m': '§c',
  '\u001b\\[92m': '§a',
  '\u001b\\[93m': '§e',
  '\u001b\\[94m': '§9',
  '\u001b\\[95m': '§d',
  '\u001b\\[96m': '§b',
  '\u001b\\[97m': '§f',
};


function ReplaceAllBuilder (searchValues) {
  return {
    searchValue: new RegExp(`^${Object.keys(searchValues).join('|')}$`, 'i'),
    replaceValue: (substring) => searchValues[`\u001b\\[${substring.replace(/[^0-9]/g, '')}m`]
  };
};
const {searchValue, replaceValue} = ReplaceAllBuilder(ANSIColors);
console.log('[90mhello world'.replace(searchValue, replaceValue));