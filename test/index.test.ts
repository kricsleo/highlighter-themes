import { describe, expect, it } from 'vitest'
import theme from './themes/gentle-clean-vitesse.json'
import { batchGenerateHljsCSS, generateHljsCSS, generateHljsTheme } from '../src'
import path from 'path'
import { fileURLToPath } from 'url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url))

const themeDir = _dirname + '/themes/**/*.json'
const gentleCleanThemePath = path.resolve(_dirname, './themes/gentle-clean-vitesse.json')
const vitesseThemePath = path.resolve(_dirname, './themes/vitesse-light.json')
const dest = path.resolve(_dirname, './themes')
describe('generateHljsTheme', () => {
  it('batchGenerateFiles', async () => {
    const p = batchGenerateHljsCSS(themeDir, dest)
    await expect(p).resolves.toMatchInlineSnapshot('undefined')
  })

  it('generateFile', async () => {
    const p = generateHljsCSS(vitesseThemePath, dest)
    await expect(p).resolves.toMatchInlineSnapshot('undefined')
  })

  it('generateCSS', () => {
    expect(generateHljsTheme(theme)).toMatchInlineSnapshot(`
      "pre code.hljs {
        display: block;
        color:#dbd7caee;
        background:#1e1e1e;
      }
      .hljs-keyword {
        color:#d4976cef;
      }
      .hljs-built_in {
        color:#6394bfef;
      }
      .hljs-type {
        color:#5eaab5ef;
      }
      .hljs-literal {
        color:#4d9375ef;
      }
      .hljs-number {
        color:#4d9375ef;
      }
      .hljs-operator {
        color:#d4976cef;
      }
      .hljs-punctuation {
        color:#eeeeee95;
      }
      .hljs-property {
        color:#5eaab5ef;
      }
      .hljs-regexp {
        color:#4d9375ef;
      }
      .hljs-string {
        color:#4d9375ef;
      }
      .hljs-char.escape_ {
        color:#4d9375ef;
      }
      .hljs-subst {
        color:#5eaab5ef;
      }
      .hljs-symbol {
        color:#4d9375ef;
      }
      .hljs-class {
        color:#5eaab5ef;
      }
      .hljs-function {
        color:#6394bfef;
      }
      .hljs-variable {
        color:#5eaab5ef;
      }
      .hljs-title {
        color:#5eaab5ef;
      }
      .hljs-params {
        color:#d88c9aef;
      }
      .hljs-comment {
        color:#848890cc;
      }
      .hljs-meta {
        color:#5eaab5ef;
      }
      .hljs-meta.keyword_ {
        color:#d4976cef;
      }
      .hljs-meta.string_ {
        color:#4d9375ef;
      }
      .hljs-section {
        color:#d4976cf2;
      font-style:bold;
      }
      .hljs-attr {
        color:#6394bfef;
      }
      .hljs-attribute {
        color:#5eaab5ef;
      }
      .hljs-code {
        color:#6394bfef;
      }
      .hljs-strong {
        font-style:bold;
      }
      .hljs-formula {
        color:#6394bfef;
      }
      .hljs-link {
        color:#6394bfef;
      }
      .hljs-quote {
        color:#4d9375ef;
      }
      .hljs-selector-tag {
        color:#d4976cef;
      }
      .hljs-selector-id {
        color:#5eaab5ef;
      }
      .hljs-selector-class {
        color:#d4976cef;
      }
      .hljs-selector-attr {
        color:#5eaab5ef;
      }
      .hljs-selector-pseudo {
        color:#5eaab5ef;
      }
      .hljs-template-variable {
        color:#d88c9aef;
      }
      .hljs-template-tag {
        color:#d4976cef;
      }
      .hljs-addition {
        color:#99C794;
      }
      .hljs-deletion {
        color:#6394bfef;
      }
      .hljs-variable.language_ {
        color:#d4976cef;
      }
      .hljs-variable.constant_ {
        color:#d88c9aef;
      }
      .hljs-title.class_ {
        color:#5eaab5ef;
      }
      .hljs-title.class_.inherited__ {
        color:#5eaab5ef;
      }
      .hljs-title.function_ {
        color:#6394bfef;
      }
      .hljs-title.function_.invoke__ {
        color:#5eaab5ef;
      }
      .hljs-doctag {
        color:#848890cc;
      }
      .hljs-meta.prompt_ {
        color:#6394bfef;
      }
      .hljs-tag {
        color:#d4976cef;
      }
      .hljs-name {
        color:#5eaab5ef;
      }
      .hljs-bullet {
        color:#A3CE9E;
      }
      "
    `)
  })
})