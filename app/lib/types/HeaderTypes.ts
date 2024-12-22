export interface HeaderState {
  language: string
  activeLink: string
  mobileState: boolean
  isMenuRefSet: boolean
}

export interface RootState {
  header: HeaderState
}
