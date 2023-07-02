export interface INote {
  id: number
  title: string
  body: string
}

export interface INotes {
  notes: INote[]
}

export const storageKey = "note-keeper/notes"
