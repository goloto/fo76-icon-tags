export const writeJson = async (path: string, value: any) => {
  await Bun.write(path, JSON.stringify(value, null, '\t'));
};

export const writeUtf8BomString = async (path: string, str: string) => {
  await Bun.write(path, createUtf8BomString(str));
};

const createUtf8BomString = (str: string): Blob => {
  return new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), str], {
    type: 'text/plain;charset=utf-8',
  });
};
