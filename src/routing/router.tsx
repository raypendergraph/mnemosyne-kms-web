import { Routes, Route } from "react-router-dom";
import { EntityKindConcept, EntityKindJournal, EntityKindJournalEntry, EntityKindOrganization, EntityKindPerson, ListDisplayable } from "../models";
import { JournalsPage } from "../pages/journals";
import { LandingPage } from "../pages/landing";

export function PageRouter() {
  return <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="journals" element={<JournalsPage />} />
  </Routes>
}
export default PageRouter


export function routeForListDisplayable(item: ListDisplayable): string {
  let path = ""
  switch (item.entityKind) {
    case EntityKindConcept: 
      path='concepts'
      break
    case EntityKindJournal:
      path='journals'
      break
    case EntityKindJournalEntry:
      path='journal_entries'
      break
    case EntityKindOrganization:
      path='organizations'
      break
    case EntityKindPerson:
      path='people'
      break
  }
  return `${path}/${item.uuid}`
}