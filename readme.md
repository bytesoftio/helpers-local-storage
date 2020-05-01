# @bytesoftio/helpers-local-storage

## Installation

`yarn add @bytesoftio/helpers-local-storage` or `npm install @bytesoftio/helpers-local-storage`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [readLocalStorage](#readlocalstorage)
- [writeLocalStorage](#writelocalstorage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package provides several `localStorage` related helper functions.

## readLocalStorage

Reads a value from `localStorage`.

```ts
import { readLocalStorage } from "@bytesoftio/helpers-local-storage"

type AuthData = { token: string | undefined }

const defaultData: AuthData = {token: undefined}
const data = readLocalStorage<AuthData>("auth", defaultData)
```

## writeLocalStorage

Writes a value to `localStorage`.

```ts
import { writeLocalStorage } from "@bytesoftio/helpers-local-storage"

const data = { token: "foo" }
writeLocalStorage("auth", data)
```

