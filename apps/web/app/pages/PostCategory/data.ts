import { blogCategoryQuery } from 'cms/queries/pages/blog.query'
// import { getAllPageMetadata } from 'cms/queries/tree'
import { createSanityFetcher } from '~utils/createSanityFetcher'

export type Props = {
  params: {
    category: string
  }
}

export async function getData({ params }: Props) {
  const [draftMopde, runner] = createSanityFetcher()
  const data = await runner(blogCategoryQuery, params, {
    next: { tags: ['blog'] },
  })
  // const allPagesMetadata = await getAllPageMetadata()
  return { data, draftMopde }
}