function AppNav({ navItems,handleNavClick }) {

  return (
    <nav>
      {navItems.map((item) => (
        <a key={item.label} onClick={() => handleNavClick(item.value)}>{item.label}</a>
      ))}
    </nav>
  )
}

export default AppNav;
