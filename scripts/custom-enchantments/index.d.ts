// Script example for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, ItemStack, Entity, Block, BlockPermutation } from "@minecraft/server";
export declare class Enchant {
    protected id: string;
    constructor(info: EnchantInfo);
    onHit(callback: (data: {
        player: Player;
        level: number;
        hitEntity?: Entity;
        hitBlock?: Block;
        item: ItemStack;
    }) => void): void;
    onHurt(callback: (data: {
        player: Player;
        level: number;
        hurtEntity: Entity;
        damage: number;
        item: ItemStack;
    }) => void): void;
    onRightClick(callback: (data: {
        player: Player;
        level: number;
        item: ItemStack;
    }) => void): void;
    onRightClickOn(callback: (data: {
        player: Player;
        level: number;
        block: Block;
        item: ItemStack;
    }) => void): void;
    onBlockBreak(callback: (data: {
        player: Player;
        level: number;
        block: Block;
        brokenBlockPermutation: BlockPermutation;
        item: ItemStack;
    }) => void): void;
}
export declare function addEnchant(item: ItemStack, ench: string, level?: number): void;
export declare function removeEnchant(item: ItemStack, ench: string): void;
export declare function getEnchants(item: ItemStack): ItemEnchant[];
interface EnchantInfo {
    name: string;
    display?: string;
    maxLevel?: number;
    itemCatagory?: ItemCatagory;
}
declare type ItemEnchant = {
    name: string;
    level: number;
};
declare type ItemCatagory = "sword" | "bow" | "pickaxe" | "axe" | "shovel" | "hoe" | "any";
export {};