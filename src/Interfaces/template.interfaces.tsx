// create interface for template config
export interface TemplateConfig {
  colors: Icolors
  fonts: Ifonts
}
// create interface for colors
export interface Icolors {
  primary: string
  secondary: string
  background: string
  text: string
  textSecondary: string
  error: string
  success: string
  warning: string
  white: string
}
// create interface for fonts
export interface Ifonts {
  big: string
  medium: string
  regular: string
  small: string
  tiny: string
}
