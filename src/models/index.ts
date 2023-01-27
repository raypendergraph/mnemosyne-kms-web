
export const EntityKindJournal = 'journal'
export const EntityKindJournalEntry = 'journal_entry'
export const EntityKindConcept = 'concept'
export const EntityKindPerson = 'person'
export const EntityKindOrganization = 'organization'

export type EntityKind = typeof EntityKindJournal
    | typeof EntityKindJournalEntry
    | typeof EntityKindConcept
    | typeof EntityKindPerson
    | typeof EntityKindOrganization

export interface PagedList<T> {
    skipped: number
    size: number
    values: T[]
}
export interface GloballyIdentifiable {
    uuid: string
}

export interface ListDisplayable extends GloballyIdentifiable {
    title: string
    caption: string
    entityKind: EntityKind
}

export interface Taggable {
    tags: string[]
}


export interface TimeTrackable {
    createdAt: string
    deletedAt: string | undefined
    updatedAt: string
}
enum NotationFormatType {
    Plaintext = 'plaintext',
    Creole = 'creole'
}
export interface Notation extends GloballyIdentifiable, TimeTrackable {
    content: string
    format: NotationFormatType
}

export interface JournalEntry extends TimeTrackable, GloballyIdentifiable, ListDisplayable { }

export interface JournalEntryWithAssociations extends JournalEntry, Taggable {
   notations: PagedList<JournalEntry>
}