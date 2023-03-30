import { Location, BlockAreaSize, BlockLocation, Vector, Vector3 } from './index';

const location = new Location(0, 0, 0);
location.equals(location);
location.isNear(location, 4);

const blockAreaSize = new BlockAreaSize(0, 0, 0);
blockAreaSize.equals(blockAreaSize);

const blockLocation = new BlockLocation(0, 0, 0);
blockLocation.above();
blockLocation.blocksBetween(new BlockLocation(10, 20, 30));
blockLocation.equals(blockLocation);
blockLocation.offset(10, 20, 30);

const vector = new Vector(0, 0, 0);
vector.equals(new Vector(10, 20, 30));
vector.length();
vector.lengthSquared();
vector.normalized();

const back = Vector3.back;
const down = Vector3.down;
const forward = Vector3.forward;
const left = Vector3.left;
const one = Vector3.one;
const right = Vector3.right;
const up = Vector3.up;
const zero = Vector3.zero;
const add = Vector3.add(Vector3.left, Vector3.right);
const cross = Vector3.cross(new Vector3(6, 4, 8), new Vector3(7, 5, -3));
const distance = Vector3.distance(new Vector3(3, 4, 5), new Vector3(6, 7, 8));
const divide = Vector3.divide(new Vector3(5, 5, 5), new Vector3(2, 3, 4));
const divide2 = Vector3.divide(new Vector3(5, 5, 5), 4);3
const lerp = Vector3.lerp(new Vector3(5, 5, 5), new Vector3(5, 5, 15), 1);
const max = Vector3.max(new Vector3(5, 5, 5), new Vector3(4, 5, 5));
const min = Vector3.min(new Vector3(4, 5, 5), new Vector3(5, 5, 5));
const multiply = Vector3.multiply(new Vector3(5, 5, 5), new Vector3(2, 3, 4));
const multiply2 = Vector3.multiply(new Vector3(5, 5, 5), 5);3
const slerp = Vector3.slerp(new Vector3(1, 0, 0), new Vector3(0, 1, 1), 0.5);
const subtract = Vector3.subtract(new Vector3(5, 5, 5), new Vector3(5, 5, 5));
