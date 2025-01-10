import { test } from './fixtures'
import { expect } from '@playwright/test'

test('should have a seeded user', async ({ session }) => {
  const result = await session.run('MATCH (p:Person) RETURN p')
  const records = result.records

  expect(records.length).toBe(1)
  expect(records[0].get('p').properties.name).toBe('TestUser')
})
test('should display the user on the persons page', async ({ page }) => {
  await page.goto('/persons')
  const personName = 'TestUser'
  const otherDiv = await page.$(`div:has-text("otherdiv")`)

  expect(otherDiv).not.toBeNull()

  const personDiv = await page.$(`div:has-text("${personName}")`)
  expect(personDiv).not.toBeNull()
})
