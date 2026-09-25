'use client'

import type { PayloadMeUser } from '@payloadcms/admin-bar'

import { cn } from '@/utilities/ui'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link'

import './index.scss'

import { getClientSideURL } from '@/utilities/getURL'

const baseClass = 'admin-bar'

const collectionLabels = {
  pages: {
    plural: 'Pages',
    singular: 'Page',
  },
  posts: {
    plural: 'Posts',
    singular: 'Post',
  },
  projects: {
    plural: 'Projects',
    singular: 'Project',
  },
}

const Title: React.FC = () => <span>Dashboard</span>

export const AdminBar: React.FC<{
  adminBarProps?: unknown
}> = (props) => {
  const { adminBarProps } = props || {}
  const segments = useSelectedLayoutSegments()
  const [show, setShow] = useState(false)
  const collection = (
    collectionLabels[segments?.[1] as keyof typeof collectionLabels] ? segments[1] : 'pages'
  ) as keyof typeof collectionLabels
  const router = useRouter()

  const onAuthChange = React.useCallback((user: PayloadMeUser) => {
    setShow(Boolean(user?.id))
  }, [])

  const handleNewPageClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/admin/collections/pages')
    router.refresh()
  }

  return (
    <div
      className={cn(baseClass, 'py-2 bg-black text-white', {
        block: show,
        hidden: !show,
      })}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Title />
          
          {collection === 'pages' && (
            <Link
              href="/admin/collections/pages"
              onClick={handleNewPageClick}
              className="font-medium text-white hover:text-gray-300 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              New Page
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            suppressHydrationWarning
            href={getClientSideURL()}
            className="font-medium text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  )
}