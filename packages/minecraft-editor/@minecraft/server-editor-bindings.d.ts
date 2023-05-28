/**
 * Type definition for @minecraft/server-editor-bindings 0.3
 *
 * Manifest details
 * ```json
 * {
 *      "module_name": "@minecraft/server-editor-bindings",
 *      "version": "0.1.0-beta"
 * }
 * ```
 */
declare module '@minecraft/server-editor-bindings' {
    import { BlockLocationIterator, BlockVolume, BoundingBox, Color, CompoundBlockVolumeAction, Player, Vector3, } from '@minecraft/server';
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
        XZ = "XZ"
    }
    export enum ClipboardRotation {
        none = "none",
        Rotate90 = "Rotate90",
        Rotate180 = "Rotate180",
        Rotate270 = "Rotate270"
    }
    export class ClipboardWriteOptions {
        anchor: Vector3;
        offset: Vector3;
        mirror: ClipboardMirrorAxis;
        rotation: ClipboardRotation;
    }
    export interface CursorProperties {
        outlineColor: Color;
        controlMode: CursorControlMode;
        targetMode: CursorTargetMode;
        visible: boolean;
        fixedModeDistance?: number;
    }
    export class Cursor {
        getProperties(): CursorProperties;
        setProperties(properties: CursorProperties): void;
        getPosition(): Vector3;
        moveBy(vector: Vector3): void;
        resetToDefaultState(): void;
        show(): void;
        hide(): void;
        faceDirection: number;
        isVisible: boolean;
    }
    export enum CursorControlMode {
        Keyboard = 0,
        Mouse = 1,
        KeyboardAndMouse = 2,
        Fixed = 3
    }
    export enum CursorTargetMode {
        Block = 0,
        Face = 1
    }
    export class Extension {
        protected constructor();
    }
    export class ExtensionContext {
        protected constructor();
        extensionName: string;
        player: Player;
        selectionManager: SelectionManager;
        transactionManager: TransactionManager;
        clipboardManager: ClipboardManager;
        cursor: Cursor;
    }
    export interface LogProperties {
        tags: string[];
        player: Player;
    }
    export class Logger {
        info(message: string, properties?: LogProperties): void;
        warning(message: string, properties?: LogProperties): void;
        error(message: string, properties?: LogProperties): void;
        debug(message: string, properties?: LogProperties): void;
    }
    export class MinecraftEditor {
        protected constructor();
        registerExtension_Internal(extensionName: string, activationFunction: (context: ExtensionContext) => void, shutdownFunction: (context: ExtensionContext) => void, optionalParameters?: ExtensionOptionalParameters): Extension;
        readonly log: Logger;
    }
    export interface PushVolumeOptions {
        action: CompoundBlockVolumeAction;
        volume: BlockVolume;
    }
    export class Selection {
        protected constructor();
        clear(): void;
        pushVolume(options: PushVolumeOptions): void;
        popVolume(): void;
        copyFrom(selection: Selection): void;
        getBlockLocationIterator(): BlockLocationIterator;
        getBoundingBox(): BoundingBox;
        moveBy(vector: Vector3): void;
        moveTo(vector: Vector3): void;
        peekLastVolume(): PushVolumeOptions | undefined;
        getFillColor(): Color;
        getOutlineColor(): Color;
        setFillColor(color: Color): void;
        setOutlineColor(color: Color): void;
        isEmpty: boolean;
        visible: boolean;
    }
    export class SelectionManager {
        protected constructor();
        create(): Selection;
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
    export interface ExtensionOptionalParameters {
        description?: string;
        notes?: string;
    }
}
