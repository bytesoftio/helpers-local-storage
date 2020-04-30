# @bytesoftio/use-local-store

## Installation

`yarn add @bytesoftio/use-local-store` or `npm install @bytesoftio/use-local-store`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [createLocalStore](#createlocalstore)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package is built on top of `@bytesoftio/use-store` and provides an integration with localStorage. This way your
application state can survive page reloads, etc. Check out the docs of the other package to find a more in depth guide.

## Usage

### createLocalStore

Since `@bytesoftio/use-store` is used underneath, stores produced by this and the other package are interchangeable. 
A store created by `createLocalStore` can be used with `useStore` from the other package.

```tsx
import React from "react"
import { createLocalStore } from "@bytesoftio/use-local-store"
import { useStore } from "@bytesoftio/use-store"

// state shared between components and services, cached in localStorage
const authStore = createLocalStore("auth", { token: "abcde" })

const Component = () => {
  const [state, setState, addState, resetState] = useStore(authStore)
  // local component state, created through an initializer function, cached in localStorage
  const [persistentState, setPersistentState] = useStore(() => createLocalStore("counter", {count: 0}))

  const increment = () => setPersistentState({count: persistentState.count + 1})

  return (
    <div>
      <span>Auth token: {state.token}</span>
      <button onClick={increment}>{persistentState.count}</button>
    </div>
  )
}
```