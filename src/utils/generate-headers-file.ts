import { getCharFromHexadecimal } from '@/utils/common';
import { writeUtf8BomString } from '@/utils/file-writing';
import type { Icon, IconNames, Rule } from '@/types';
import * as ALL_RULES from '@/rules';
import { ICONS } from '@/generated/icons';
import { OUTPUT_DIRECTORY } from '@/constants';

const HEADER_ANCHOR = '%header%';
const INCLUDE_ANCHOR = '%include%';
const EXCLUDE_ANCHOR = '%exclude%';
const RIGHT_SIGNATURE_ANCHOR = '%right-signature%';
const LEFT_SIGNATURE_ANCHOR = '%left-signature%';
const IS_ANY_KEYWORD_ANCHOR = '%any-keyword%';
const IS_INCLUSIVE_OR_ANCHOR = '%inclusive-or%';
const IS_FULL_REPLACED = '%full-replaced%';
const FILE_HEADER = `#Do Not Edit
[version=3]
[StartHeader]
 Tag_0=default
 Template_0=defaultTemplate,*
[EndHeader]`;
const RULE_TEMPLATE = `[StartRule]
 Header=${HEADER_ANCHOR}
 rSig=${LEFT_SIGNATURE_ANCHOR}
 fSig=${RIGHT_SIGNATURE_ANCHOR}
 enabled=-1
 tagID=default
 noKW=0
 anyKW=${IS_ANY_KEYWORD_ANCHOR}
 hasCompo=0
 preProcess=0
 fullReplace=${IS_FULL_REPLACED}
 includeOR=${IS_INCLUSIVE_OR_ANCHOR}
 isFallBack=0
 fallbackBank=0
 ${INCLUDE_ANCHOR}
 ${EXCLUDE_ANCHOR}
[EndRule]`;

export const generateHeadersFile = async () => {
  const allRules = Object.values(ALL_RULES).reduce(
    (accumulator, rulesGroup) => {
      return [...accumulator, ...rulesGroup.rules];
    },
    <Rule<IconNames>[]>[]
  );
  const iconsMap = ICONS.reduce(
    (accumulator, icon) => {
      return {
        ...accumulator,
        [icon.name]: icon,
      };
    },
    <Record<IconNames, Icon>>{}
  );

  const regularResult = reduceRules(allRules, (rule) => {
    const withoutHeader = replaceAnchors(rule);

    if (!rule?.prefix) {
      return withoutHeader;
    }

    const header = rule.prefix.reduce((accumulator, iconName) => {
      return `${accumulator}${getCharFromHexadecimal(iconsMap[iconName].charCode)}`;
    }, '');

    return withoutHeader.replace(HEADER_ANCHOR, header);
  });
  const testingResult = reduceRules(allRules, (rule) => {
    const withoutHeader = replaceAnchors(rule);

    if (!rule?.prefix) {
      return withoutHeader;
    }

    const header = `#${rule.prefix.join('|')}#`;

    return withoutHeader.replace(HEADER_ANCHOR, header);
  });

  await writeUtf8BomString(
    `${OUTPUT_DIRECTORY}/HeaderRules.txt`,
    regularResult
  );
  await writeUtf8BomString(
    `${OUTPUT_DIRECTORY}/HeaderRules_testing.txt`,
    testingResult
  );
};

const reduceRules = (
  rules: Rule<IconNames>[],
  callback: (item: Rule<IconNames>) => string
): string => {
  return rules.reduce((accumulator: string, item) => {
    const rule = callback(item);

    return `${accumulator}\r\n\r\n${rule}`;
  }, `${FILE_HEADER}`);
};

const replaceAnchors = ({
  rightSignature,
  leftSignature,
  isAnyKeyword,
  isInclusiveOr,
  isFullReplaced,
  include,
  exclude,
}: Rule<IconNames>): string => {
  return RULE_TEMPLATE.replace(RIGHT_SIGNATURE_ANCHOR, rightSignature)
    .replace(LEFT_SIGNATURE_ANCHOR, leftSignature)
    .replace(IS_ANY_KEYWORD_ANCHOR, replaceBoolean(isAnyKeyword))
    .replace(IS_INCLUSIVE_OR_ANCHOR, replaceBoolean(isInclusiveOr))
    .replace(IS_FULL_REPLACED, replaceBoolean(isFullReplaced))
    .replace(INCLUDE_ANCHOR, concatenateInclude(include))
    .replace(EXCLUDE_ANCHOR, concatenateExclude(exclude));
};

const concatenateExclude = (array?: string[]) => {
  return concatenateRules('Exclude', array);
};

const concatenateInclude = (array?: string[]): string => {
  return concatenateRules('Include', array);
};

const concatenateRules = (rule: string, array?: string[]): string => {
  if (!array || !array.length) {
    return `${rule}_0=`;
  }

  return array.reduce((accumulator, includeItem, index) => {
    const newLine = index === 0 ? '' : '\r\n ';

    return `${accumulator}${newLine}${rule}_${index}=${includeItem}`;
  }, '');
};

const replaceBoolean = (flag: boolean) => (flag ? '-1' : '0');
