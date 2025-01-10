import neo4j from 'neo4j-driver'

const env: 'development' | 'test' =
  (process.env.NODE_ENV as 'development' | 'test') || 'development'
const dbs = {
  development: 'history-dev',
  test: 'history-test',
}
const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', 'history-app')
)
const session = driver.session({ database: dbs[env] })

export default session
