// Script example for ScriptAPI
// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * @param {import("@minecraft/server").Vector3} startPoint
 * @param {import("@minecraft/server").Vector3} endPoint
 * @param {number} numOfPoints
 */
function traceLine(startPoint, endPoint, numOfPoints) {
	class Point {
		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 */
		constructor(x, y, z) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}

	let pStart = new Point(startPoint.x, startPoint.y, startPoint.z);
	let pEnd = new Point(endPoint.x, endPoint.y, endPoint.z);

	for (let i = 1; i <= numOfPoints; i++) {
        	const position = {x: ((pStart.x - pEnd.x) / numOfPoints) * i + pEnd.x, y: ((pStart.y - pEnd.y) / numOfPoints) * i + pEnd.y, z: ((pStart.z - pEnd.z) / numOfPoints) * i + pEnd.z};
		// Code per point goes here!
	}
}