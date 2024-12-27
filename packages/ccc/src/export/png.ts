import PNG from 'meta-png'

import type { Card } from '../define'

import { exportToJSON } from './json'

export const exportToPNG = (data: Card, png: Uint8Array) =>
  PNG.addMetadata(png, 'ccv3', btoa(JSON.stringify(exportToJSON(data))))

export const exportToPNGBase64 = (data: Card, png: `data:image/png;base64,${string}`) =>
  // eslint-disable-next-line node/prefer-global/buffer
  PNG.addMetadataFromBase64DataURI(png, 'ccv3', Buffer.from(JSON.stringify(exportToJSON(data))).toString('base64'))
