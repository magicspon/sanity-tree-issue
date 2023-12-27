import { q, type Selection, TypeFromSelection } from 'groqd'
import { metaFragment } from '../fragments/meta.fragment'
import { heroFragment } from '../fragments/hero.fragment'
import { body } from '../fragments/portable.fragment'

export const pageDocument = {
  title: q.string(),
  hero: heroFragment.nullable(),
  body: body,
  ...metaFragment,
} satisfies Selection

export type PageDocument = TypeFromSelection<typeof pageDocument>
