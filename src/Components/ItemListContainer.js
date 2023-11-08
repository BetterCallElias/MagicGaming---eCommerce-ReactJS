
const ItemListContainer = () => {
    return (
      <div>
        <Welcome text={{ greeting: '¡Bienvenidos a Magic Gaming!' }} />
      </div>
    );
  };
  
  const Welcome = ({ text }) => {
    return <h1 style={{ color: '#3A4454' }}>{text.greeting}</h1>;
  };
  
  export default ItemListContainer;