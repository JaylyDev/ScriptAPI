// Type definition for @minecraft/server-editor 0.3
/**
 * Manifest details
 * ```json
 * {
 *      "module_name": "@minecraft/server-editor",
 *      "version": "0.1.0-beta"
 * }
 * ```
 */
import { Events, Vector3 } from "@minecraft/server";
import { Extension, ExtensionContext, Selection } from '@minecraft/server-editor-bindings';
export * from "@minecraft/server-editor-bindings";

declare class BaseControl {
    protected constructor();
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
    displayString: string;
    displayStringLocId: string;
    icon: string;
    tooltip: string;
    tooltipLocId: string;
}

declare class EventToken {
    unsubscribe(): void;
}

declare class EventSinkImpl {
    subscribe(
        handler: (eventArgs: { isActiveTool: boolean }) => void
    ): EventToken;
    unsubscribe(token: EventToken): void;
    trigger(eventArgs: { isActiveTool: boolean }): void;
}

declare class ModalToolContainer extends BaseControl {
    get id(): "editorUI:toolRail";
    get currentTools(): ModalTool[];
    get selectedOptionId(): string | undefined;
    setSelectedOptionId(value: string, update: boolean): void;
    addTool(prams: ToolParams): ModalTool;
    removeTool(id: string): void;
    onModalToolActivation: EventSinkImpl;
}

declare class ModalTool extends BaseControl {
    get id(): string;
    hide(): void;
    show(): void;
    dispose(): void;
    bindPropertyPane(pane: PropertyPane): void;
    registerMouseButtonBinding(action: Action): void;
    registerMouseWheelBinding(action: Action): void;
    registerMouseDragBinding(action: Action): void;
    registerKeyBinding(
        action: Action,
        button: KeyboardKey,
        modifier: InputModifier
    ): void;
}

interface MenuProps {
    name: string;
    displayStringLocId: string;
}

declare class Menu extends BaseControl {
    get id(): string;
    get submenu(): Menu[];
    get displayStringLocId(): string;
    get name(): string;
    set name(value: string);
    dispose(): void;
    get disposed(): boolean;
    set disposed(value: boolean);
    addItem(params: MenuProps, action: Action): Menu;
    replaceAction(action: any): void;
    addSeparator(): void;
}

declare class PropertyItem {
    action: Action;
    get id(): string;
    get paneId(): string;
    get obj(): any;
    get property(): any;
    get typeName(): string;
    get propertyItemOptions(): any;
    get enable(): boolean;
    set enable(value: boolean);
    get visible(): boolean;
    set visible(value: boolean);
    get value(): any;
    sendPropertyUpdate(): void;
    dispose(): void;
}

declare class PropertyPane extends BaseControl {
    onPropertyPaneVisibilityUpdated: EventSinkImpl;
    setPropertyItemValue(propertyName: string, newValue: any): void;
    get id(): string;
    get parentPaneId(): string;
    get propertyItems(): PropertyItem[];
    get titleStringId(): string;
    set titleStringId(value: string);
    get titleAltText(): string;
    set titleAltText(value: string);
    get width(): number;
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
    get id(): string;
    get text(): string;
    set text(value: string);
}

type ActionCallback = (mouseRay: any, mouseProps: any) => void;

interface CreateActionOptions {
    actionType: ActionTypes;
    onExecute: ActionCallback;
}

interface Action {
    id: string;
    actionType: ActionTypes;
    onExecute: ActionCallback;
}

declare class ActionManagerImpl {
    createAction(options: CreateActionOptions): Action;
    teardown(): void;
}

declare class BaseInputManager {
    unregisterAllBindings(): void;
}

export class GlobalInputManager extends BaseInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: Action,
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

interface PaneOptions {
    titleStringId: string;
    titleAltText: string;
    width: number;
}

declare class PlayerUISession<STORAGE> {
    protected constructor();
    scratchStorage: STORAGE;
    teardown(): void;
    get toolRail(): ModalToolContainer;
    createMenu(props: MenuProps): Menu;
    createPropertyPane(options: PaneOptions): PropertyPane;
    createStatusBarItem(
        alignment: EditorStatusBarAlignment,
        size: number
    ): StatusBarItem;
    get actionManager(): ActionManagerImpl;
    get inputManager(): GlobalInputManager;
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

export function registerEditorExtension<STORAGE>(
    extensionName: string,
    activationFunction?: (uiSession: PlayerUISession<STORAGE>) => void,
    shutdownFunction?: (uiSession: PlayerUISession<STORAGE>) => void
): Extension;
