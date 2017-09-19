import createSchema from 'part:@sanity/base/schema-creator'
import art from './art'
import blockContent from './blockContent'

export default createSchema({
  name: 'default',
  types: [art, blockContent]
})
