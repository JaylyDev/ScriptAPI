// Type definition for @minecraft/server-editor-bindings 0.3
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
    readFromSelection;
    readFromWorld;
    writeToWorld;
    getPredictedWriteAsSelection;
    clear;
    size;
    isEmpty;
}

export class ClipboardManager {
    protected constructor();
    create(): any;

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
    anchor;
    offset;
    mirror;
    rotation;
}

export class Cursor {
    getState(): any;

    setState(): any;

    moveBy(): any;

    resetToDefaultState(): any;

    show(): any;

    hide(): any;

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
    registerExtension(
        extensionName: string,
        activationFunction: (context: ExtensionContext) => void,
        shutdownFunction: (context: ExtensionContext) => void
    ): Extension;
}
export class Selection {
    protected constructor();
    clear(): any;
    pushVolume(): any;
    popVolume(): any;
    copyFrom(): any;
    getBlockPositionIterator(): any;
    moveBy(): any;
    moveTo(): any;
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
    createSelection(): any;
    selection: Selection;
}

export class TransactionManager {
    protected constructor();
    undo(): any;
    redo(): any;
    undoSize(): any;
    redoSize(): any;
    trackBlockChangeList(): any;
    trackBlockChangeArea(): any;
    trackBlockChangeSelection(): any;
    commitTrackedChanges(): any;
    discardTrackedChanges(): any;
    openTransaction(): any;
    commitOpenTransaction(): any;
    discardOpenTransaction(): any;
}

export const editor: MinecraftEditor;
