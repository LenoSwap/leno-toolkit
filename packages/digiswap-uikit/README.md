# 🥞 DigiSwap UIkit

[![Version](https://img.shields.io/npm/v/@@digiswap-core/uikit)](https://www.npmjs.com/package/@@digiswap-core/uikit) [![Size](https://img.shields.io/bundlephobia/min/@@digiswap-core/uikit)](https://www.npmjs.com/package/@@digiswap-core/uikit)

DigiSwap UIkit is a set of React components and hooks used to build pages on DigiSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @@digiswap-core/uikit`

## Setup

### Theme

Before using DigiSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@@digiswap-core/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@@digiswap-core/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://digiswap-core.github.io/digiswap-uikit/)
