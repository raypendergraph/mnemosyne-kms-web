// Generated from Creole.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4, { ErrorNode } from 'antlr4'
import React, { DOMElement, HTMLAttributes } from 'react'
import { CreoleListener, CreoleParser } from '../../../antlr/src';

export class ViewerListener extends CreoleListener {
  private documentElement: React.DOMElement<HTMLAttributes<unknown>, Element> | undefined
  private readonly stack: React.DOMElement<HTMLAttributes<unknown>, Element>[][];

  constructor() {
    super()
    this.stack = []
    this.documentElement = undefined
  }

  enterTag() {
    this.stack.push([])
  }

  exitTag(tag: string, props?: HTMLAttributes<unknown>, child?: React.DOMElement<HTMLAttributes<unknown>, Element>) {
    // If nothing was passed treat the children at the top of the stack as children
    let children: React.DOMElement<HTMLAttributes<unknown>, Element>[];
    if (child === undefined) {
      const next = this.stack.pop()
      if (next === undefined) {
        console.warn(`exiting tag ${tag} was inexplicably met with an empty stack`)
        return
      }
      children = next
    } else {
      children = [child]
    }

    const element = React.createElement(tag, props, ...children)
    const parent = this.peek()
    if (parent === undefined) {
      console.warn(`parent was not present for tag ${tag}`)
      return
    }
    parent.push(element)
  }

  peek(): React.DOMElement<HTMLAttributes<unknown>, Element>[] | undefined {
    if (this.stack.length === 0) {
      return undefined
    }
    return this.stack[this.stack.length - 1]
  }

  getDocumentElement() {
    const element = this.documentElement
    this.documentElement = undefined
    while (this.stack.length > 0) {
      this.stack.pop()
    }
    return element
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  visitTerminal() { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  visitErrorNode(node: ErrorNode) {
    console.error(node.getText())
  }

  override enterDocument() {
    this.enterTag()
  }

  override enterBold() {
    this.enterTag()
  }

  override enterItalics(_: unknown) {
    this.enterTag()
  }

  override enterHeading(_: unknown) {
    this.enterTag()
  }

  override enterText(_: unknown) {
    // Do nothing text is a leaf
  }

  override enterParagraph(_: unknown) {
    this.enterTag()
  }

  override enterNumberedItem(_: unknown) {
    this.enterTag()
  }

  override enterBulletedItem(context: unknown) {
    this.enterTag()
  }

  override enterBulletedList(_: unknown) {
    this.enterTag()
  }

  override enterNumberedList(_: unknown) {
    this.enterTag()
  }

  override enterLink(_: unknown) {
    this.enterTag()
  }

  override enterImage(_: unknown) {
    this.enterTag()
  }

  override enterHorizontalLine(_: unknown) {
    this.enterTag()
  }

  override exitDocument(_: unknown) {
    const parentElement = this.stack.pop()
    if (parentElement === undefined) {
      console.warn('parent value was absent for document')
      return
    }

    this.documentElement = React.createElement('creole-document', undefined, ...parentElement)
  }

  override exitText(ctx: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.exitTag('m-text', undefined, ctx.getText())
  }

  override exitBold(_: unknown) {
    this.exitTag('m-bold')
  }

  override exitItalics(_: unknown) {
    this.exitTag('m-italic')
  }

  override exitParagraph(_: unknown) {
    this.exitTag('m-paragraph')
  }

  override exitBulletedItem(context: unknown) {
    this.exitTag('m-bulleted-item')
  }

  override exitBulletedList(_: unknown) {
    this.exitTag('m-bulleted-list')
  }

  override exitNumberedItem(context: unknown) {
    this.exitTag('m-numbered-item')
  }

  override exitNumberedList(_: unknown) {
    this.exitTag('m-numbered-list')
  }

  override exitHeading(_: unknown) {
    this.exitTag('m-heading')
  }

  exitLink(_: unknown) {

    this.exitTag('m-link')
  }

  exitImage(_: unknown) {
    this.exitTag('m-image')
  }

  exitHorizontalLine(_: unknown) {
    this.exitTag('m-hr')
  }
}

const listener = new ViewerListener()

export function renderCreoleMarkup(markup: string): DOMElement<HTMLAttributes<unknown>, Element> | undefined {
  const chars = new antlr4.InputStream(markup);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const lexer = new CreoleLexer(chars)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new CreoleParser(tokens)
  const tree = parser.document()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree)
  return listener.getDocumentElement()
}
