import './types'
import './hooks'
import { section } from './steps/section'
import { step } from './steps/step'
import { todo } from './steps/todo'

Cypress.Commands.addAll({
  step,
  section,
  todo
})

export { section, step, todo }
