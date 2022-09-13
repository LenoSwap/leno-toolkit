# 🥞 LenoSwap UIkit

[![Version](https://img.shields.io/npm/v/@lenoswap/uikit)](https://www.npmjs.com/package/@lenoswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@lenoswap/uikit)](https://www.npmjs.com/package/@lenoswap/uikit)

Pancake UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @lenoswap/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@lenoswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@lenoswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
