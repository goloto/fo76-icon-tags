import { RULES_DIRECTORY } from '@/constants';

import { readdir } from 'node:fs/promises';
import ts from 'typescript';

export const generateCategories = async (): Promise<string> => {
  const file = ts.createSourceFile(
    `icon-categories-enum.ts`,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const categoryFiles = await readdir(RULES_DIRECTORY);
  const categories = categoryFiles.filter(filterOnlyJson).map(removeExtension);
  const enumMembers = categories.map((category) => {
    return ts.factory.createEnumMember(
      category
        .split('-')
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(''),
      ts.factory.createStringLiteral(category, true)
    );
  });
  const enumDeclaration = ts.factory.createEnumDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    'ICON_CATEGORIES',
    enumMembers
  );

  return printer.printNode(ts.EmitHint.Unspecified, enumDeclaration, file);
};

const filterOnlyJson = (item: string) => item.includes('.json');
const removeExtension = (item: string) => item.replace('.json', '');
