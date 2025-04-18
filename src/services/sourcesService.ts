import { ISource, DouTuLaSource, DouTuSource, DouBiZJSJ, ApiBoxSource } from "./sources";

const sources: ISource[] = [new DouTuLaSource(), new ApiBoxSource()];
let source: ISource | undefined;

export default {
  sources,
  getSource: () => source,
  changeSource: (sourceName: string) => {
    // console.log(`changeSource -> ${sourceName}`)
    source = sources.find((o) => o.name === sourceName) ?? sources[0];
  },
  get: (keyword: string, pageIndex: number) => {
    if (!source) return { isEnd: true, images: [] };
    // console.log(`get -> keyword:${keyword} pageIndex:${pageIndex}`)
    return source.get(keyword, pageIndex).catch(() => {
      return { isEnd: true, images: [] };
    });
  },
};
