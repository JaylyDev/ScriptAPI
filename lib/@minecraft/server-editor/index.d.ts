// Type definition for @minecraft/server-editor 0.3.1
/**
 * Manifest details
 * ```json
 * {
 *      "module_name": "@minecraft/server-editor",
 *      "version": "0.1.0-beta"
 * }
 * ```
 */
import { Events, Player, System, Vector3 } from "@minecraft/server";
import {
    Extension,
    ExtensionContext,
    Selection,
} from "@minecraft/server-editor-bindings";
export * from "@minecraft/server-editor-bindings";

type BedrockEventType = keyof Events;
type BedrockEventHandler = Events[BedrockEventType];

declare class BaseControl {
    private _visible: boolean;
    private _enabled: boolean;
    private _disposed: boolean;
    get visible(): boolean;
    get enabled(): boolean;
    hide(): void;
    show(): void;
    get disposed(): boolean;
    set disposed(value: boolean);
    dispose(): void;
    update(force: boolean): void;
}

interface ToolParams {
    name?: string;
    displayString?: string;
    displayStringLocId?: string;
    icon?: string;
    tooltip?: string;
    tooltipLocId?: string;
}

declare class EventToken {
    constructor(_event: BedrockEventHandler);
    unsubscribe(): void;
}

interface EventSinkImplArgument {
    isActiveTool: boolean;
}
/**
 * Implementation of a simple event sink. Takes a handler with a payload T and provides
 * a mechanism to subscribe from the public interface. Holding a reference to the class
 * provides the mechanism for triggering listeners. Super simple at the moment, can be
 * expanded to support notifications on listeners being added, unsubscribe all, or targeted
 * events if needed.
 *
 * @internal
 */
declare class EventSinkImpl {
    subscribe(handler: (eventArgs: EventSinkImplArgument) => void): EventToken;
    unsubscribe(token: EventToken): void;
    trigger(eventArgs: EventSinkImplArgument): void;
}
/**
 * Centralized host for all events from server to a player client. Provides a structured and type safe way
 * for a consumer to send events since the raw contract between client and server is purely stringified
 * JSON.
 *
 * There must be a client event dispatcher per player.
 *
 * @internal
 */
declare class ClientEventDispatcher {
    constructor(_system: System);
    private _system: System;
    initialize(): Player;
    dispatchEvent(type: any, payload: any, replacer: any): void;
    flush(): void;
}
declare class ModalToolContainer extends BaseControl {
    private _eventDispatcher: ClientEventDispatcher;
    private _actionManager: ActionManagerImpl;
    private _currentTools: ModalTool[];
    private _selectedToolId?: string;
    get id(): "editorUI:toolRail";
    get currentTools(): ModalTool[];
    get selectedOptionId(): string | undefined;
    setSelectedOptionId(value: string, update: boolean): void;
    addTool(prams: ToolParams): ModalTool;
    removeTool(id: string): void;
    private _sendUpdateMessage(): void;
    private _sendDestroyMessage(): void;
}
declare class ContextInputManager extends BaseInputManager {
    constructor(
        eventDispatcher: ClientEventDispatcher,
        inputContext: EditorInputContext
    );
    registerMouseWheelBinding(
        action: EditorInputContext,
        inputMappingId: InputModifier
    ): void;
    registerMouseButtonBinding(
        action: EditorInputContext,
        inputMappingId: InputModifier
    ): void;
    registerMouseDragBinding(
        action: EditorInputContext,
        inputMappingId: InputModifier
    ): void;
    registerKeyBinding(
        action: EditorInputContext,
        button: Action<ActionTypes>,
        modifier: KeyboardKey,
        inputMappingId: InputModifier
    ): void;
    unregisterBindings(): void;
}
/**
 * @beta
 */
declare class ModalTool extends BaseControl {
    constructor(
        _eventDispatcher: ClientEventDispatcher,
        parent: ModalToolContainer,
        params: Menu
    );
    private _eventDispatcher: ClientEventDispatcher;
    onModalToolActivation: EventSinkImpl;
    private _id: string;
    private _parent: ModalToolContainer;
    private _panesBound: PropertyPane[];
    private _modalToolParams: Menu;
    private _inputManager: ContextInputManager;
    get id(): string;
    hide(): void;
    show(): void;
    dispose(): void;
    bindPropertyPane(pane: PropertyPane): void;
    registerMouseButtonBinding(action: Action<ActionTypes>): void;
    registerMouseWheelBinding(action: Action<ActionTypes>): void;
    registerMouseDragBinding(action: Action<ActionTypes>): void;
    registerKeyBinding(
        action: Action<ActionTypes>,
        button: KeyboardKey,
        modifier: InputModifier
    ): void;
}

interface MenuProps {
    name: string;
    displayStringLocId: string;
}

declare class Menu extends BaseControl {
    constructor(props: any, _dispatcher: any, _actionId: any, _parent: any);
    private _dispatcher: ClientEventDispatcher;
    private _actionId: string;
    private _parent;
    private _id: string;
    private _submenu: Menu[];
    private _displayStringLocId: string;
    private _name: string;
    get id(): string;
    get submenu(): Menu[];
    get displayStringLocId(): string;
    get name(): string;
    set name(value: string);
    dispose(): void;
    get disposed(): boolean;
    set disposed(value: boolean);
    addItem(params: MenuProps, action: Action<ActionTypes>): Menu;
    replaceAction(action: Action<ActionTypes>): void;
    addSeparator(): void;
    private _sendUpdateMessage(): void;
    private _sendDestroyMessage(): void;
    private _removeChild(value: Menu): void;
    addSeparator(): void;
}

declare class PropertyItem {
    action: Action<ActionTypes>;
    private _id: string;
    private _paneId: string;
    private _obj: any;
    private _property: any;
    private _typeName: string;
    private _propertyItemOptions: any;
    private _enable: boolean;
    set enable(value: boolean);
    private _visible: boolean;
    set visible(value: boolean);
    private _value: any;
    sendPropertyUpdate(): void;
    dispose(): void;
}

declare class PropertyPane extends BaseControl {
    onPropertyPaneVisibilityUpdated: EventSinkImpl;
    setPropertyItemValue(propertyName: string, newValue: any): void;
    private _id: string;
    private _parentPaneId: string;
    private _propertyItems: PropertyItem[];
    private _titleStringId: string;
    set titleStringId(value: string);
    private _titleAltText: string;
    set titleAltText(value: string);
    private _width: number;
    findProperty(propertyName: string): PropertyItem;
    findPropertyRecursive(propertyName: string): PropertyItem;
    createPropertyPane(options: PaneOptions): PropertyItem;
    removePropertyPane(paneToRemove: PropertyItem): boolean;
    hide(): void;
    show(): void;
    addString(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
    addBool(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
    addNumber(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
    addBlockPicker(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
    addButtonAndBindAction(
        action: Record<string, any>,
        options: PaneOptions
    ): PropertyItem;
    addDropdown(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
    addDivider(): PropertyItem;
    addVec3(
        obj: Record<string, any>,
        property: string,
        options: PaneOptions
    ): PropertyItem;
}

declare class StatusBarItem extends BaseControl {
    private _id: string;
    private _text: string;
    set text(value: string);
}

interface MouseRay {
    direction: Vector3;
    location: Vector3;
    cursorBlockLocation: Vector3;
    rayHit: boolean;
}

interface MouseProps {
    mouseAction: MouseActionType;
    modifiers: { shift: boolean; ctrl: boolean; alt: boolean };
    inputType: MouseInputType;
}

interface ActionPayload {
    [ActionTypes.NoArgsAction]: () => void;
    [ActionTypes.MouseRayCastAction]: (
        mouseRay: MouseRay,
        mouseProps: MouseProps
    ) => void;
}

interface CreateActionOptions<T extends keyof ActionPayload> {
    actionType: T;
    onExecute: ActionPayload[T];
}

interface Action<T extends keyof ActionPayload> {
    id: string;
    actionType: T;
    onExecute: ActionPayload[T];
}
/**
 * @internal
 */
declare class ClientEventListener { }
/**
 * Implementation of the ActionManager
 */
declare class ActionManagerImpl {
    eventDispatcher: ClientEventDispatcher;
    eventListener: ClientEventListener;
    player: Player;
    createAction<T extends keyof ActionPayload>(
        options: CreateActionOptions<T>
    ): Action<T>;
    teardown(): void;
}
/**
 * @beta
 */
declare class BaseInputManager {
    eventDispatcher: ClientEventDispatcher;
    unregisterAllBindings(): void;
}

export class GlobalInputManager extends BaseInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: Action<ActionTypes>,
        button: KeyboardKey,
        modifier: InputModifier
    ): void;
}

declare class BuiltInUIManagerImpl {
    updateUISettingsPanelVisibility(visibility: boolean): void;
    updateWelcomePanelVisibility(visibility: boolean): void;
    navigateToPauseScreen(): void;
    navigateToDocumentation(): void;
    navigateToFeedback(): void;
}

interface DropdownItem {
    displayAltText: string;
    displayStringId?: string;
    value: any;
}

interface PaneOptions {
    titleStringId?: string;
    titleAltText: string;
    width?: number;
    min?: number;
    max?: number;
    allowedBlocks?: string[];
    dropdownItems?: DropdownItem[];
    pane?: PropertyPane;
    maxX?: number;
    maxY?: number;
    maxZ?: number;
    minX?: number;
    minY?: number;
    minZ?: number;
    enable?: boolean;
    showSlider?: boolean;
    variant?: string;
    onChange?: (_obj: any, _property: string, _oldValue: any, _newValue: any) => void;
}

/**
 * Represents a UI session for a given player
 * @internal
 */
declare class PlayerUISession {
    private _builtInUIManager: BuiltInUIManagerImpl;
    private _actionManager: ActionManagerImpl;
    private _modalToolContainer: ModalToolContainer;
    private _clientUXListenerUnregister: Function;
    private _extensionContext: ExtensionContext;
    private _clientEventDispatcher: ClientEventDispatcher;
    private _propertyPanes: Map<any, any>;
    private _eventSubscriptionCache: BedrockEventSubscriptionCache;
    private _inputManager: GlobalInputManager;
    private createPropertyPaneInternal(
        options: PaneOptions,
        parentPaneId: string
    ): PropertyPane;
    scratchStorage: Record<string, any>;
    teardown(): void;
    get toolRail(): ModalToolContainer;
    createMenu(props: MenuProps): Menu;
    createPropertyPane(options: PaneOptions): PropertyPane;
    createStatusBarItem(alignment: any, size: any): StatusBarItem;
    get actionManager(): ActionManagerImpl;
    get inputManager(): ContextInputManager;
    get extensionContext(): ExtensionContext;
    get builtInUIManager(): BuiltInUIManagerImpl;
    get eventSubscriptionCache(): BedrockEventSubscriptionCache;
}

export enum ActionTypes {
    NoArgsAction = "NoArgsAction",
    MouseRayCastAction = "MouseRayCastAction",
}

export class BedrockEventSubscriptionCache {
    constructor(mEvents: Events);
    subscribeToBedrockEvent(event: string, ...params: any[]): Function;
    teardown(): void;
}

export enum EDITOR_PANE_PROPERTY_ITEM_TYPE {
    Number = "editorUI:Number",
    String = "editorUI:String",
    Boolean = "editorUI:Boolean",
    BlockPicker = "editorUI:BlockPicker",
    Dropdown = "editorUI:Dropdown",
    Divider = "editorUI:Divider",
    SubPane = "editorUI:SubPane",
    Action = "editorUI:Action",
    Vec3 = "editorUI:Vec3",
}

export enum EditorInputContext {
    GlobalEditor = "global.editor",
    GlobalToolMode = "global.toolMode",
    Viewport = "local.toolMode.viewport",
}

export enum EditorServerEventType {
    ServerActionEvents = "Editor::ServerActionEvents",
    ServerInputBindingEvents = "Editor::ServerInputBindingEvents",
    ServerUXEvents = "Editor::ServerUXEvents",
}

export enum EditorStatusBarAlignment {
    Right = 0,
    Left = 1,
}

export enum InputModifier {
    Unused = 0,
    None = 1,
    Alt = 2,
    Control = 4,
    Shift = 8,
    Any = 15,
}
export enum KeyInputType {
    Press = 1,
    Release = 2,
}

export enum KeyboardKey {
    BACKSPACE = 8,
    TAB = 9,
    ENTER = 13,
    SHIFT = 16,
    CTRL = 17,
    ALT = 18,
    CAPS_LOCK = 20,
    ESCAPE = 27,
    SPACE = 32,
    PAGE_UP = 33,
    PAGE_DOWN = 34,
    END = 35,
    HOME = 36,
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    PRINT_SCREEN = 44,
    INSERT = 45,
    DELETE = 46,
    KEY_0 = 48,
    KEY_1 = 49,
    KEY_2 = 50,
    KEY_3 = 51,
    KEY_4 = 52,
    KEY_5 = 53,
    KEY_6 = 54,
    KEY_7 = 55,
    KEY_8 = 56,
    KEY_9 = 57,
    KEY_A = 65,
    KEY_B = 66,
    KEY_C = 67,
    KEY_D = 68,
    KEY_E = 69,
    KEY_F = 70,
    KEY_G = 71,
    KEY_H = 72,
    KEY_I = 73,
    KEY_J = 74,
    KEY_K = 75,
    KEY_L = 76,
    KEY_M = 77,
    KEY_N = 78,
    KEY_O = 79,
    KEY_P = 80,
    KEY_Q = 81,
    KEY_R = 82,
    KEY_S = 83,
    KEY_T = 84,
    KEY_U = 85,
    KEY_V = 86,
    KEY_W = 87,
    KEY_X = 88,
    KEY_Y = 89,
    KEY_Z = 90,
    NUMPAD_0 = 96,
    NUMPAD_1 = 97,
    NUMPAD_2 = 98,
    NUMPAD_3 = 99,
    NUMPAD_4 = 100,
    NUMPAD_5 = 101,
    NUMPAD_6 = 102,
    NUMPAD_7 = 103,
    NUMPAD_8 = 104,
    NUMPAD_9 = 105,
    NUMPAD_MULTIPLY = 106,
    NUMPAD_ADD = 107,
    NUMPAD_SEPARATOR = 108,
    NUMPAD_SUBTRACT = 109,
    NUMPAD_DECIMAL = 110,
    NUMPAD_DIVIDE = 111,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,
    COMMA = 188,
    PERIOD = 190,
    SLASH = 191,
    BACK_QUOTE = 192,
    BRACKET_OPEN = 219,
    BACK_SLASH = 220,
    BRACKET_CLOSE = 221,
    QUOTE = 222,
}

export enum MouseActionCategory {
    Button = 1,
    Wheel = 2,
    Drag = 3,
}

export enum MouseActionType {
    LeftButton = 1,
    MiddleButton = 2,
    RightButton = 3,
    Wheel = 4,
}

export enum MouseInputType {
    ButtonDown = 1,
    ButtonUp = 2,
    WheelIn = 3,
    WheelOut = 4,
    DragStart = 5,
    Drag = 6,
    DragEnd = 7,
}

export enum ServerUXEventType {
    UpdatePropertyPane = 1,
    DestroyPropertyPane = 2,
    UpdateMenu = 3,
    DestroyMenu = 4,
    UpdateStatusBarItem = 5,
    DestroyStatusBarItem = 6,
    UpdateModalToolOption = 7,
    DestroyModalToolOption = 8,
    UpdateModalToolContainer = 9,
    DestroyModalToolContainer = 10,
    BindActionToControl = 11,
    RemoveActionBindingFromControl = 12,
    UpdatePropertyItem = 13,
    DestroyPropertyItem = 14,
    OnNavigateFromEditor = 15,
    UpdateControlDemoVisibility_deprecated = 16,
    UpdateWelcomePanelVisibility_deprecated = 17,
    UpdateClientPanelVisibility = 18,
}

export function createPaneBindingObject<T>(
    propertyPane: PropertyPane,
    target: T
): T;

export function executeLargeOperation(
    selection: Selection,
    operation: (blockLocation: Vector3) => void
): Promise<void>;

export function getLocalizationId(locId: string): string;

export function registerEditorExtension(
    extensionName: string,
    activationFunction?: (uiSession: PlayerUISession) => void,
    shutdownFunction?: (uiSession: PlayerUISession) => void
): Extension;
