// import type { Route } from "./+types/home";
import { Welcome } from '../welcome/welcome'

export function meta() {
  return [
    { title: 'History App' },
    { name: 'description', content: 'Welcome to History App!' },
  ]
}

export default function Home() {
  return <Welcome />
}
