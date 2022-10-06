export const getCssVars = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name)

export const setCssVar = (name, value) =>
  document.documentElement.style.setProperty(name, value)
