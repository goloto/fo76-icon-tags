import { ICON_AMMO } from '@/generated/icons-enum';
import { LeftSignature, RightSignature } from '@/constants';
import type { RulesGroup } from '@/types';
import { ICON_CATEGORIES } from '@/generated/icon-categories-enum';

export const AMMO_RULES_GROUP = {
  category: ICON_CATEGORIES.Ammo,
  rules: [
    {
      order: 0,
      prefix: [ICON_AMMO.MiniNuke],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: true,
      isFullReplaced: false,
      header: '0x22b3',
      include: ['edid|FatManMiniNuke', 'edid|NukaNuke'],
      exclude: [],
    },
    {
      order: 1,
      prefix: [ICON_AMMO.FusionCore],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: true,
      isFullReplaced: false,
      header: '0x22b4',
      include: ['edid|FusionCore', 'edid|PlasmaCore'],
      exclude: [],
    },
    {
      order: 2,
      prefix: [ICON_AMMO.Rocket],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: true,
      isFullReplaced: false,
      header: '0x22b5',
      include: ['edid|AmmoMissile', 'edid|AmmoSentryShoulder'],
      exclude: [],
    },
    {
      order: 3,
      prefix: [ICON_AMMO.FortyMmGrenade],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22b6',
      include: ['edid|AmmoGrenadeLauncher'],
      exclude: [],
    },
    {
      order: 4,
      prefix: [ICON_AMMO.Fuel],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22b7',
      include: ['edid|fuel'],
      exclude: [],
    },
    {
      order: 5,
      prefix: [ICON_AMMO.FusionCell],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22b8',
      include: ['edid|FusionCell'],
      exclude: [],
    },
    {
      order: 6,
      prefix: [ICON_AMMO.GammaRound],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22b9',
      include: ['edid|GammaCell'],
      exclude: [],
    },
    {
      order: 7,
      prefix: [ICON_AMMO.NukaColaAmmo],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22ba',
      include: ['edid|quantum', 'edid|cherry', 'edid|NukaCola'],
      exclude: [],
    },
    {
      order: 8,
      prefix: [ICON_AMMO.Arrows],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: true,
      isFullReplaced: false,
      header: '0x22bb',
      include: ['edid|arrow', 'edid|CrossbowBolt'],
      exclude: [],
    },
    {
      order: 9,
      prefix: [ICON_AMMO.CameraFilm],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22bc',
      include: ['edid|AmmoCamera'],
      exclude: [],
    },
    {
      order: 10,
      prefix: [ICON_AMMO.BallisticAmmo],
      leftSignature: LeftSignature.Ammunition,
      rightSignature: RightSignature.FULL,
      isInjected: false,
      isDeleted: false,
      isAnyKeyword: false,
      isInclusiveOr: false,
      isFullReplaced: false,
      header: '0x22bd',
      include: ['ekwd|ObjectTypeAmmo'],
      exclude: [
        'edid|FatManMiniNuke',
        'ekwd|AmmoTypeFusionCore',
        'edid|AmmoGrenadeLauncher',
        'edid|fuel',
        'edid|FusionCell',
        'edid|GammaCell',
      ],
    },
  ],
} as const satisfies RulesGroup<ICON_AMMO>;