// import type { Route } from './+types/home'
import session from '../data/neo4j-session'
import type { Record } from 'neo4j-driver'

export function meta() {
  return [
    { title: 'Persons' },
    { name: 'description', content: 'View Persons' },
  ]
}

type Person = {
  id: string
  name: string
}
export async function loader(/*{}  params  : Route.LoaderArgs*/) {
  const data = await session.run('MATCH (p:Person) RETURN p')
  const persons = data.records.map(
    (record: Record) => record.get('p').properties
  )
  return persons
}

export default function Persons({ loaderData }: { loaderData: Person[] }) {
  console.log('loaderData', loaderData)

  if (!loaderData) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>otherdiv</div>
      {loaderData.map((person: Person) => (
        <div key={`person-${person.id}`}>{person.name}</div>
      ))}
    </div>
  )
}
