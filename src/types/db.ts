export interface childNodes {
  identifier: string
  type: string
  properties: {
    title: string
    text: string
  }
  childNodes: never[]
}

export interface Idb {
  getPageById: {
    identifier: string
    type: string
    properties: {
      headline: string
    }
    childNodes: childNodes[]
  }
}
