
export interface GloballyIdentifiable {
    uuid: string
}

export interface ListDisplayable extends GloballyIdentifiable {
    title: string
    caption: string
    entityKind: string
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