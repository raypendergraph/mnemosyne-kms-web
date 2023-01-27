import React from 'react'
import { EntityKind, ListDisplayable } from '../models'

type EntityTypeMappedItems = Partial<{ [key in EntityKind]: ListDisplayable[] }>
type RelatedProps = {
    items: ListDisplayable[]
}

type CategoryListItemProps = {
    category: string
    items: ListDisplayable[]
}
function CategoryListItem({ category, items }: CategoryListItemProps): React.ReactElement {
    return <li>
        <a href="#!" className="is-flex">
            {category}
            <small className="ml-auto">({items.length})</small>
        </a>
    </li>
}
function byKindReducer(previous: EntityTypeMappedItems, current: ListDisplayable): EntityTypeMappedItems {
    let entitiesForKind = previous[current.entityKind]
    if (entitiesForKind === undefined) {
        return { ...previous, [current.entityKind]: [current] }
    }
    return { ...previous, [current.entityKind]: [...entitiesForKind, current] }
}

export default function Related({ items }: RelatedProps): React.ReactElement {
    const itemsByEntityType = items.reduce<EntityTypeMappedItems>(byKindReducer, {})

    return <div className="widget">
        <h5 className="widget-title"><span>Related</span></h5>
        <ul className="list-unstyled widget-list">
            {itemsByEntityType && Object.entries(itemsByEntityType).map(([key, value]) => <CategoryListItem items={value} category={key} />)}
        </ul>
    </div>

}

