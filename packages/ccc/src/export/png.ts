import { addMetadata, addMetadataFromBase64DataURI } from 'meta-png'

import type { Card } from '../define'

import { exportToJSON } from './json'

export const exportToPNG = (data: Card, png: Uint8Array) =>
  addMetadata(png, 'ccv3', btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(exportToJSON(data))))))

export const exportToPNGBase64 = (data: Card, png: string) =>
  addMetadataFromBase64DataURI(png, 'ccv3', btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(exportToJSON(data))))))
