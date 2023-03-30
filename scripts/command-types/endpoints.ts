import { Block } from "./blocks";
import { Boolean, AllowListAction, CameraShakeActionAdd, CameraShakeType, CameraShakeActionStop, BoolSettingName, DifficultySettingName, Difficulty, MaskMode, CloneMode, MaskModeFiltered, DamageCause, DamageOriginActor, DialogueOpenAction, DialogueChangeAction, ClearEffects, Effect, Enchant, EventEntityAction, EntityEvents, ExecuteModeDetect, Option_As, ExecuteChainedOption_0, Option_At, Option_In, Dimension, Option_Positioned, Option_Rotated, Option_Facing, Option_Entity, ActorLocation, Option_Align, Option_Anchored, Option_If_Unless, Option_Condition_Block, Option_Condition_Blocks, BlocksScanMode, Option_Condition_Entity, Option_Condition_Score, ScoreboardObjectives, ScoreRangeMode, Option_Run, Replace, Add, Delete, GameMode, BoolGameRule, IntGameRule, CommandName, Structure, LocateSubcommandStructure, LocateSubcommandBiome, Biome, TargetSpawn, SourceLoot, SourceKill, TargetGive, TargetInsert, TargetReplace, TargetEntity, EntityEquipmentSlot, TargetBlock, BlockEquipmentSlot, MobEvent, MusicQueueAction, MusicRepeatMode, MusicPlayAction, MusicStopAction, MusicVolumeAction, PermissionsAction, ReplaceItemBlock, ReplaceItemEntity, ReplaceMode, RideModeStart, TeleportRules, FillType, RideModeStop, RideModeEvict, RideModeSummonRider, EntityType, RideModeSummonRide, RideRules, SaveMode, ScheduleActionOnAreaLoaded, RequestAction, CircleArea, TickingArea, ScoreboardObjectivesCategory, ScoreboardAddAction, ScoreboardCriteria, ScoreboardRemoveAction, ScoreboardListAction, ScoreboardSetDisplayAction, ScoreboardDisplaySlotSortable, ScoreboardSortOrder, ScoreboardDisplaySlotNonSortable, ScoreboardPlayersCategory, ScoreboardResetAction, ScoreboardTestAction, ScoreboardRandomAction, ScoreboardPlayersNumAction, ScoreboardOperationAction, ScriptDebugModeProfiler, ScriptProfilerStart, ScriptProfilerStop, ScriptDebugModeWatchdog, ScriptWatchdogDumpMemory, SetBlockMode, StructureSaveAction, StructureSaveMode, StructureDeleteAction, StructureLoadAction, Rotation, Mirror, StructureAnimationMode, TagChangeAction, TagValues, TagListAction, TeleportFacing, TestForBlocksMode, TickingAreaModeAdd, AddTickingAreaType, TickingAreaModeRemove, TickingAreaModeRemoveAll, TickingAreaModeList, AllDimensions, TickingAreaModePreload, TimeModeAdd, TimeModeSet, TimeSpec, TimeModeQuery, TimeQuery, TitleClear, TitleReset, TitleSet, TitleTimes, TitleRawClear, TitleRawReset, TitleRawSet, TitleRawTimes, WeatherType, WeatherQuery } from "./enums";
import { Item, Tool } from "./items";
import { ID, SELECTION, VAL, INT, POSITION, BLOCK_STATE_ARRAY, POSITION_FLOAT, SLASHCOMMAND, RVAL, COMPAREOPERATOR, FULLINTEGERRANGE, PATHCOMMAND, JSON_OBJECT, MESSAGE_ROOT, WILDCARDSELECTION, WILDCARDINT, OPERATOR, RAWTEXT, Postfix_l } from "./types";

export type CommandEndpoints =
  | `allowlist ${AllowListAction} ${ID}`
  | `camerashake ${CameraShakeActionAdd} ${SELECTION} ${VAL}`
  | `camerashake ${CameraShakeActionAdd} ${SELECTION} ${VAL}`
  | `camerashake ${CameraShakeActionAdd} ${SELECTION} ${CameraShakeType}`
  | `camerashake ${CameraShakeActionStop} ${SELECTION}`
  | `changesetting ${BoolSettingName} ${Boolean}`
  | `changesetting ${DifficultySettingName} ${Difficulty}`
  | `changesetting ${DifficultySettingName} ${INT}`
  | `clear ${SELECTION}`
  | `clear ${Item}`
  | `clear ${INT}`
  | `clear ${INT}`
  | `clearspawnpoint ${SELECTION}`
  | `clone ${POSITION} ${POSITION} ${POSITION}`
  | `clone ${POSITION} ${POSITION} ${POSITION} ${MaskMode}`
  | `clone ${POSITION} ${POSITION} ${POSITION} ${CloneMode}`
  // | `clone ${POSITION} ${POSITION} ${POSITION} ${MaskModeFiltered} ${CloneMode} ${Block} ${INT}`
  // | `clone ${POSITION} ${POSITION} ${POSITION} ${MaskModeFiltered} ${CloneMode} ${Block} ${BLOCK_STATE_ARRAY}`
  | `damage ${SELECTION} ${INT} ${DamageCause}`
  | `damage ${SELECTION} ${INT} ${DamageCause} ${DamageOriginActor} ${SELECTION}`
  | `daylock ${Boolean}`
  | `deop ${SELECTION}`
  | `dialogue ${DialogueOpenAction} ${SELECTION} ${SELECTION} ${ID}`
  | `dialogue ${DialogueChangeAction} ${SELECTION} ${ID} ${SELECTION}`
  | `difficulty ${Difficulty}`
  | `difficulty ${INT}`
  | `effect ${SELECTION} ${ClearEffects}`
  | `effect ${SELECTION} ${Effect} ${INT}`
  | `effect ${SELECTION} ${Effect} ${INT}`
  | `effect ${SELECTION} ${Effect} ${Boolean}`
  | `enchant ${SELECTION} ${Enchant} ${INT}`
  | `enchant ${SELECTION} ${INT} ${INT}`
  | `event ${EventEntityAction} ${SELECTION} ${EntityEvents}`
  | `execute ${SELECTION} ${POSITION_FLOAT} ${SLASHCOMMAND}`
  | `execute ${SELECTION} ${POSITION_FLOAT} ${ExecuteModeDetect} ${POSITION} ${Block} ${INT} ${SLASHCOMMAND}`
  | `execute ${Option_As} ${SELECTION} ${ExecuteChainedOption_0}`
  | `execute ${Option_At} ${SELECTION} ${ExecuteChainedOption_0}`
  | `execute ${Option_In} ${Dimension} ${ExecuteChainedOption_0}`
  | `execute ${Option_Positioned} ${POSITION_FLOAT} ${ExecuteChainedOption_0}`
  | `execute ${Option_Positioned} ${Option_As} ${SELECTION} ${ExecuteChainedOption_0}`
  | `execute ${Option_Rotated} ${RVAL} ${RVAL} ${ExecuteChainedOption_0}`
  | `execute ${Option_Rotated} ${Option_As} ${SELECTION} ${ExecuteChainedOption_0}`
  | `execute ${Option_Facing} ${POSITION_FLOAT} ${ExecuteChainedOption_0}`
  | `execute ${Option_Facing} ${Option_Entity} ${SELECTION} ${ActorLocation} ${ExecuteChainedOption_0}`
  | `execute ${Option_Align} ${ID} ${ExecuteChainedOption_0}`
  | `execute ${Option_Anchored} ${ActorLocation} ${ExecuteChainedOption_0}`
  // | `execute ${Option_If_Unless} ${Option_Condition_Block} ${POSITION} ${Block} ${ExecuteChainedOption_0}`
  // | `execute ${Option_If_Unless} ${Option_Condition_Block} ${POSITION} ${Block} ${BLOCK_STATE_ARRAY} ${ExecuteChainedOption_0}`
  // | `execute ${Option_If_Unless} ${Option_Condition_Block} ${POSITION} ${Block} ${INT} ${ExecuteChainedOption_0}`
  | `execute ${Option_If_Unless} ${Option_Condition_Blocks} ${POSITION} ${POSITION} ${POSITION} ${BlocksScanMode} ${ExecuteChainedOption_0}`
  | `execute ${Option_If_Unless} ${Option_Condition_Entity} ${SELECTION} ${ExecuteChainedOption_0}`
  | `execute ${Option_If_Unless} ${Option_Condition_Score} ${SELECTION} ${ScoreboardObjectives} ${COMPAREOPERATOR} ${SELECTION} ${ScoreboardObjectives} ${ExecuteChainedOption_0}`
  | `execute ${Option_If_Unless} ${Option_Condition_Score} ${SELECTION} ${ScoreboardObjectives} ${ScoreRangeMode} ${FULLINTEGERRANGE} ${ExecuteChainedOption_0}`
  | `execute ${Option_Run} ${SLASHCOMMAND}`
  | `fill ${POSITION} ${POSITION} ${Block} ${INT}`
  // | `fill ${POSITION} ${POSITION} ${Block} ${FillMode}`
  // | `fill ${POSITION} ${POSITION} ${Block} ${INT} ${Replace} ${Block}`
  | `fill ${POSITION} ${POSITION} ${Block} ${INT} ${Replace} ${INT}`
  | `fill ${POSITION} ${POSITION} ${Block} ${BLOCK_STATE_ARRAY}`
  // | `fill ${POSITION} ${POSITION} ${Block} ${FillMode}`
  // | `fill ${POSITION} ${POSITION} ${Block} ${BLOCK_STATE_ARRAY} ${Replace} ${Block}`
  | `fill ${POSITION} ${POSITION} ${Block} ${BLOCK_STATE_ARRAY} ${Replace} ${BLOCK_STATE_ARRAY}`
  | `fog ${SELECTION} ${Add} ${ID} ${ID}`
  | `fog ${SELECTION} ${Delete} ${ID}`
  | `function ${PATHCOMMAND}`
  | `gamemode ${GameMode} ${SELECTION}`
  | `gamemode ${INT} ${SELECTION}`
  | `gamerule ${BoolGameRule} ${Boolean}`
  | `gamerule ${IntGameRule} ${INT}`
  | `give ${SELECTION} ${Item} ${INT}`
  | `give ${SELECTION} ${Item} ${INT}`
  | `give ${SELECTION} ${Item} ${JSON_OBJECT}`
  | `help ${CommandName}`
  | `help ${INT}`
  | `kick ${SELECTION} ${MESSAGE_ROOT}`
  | `kill ${SELECTION}`
  | `locate ${Structure} ${Boolean}`
  | `locate ${LocateSubcommandStructure} ${Structure} ${Boolean}`
  | `locate ${LocateSubcommandBiome} ${Biome}`
  | `loot ${TargetSpawn} ${POSITION_FLOAT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetSpawn} ${POSITION_FLOAT} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetGive} ${SELECTION} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetGive} ${SELECTION} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetInsert} ${POSITION_FLOAT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetInsert} ${POSITION_FLOAT} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetReplace} ${TargetEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${INT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetReplace} ${TargetEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetReplace} ${TargetEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${INT} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetReplace} ${TargetEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetReplace} ${TargetBlock} ${POSITION_FLOAT} ${BlockEquipmentSlot} ${INT} ${INT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetReplace} ${TargetBlock} ${POSITION_FLOAT} ${BlockEquipmentSlot} ${INT} ${SourceLoot} ${ID} ${Tool}`
  | `loot ${TargetReplace} ${TargetBlock} ${POSITION_FLOAT} ${BlockEquipmentSlot} ${INT} ${INT} ${SourceKill} ${SELECTION} ${Tool}`
  | `loot ${TargetReplace} ${TargetBlock} ${POSITION_FLOAT} ${BlockEquipmentSlot} ${INT} ${SourceKill} ${SELECTION} ${Tool}`
  | `me ${MESSAGE_ROOT}`
  | `mobevent ${MobEvent} ${Boolean}`
  | `music ${MusicQueueAction} ${ID} ${VAL}`
  | `music ${MusicQueueAction} ${ID} ${VAL}`
  | `music ${MusicQueueAction} ${ID} ${MusicRepeatMode}`
  | `music ${MusicPlayAction} ${ID} ${VAL}`
  | `music ${MusicPlayAction} ${ID} ${VAL}`
  | `music ${MusicPlayAction} ${ID} ${MusicRepeatMode}`
  | `music ${MusicStopAction} ${VAL}`
  | `music ${MusicVolumeAction} ${VAL}`
  | `op ${SELECTION}`
  | `particle ${ID} ${POSITION_FLOAT}`
  | `permission ${PermissionsAction}`
  | `playanimation ${SELECTION} ${ID} ${ID}`
  | `playanimation ${SELECTION} ${ID} ${VAL}`
  | `playanimation ${SELECTION} ${ID} ${ID}`
  | `playanimation ${SELECTION} ${ID} ${ID}`
  | `playsound ${ID} ${SELECTION}`
  | `playsound ${ID} ${POSITION_FLOAT}`
  | `playsound ${ID} ${VAL}`
  | `playsound ${ID} ${VAL}`
  | `playsound ${ID} ${VAL}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${Item} ${JSON_OBJECT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${Item} ${JSON_OBJECT}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemBlock} ${POSITION} ${BlockEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${JSON_OBJECT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${INT}`
  | `replaceitem ${ReplaceItemEntity} ${SELECTION} ${EntityEquipmentSlot} ${INT} ${ReplaceMode} ${Item} ${JSON_OBJECT}`
  | `ride ${SELECTION} ${RideModeStart} ${SELECTION} ${TeleportRules}`
  | `ride ${SELECTION} ${RideModeStart} ${SELECTION} ${FillType}`
  | `ride ${SELECTION} ${RideModeStop}`
  | `ride ${SELECTION} ${RideModeEvict}`
  | `ride ${SELECTION} ${RideModeSummonRider} ${EntityType} ${ID}`
  | `ride ${SELECTION} ${RideModeSummonRider} ${EntityType} ${ID}`
  | `ride ${SELECTION} ${RideModeSummonRide} ${EntityType} ${RideRules}`
  | `ride ${SELECTION} ${RideModeSummonRide} ${EntityType} ${ID}`
  | `ride ${SELECTION} ${RideModeSummonRide} ${EntityType} ${ID}`
  | `save ${SaveMode}`
  | `say ${MESSAGE_ROOT}`
  | `schedule ${ScheduleActionOnAreaLoaded} ${RequestAction} ${POSITION} ${POSITION} ${PATHCOMMAND}`
  | `schedule ${ScheduleActionOnAreaLoaded} ${RequestAction} ${CircleArea} ${POSITION} ${INT} ${PATHCOMMAND}`
  | `schedule ${ScheduleActionOnAreaLoaded} ${RequestAction} ${TickingArea} ${ID} ${PATHCOMMAND}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardAddAction} ${ScoreboardObjectives} ${ScoreboardCriteria} ${ID}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardRemoveAction} ${ScoreboardObjectives}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardListAction}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardSetDisplayAction} ${ScoreboardDisplaySlotSortable} ${ScoreboardObjectives}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardSetDisplayAction} ${ScoreboardDisplaySlotSortable} ${ScoreboardSortOrder}`
  | `scoreboard ${ScoreboardObjectivesCategory} ${ScoreboardSetDisplayAction} ${ScoreboardDisplaySlotNonSortable} ${ScoreboardObjectives}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardListAction} ${WILDCARDSELECTION}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardResetAction} ${WILDCARDSELECTION} ${ScoreboardObjectives}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardTestAction} ${WILDCARDSELECTION} ${ScoreboardObjectives} ${WILDCARDINT} ${WILDCARDINT}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardRandomAction} ${WILDCARDSELECTION} ${ScoreboardObjectives} ${INT} ${INT}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardPlayersNumAction} ${WILDCARDSELECTION} ${ScoreboardObjectives} ${INT}`
  | `scoreboard ${ScoreboardPlayersCategory} ${ScoreboardOperationAction} ${WILDCARDSELECTION} ${ScoreboardObjectives} ${OPERATOR} ${WILDCARDSELECTION} ${ScoreboardObjectives}`
  | `script ${ScriptDebugModeProfiler} ${ScriptProfilerStart}`
  | `script ${ScriptDebugModeProfiler} ${ScriptProfilerStop}`
  | `script ${ScriptDebugModeWatchdog} ${ScriptWatchdogDumpMemory}`
  | `setblock ${POSITION} ${Block} ${INT}`
  | `setblock ${POSITION} ${Block} ${SetBlockMode}`
  | `setblock ${POSITION} ${Block} ${BLOCK_STATE_ARRAY}`
  | `setblock ${POSITION} ${Block} ${SetBlockMode}`
  | `setmaxplayers ${INT}`
  | `setworldspawn ${POSITION_FLOAT}`
  | `spawnpoint ${SELECTION}`
  | `spawnpoint ${POSITION_FLOAT}`
  | `spreadplayers ${RVAL} ${RVAL} ${VAL} ${VAL} ${SELECTION}`
  | `stopsound ${SELECTION} ${ID}`
  | `structure ${StructureSaveAction} ${ID} ${POSITION} ${POSITION} ${StructureSaveMode}`
  | `structure ${StructureSaveAction} ${ID} ${POSITION} ${POSITION} ${Boolean}`
  | `structure ${StructureSaveAction} ${ID} ${POSITION} ${POSITION} ${StructureSaveMode}`
  | `structure ${StructureSaveAction} ${ID} ${POSITION} ${POSITION} ${Boolean}`
  | `structure ${StructureDeleteAction} ${ID}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Rotation}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Mirror}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${ID}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Rotation}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Mirror}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${StructureAnimationMode}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${ID}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Rotation}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Mirror}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${ID}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Rotation}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Mirror}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${StructureAnimationMode}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${Boolean}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${VAL}`
  | `structure ${StructureLoadAction} ${ID} ${POSITION} ${ID}`
  | `summon ${EntityType} ${POSITION_FLOAT}`
  | `summon ${EntityType} ${EntityEvents}`
  | `summon ${EntityType} ${ID}`
  | `summon ${EntityType} ${ID} ${POSITION_FLOAT}`
  | `tag ${WILDCARDSELECTION} ${TagChangeAction} ${TagValues}`
  | `tag ${WILDCARDSELECTION} ${TagListAction}`
  | `teleport ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${POSITION_FLOAT} ${RVAL}`
  | `teleport ${POSITION_FLOAT} ${RVAL}`
  | `teleport ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${POSITION_FLOAT} ${TeleportFacing} ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${POSITION_FLOAT} ${TeleportFacing} ${SELECTION} ${Boolean}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${RVAL}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${RVAL}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${TeleportFacing} ${POSITION_FLOAT} ${Boolean}`
  | `teleport ${SELECTION} ${POSITION_FLOAT} ${TeleportFacing} ${SELECTION} ${Boolean}`
  | `teleport ${SELECTION} ${Boolean}`
  | `teleport ${SELECTION} ${SELECTION} ${Boolean}`
  | `tell ${SELECTION} ${MESSAGE_ROOT}`
  | `tellraw ${SELECTION} ${JSON_OBJECT}`
  | `testfor ${SELECTION}`
  | `testforblock ${POSITION} ${Block} ${INT}`
  | `testforblock ${POSITION} ${Block} ${BLOCK_STATE_ARRAY}`
  | `testforblocks ${POSITION} ${POSITION} ${POSITION} ${TestForBlocksMode}`
  | `tickingarea ${TickingAreaModeAdd} ${POSITION} ${POSITION} ${ID}`
  | `tickingarea ${TickingAreaModeAdd} ${POSITION} ${POSITION} ${Boolean}`
  | `tickingarea ${TickingAreaModeAdd} ${AddTickingAreaType} ${POSITION} ${INT} ${ID}`
  | `tickingarea ${TickingAreaModeAdd} ${AddTickingAreaType} ${POSITION} ${INT} ${Boolean}`
  | `tickingarea ${TickingAreaModeRemove} ${POSITION}`
  | `tickingarea ${TickingAreaModeRemove} ${ID}`
  | `tickingarea ${TickingAreaModeRemoveAll}`
  | `tickingarea ${TickingAreaModeList} ${AllDimensions}`
  | `tickingarea ${TickingAreaModePreload} ${POSITION} ${Boolean}`
  | `tickingarea ${TickingAreaModePreload} ${ID} ${Boolean}`
  | `time ${TimeModeAdd} ${INT}`
  | `time ${TimeModeSet} ${INT}`
  | `time ${TimeModeSet} ${TimeSpec}`
  | `time ${TimeModeQuery} ${TimeQuery}`
  | `title ${SELECTION} ${TitleClear}`
  | `title ${SELECTION} ${TitleReset}`
  | `title ${SELECTION} ${TitleSet} ${MESSAGE_ROOT}`
  | `title ${SELECTION} ${TitleTimes} ${INT} ${INT} ${INT}`
  | `titleraw ${SELECTION} ${TitleRawClear}`
  | `titleraw ${SELECTION} ${TitleRawReset}`
  | `titleraw ${SELECTION} ${TitleRawSet} ${JSON_OBJECT}`
  | `titleraw ${SELECTION} ${TitleRawTimes} ${INT} ${INT} ${INT}`
  | `weather ${WeatherType} ${INT}`
  | `weather ${WeatherQuery}`
  | `wsserver ${RAWTEXT}`
  | `xp ${INT} ${SELECTION}`
  | `xp ${Postfix_l} ${SELECTION}`;
