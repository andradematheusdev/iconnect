import styles from './SearchBar.module.scss';
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <MagnifyingGlass size={16} weight={"bold"} color={"#5d5e70"}/>
      <input type="text" name="" id="" placeholder="Search" />
    </div>
  )
}

export default SearchBar;