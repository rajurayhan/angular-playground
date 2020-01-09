export interface ISearchItem {
  id: number,
  name: string,
  age: number,
  salary: number
}

export class SearchItem{
  constructor(public ISearchItem: ISearchItem){}
}
