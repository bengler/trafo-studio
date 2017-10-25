import createSchema from 'part:@sanity/base/schema-creator'
import art from './art'

export default createSchema({
  name: 'default',
  types: [art]
})
