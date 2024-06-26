import type { CategoryOrder, IconOrder, IconRule } from "../types";
import { readFileAsJson } from "../file-reading";
import { ICONS_DEFAULT_RULES, RULES_DIRECTORY, SORTED_RULES_KEYS } from "../const";
import { getNumFromHexadecimal, sortByOrder } from "../common";
import { writeJson } from "../file-writing";

export const buildIconRules = async (categoryOrder: CategoryOrder[], iconNames: Record<string, string[]>): Promise<IconRule[]> => {
  const concatenatedRules = await categoryOrder
    .reduce<Promise<IconRule[]>>(async (accumulator, category) => {
      const categoryRulesPath = `${RULES_DIRECTORY}/${category.name}.json`;
      const awaitedAccumulator = await accumulator;
      const categoryRules = await readFileAsJson<IconRule[]>(categoryRulesPath);
      const categoryIconNames = categoryRules
        .map((item) => item.iconName);
      const newRules = iconNames[category.name]
        .reduce<IconRule[]>((accumulator, item) => {
          if (categoryIconNames.includes(item)) {
            return accumulator;
          }
  
          return accumulator.concat(createDefaultInfo(item, category.name));
        }, [])
      const updatedRules = categoryRules
        .concat(newRules)
        .map(sortRuleKeys)
        .sort(sortByOrder)
        .map(updateOrderAndHeader); 
  
      await writeJson(categoryRulesPath, updatedRules);
      
      return awaitedAccumulator.concat(updatedRules);
    }, Promise.resolve([]));

    return concatenatedRules;
}

const updateOrderAndHeader = (item: IconRule, index: number) => ({
  ...item,
  order: index,
  header: generateIconHeader(item.iconName),
})

const sortRuleKeys = (item: IconRule) => {
  const itemWithSortedKeys = SORTED_RULES_KEYS
    .reduce((accumulator, key) => ({
      ...accumulator,
      [key]: item[key],
    }), <IconRule>{});

  return itemWithSortedKeys;
}

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

const ICON_NAME_MAP = new Map();

const generateIconHeader = (iconName: string): string => {
  if (ICON_NAME_MAP.has(iconName)) {
    return ICON_NAME_MAP.get(iconName);
  }

  const value = '0x' + HEADER_GENERATOR.next().value.toString(16);

  ICON_NAME_MAP.set(iconName, value);

  return value;
};

const createDefaultInfo = (iconName: string, category: string): IconRule => ({
  order: 999, 
  iconName: iconName, 
  isDeleted: false,
  isAnyKeyword: false,
  isInclusiveOr: false,
  header: generateIconHeader(iconName),
  include: [],
  exclude: [],
  ...ICONS_DEFAULT_RULES[category],
});