import { test as base } from '@playwright/test'
import neo4j, { Session } from 'neo4j-driver'

export const test = base.extend<{ session: Session }>({
  // eslint-disable-next-line no-empty-pattern
  session: async ({}, use) => {
    const driver = neo4j.driver(
      'bolt://localhost:7687',
      neo4j.auth.basic('neo4j', 'history-app')
    )
    const session = driver.session({ database: 'history-test' })

    try {
      await session.run('MATCH (n) DETACH DELETE n')
      await session.run(`
        CREATE (p:Person { id: "1", name: "TestUser" })
      `)

      await use(session)
    } finally {
      await session.close()
    }
  },
})
