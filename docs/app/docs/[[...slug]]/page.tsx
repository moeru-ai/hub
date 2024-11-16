import { source } from '@/lib/source'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'

export default async (props: { params: Promise<{ slug?: string[] }> }) => {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page)
    notFound()

  const MDX = page.data.body

  return (
    <DocsPage full={page.data.full} toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  )
}

export const generateStaticParams = async () =>
  source.generateParams()

export const generateMetadata = async (props: { params: Promise<{ slug?: string[] }> }) => {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page)
    notFound()

  return {
    description: page.data.description,
    title: page.data.title,
  }
}
