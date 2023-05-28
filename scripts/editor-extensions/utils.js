export class Color {
	/**
	 * @param {number} red
	 * @param {number} green
	 * @param {number} blue
	 * @param {number} alpha
	 */
	constructor( red, green, blue, alpha ) {
		return {
			red,
			green,
			blue,
			alpha,
		};
	};
};

export class PriorityQueue {
	/**
	 * @param {{ (a: any, b: any): number; (a: any, b: any): number; (a: any, b: any): number; }} compareFn
	 */
	constructor( compareFn ) {
		this.compareFn = compareFn;
		this.heap = [];
	};

	/**
	 * @param {import("@minecraft/server").Vector3} element
	 */
	enqueue( element ) {
		this.heap.push( element );
	  	this.siftUp( this.heap.length - 1 );
	};
  
	dequeue() {
	  	if (this.isEmpty()) return undefined;
	  	if (this.heap.length === 1) return this.heap.pop();
	  	
		const removedValue = this.heap[0];
	  	this.heap[0] = this.heap.pop();
	  	this.siftDown( 0 );
	  	return removedValue;
	};
  
	isEmpty() {
	  	return this.heap.length === 0;
	};
  
	/**
	 * @param {number} index
	 */
	siftUp( index ) {
	  	let parentIndex = this.getParentIndex( index );
	  	while (index > 0 && this.compareFn( this.heap[parentIndex], this.heap[index] ) > 0) {
			[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
			index = parentIndex;
			parentIndex = this.getParentIndex( index );
	  	};
	};
  
	/**
	 * @param {number} index
	 */
	siftDown( index ) {
	  	let i = index;
	  	while (this.getLeftChildIndex( i ) < this.heap.length) {
			const leftChildIndex = this.getLeftChildIndex( i );
			const rightChildIndex = this.getRightChildIndex( i );
			let smallestIndex = i;
			if (
				leftChildIndex < this.heap.length
				&& this.compareFn( this.heap[leftChildIndex], this.heap[smallestIndex] ) < 0
			) smallestIndex = leftChildIndex;
			if (
				rightChildIndex < this.heap.length
				&& this.compareFn( this.heap[rightChildIndex], this.heap[smallestIndex] ) < 0
			) smallestIndex = rightChildIndex;
			if (smallestIndex !== i) {
		  		[this.heap[i], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[i]];
		  		i = smallestIndex;
			} else break;
	  	}
	};
  
	/**
	 * @param {number} index
	 */
	getParentIndex( index ) {
	  	return Math.floor( (index - 1) / 2 );
	};
  
	/**
	 * @param {number} index
	 */
	getLeftChildIndex( index ) {
	  	return index * 2 + 1;
	};
  
	/**
	 * @param {number} index
	 */
	getRightChildIndex( index ) {
	  	return index * 2 + 2;
	};
};