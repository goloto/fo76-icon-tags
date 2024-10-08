import { ICON_LEGENDARY_EFFECTS } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { ICON_COMMON, RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const LEGENDARY_EFFECTS_RULES_GROUP = {
    category: ICON_CATEGORIES.LegendaryEffects,
    rules: [
        {
            order: 0,
            prefix: [ICON_LEGENDARY_EFFECTS.Unyielding],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_Steady",
                "ekwd|HasLegendary_Armor_LowHealthIncreasesStats",
            ],
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_LEGENDARY_EFFECTS.AntiArmor],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_AntiArmor"],
            exclude: [],
        },
        {
            order: 2,
            prefix: [ICON_LEGENDARY_EFFECTS.Bloodied],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageInverseHealth"],
            exclude: [],
        },
        {
            order: 3,
            prefix: [ICON_LEGENDARY_EFFECTS.Junkie],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageAddiction"],
            exclude: [],
        },
        {
            order: 4,
            prefix: [ICON_LEGENDARY_EFFECTS.Gourmand],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_Gourmand",
                "ekwd|HasLegendary_Armor_Overeater",
            ],
            exclude: [],
        },
        {
            order: 5,
            prefix: [ICON_LEGENDARY_EFFECTS.Aristocrat],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_ResistancesProportionalCaps",
                "ekwd|HasLegendary_Weapon_DamageViaCaps",
            ],
            exclude: [],
        },
        {
            order: 6,
            prefix: [ICON_LEGENDARY_EFFECTS.Instigating],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageFirstBlood"],
            exclude: [],
        },
        {
            order: 7,
            prefix: [ICON_LEGENDARY_EFFECTS.Jaggernaut],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageViaHealth"],
            exclude: [],
        },
        {
            order: 8,
            prefix: [ICON_LEGENDARY_EFFECTS.Mutant],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_ResistancesMutation",
                "ekwd|HasLegendary_Weapon_DamageWithMutation",
            ],
            exclude: [],
        },
        {
            order: 9,
            prefix: [ICON_LEGENDARY_EFFECTS.Berserker],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageUnarmored"],
            exclude: [],
        },
        {
            order: 10,
            prefix: [ICON_LEGENDARY_EFFECTS.Quad],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_AmmoCapacity4x"],
            exclude: [],
        },
        {
            order: 11,
            prefix: [ICON_LEGENDARY_EFFECTS.TwoShot],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_TwoShot"],
            exclude: [],
        },
        {
            order: 12,
            prefix: [ICON_LEGENDARY_EFFECTS.Zealot],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_LessDMGScorched",
                "ekwd|HasLegendary_Weapon_DamageVsScorched",
            ],
            exclude: [],
        },
        {
            order: 13,
            prefix: [ICON_LEGENDARY_EFFECTS.Nocturnal],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_ResistancesNight",
                "ekwd|HasLegendary_Weapon_DamageNight",
            ],
            exclude: [],
        },
        {
            order: 14,
            prefix: [ICON_LEGENDARY_EFFECTS.Exterminator],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_LessDMGBugs",
                "ekwd|HasLegendary_Weapon_DamageVsBugs",
            ],
            exclude: [],
        },
        {
            order: 15,
            prefix: [ICON_LEGENDARY_EFFECTS.Assassin],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_LessDMGHumans",
                "ekwd|HasLegendary_Weapon_DamageVsPlayers",
            ],
            exclude: [],
        },
        {
            order: 16,
            prefix: [ICON_LEGENDARY_EFFECTS.Furious],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DamageConsecutiveHits"],
            exclude: [],
        },
        {
            order: 17,
            prefix: [ICON_LEGENDARY_EFFECTS.Troubleshooter],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_DamageVsRobots",
                "ekwd|HasLegendary_Armor_LessDMGRobots",
            ],
            exclude: [],
        },
        {
            order: 18,
            prefix: [ICON_LEGENDARY_EFFECTS.MutantSlayer],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Armor_LessDMGSupermutants",
                "ekwd|HasLegendary_Weapon_DamageVsSupermutants",
            ],
            exclude: [],
        },
        {
            order: 19,
            prefix: [ICON_LEGENDARY_EFFECTS.Executioner],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_Execute"],
            exclude: [],
        },
        {
            order: 20,
            prefix: [ICON_LEGENDARY_EFFECTS.Hunter],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_DamageVsAnimals",
                "ekwd|HasLegendary_Armor_LessDMGAnimals",
            ],
            exclude: [],
        },
        {
            order: 21,
            prefix: [ICON_LEGENDARY_EFFECTS.Bolstering],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_ResistancesInverseHealth"],
            exclude: [],
        },
        {
            order: 22,
            prefix: [ICON_LEGENDARY_EFFECTS.Stalker],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_AccuracyNotInCombat"],
            exclude: [],
        },
        {
            order: 23,
            prefix: [ICON_LEGENDARY_EFFECTS.Chameleon],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_Chameleon"],
            exclude: [],
        },
        {
            order: 24,
            prefix: [ICON_LEGENDARY_EFFECTS.GhoulSlayer],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_DamageVsGhouls",
                "ekwd|HasLegendary_Armor_LessDMGGhouls",
            ],
            exclude: [],
        },
        {
            order: 25,
            prefix: [ICON_LEGENDARY_EFFECTS.LifeSaving],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_AutoRevive"],
            exclude: [],
        },
        {
            order: 26,
            prefix: [ICON_LEGENDARY_EFFECTS.Vanguard],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_ResistancesProportionalHealth"],
            exclude: [],
        },
        {
            order: 27,
            prefix: [ICON_LEGENDARY_EFFECTS.Cloaking],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_GettingMeleedTriggersInvisibility"],
            exclude: [],
        },
        {
            order: 28,
            prefix: [ICON_LEGENDARY_EFFECTS.Supressor],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_DebuffDamage"],
            exclude: [],
        },
        {
            order: 29,
            prefix: [ICON_LEGENDARY_EFFECTS.Vampire],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Weapon_Vampire"],
            exclude: [],
        },
        {
            order: 30,
            prefix: [ICON_LEGENDARY_EFFECTS.Medic],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: true,
            include: [
                "ekwd|HasLegendary_Weapon_CitsHealGroup",
                "ekwd|dn_BackPack_Standard_Material_Medical",
                "ekwd|dn_HasMisc_MedicPump",
            ],
            exclude: [],
        },
        {
            order: 31,
            prefix: [ICON_LEGENDARY_EFFECTS.AutoStim],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_LowHealthTriggersStimpak"],
            exclude: [],
        },
        {
            order: 32,
            prefix: [ICON_LEGENDARY_EFFECTS.Regenerating],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_HealthRegen"],
            exclude: [],
        },
        {
            order: 33,
            prefix: [ICON_LEGENDARY_EFFECTS.Weightless],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: ["ekwd|HasLegendary_Armor_Weightless"],
            exclude: [],
        },
        {
            order: 34,
            prefix: ["_injected_innr_eraser"],
            leftSignature: LeftSignature.InstanceNamingRules,
            rightSignature: RightSignature.WNAM,
            isInjected: true,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: true,
            include: [],
            exclude: [
                "ekwd|CustomItemName",
                "ekwd|PowerArmor",
                "ekwd|HandmadeRifle",
                "ekwd|PipeWrench_Flowers",
                "ekwd|HasLegendary_Weapon_Steady",
                "ekwd|HasLegendary_Armor_LowHealthIncreasesStats",
                "ekwd|HasLegendary_Weapon_AntiArmor",
                "ekwd|HasLegendary_Weapon_DamageInverseHealth",
                "ekwd|HasLegendary_Weapon_DamageAddiction",
                "ekwd|HasLegendary_Weapon_Gourmand",
                "ekwd|HasLegendary_Armor_Overeater",
                "ekwd|HasLegendary_Armor_ResistancesProportionalCaps",
                "ekwd|HasLegendary_Weapon_DamageViaCaps",
                "ekwd|HasLegendary_Weapon_DamageFirstBlood",
                "ekwd|HasLegendary_Weapon_DamageViaHealth",
                "ekwd|HasLegendary_Armor_ResistancesMutation",
                "ekwd|HasLegendary_Weapon_DamageWithMutation",
                "ekwd|HasLegendary_Weapon_DamageUnarmored",
                "ekwd|HasLegendary_Weapon_AmmoCapacity4x",
                "ekwd|HasLegendary_Weapon_TwoShot",
                "ekwd|HasLegendary_Armor_LessDMGScorched",
                "ekwd|HasLegendary_Weapon_DamageVsScorched",
                "ekwd|HasLegendary_Armor_ResistancesNight",
                "ekwd|HasLegendary_Weapon_DamageNight",
                "ekwd|HasLegendary_Armor_LessDMGBugs",
                "ekwd|HasLegendary_Weapon_DamageVsBugs",
                "ekwd|HasLegendary_Armor_LessDMGHumans",
                "ekwd|HasLegendary_Weapon_DamageVsPlayers",
                "ekwd|HasLegendary_Weapon_DamageConsecutiveHits",
                "ekwd|HasLegendary_Weapon_DamageVsRobots",
                "ekwd|HasLegendary_Armor_LessDMGRobots",
                "ekwd|HasLegendary_Armor_LessDMGSupermutants",
                "ekwd|HasLegendary_Weapon_DamageVsSupermutants",
                "ekwd|HasLegendary_Weapon_Execute",
                "ekwd|HasLegendary_Weapon_DamageVsAnimals",
                "ekwd|HasLegendary_Armor_LessDMGAnimals",
                "ekwd|HasLegendary_Armor_ResistancesInverseHealth",
                "ekwd|HasLegendary_Weapon_AccuracyNotInCombat",
                "ekwd|HasLegendary_Armor_Chameleon",
                "ekwd|HasLegendary_Weapon_DamageVsGhouls",
                "ekwd|HasLegendary_Armor_LessDMGGhouls",
                "ekwd|HasLegendary_Armor_AutoRevive",
                "ekwd|HasLegendary_Armor_ResistancesProportionalHealth",
                "ekwd|HasLegendary_Armor_GettingMeleedTriggersInvisibility",
                "ekwd|HasLegendary_Weapon_DebuffDamage",
                "ekwd|HasLegendary_Weapon_Vampire",
                "ekwd|HasLegendary_Weapon_CitsHealGroup",
                "ekwd|dn_BackPack_Standard_Material_Medical",
                "ekwd|dn_HasMisc_MedicPump",
                "ekwd|HasLegendary_Armor_LowHealthTriggersStimpak",
                "ekwd|HasLegendary_Armor_HealthRegen",
                "ekwd|HasLegendary_Armor_Weightless",
            ],
        }
    ],
} as const satisfies RulesGroup<ICON_LEGENDARY_EFFECTS | ICON_COMMON>;
