export interface INote {
  id: string
  title: string
  body: string
}

export interface selectedNote {
  note: INote | null
}
