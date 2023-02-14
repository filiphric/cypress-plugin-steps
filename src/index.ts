import './types'
import './hooks'
import { section } from './steps/section'
import { step } from './steps/step'

Cypress.Commands.addAll({
  step,
  section,
})