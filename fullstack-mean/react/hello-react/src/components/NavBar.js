

function NavBar() {
  const buttons = ['Home', 'About', "Contact"];
  return (
    <div>
      {
        buttons.map(b=><button>{b}</button>)
      }
    </div>
  );
}

export default NavBar;
