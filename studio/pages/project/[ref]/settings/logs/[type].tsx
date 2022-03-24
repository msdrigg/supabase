import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { withAuth } from 'hooks'
import { SettingsLayout } from 'components/layouts/'
import { LOG_TYPE_LABEL_MAPPING, QueryType } from 'components/interfaces/Settings/Logs'
import LogsPreviewer from 'components/interfaces/Settings/Logs/LogsPreviewer'

/**
 * Placeholder page for logs previewers until we figure out where to slot them
 */
export const LogPage: NextPage = () => {
  const router = useRouter()
  const { ref, type } = router.query

  const title = `Logs - ${LOG_TYPE_LABEL_MAPPING[type as keyof typeof LOG_TYPE_LABEL_MAPPING]}`

  return (
    <SettingsLayout title={title}>
      <LogsPreviewer projectRef={ref as string} queryType={type as QueryType} />
    </SettingsLayout>
  )
}

export default withAuth(observer(LogPage))
