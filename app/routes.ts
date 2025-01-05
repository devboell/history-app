import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('/persons', 'routes/persons.tsx'),
] satisfies RouteConfig
