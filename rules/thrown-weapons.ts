import { ICON_THROWN_WEAPONS } from '../generated/icons-enum';
import { LeftSignature, RightSignature } from '../utils/const';
import type { Rule } from '../utils/types';

export const THROWN_WEAPONS_RULES: Rule[] = [
  {
    order: 0,
    iconName: ICON_THROWN_WEAPONS.MeatClever,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x2267',
    include: ['ekwd|ThrowingKnife'],
    exclude: [],
  },
  {
    order: 1,
    iconName: ICON_THROWN_WEAPONS.NukaGrenade,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x2268',
    include: ['edid|NukaGrenade'],
    exclude: [],
  },
  {
    order: 2,
    iconName: ICON_THROWN_WEAPONS.PlasmaGrenade,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x2269',
    include: ['edid|PlasmaGrenade'],
    exclude: [],
  },
  {
    order: 3,
    iconName: ICON_THROWN_WEAPONS.CryoGrenade,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x226a',
    include: ['edid|CryoGrenade'],
    exclude: [],
  },
  {
    order: 4,
    iconName: ICON_THROWN_WEAPONS.PulseGrenade,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x226b',
    include: ['edid|PulseGrenade'],
    exclude: [],
  },
  {
    order: 5,
    iconName: ICON_THROWN_WEAPONS.FragmentationGrenade,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x226c',
    include: ['ekwd|WeaponTypeGrenade'],
    exclude: [
      'edid|PulseGrenade',
      'edid|NukaGrenade',
      'edid|SuiciderBomb',
      'edid|PlasmaGrenade',
      'edid|CryoGrenade',
      'edid|dynamite',
      'edid|m79',
      'ekwd|ThrowingKnife',
    ],
  },
  {
    order: 6,
    iconName: ICON_THROWN_WEAPONS.ThrownBomb,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: true,
    isFullReplaced: false,
    header: '0x226d',
    include: ['edid|SuiciderBomb', 'edid|TurboFertFertilizer'],
    exclude: [],
  },
  {
    order: 7,
    iconName: ICON_THROWN_WEAPONS.Dynamite,
    leftSignature: LeftSignature.Weapon,
    rightSignature: RightSignature.FULL,
    isInjected: false,
    isDeleted: false,
    isAnyKeyword: false,
    isInclusiveOr: false,
    isFullReplaced: false,
    header: '0x226e',
    include: ['edid|dynamite'],
    exclude: [],
  },
];