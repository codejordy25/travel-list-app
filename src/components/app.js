import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // nous allons creer une autre etat qui prendre par defaut un tableau vide pour ne pas affiche les elts
  // quand nous allons ouvrir l'app
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // cela signifie le nouvel état dépend de l'état actuel
    // setItems(items=>items.push()); il n'est pas autorisé de le faire, ce la reviendra de muter l'etat.
    // cequi va modifier le tableau de l'elt en consequence.
    setItems((items) => [...items, item]);
    //(revoir la sect)Travailler avec un tabeleau de façon imuable avec Up, modif, supp, add
    //il s'agit d'un moyen d'ajouter des elets(items) à l'etat.
  }

  // pour supprimer les elements.
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete all items?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      {/* definir un nouveau props */}

      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
