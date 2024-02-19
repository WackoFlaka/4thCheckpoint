import { ImageModel } from './models/ImageModel.js'
import { Quote } from './models/Quote.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  
  images = []
  
  quotes = []
  
  todos = []
  
  /**@type {import('./models/Weather.js').Weather | null} */
  weather = null
}

export const AppState = createObservableProxy(new ObservableAppState())