import { ICON_KEYS } from "@/generated/icons-enum";
import { LeftSignature, RightSignature } from "@/constants";
import type { RulesGroup } from "@/types";
import { ICON_CATEGORIES } from "@/generated/icon-categories-enum";
export const KEYS_RULES_GROUP = {
    category: ICON_CATEGORIES.Keys,
    rules: [
        {
            order: 0,
            prefix: [ICON_KEYS.AccessCard],
            leftSignature: LeftSignature.Key,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: true,
            isFullReplaced: false,
            include: [
                "edid|keycard",
                "edid|password",
                "edid|code",
                "edid|card",
                "edid|login",
                "edid|terminal",
                "edid|organics",
                "edid|databank",
                "edid|RecallKey",
                "edid|TheMazeID",
                "edid|CongressionalID",
                "edid|BiometricData",
                "edid|RDClearance",
                "edid|TaggerdyID",
                "edid|SeniorExecID",
            ],
            exclude: [],
        },
        {
            order: 1,
            prefix: [ICON_KEYS.Key],
            leftSignature: LeftSignature.Key,
            rightSignature: RightSignature.FULL,
            isInjected: false,
            isDeleted: false,
            isAnyKeyword: false,
            isInclusiveOr: false,
            isFullReplaced: false,
            include: ["edid|key"],
            exclude: [
                "edid|keycard",
                "edid|password",
                "edid|code",
                "edid|card",
                "edid|login",
                "edid|terminal",
                "edid|organics",
                "edid|databank",
                "edid|RecallKey",
                "edid|TheMazeID",
                "edid|CongressionalID",
                "edid|BiometricData",
                "edid|RDClearance",
                "edid|TaggerdyID",
                "edid|SeniorExecID",
            ],
            translationReplacing: ["$Keyring",],
        }
    ],
} as const satisfies RulesGroup<ICON_KEYS>;
