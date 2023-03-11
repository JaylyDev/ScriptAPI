// Script example for ScriptAPI
// Author: xKingDark <https://github.com/DarkGamerYT>
// Project: https://github.com/DarkGamerYT/Bedrock-Editor-Extension
export class Color {
	/**
	 * 
	 * @param {number} r 
	 * @param {number} g 
	 * @param {number} b 
	 * @param {number} a 
	 * @returns 
	 */
	constructor(r, g, b, a) {
		return {
			red: r,
			green: g,
			blue: b,
			alpha: a,
		};
	};
};