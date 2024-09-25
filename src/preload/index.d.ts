import { ElectronAPI } from '@electron-toolkit/preload'
import { IPCEventResponse } from '@shared/interfaces'

declare global {
  interface Window {
    // electron: ElectronAPI
    // TODO: Add properties exposed in Rendered
    context: {
      createDomain: (domainName: string) => Promise<IPCEventResponse>,
      getAllDomains: () => Promise<IPCEventResponse> 
    }
  }
}
