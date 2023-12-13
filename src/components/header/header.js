import Logo from '../../assets/nasa-logo.svg'


export function Header() {
  return (
    <header className='header-container'>
      <div className='logo-container'>
        <img src={Logo} alt="logo da nasa" title="Logo da nasa" />
      </div>

    </header>
  )
}