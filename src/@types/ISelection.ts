export interface ISelection {
  type: SelectionType[];
  length: number;
  include: string;
}

export enum SelectionType {
  전체 = 0,
  명사 = 1,
  대명사 = 2,
  동사 = 5,
  형용사 = 6,
  부사 = 8,
}
