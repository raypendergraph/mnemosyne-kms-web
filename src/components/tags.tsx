

function Tags(tags: string[]) {
    return <div className="widget">
        <h5 className="widget-title"><span>Tags</span></h5>
        <ul className="list-inline widget-list-inline">
            {tags && tags.map(value => Tag(value))}
        </ul>
    </div>
}

function Tag(value: string): React.ReactElement {
    return <li className="list-inline-item"><a href="#!">{value}</a></li>
}