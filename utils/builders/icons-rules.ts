import { readIconRulesFile, readIconsOrderFile } from "../reading";
import { JSON_DIRECTORY } from "../const";
import type { IconRule, IconRuleMap } from "../types";
import { getNumFromHexadecimal } from "../common";
import { writeJson } from "../writing";

export const buildIconRules = async () => {
  const iconRules = await readIconRulesFile();
  const iconRulesKeys = iconRules.map((item) => item.name);
  const iconRulesMap = iconRules
    .reduce((accumulator, item) => ({
      ...accumulator,
      [item.name]: item
    }), <IconRuleMap>{});
  const iconOrder = await readIconsOrderFile();
  const sortedIconOrder = iconOrder.sort((itemA, itemB) => itemA.order - itemB.order);
  const deletedIconRules = iconRules
    .filter((item) => !iconRulesKeys.includes(item.name))
    .map((item) => ({...item, isDeleted: true}));
  const mergedIconRules = sortedIconOrder
    .reduce((accumulator, item) => {
      if (item.name in iconRulesMap) {
        const rule: IconRule = {
          ...iconRulesMap[item.name],
          header: generateIconHeader(),
          isDeleted: false,
        };

        return [...accumulator, rule]
      }

      return [...accumulator, createDefaultInfo(item.name)]
    }, <IconRule[]>[]);
  const result = [...mergedIconRules, ...deletedIconRules];

  await writeJson(`${JSON_DIRECTORY}/icons-rules.json`, result);
}

const HEADER_GENERATOR = (function* () {
  let start = getNumFromHexadecimal('2265');

  while (true) {
    start += 1;

    yield start;
  }
})();

const generateIconHeader = (): string => '0x' + HEADER_GENERATOR.next().value.toString(16);

const createDefaultInfo = (name: string): IconRule => ({ 
  name, 
  isDeleted: false,
  header: generateIconHeader(),
  include: [],
  exclude: [],
});

await buildIconRules();