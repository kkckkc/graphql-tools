import { UnnormalizedTypeDefPointer } from './../load-typedefs';
export declare function normalizePointers(
  unnormalizedPointerOrPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[]
): {
  ignore: string[];
  pointerOptionMap: Record<string, Record<string, any>>;
};
