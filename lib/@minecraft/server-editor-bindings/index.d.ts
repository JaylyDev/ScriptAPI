// Type definition for @minecraft/server-editor-bindings 0.3.1
/**
 * Manifest details
 * ```json
 * {
 *      "module_name": "@minecraft/server-editor-bindings",
 *      "version": "0.1.0-beta"
 * }
 * ```
 */
import { Color, Player, Vector3 } from "@minecraft/server";
export class BlockVolume {
    constructor(a: Vector3, b: Vector3);
    contains(other: Vector3): boolean;
    offset(other: Vector3): BlockVolume;
    intersects(other: BlockVolume): number;
    getBlockPositionIterator(): BlockVolumeIterator;
    equals(other: BlockVolume): boolean;
    boundingBox: BoundingBox;
    min: Vector3;
    max: Vector3;
    volume: number;
}
export enum BlockVolumeIntersection {
    disjoint = 0,
    contains = 1,
    intersects = 2,
}
export class BlockVolumeIterator implements Iterable<BlockVolume> {
    protected constructor();
    [Symbol.iterator](): Iterator<BlockVolume>;
}
export class BoundingBox {
    constructor(
        minX: number,
        minY: number,
        minZ: number,
        maxX: number,
        maxY: number,
        maxZ: number
    );
    equals(other: BoundingBox): boolean;
    fromBlockLocation(a: Vector3, b: Vector3): BoundingBox;
    intersects(other: BoundingBox): number;
    expand(other: BoundingBox): BoundingBox;
    dilate(x: number, y: number, z: number): BoundingBox;
    offset(other: Vector3): BoundingBox;
    contains(other: Vector3): boolean;
    min: Vector3;
    max: Vector3;
    center: Vector3;
    spanX: number;
    spanY: number;
    spanZ: number;
}
export class ClipboardItem {
    protected constructor();
    readFromSelection(selection: Selection): void;
    readFromWorld(a: Vector3, b: Vector3): any;
    writeToWorld(location: Vector3, options: ClipboardWriteOptions): void;
    getPredictedWriteAsSelection(location: Vector3, options: ClipboardWriteOptions): Selection;
    clear(): void;
    size: Vector3;
    isEmpty: boolean;
}
export class ClipboardManager {
    protected constructor();
    create(): ClipboardItem;
    clipboard: ClipboardItem;
}
export enum ClipboardMirrorAxis {
    none = "none",
    X = "X",
    Z = "Z",
    XZ = "XZ",
}
export enum ClipboardRotation {
    none = "none",
    Rotate90 = "Rotate90",
    Rotate180 = "Rotate180",
    Rotate270 = "Rotate270",
}
export class ClipboardWriteOptions {
    anchor: Vector3;
    offset: Vector3;
    mirror: ClipboardMirrorAxis;
    rotation: ClipboardRotation;
}
export class Cursor {
    getState(): CursorState;
    setState(state: CursorState): void;
    moveBy(vector: Vector3): void;
    resetToDefaultState(): void;
    show(): void;
    hide(): void;
    position: Vector3;
    faceDirection: number;
    isVisible: boolean;
}
export enum CursorControlMode {
    Keyboard = 0,
    Mouse = 1,
    KeyboardAndMouse = 2,
    Fixed = 3,
}
export class CursorState {
    color: Color;
    controlMode: CursorControlMode;
    targetMode: CursorTargetMode;
    visible: boolean;
    fixedModeDistance: number;
}
export enum CursorTargetMode {
    Block = 0,
    Face = 1,
}
export class Extension {
    protected constructor();
    description: string;
    notes: string;
}
export class ExtensionContext {
    protected constructor();
    player: Player;
    selectionManager: SelectionManager;
    transactionManager: TransactionManager;
    clipboardManager: ClipboardManager;
    cursor: Cursor;
}
export class MinecraftEditor {
    protected constructor();
    registerExtension_Internal(
        extensionName: string,
        activationFunction: (context: ExtensionContext) => void,
        shutdownFunction: (context: ExtensionContext) => void
    ): Extension;
}
export class Selection {
    protected constructor();
    clear(): void;
    pushVolume(action: SelectionBlockVolumeAction, volume: BlockVolume): any;
    popVolume(): void;
    copyFrom(selection: Selection): void;
    getBlockPositionIterator(): BlockVolumeIterator;
    moveBy(vector: Vector3): void;
    moveTo(vector: Vector3): void;
    peekLastVolume: BlockVolume;
    boundingBox: BoundingBox;
    isEmpty: boolean;
    visible: boolean;
    fillColor: Color;
    borderColor: Color;
}
export enum SelectionBlockVolumeAction {
    add = 0,
    subtract = 1,
}
export class SelectionManager {
    protected constructor();
    createSelection(): Selection;
    selection: Selection;
}
export class TransactionManager {
    protected constructor();
    undo(): void;
    redo(): void;
    undoSize(): number;
    redoSize(): number;
    trackBlockChangeList(list: Vector3[]): any;
    trackBlockChangeArea(min: Vector3, max: Vector3): void;
    trackBlockChangeSelection(selection: Selection): void;
    commitTrackedChanges(): void;
    discardTrackedChanges(): void;
    openTransaction(transaction: string): void;
    commitOpenTransaction(): void;
    discardOpenTransaction(): void;
}
export const editor: MinecraftEditor;
export const ExtensionOptionalParameters: undefined