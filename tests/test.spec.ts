import { PrismaTemplates } from '~/src'

describe('Template classes have static data', () => {
  describe('files', () => {
    Object.values(PrismaTemplates.Templates).forEach((Template) => {
      it(Template.metadata.name, () => {
        expect(Template.files).toMatchSnapshot()
      })
    })
  })
  describe('artifcats', () => {
    Object.values(PrismaTemplates.Templates).forEach((Template) => {
      it(Template.metadata.name, () => {
        expect(Template.artifacts).toMatchSnapshot()
      })
    })
  })
  describe('metadata', () => {
    Object.values(PrismaTemplates.Templates).forEach((Template) => {
      it(Template.metadata.name, () => {
        expect(Template.metadata).toMatchSnapshot()
      })
    })
  })
})

describe('templates can be instantiated', () => {
  describe('with custom datasourceProvider', () => {
    Object.values(PrismaTemplates.Templates).forEach((Template) => {
      it(Template.metadata.name, () => {
        const template = new Template({
          datasourceProvider: 'mysql',
        })
        expect(template).toMatchSnapshot()
      })
    })
  })
})
