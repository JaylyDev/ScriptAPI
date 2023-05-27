export class Color {
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
	constructor( compareFn ) {
		this.compareFn = compareFn;
		this.heap = [];
	};

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
  
	siftUp( index ) {
	  	let parentIndex = this.getParentIndex( index );
	  	while (index > 0 && this.compareFn( this.heap[parentIndex], this.heap[index] ) > 0) {
			[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
			index = parentIndex;
			parentIndex = this.getParentIndex( index );
	  	};
	};
  
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
  
	getParentIndex( index ) {
	  	return Math.floor( (index - 1) / 2 );
	};
  
	getLeftChildIndex( index ) {
	  	return index * 2 + 1;
	};
  
	getRightChildIndex( index ) {
	  	return index * 2 + 2;
	};
};

export const Shutdown = (uiSession) => uiSession.log.info(`Shutting down ${uiSession.extensionContext.extensionName} extension`);