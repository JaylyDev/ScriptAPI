# Vector Polyfill

Polyfill Vector class in `@minecraft/server` version 1.1.0-beta.

**Caution**: This class has been deprecated and the package is no longer maintained. Please use the [@minecraft/math](https://jaylydev.github.io/scriptapi-docs/latest/modules/_minecraft_math.html) external library.

Contains a description of a vector.

## Properties

### **x**
`x: number;`

X component of this vector.

Type: *number*

### **y**
`y: number;`

Y component of this vector.

Type: *number*

### **z**
`z: number;`

Z component of this vector.

Type: *number*

## Methods
- [constructor](#constructor)
- [equals](#equals)
- [length](#length)
- [lengthSquared](#lengthsquared)
- [normalized](#normalized)
- [add](#add)
- [cross](#cross)
- [distance](#distance)
- [divide](#divide)
- [lerp](#lerp)
- [max](#max)
- [min](#min)
- [multiply](#multiply)
- [slerp](#slerp)
- [subtract](#subtract)

### **constructor**
`
new Vector(x: number, y: number, z: number)
`

Creates a new instance of an abstract vector.

#### **Parameters**
- **x**: *number*
  
  X component of the vector.
- **y**: *number*
  
  Y component of the vector.
- **z**: *number*
  
  Z component of the vector.

#### **Returns** [*Vector*](#vector-polyfill)

### **equals**
`
equals(other: Vector): boolean
`

Compares this vector and another vector to one another.

#### **Parameters**
- **other**: [*Vector*](#vector-polyfill)
  
  Other vector to compare this vector to.

#### **Returns** *boolean* - True if the two vectors are equal.

### **length**
`
length(): number
`

Returns the length of this vector.

#### **Returns** *number*

### **lengthSquared**
`
lengthSquared(): number
`

Returns the squared length of this vector.

#### **Returns** *number*

### **normalized**
`
normalized(): Vector
`

Returns this vector as a normalized vector.

#### **Returns** [*Vector*](#vector-polyfill)

### **add**
`
static add(a: Vector3, b: Vector3): Vector
`

Returns the addition of these vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

### **cross**
`
static cross(a: Vector3, b: Vector3): Vector
`

Returns the cross product of these two vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

### **distance**
`
static distance(a: Vector3, b: Vector3): number
`

Returns the distance between two vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** *number*

### **divide**
`
static divide(a: Vector3, b: number | Vector3): Vector
`

Returns the component-wise division of these vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: *number* | [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

> [!WARNING]
> This function can throw errors.

### **lerp**
`
static lerp(a: Vector3, b: Vector3, t: number): Vector
`

Returns the linear interpolation between a and b using t as the control.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)
- **t**: *number*

#### **Returns** [*Vector*](#vector-polyfill)

### **max**
`
static max(a: Vector3, b: Vector3): Vector
`

Returns a vector that is made from the largest components of two vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

### **min**
`
static min(a: Vector3, b: Vector3): Vector
`

Returns a vector that is made from the smallest components of two vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

### **multiply**
`
static multiply(a: Vector3, b: number | Vector3): Vector
`

Returns the component-wise product of these vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: *number* | [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

### **slerp**
`
static slerp(a: Vector3, b: Vector3, s: number): Vector
`

Returns the spherical linear interpolation between a and b using s as the control.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)
- **s**: *number*

#### **Returns** [*Vector*](#vector-polyfill)

### **subtract**
`
static subtract(a: Vector3, b: Vector3): Vector
`

Returns the subtraction of these vectors.

#### **Parameters**
- **a**: [*Vector3*](#vector-polyfill)
- **b**: [*Vector3*](#vector-polyfill)

#### **Returns** [*Vector*](#vector-polyfill)

## Constants

### **back**
`static read-only back: Vector;`

A constant vector that represents (0, 0, -1).

Type: [*Vector*](#vector-polyfill)

### **down**
`static read-only down: Vector;`

A constant vector that represents (0, -1, 0).

Type: [*Vector*](#vector-polyfill)

### **forward**
`static read-only forward: Vector;`

A constant vector that represents (0, 0, 1).

Type: [*Vector*](#vector-polyfill)

### **left**
`static read-only left: Vector;`

A constant vector that represents (-1, 0, 0).

Type: [*Vector*](#vector-polyfill)

### **one**
`static read-only one: Vector;`

A constant vector that represents (1, 1, 1).

Type: [*Vector*](#vector-polyfill)

### **right**
`static read-only right: Vector;`

A constant vector that represents (1, 0, 0).

Type: [*Vector*](#vector-polyfill)

### **up**
`static read-only up: Vector;`

A constant vector that represents (0, 1, 0).

Type: [*Vector*](#vector-polyfill)

### **zero**
`static read-only zero: Vector;`

A constant vector that represents (0, 0, 0).

Type: [*Vector*](#vector-polyfill)