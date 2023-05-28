/**
 * Type definition for @minecraft/server-editor 0.3
 *
 * Manifest details
 * ```json
 * {
 *      "module_name": "@minecraft/server-editor",
 *      "version": "0.1.0-beta"
 * }
 * ```
 */
declare module "@minecraft/server-editor" {
    import { AfterEvents, Player, System, Vector3 } from "@minecraft/server";
    import { Extension, ExtensionContext, Selection, ExtensionOptionalParameters, Logger } from "@minecraft/server-editor-bindings";
    export * from "@minecraft/server-editor-bindings";
    class BaseControl {
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
    export interface ToolParams {
        name?: string;
        displayString?: string;
        displayStringLocId?: string;
        icon?: string;
        tooltip?: string;
        tooltipLocId?: string;
    }
    class EventToken<H extends keyof AfterEvents = keyof AfterEvents, K extends AfterEvents[H] = AfterEvents[H]> {
        constructor(_event: K);
        unsubscribe(): void;
    }
    export interface EventSinkImplArgument {
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
    class EventSinkImpl {
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
    class ClientEventDispatcher {
        constructor(_system: System, _logger: Logger);
        private _system: System;
        private _logger: Logger;
        initialize(): Player;
        /**
         * Dispatches and event of type T with the appropriate payload. See ServerEventPayloadMapping for the
         * correct mapping of payload to server event type
         */
        dispatchEvent(type: EditorServerEventType, payload: any, replacer?: (this: any, key: string, value: any) => any | (number | string)[]): void;
        /**
         * Fires off all payloads in event queue and removes any tick registration
         */
        flush(): void;
    }
    class ModalToolContainer extends BaseControl {
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
    class ContextInputManager extends BaseInputManager {
        constructor(eventDispatcher: ClientEventDispatcher, inputContext: EditorInputContext);
        registerMouseWheelBinding(action: EditorInputContext, inputMappingId: InputModifier): void;
        registerMouseButtonBinding(action: EditorInputContext, inputMappingId: InputModifier): void;
        registerMouseDragBinding(action: EditorInputContext, inputMappingId: InputModifier): void;
        registerKeyBinding(action: EditorInputContext, button: Action<ActionTypes>, modifier: KeyboardKey, inputMappingId: InputModifier): void;
        unregisterBindings(): void;
    }
    /**
     * @beta
     */
    class ModalTool extends BaseControl {
        constructor(_eventDispatcher: ClientEventDispatcher, parent: ModalToolContainer, params: Menu);
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
        registerKeyBinding(action: Action<ActionTypes>, button: KeyboardKey, modifier: InputModifier): void;
        unregisterInputBindings(): void;
    }
    export interface MenuProps {
        name?: string;
        displayStringLocId?: string;
    }
    class Menu extends BaseControl {
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
        addItem(params: MenuProps, action?: Action<ActionTypes>): Menu;
        replaceAction(action: Action<ActionTypes>): void;
        addSeparator(): void;
        private _sendUpdateMessage(): void;
        private _sendDestroyMessage(): void;
        private _removeChild(value: Menu): void;
    }
    class PropertyItem {
        action: Action<ActionTypes>;
        private _id: string;
        private _paneId: string;
        private _obj: object;
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
    interface PropertyUXDispatcher {
        dispatchUXEvent(payload: any): void;
    }
    class PropertyPane extends BaseControl {
        private onPropertyPaneVisibilityUpdated: EventSinkImpl;
        private setPropertyItemValue(propertyName: string, newValue: any): void;
        private _id: string;
        private _parentPaneId: string;
        private _propertyItems: PropertyItem[];
        private _titleStringId: string;
        set titleStringId(value: string);
        private _titleAltText: string;
        set titleAltText(value: string);
        private _width: number;
        private _propertyUXDispatcher: PropertyUXDispatcher;
        findProperty(propertyName: string): PropertyItem;
        findPropertyRecursive(propertyName: string): PropertyItem;
        createPropertyPane(options: PaneOptions): PropertyPane;
        removePropertyPane(paneToRemove: PropertyPane): boolean;
        hide(): void;
        show(): void;
        addString(obj: Record<string, any>, property: string, options: PaneOptions): PropertyItem;
        addBool(obj: Record<string, any>, property: string, options: BoolPaneOptions): PropertyItem;
        addNumber(obj: Record<string, any>, property: string, options: NumberPaneOptions): PropertyItem;
        addBlockPicker(obj: Record<string, any>, property: string, options: BlockPickerPaneOptions): PropertyItem;
        addButton(action: Record<string, any>, options: ButtonPaneOptions): PropertyItem;
        addDropdown<T>(obj: Record<string, any>, property: string, options: DropdownPaneOptions<T>): PropertyItem;
        addDivider(): PropertyItem;
        addVec3(obj: Record<string, any>, property: string, options: Vec3PaneOptions): PropertyItem;
    }
    class StatusBarItem extends BaseControl {
        private _id: string;
        private _text: string;
        set text(value: string);
    }
    export interface MouseRay {
        direction: Vector3;
        location: Vector3;
        cursorBlockLocation: Vector3;
        rayHit: boolean;
    }
    export interface MouseProps {
        mouseAction: MouseActionType;
        modifiers: {
            shift: boolean;
            ctrl: boolean;
            alt: boolean;
        };
        inputType: MouseInputType;
    }
    export interface ActionPayload {
        [ActionTypes.NoArgsAction]: () => void;
        [ActionTypes.MouseRayCastAction]: (mouseRay: MouseRay, mouseProps: MouseProps) => void;
    }
    export interface CreateActionOptions<T extends keyof ActionPayload> {
        actionType: T;
        onExecute: ActionPayload[T];
    }
    export interface Action<T extends keyof ActionPayload> {
        id: string;
        actionType: T;
        onExecute: ActionPayload[T];
    }
    /**
     * @internal
     */
    class ClientEventListener {
    }
    /**
     * Implementation of the ActionManager
     */
    class ActionManagerImpl {
        eventDispatcher: ClientEventDispatcher;
        eventListener: ClientEventListener;
        player: Player;
        createAction<T extends keyof ActionPayload>(options: CreateActionOptions<T>): Action<T>;
        teardown(): void;
    }
    /**
     * @beta
     */
    class BaseInputManager {
        eventDispatcher: ClientEventDispatcher;
        unregisterAllBindings(): void;
    }
    /**
     * @beta
     */
    export class GlobalInputManager extends BaseInputManager {
        registerKeyBinding(inputContextId: EditorInputContext, action: Action<ActionTypes>, button: KeyboardKey, modifier: InputModifier): void;
    }
    class BuiltInUIManagerImpl {
        /**
         * Updates the visibility of the log panel
         */
        updateLogPanelVisibility(visibility: boolean): void;
        /**
         * Updates the visibility of the control demo
         */
        updateUISettingsPanelVisibility(visibility: boolean): void;
        /**
         * Updates the visibility of the welcome panel
         */
        updateWelcomePanelVisibility(visibility: boolean): void;
        /**
         * Navigates to the pause screen
         */
        navigateToPauseScreen(): void;
        /**
         * Navigates to the documentation site
         */
        navigateToDocumentation(): void;
        /**
         * Navigates to the feedback site
         */
        navigateToFeedback(): void;
    }
    export interface DropdownItem<T> {
        displayAltText: string;
        displayStringId?: string;
        value: T;
    }
    export interface PaneOptions {
        titleStringId?: string;
        titleAltText?: string;
        enable?: boolean;
        visible?: boolean;
        width?: number;
    }
    export interface BoolPaneOptions extends PaneOptions {
        onChange?: (_obj: object, _property: string, _oldValue: boolean, _newValue: boolean) => void;
    }
    export interface BlockPickerPaneOptions extends PaneOptions {
        allowedBlocks?: string[];
    }
    export interface ButtonPaneOptions extends PaneOptions {
        variant?: string;
    }
    export interface DropdownPaneOptions<T> extends PaneOptions {
        onChange?: (_obj: object, _property: string, _oldValue: T, _newValue: T) => void;
        dropdownItems: DropdownItem<T>[];
    }
    export interface NumberPaneOptions extends PaneOptions {
        min?: number;
        max?: number;
        showSlider?: boolean;
        onChange?: (_obj: object, _property: string, _oldValue: number, _newValue: number) => void;
    }
    export interface Vec3PaneOptions extends PaneOptions {
        minX: number;
        minY: number;
        minZ: number;
        maxX?: number;
        maxY?: number;
        maxZ?: number;
        onChange?: (_obj: object, _property: string, _oldValue: Vector3, _newValue: Vector3) => void;
    }
    /**
     * Represents a UI session for a given player
     * @internal
     */
    class PlayerUISession {
        private _builtInUIManager: BuiltInUIManagerImpl;
        private _actionManager: ActionManagerImpl;
        private _modalToolContainer: ModalToolContainer;
        private _clientUXListenerUnregister(): void;
        private _extensionContext: ExtensionContext;
        private _clientEventDispatcher: ClientEventDispatcher;
        private _propertyPanes: Map<string, PropertyPane>;
        private _eventSubscriptionCache: BedrockEventSubscriptionCache;
        private _inputManager: GlobalInputManager;
        private _logger: Logger;
        private createPropertyPaneInternal(options: PaneOptions, parentPaneId: string): PropertyPane;
        scratchStorage?: Record<string, any>;
        teardown(): void;
        get toolRail(): ModalToolContainer;
        createMenu(props: MenuProps): Menu;
        createPropertyPane(options: PaneOptions): PropertyPane;
        createStatusBarItem(alignment: any, size: any): StatusBarItem;
        get actionManager(): ActionManagerImpl;
        get inputManager(): ContextInputManager;
        get log(): Logger;
        get extensionContext(): ExtensionContext;
        get builtInUIManager(): BuiltInUIManagerImpl;
        get eventSubscriptionCache(): BedrockEventSubscriptionCache;
    }
    /**
     * The types of actions that are supported. This type corresponds to the expected arguments
     * passed by the onExecute handler of an action.
     * @beta
     */
    export enum ActionTypes {
        NoArgsAction = "NoArgsAction",
        MouseRayCastAction = "MouseRayCastAction"
    }
    /**
     * A cache for bedrock event subscriptions. Stores off a subscription by event key, and upon
     * teardown unregisters all subscriptions.
     * @beta
     */
    export class BedrockEventSubscriptionCache {
        constructor(mEvents: AfterEvents);
        /**
         * Subcribes to a bedrock event using the key of the desired event. When subscribed, the event handler
         * is both returned, but also cached internally for unsubscription. This means the caller of the subscription
         * does not need to worry about unsubscription since the cache will automatically unsubscribe handlers
         * on overall teardown.
         *
         * @param event - The event on the bedrock APIs to which to subscribe
         * @param params - The parameters to the subscription method for the event. Auto complete will display this for you
         */
        subscribeToBedrockEvent<T extends keyof AfterEvents>(event: T, ...params: Parameters<AfterEvents[T]["subscribe"]>): ReturnType<AfterEvents[T]["subscribe"]>;
        teardown(): void;
        private mEvents: AfterEvents;
        private subscribedEvents: object;
    }
    /**
     * Type of item that can be added to the property pane
     * @beta
     */
    export enum EDITOR_PANE_PROPERTY_ITEM_TYPE {
        Number = "editorUI:Number",
        String = "editorUI:String",
        Boolean = "editorUI:Boolean",
        BlockPicker = "editorUI:BlockPicker",
        Dropdown = "editorUI:Dropdown",
        Divider = "editorUI:Divider",
        SubPane = "editorUI:SubPane",
        Action = "editorUI:Action",
        Vec3 = "editorUI:Vec3"
    }
    /**
     * @beta Global editor input contexts
     */
    export enum EditorInputContext {
        GlobalEditor = "global.editor",
        GlobalToolMode = "global.toolMode",
        Viewport = "local.toolMode.viewport"
    }
    /**
     * Types of events that may be sent by the server to the client side UX. These events each have their own
     * independent set of payloads in the message that may have a wide set of types of operations. This allows messages to
     * be sent with an EventType and Payload, but with easy type safe deduction of the payload type leveraging
     * discriminated unions and type fields.
     * @internal
     */
    export enum EditorServerEventType {
        ServerActionEvents = "Editor::ServerActionEvents",
        ServerInputBindingEvents = "Editor::ServerInputBindingEvents",
        ServerUXEvents = "Editor::ServerUXEvents"
    }
    /**
     * @beta
     */
    export enum EditorStatusBarAlignment {
        Right = 0,
        Left = 1
    }
    /**
     * Input modifier flags to create chorded bindings
     * @beta
     */
    export enum InputModifier {
        Unused = 0,
        None = 1,
        Alt = 2,
        Control = 4,
        Shift = 8,
        Any = 15
    }
    /**
     * Keyboard Key Actions
     * @beta
     */
    export enum KeyInputType {
        Press = 1,
        Release = 2
    }
    /**
     * Keyboard key - Reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#constants_for_keycode_value
     * @beta
     */
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
        QUOTE = 222
    }
    /**
     * Mouse device action categories
     * @beta
     */
    export enum MouseActionCategory {
        Button = 1,
        Wheel = 2,
        Drag = 3
    }
    /**
     * Detailed mouse device actions
     * @beta
     */
    export enum MouseActionType {
        LeftButton = 1,
        MiddleButton = 2,
        RightButton = 3,
        Wheel = 4
    }
    /**
     * Input event information about mouse actions
     * @beta
     */
    export enum MouseInputType {
        ButtonDown = 1,
        ButtonUp = 2,
        WheelIn = 3,
        WheelOut = 4,
        DragStart = 5,
        Drag = 6,
        DragEnd = 7
    }
    /**
     * The set of events that may be sent by the server side UI pertaining to actions
     * @internal
     */
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
        UpdateClientPanelVisibility = 18
    }
    /**
     * Takes the input object and bind it to the pane.
     * @beta
     */
    export function createPaneBindingObject<T>(propertyPane: PropertyPane, target: T): T;
    /**
     * Executes an operation over a selection via chunks to allow splitting operation over multiple game ticks
     * @param selection - the selection to iterator over
     * @param operation - the operation to apply over each block location
     * @beta
     */
    export function executeLargeOperation(selection: Selection, operation: (blockLocation: Vector3) => void): Promise<void>;
    /**
     * Adds the resource pack editor prefix and returns the full localization ID
     * @beta
     */
    export function getLocalizationId(locId: string): string;
    /**
     * Registers an editor extension into Minecraft. This function calls underlying functionality to register an extension but provides
     * helpful and contextual wrappers for individual client lifetimes. The onActivation function is called whenever a client
     * joins a session, while the shutdown is called when a client leaves. There may be other circumstances in which these are
     * called as well based on client state that is an implementation detail of the system.
     *
     * The generic type parameter exists as a mechanism for provide generic player contextual storage of data on the IPlayerUISession
     * object returned during activation. See IPlayerUISession for more information.
     *
     * @beta
     */
    export function registerEditorExtension(extensionName: string, activationFunction?: (uiSession: PlayerUISession) => void, shutdownFunction?: (uiSession: PlayerUISession) => void, optionalParameters?: ExtensionOptionalParameters): Extension;
    /**
     * Interface for internal PlayerUISession class
     */
    export interface IPlayerUISession extends PlayerUISession {
    }
    /**
     * Interface for internal ModalTool class
     */
    export interface IModalTool extends ModalTool {
    }
    /**
     * Interface for internal PropertyPane class
     */
    export interface IPropertyPane extends PropertyPane {
    }
    /**
     * Interface for internal PropertyItem class
     */
    export interface IPropertyItem extends PropertyItem {
    }
    /**
     * Interface for internal Menu class
     */
    export interface IMenu extends Menu {
    }
}
